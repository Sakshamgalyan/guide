# Cards

## Payment Flow - Server-to-Server

Paysecure offers Server-to-Server ("S2S") integration that enables processing payments on the server level, eliminating direct interaction between the client's browser or application and the API.

This integration allows you to build a setup that restricts payers from directly accessing platform resources.

To enable payment acceptance in your application or website using Server-to-Server (S2S) integration follow the following 3-step routine.

### **Step 1:**

Create a purchase using `POST /purchases/` API to create a payment transaction in the system. make sure to meet all the required criteria, which includes defining success_redirect and failure_redirect fields for the Purchase and setting them to valid URLs

### **Step 2**:

Send the payment method to the payment URL by making a POST request to `/p/{purchaseId}/?s2s=true` .

The body of the request to contain the card details:

```json
{
    "cardholder_name": "dk",
    "card_number": "4444333322221111",
    "expires": "10/23",
    "cvc": "345",
    "remember_card": "on",
    "remote_ip": "157.38.242.7",
    "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    "accept_header": "text/html",
    "language": "en-US",
    "java_enabled": false,
    "javascript_enabled": true,
    "color_depth": 24,
    "utc_offset": 0,
    "screen_width": 1920,
    "screen_height": 1080
}

```

see `/p/{purchaseId}/?s2s=true` API for more details.

### **Step 3 (for merchants configured for 3D transactions):**

Once the response is received, if the purchase is successful (indicated by a response status code of 202), you will be given the `"status": "pending"`.

```json
{
    "status": "pending",
    "callback_url": "http://18.214.100.20/api/v1/payment/64bfc2a4f63e36669499e5cc/",
    "method": "GET"
}
```

Otherwise you'll get an error as shown below (response status code could be 400,404,401,415,405) :

```json
{
    "message": "descriptive error message",
    "code": "error_code"
}
```

Please see the [Status Code](/docs/Webhook%20and%20Status%20Codes.md) section for further details.

If the response code is 202, upon receiving the response body, redirect the customer to the `callback_url` provided in the response.

If the card requires 3D Secure verification, the user will be redirected to a verification or challenge screen by the card issuing bank. After successful user verification, the user will be redirected to the success URL provided in the `/purchases` API from Step 1.

If, for any reason, the transaction is unsuccessful, the user will be redirected the failure URL provided in the /purchase API from Step 1.

## S2S API

This API would be the 2nd in sequence to call if the call to `/purchases/` was successful in step 1. and you want to do the transaction via Server-to-Server mode.

The request body would contain the details of the card that's to be transacted upon.

### **Mandatory parameters in request body:**

| Parameter | **Notes** |
| --- | --- |
| cardholder_name |  |
| card_number | The card numbers Must be 10-20 characters. |
| expires | must be greater than the current month/year. |
| cvc | 3 or 4 digit |
| remember_card |  |
| remote_ip |  |
| user_agent |  |

### Successful Response

If all the details are correct you'll get a 202 response with staus as Pending

```json
{
    "status": "pending",
    "callback_url": "https://paysecure.net/payment/63bd0bf80fb42a076e8a4dd1/",
    "method": "GET"
}
```

If the response code is 202, after receiving the response body, direct the customer to the callback_url provided in the response.

### Errors

If there are any errors then it'll be in the format of :

```json
{
    "message": "descriptive error message",
    "code": "error_code"
}
```

Please see the Status Code section for further details.

**Error Messages**

---

Client Ip could not be matched with Merchant Ip

---

Invalid Card Information

---

Card is Blocked

---

Different Type of key used to create purchase and payment

---

You charges setting is incomplete. Please Contact to administrator

---

Allowed Attempt for this Transaction has been consumed

---

Invalid Card Expiry(Valid Format:MM/YY) must be greater than current month/year

---

Customer profile is Blocked

---

Customer/Card not allowed for transaction

---

## GET Payment

This is the callback URL that is in the response object of the S2S Call.

When this URL is called from the end user's browser, the user would be redirected to the `success_redirect` or `failure_redirect` URL given by the merchant at the time of create purchase

When this URL is called from the end user's browser, if card is 3DS enrolled, the user user will be redirect to a verification screen or challenge by the issuing bank and upon successful user verification, the user would be redirected to the success URL given in `/purchases` API .

If for some reason the transactions is unsuccessful, the user will be redirect to failure URL given in `/purchases` API .