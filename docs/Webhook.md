# Webhook

To receive information about various transaction status and events, you will need to set up an endpoint which accepts payloads sent by Paysecure. Your endpoint will receive **POST** requests with **content-type: application/json**.

## Configuring the Webhook Endpoint

The webhook endpoint can be set up on `Partner Dashboard -> Webhooks -> New Webhook`. Make sure you save the endpoint by clicking "Create".

> Paysecure will post all payloads to the specified URLs. Please note that if merchant face any issues with accepting the webhook, it will not be resent. Alternatively the merchant can call Paysecure `GET /purchases/{purchaseId}` API to verify the status of a transaction.
> 

![](/img/webhook1.png)

:::note
📖
You can setup one URL for all the events or individual URLs for each of the events. Paysecure would call the webhooks based on whatever the setup is. **If only one URL is set up, the developer will need to extract the message from the payload information.**
:::

## Events

The webhook are triggered upon following events:

| Type | Executed when | What is sent |
| --- | --- | --- |
| hold released | Transaction hold releases | Purchase Object (Pay-Load) |
| payment in process | Paid but payment is in process | Purchase Object (Pay-Load) |
| payment refund | Paid and called refund | Purchase Object (Pay-Load) |
| purchase cancelled (Cancel before payment) | Purchases is cancelled before payment.  | Purchase Object (Pay-Load) |
| purchase created | Purchase Initiated | Purchase Object (Pay-Load) |
| purchase expired | Transaction Expired | Purchase Object (Pay-Load) |
| purchase failed | Transaction Error | Purchase Object (Pay-Load) |
| purchase hold | Transaction is in hold | Purchase Object (Pay-Load) |
| purchase overdue | Transaction Overdue (payment not done within given time period) | Purchase Object (Pay-Load) |
| purchase paid | Payment Successful | Purchase Object (Pay-Load) |
| refund in process | Refund request generated | Purchase Object (Pay-Load) |

### **Webhook structure**

### paysecure_sign:

We add a signature as “**paysecure_sign**” or **"paysecure-sign"** in the webhook header for verifying the payload. If you have already created a **public key** from your merchant dashboard. To verify this signature decrypt the signature with your public key. Compare this with the following value – > (**purchaseId+|+status+|+brandId)** which you received in your payload.

### Public Key Generation

To ensure authenticity and non-repudiation of the the payin or payout request, there is an option to digitally sign the pay out request by using the merchant's public key.

![](/img/webhook2.png)

### **Signature generation**

To verify the signature You can use the following method (written in Java):

```java
private static boolean verify(String message,String signature, PublicKey publicKey) throws Exception
{
    Signature verifier = Signature.getInstance("SHA256withRSA");
    verifier.initVerify(publicKey);
    verifier.update(message.getBytes());
    return verifier.verify(Base64.getDecoder().decode(signature.getBytes()));
}
```

The signature is the value of the “**paysecure_sign**” or **"paysecure-sign"** you received in webhook.

For **Payins,** signature to verify is the combination of `purchaseId+"|"+status+"|"+brandId`**.**

For **Payouts**, str_to_sign = `PayoutId+"|"+status` which you received in your payout payload.

### *Note:*

If you pass a `success_callback` URL or `failure_callback` URL directly in your API requests (`Purchase`, `Session`, or `Payout`), those URLs take precedence over the webhook settings in the Merchant Dashboard.

In other words, API-specified callbacks override dashboard-configured callback URLs.

The webhook payload will be a JSON object (purchase or payout, depending on the request) containing the transaction status. This payload matches exactly what you would receive from the  Status Check API.