# Webhook and Status Codes

To receive information about various transaction status and events, you will need to set up an endpoint which accepts payloads sent by Paysecure. Your endpoint will receive **POST** requests with **content-type: application/json**.

## Configuring the Webhook Endpoint

The webhook endpoint can be set up on `Partner Dashboard -> Webhooks -> New Webhook`. Make sure you save the endpoint by clicking "Create".

> Paysecure will post all payloads to the specified URLs. Please note that if merchant face any issues with accepting the webhook, it will not be resent. Alternatively the merchant can call Paysecure `GET /purchases/{purchaseId}` API to verify the status of a transaction.
> 

[](https://content.pstmn.io/9a2ab48f-4ca8-42ea-88d5-4ff118efb6c3/UGF5U2VjdXJlLVdlYmhvb2sucG5n)

<aside>
📖

You can setup one URL for all the events or individual URLs for each of the events. Paysecure would call the webhooks based on whatever the setup is. **If only one URL is set up, the developer will need to extract the message from the payload information.**

</aside>

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

We add a signature as “**paysecure_sign**” or **"paysecure-sign"** in the webhook header for verifying the payload. If you have already created a **public key** from your merchant dashboard. To verify this signature decrypt the signature with your public key. Compare this with the following value – > (**purchaseId+|+status+|+brandId)** which you received in your payload

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

Where the **message** is the combination of **purchaseId+"|"+status+"|"+brandId.**

The signature is the value of the “**paysecure_sign**” or **"paysecure-sign"** you received in webhook.

For Payouts, str_to_sign = **PayoutId+"|"+status** which you received in your payout payload.

<aside>
📌

You can obtain the **Public Key** from your merchant dashboard.

</aside>

### *Note:*

If you pass a `success_callback` URL or `failure_callback` URL directly in your API requests (`Purchase`, `Session`, or `Payout`), those URLs take precedence over the webhook settings in the Merchant Dashboard.

In other words, API-specified callbacks override dashboard-configured callback URLs.

The webhook payload will be a JSON object (purchase or payout, depending on the request) containing the transaction status. This payload matches exactly what you would receive from the  Status Check API.

## Status Codes

### HTTP Response Code

| **Code** | **Triggering Event** |
| --- | --- |
| 200 | Successful Response |
| 202 | Successful / Accepted |
| 400 | Bad request, the given data is invalid, or additional data is required |
| 401 | unauthorized request |
| 404 | page not found |
| 405 | Method Not Allowed (GET/POST) |
| 415 | unsupported media type |
| 422 | Unprocessable content, data is required |
| 429 | Too many request attempt |
| 500 | Internal server error |

<aside>
📖

You will not get Error codes if HTTPS response code is 200 or 202.

</aside>

## Error Codes and Messages

### with http code (400, 404, 401, 405, 415)

Below is the list of possible error codes and the corresponding messages from Paysecure System

```json
{
    "message": "descriptive error message",
    "code": "error_code"
}
```

| **Code** | **Message** | **APIs that could generate the error code** |
| --- | --- | --- |
| `Authentication_failed` | Authorization header missing | All |
| `already_in_process` | Some Processing is running on this purchaseId | All |
| `unsupported_media_type` | Unsupported media type "text/plain; charset=ISO-8859-1" in request. | All |
| `authentication_failed` | Incorrect secret_key/Invalid Merchant Type | All |
| `transaction_error` | See the table below | See the table below |

## "transaction_error" Message List

All the messages possible when "transaction_error" is in response:

| **Message** | **APIs that generate the error Message** |
| --- | --- |
| Cvv_error | after executing callback_url |
| Expired card | after executing callback_url |
| expiry_date_error | after executing callback_url |
| Insufficient fund | after executing callback_url |
| Invalid card number | after executing callback_url |
| Issuing bank - do not honer | after executing callback_url |
| Picking card | after executing callback_url |
| Temp error - card blocked | after executing callback_url |
| Transaction declined - try again | after executing callback_url |
| PurchaseId Not found. | after executing callback_url |
| Only purchases that can be paid for can be initiated for payment. | after executing callback_url |
| Customer/Ip is Blocked | after executing callback_url |
| Client Ip could not be match with Merchant Ip | s2s calling |
| Invalid Card Information | s2s calling |
| Card is Blocked | s2s calling |
| Different Type of key used to create purchase and payment | s2s calling |
| You charges setting is in complete .Please Contact to Administrator. | s2s calling |
| Allowed Attempt for this Transaction has been consumed | s2s calling |
| Customer not allowed For transaction | s2s calling |
| Invalid Card Expiry(Valid Format:MM/YY) must be greater than current month/year | s2s calling |
| Customer profile is Blocked | s2s calling |
| Customer/Card not allowed for transaction | s2s calling |
| Allowed Limit for this card for particular time period has been consumed | `/purchases/` |
| some Mandatory Parameter are missing | `/purchases/` |
| Invalid_Parameter | `/purchases/` |
| Invalid format of Date_of_Birth[allowed format: yyyy-mm-dd] | `/purchases/` |
| Invalid Email Format | `/purchases/` |
| Please submit Valid Alpha2 Country Code Ex:(AF,IN) in \"country\" parameter | `/purchases/` |
| Please pass Valid State Code | `/purchases/` |
| Please pass valid street address in \"street_address\" parameter | `/purchases/` |
| Please pass valid city name in \"city\" parameter | `/purchases/` |
| Please pass valid postal Code name in \"zip_code\" parameter | `/purchases/` |
| You are not Allowed for Live Transaction | `/purchases/` |
| Merchant Limit is not set | `/purchases/` |
| Minimum amount is not set for this merchant | `/purchases/` |
| Brand not found! | `/purchases/` |
| Your charges setting is incomplete .Plese Contact to Administrator. | `/purchases/` |
| Only “curr_name” currency is allowed | `/purchases/` |
| Transaction amount must be equal or greater to minimum trans amount | `/purchases/` |
| Transaction amount must not be greater to maximum trans amount | `/purchases/` |
| This Purchase was already fully refunded. | `/purchases/{purchaseId}/refund` |
| Previous Refund Request already in Process | `/purchases/{purchaseId}/refund` |
| Max Time for Refund was elapsed. | `/purchases/{purchaseId}/refund` |
| Refund can not be initiated .Please contact Administrator. | `/purchases/{purchaseId}/refund` |
| Only Purchases with `status == (paid)` can be refunded. | `/purchases/{purchaseId}/refund` |
| Only purchases that can be paid for can be cancelled. | `/purchases/{purchaseId}/refund` |

## Transaction Statuses and Their Meaning

The lifecycle of a transaction is reflected through the status of the transaction.

This section details various statuses of a transaction and what it means and when does it appears.

The status of a transaction can be read from the `"status"` field of the responses or webhook payload.

| **Status** | **Description** | **When it Appears** | **Is it Final?** |
| --- | --- | --- | --- |
| `created` | Purchase is created in the system. | When Purchase API is called, the transaction is created as "created". | N |
| `cancelled` | Purchase is cancelled in the system. Only transactions in `created` status can be cancelled. | When `GET /purchases/{PurchaseId}/cancel` API is called. | Y |
| `pending_execute` | Purchase hasn't been completed yet. Only transactions in `created` status can become `pending_execute` after S2S API call. | The callback URL provided in the S2S call response hasn't been called by merchant yet. | N |
| `overdue` | Purchase hasn't been completed yet. Only transactions in `created` status can become `overdue` if S2S API hasn't been called in 2 hours. | S2S API hasn't been called within 2 hours since transaction creation. | N |
| `payment_in_process` | Purchase hasn't been completed. Only transactions in `pending_execute` or `created` status can become `payment_in_process`. | When the user's action is pending (e.g., OTP confirmation). Transaction can stay in this status until the transaction expires. | N |
| `paid` | Purchase has been completed successfully. Only transactions in `payment_in_process` status can become `paid`. | The callback URL provided in the S2S call response has been called by the merchant. | Y |
| `refund_in_process` | Only transactions in `paid` status can become `refund_in_process`. | When Refund API is called and a response is received with `refund_in_process` status. | N |
| `refunded` | Only transactions in `refund_in_process` status can become `refunded`. | When the provider confirms the refund. | Y |
| `fraud_refunded` | A dispute was raised and the transaction was manually refunded to prevent chargeback. | When a refund is processed when a chargeback/dispute is raised | Y |
| `payout_in_process` | Payout has been requested and is under review for processing at PSP end.  | Payout request is pending at the processor’s end.  | N |
| `pending_review` | Payout amount is exceeding the Payout Threshold Limit (as per the merchant settings) | Transaction that crosses the Payout Threshold Limits (as per the merchant settings) produce this status.  | N |
| `chargeback` | Transaction type that allows customers to receive money back. | When requested by customer or merchant (manual process). | Y |
| `expired` | Purchase hasn't been completed. Only transactions in `payment_in_process` and `Pending_execute` status can become `expired`. After payment in process, no data is provided. | The callback URL provided in the S2S call response hasn't been called by the merchant after the specific time period. | Y |
| `error` | Only transactions in statuses: `pending_execute`, `payment_in_process`, `payout_in_process, pending_review` or `refund_in_process` can become `error`. | Refers to the Errors list for possible errors. | Y |