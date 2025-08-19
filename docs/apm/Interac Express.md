# Interac Express

## Overview

Interac-Express is a real-time Canadian payment method for secure bank-to-bank transfers. Unlike standard Interac e-Transfer, it removes the need for security questions and relies on **unique reference IDs** for validation.

With Paysecure, merchants can use Interac-Express for:

- **PayIns (collections):** Customers transfer funds using a transaction-specific Reference ID.
- **Payouts (disbursements):** Businesses send funds directly to customer accounts in near real-time.

## Concepts

- **Payment Method Codes:**
    - Payin → `INTERAC-EXPRESS`
    - Payout → `PAYOUT-INTERAC-EXPRESS`
- **Reference ID:** A unique, transaction-specific code provided by Paysecure. Customers must enter this in the *memo/message* field of their transfer.
- **Expiry:** Each Reference ID is valid for **24 hours**. Payments made after expiry are refunded.
- **Auto-Deposit:** If enabled on the customer’s bank account, payouts are received instantly. Otherwise, customers must manually accept.

## Payin Flow

### How It Works

Interac-Express uses a **Reference ID-based flow** to streamline collections. Merchants generate a transaction-specific ID which customers must include when transferring funds from their bank account. This ensures precise, secure, and automated payment reconciliation.

### Key Steps

**Flow:**

1. **Initiate Payment Request** Merchant initiates a PayIn by calling the `/purchases` API. The request must include:
    - `paymentMethod`: `INTERAC-EXPRESS`
    - Customer email or mobile
    - Amount
    - Optional message
2. **Reference ID Generation**
    1. API returns a unique `Reference ID` associated with the transaction. This ID is valid for 24 hours and must be included by the customer in the message/memo field during their bank transfer.
    2. The merchant then has 2 options to share the payment instructions with the customer:
        1. Redirect the end-user to the checkoutURL present in the API response, where the customer is shown the relevant payment instructions required to make Interac payments. ***If this option is employed, the user would be redirected to the appropriate success or failure redirect URL.***
        2. Retrieve the PayIn details in the response JSON (as shown below) to create a webpage within the merchant’s IT estate, and show to user the PayIn instruction
    
    ```json
    "payInDetails": {
    	"name": "INTERAC E-TRANSFER",
    	"emailAddress": "deposit@ieft.ca",
      "reference_number": "1lgfn7"
      },
    ```
    
3. **Customer Transfer** The customer logs into their online or mobile banking, initiate interac transfer to emailAddress presented in the payment instructions and inputs the transfer amount and the reference_number exactly as provided.
4. **Validation & Matching** Paysecure validates the incoming transfer by matching the Reference ID and amount.
    - If matched correctly, the transaction is marked as successful.
    - ref. the edge cases mentioned above for incorrect reference ID, underpaid, overpaid, or expired scenarios.
5. **Webhook Notification** Once the transfer is matched and verified, Paysecure sends a webhook to the merchant with full transaction details and status. 
6. **Merchant Reconciliation** Merchant updates the customer account or order status based on the received webhook data.

<video width="600" controls>
  <source src="/img/interacexpressvideo1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Payout Flow

### How It Works

Merchants can send funds to customers using **PAYOUT-INTERAC-EXPRESS** by specifying the recipient’s email or mobile. Funds are typically delivered in real-time, depending on the recipient’s bank setup.

### Key Steps

**Flow:**

1. **Initiate Payout Request** Merchant initiates a payout using the `/payout` API, passing:
    - payoutMethod: `PAYOUT-NTERAC-EXPRESS`
    - Recipient’s email
    - Amount
2. **Recipient Notification** The customer receives a notification from their bank to accept the incoming funds. If the recipient has **Auto-Deposit** enabled, funds are deposited instantly. Otherwise, the customer must manually claim the payment via the bank’s standard process.
3. **Webhook Confirmation** Paysecure notifies the merchant via webhook once the payout has been successfully claimed or credited.
4. **Update Records** Merchant updates the customer's profile or balance based on payout status.

## Edge Case Handling

- **Incorrect or Missing Reference ID**
    - Payment cannot be reconciled → not marked as successful.
    - Funds reversed once customer provides proof of payment.
- **Overpayment**
    - Transaction marked **Paid**.
    - Excess amount auto-refunded.
- **Underpayment**
    - Transaction remains **In Progress**.
    - Customer may:
        - Top up using the same Reference ID → status updated to **Paid**, or
        - Do nothing → initial payment auto-refunded after expiry.
- **Expired Transactions**
    - Valid for 24 hours.
    - Any payments after expiry refunded upon proof.