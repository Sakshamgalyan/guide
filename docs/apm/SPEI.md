# SPEI

## Overview

SPEI (Sistema de Pagos Electrónicos Interbancarios) is Mexico’s real-time interbank transfer system operated by Banco de México. It enables near-instant transfers directly between bank accounts, making it one of the most widely adopted payment methods in the country.

With Paysecure, merchants can leverage SPEI for:

- **PayIns (collections):** Customers transfer funds to a unique SPEI account (CLABE) generated for their transaction.
- **Payouts (disbursements):** Merchants send funds to customer accounts using CLABE, debit card, or mobile number.

### Key Benefits

- **Instant settlement:** Funds settle in minutes, not days.
- **Broad adoption:** Over 90% of Mexican bank accounts support SPEI.
- **Low cost:** Typically lower transaction fees than cards.
- **Regulated & secure:** Operated by Banco de México with strict compliance.

## Concepts

- **Payment Method Codes:**
    - Payin → `SPEI`
    - Payout → `PAYOUT-SPEI`
- **CLABE:** An 18-digit standardized account number required for all SPEI transfers.
- **Expiration Window:** SPEI payment instructions usually expire after **3 days**; merchants must display expiry clearly.

## Payin Flow

1. **Initiate Request**
    - Merchant calls `/purchases` API.
    - Must specify `paymentMethod: SPEI`, amount, and customer details.
2. **Receive Payment Instructions:**
    1. API returns Beneficiary CLABE, Beneficiary name, and Amount (MXN) in the Response that customer will need to complete the payment
        
        ```json
        "payInDetails": {
          "clabe": "710969000050933383",
          "beneficiary": "CHOICEPAY LTD.",
          "amount": "10.00"
        }
        ```
        
    2. The merchant then has 2 options to share the payment instructions with the customer:
        1. Redirect the end-user to the checkoutURL present in the API response, where the customer is shown the relevant payment instructions required to make Interac payments. ***If this option is employed, the user would be redirected to the appropriate success or failure redirect URL.***
        2. Retrieve the PayIn details in the response JSON (as shown below) to create a webpage within the merchant’s IT estate, and show to user the PayIn instruction
3. **Customer Transfer**
    - Customer logs into bank app.
    - Selects *Transfer via SPEI*, enters CLABE, amount, and reference.
    - Confirms transfer (via OTP, 2FA, biometric).
4. **Payment Confirmation**
    - Banco de México settles funds (usually &lt;15 min).
    - Paysecure sends webhook with transaction status.
    - Merchant may also query `/purchases/{purchaseId}`.
5. **Merchant Updates Order**
    - Backend marks order as **Paid**.
    - Customer sees success page or receives confirmation message.

<video width="600" controls>
  <source src="/img/speivideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Payout Flow

1. **Initiate Request**
    - Merchant calls `/payout/` API.
    - Required fields:
        - `paymentMethod: PAYOUT-SPEI`
        - Customer’s destination: `CLABE`, `debit card`, or `mobile number`
        - Amount (in MXN)
2. **Processing**
    - Paysecure validates merchant balance.
    - Transfer is routed via Banco de México.
3. **Settlement**
    - Funds credited in near real-time.
    - Customer receives confirmation from their bank.
4. **Confirmation**
    - Paysecure sends webhook with payout status.
    - Merchant’s SPEI balance is updated on success.

## Edge Case Handling

- **Expired PayIn Instructions:** If no transfer within expiry window, status = `expired`.
- **Incorrect Amount:** Transfer rejected; webhook triggers `error` flow. *If the customer fund has been deducted, it will be auto-refunded instantly.*
- **Customer Misses Reference:** Payment cannot be reconciled; merchant may need manual intervention.
- **Failed Payouts:** Invalid CLABE, blocked account, or insufficient balance → transaction fails, status shared via webhook.