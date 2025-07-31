---
title: Webhooks
sidebar_position: 6
---

To receive information about various transaction status and events, you will need to set up an endpoint which accepts payloads sent by Paysecure. Your endpoint will receive POST requests with content-type application/json.

### Configuring the Webhook Endpoint

The webhook endpoint can be set up on `Partner Dashboard -> Webhooks -> New Webhook`. Make sure you save the endpoint by clicking "Create".

Paysecure will post all payloads to the specified URL; if there are any issues with delivering the payload, it will not be resent.

![Description](/img/webhookimg1.png)

### Note:

You can setup one URL for all the events or individual URLs for each of the events. Paysecure would call the webhooks based on whatever the setup is. If only one URL, the developer will need to extract the message from the payload information.

### Events
| Type                                    | Executed When                                                   | What is Sent                      |
|-----------------------------------------|-----------------------------------------------------------------|-----------------------------------|
| hold released                           | Transaction hold releases                                       | 	Purchase Object (Pay-Load)      |
| payment in process                      | Paid but payment is in process                                  | 	Purchase Object (Pay-Load)      |
| payment refund                          | Paid and called refund                                          | 	Purchase Object (Pay-Load)      |
| purchase cancelled Cancel before payment| Purchase Object (Pay-Load)                                      | 	Purchase Object (Pay-Load)      |
| purchase created                        | Purchase Initiated                                              | 	Purchase Object (Pay-Load)      |
| purchase expired                        | Transaction Expired                                             | 	Purchase Object (Pay-Load)      |
| purchase failed                         | Transaction Error                                               | 	Purchase Object (Pay-Load)      |
| purchase hold                           | Transaction is in hold                                          | 	Purchase Object (Pay-Load)      |
| purchase overdue	                      | Transaction Overdue (payment not done within given time period) | 	Purchase Object (Pay-Load)      |
| purchase paid                           | Payment Successful                                              | 	Purchase Object (Pay-Load)      |
| refund in process                       | Refund request generated                                        | 	Purchase Object (Pay-Load)      |

### Webhook Structure

### Paysecure_sign:
We add a signature in __“paysecure_sign”__ in the webhook header for verifying the payload. If You have already created a public key in your merchant dashboard. To Verify This signature decrypt the signature with your public key. Compare this with the following value – > __(purchaseId+|+status+|+brandId)__ which you received in your payload

To verify the signature You can use the following method(written in Java):

Example code in Java

Where the __message__ is the combination of __purchaseId+"|"+status+"|"+brandId__.

The signature is the value of the __“paysecure_sign”__ you received in webhook.

str_to_sign = __PayoutId+"|"+status__ which you received in your payout payload

You can obtain the Public Key from your merchant dashboard.


### Note:

In case of if a success_callback (webhook) or failure_callback (webhook) is given the `/purchases` API or `/createSession` API, then priority will be given to API callback webhooks, and not the webhooks set in the merchant dashboard. In other words, the webhooks given in the API will override the webhooks set in the merchant dashboard. The webhook posted would be a JSON object (either purchase or payout object as the case might be) containing the status. This object is the same as the one you will get in the `/getStatus` API call `https://api.paysecure.net/api/v1/purchases/{purchaseId}/`

#### AUTHORIZATION: `Bearer Token`

This folder is using Bearer Token from collection [Authentication Guide](./authentication.md)