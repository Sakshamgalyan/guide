---
title: Status Code
sidebar_position: 7
---

## HTTP Response Code

| **Code** | **Triggering Event**       |
|----------|----------------------------|
| 200      | Successful Response        |
| 202      | successful / Accepted      |
| 400      | Bad request, the given data is invalid, or data is required  |
| 401      | Unauthorized request       |
| 404      | page not found             |
| 405      | Method Not Allowed (GET/POST)       |
| 415      | unsupported media type       |
| 422      | Unprocessable content, data is required       |
| 429      | Too many request attempt       |
| 500      | Internal server error       |

You will not get Error codes if HTTPS response code is 200 or 202.

### Error Codes and Messages

### with http code(400,404,401,415,405)
Below is the list of possible error codes and the corresponding messages from Paysecure System

Format:
```json
JSON
{
    "message": "descriptive error message",
    "code": "error_code"
}
```

| **Code**                   | **Message**                                                        | **APIs that could generate the error code** |
|----------------------------|--------------------------------------------------------------------|---------------------------------------------|
| Authentication_failed      | Authorization header missing                                       | All                                         |
| already_in_process         | Some Processing is running on this purchaseId                      | All                                         |
| unsupported_media_type     | Unsupported media type "text/plain; charset=ISO-8859-1" in request.| All                                         |
| authentication_failed      | Incorrect secret_key/Invalid Merchant Type                         | All                                         |
| transaction_error          | See the table below                                                | All                                         |


### "transaction_error" Message List

All the Messages possible when "transaction_error" is in reponse:


| **Message**                                                                         | **APIs that generate the error Message**    |
|-------------------------------------------------------------------------------------|---------------------------------------------|
| Cvv_error                                                                           | after executing callback_url                |
| Expired                                                                             | after executing callback_url                |    
| expiry_date_error                                                                   | after executing callback_url                |    
| Insufficient fund                                                                   | after executing callback_url                |    
| Invalid card number                                                                 | after executing callback_url                |    
| Issuing bank - do not honer                                                         | after executing callback_url                |    
| Picking card                                                                        | after executing callback_url                |    
| Temp error - card blocked                                                           | after executing callback_url                |    
| Transaction declined - try again                                                    | after executing callback_url                |    
| PurchaseId Not found.                                                               | after executing callback_url                |    
| Only purchases that can be paid for can be initiated for payment.                   | after executing callback_url                |    
| Customer/Ip is Blocked                                                              | after executing callback_url                |    
| Client Ip could not be match with Merchant Ip                                       | s2s calling                                 |    
| Invalid Card Information                                                            | s2s calling                                 |    
| Card is Blocked                                                                     | s2s calling                                 |    
| Different Type of key used to create purchase and payment                           | s2s calling                                 |    
| You charges setting is in complete .Please Contact to Administrator.                | s2s calling                                 |    
| Allowed Attempt for this Transaction has been consumed                              | s2s calling                                 |    
| Customer not allowed For transaction                                                | s2s calling                                 |    
| Invalid Card Expiry(Valid Format:MM/YY) must be greater than current month/year     | s2s calling                                 |    
| Customer profile is Blocked                                                         | s2s calling                                 |    
| Customer/Card not allowed for transaction                                           | s2s calling                                 |    
| Allowed Limit for this card for particular time period has been consumed            | create purchase                             |    
| some Mandatory Parameter are missing                                                | create purchase                             |    
| Invalid_Parameter                                                                   | create purchase                             |    
| Invalid format of Date_of_Birth[allowed format: yyyy-mm-dd]                         | create purchase                             |    
| Invalid Email Format                                                                | create purchase                             |    
| Please submit Valid Alpha2 Country Code Ex:(AF,IN) in \"country\" parameter         | create purchase                             |    
| Please pass Valid State Code                                                        | create purchase                             |    
| Please pass valid street address in \"street_address\" parameter                    | create purchase                             |    
| Please pass valid city name in \"city\" parameter                                   | create purchase                             |    
| Please pass valid postal Code name in \"zip_code\" parameter                        | create purchase                             |    
| You are not Allowed for Live Transaction                                            | create purchase                             |    
| Merchant Limit is not set                                                           | create purchase                             |    
| Minimum amount is not set for this merchant                                         | create purchase                             |    
| Brand not found!                                                                    | create purchase                             |    
| Your charges setting is incomplete .Plese Contact to Administrator.                 | create purchase                             |    
| Only “curr_name” currency is allowed                                                | create purchase                             |    
| Transaction amount must be equal or greater to minimum trans amount                 | create purchase                             |    
| Transaction amount must not be greater to maximum trans amount                      | create purchase                             |    
| This Purchase was already fully refunded.                                           | /refund/                                    |    
| Previous Refund Request already in Process                                          | /refund/                                    |    
| Max Time for Refund was elapsed.                                                    | /refund/                                    |    
| Refund can not be initiated .Please contact Administrator.                          | /refund/                                    |    
| Only Purchases with `status == (paid)` can be refunded.                             | /refund/                                    |    
| Only purchases that can be paid for can be cancelled.                               | /refund/                                    |    