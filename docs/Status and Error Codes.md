# Status and Error Codes

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


:::note 
📖You will not get Error codes if HTTPS response code is 200 or 202.
:::
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
| `error` | Only transactions in statuses: , `payment_in_process`, `payout_in_process`**,** `pending_review` ****or `refund_in_procecss`can become `error`. | Refers to the Errors list for possible errors. | Y |