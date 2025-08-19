# Mobile Money

## Overview

Mobile Money is a digital wallet service widely used across Africa, enabling users to send, receive, and store money directly on their mobile devices. It offers a **secure, cashless alternative** to traditional banking, with broad adoption in markets like Kenya, Ghana, Uganda, and Tanzania.

With Paysecure, merchants can:

- **Accept PayIns (collections):** Customers pay directly from their mobile wallet.
- **Process Payouts (disbursements):** Merchants send funds back to customers’ mobile wallets in real time.

<aside>

**Important:** Refunds are **not supported** as reversals over Mobile Money. To issue a refund, merchants must initiate a separate **Payout request**.

</aside>

## Concepts

- **Payment Method Codes:**
    - Payin: `MOBILEMONEY`
    - Payout: `PAYOUT-MOBILEMONEY`
- **USSD Authorization:** Customers receive a secure USSD prompt to approve transactions with their wallet PIN.
- **Customer Identifier:** All transfers are tied to the customer’s **mobile number**.
- **Instant Settlement:** Both PayIns and Payouts are settled in real time.
- **Refund Handling:** Always processed as a new payout transaction.

### **Payin Flow**

**How It Works**

The payin process harnesses mobile money capabilities to support effortless collections. Merchants can initiate payment requests via USSD, offering a secure, efficient, and flexible method to collect customer payments.

**Key Steps**

1. **Initiate Request**
    - Merchant calls `/purchases` API.
    - Required fields: customer’s mobile number, amount, and optional message.
2. **Customer Notification**
    - Customer receives a USSD pop-up with payment instructions.
3. **Customer Approval**
    - Customer enters wallet PIN (if required) and authorizes transfer.
4. **Confirmation**
    - Paysecure sends webhook with payment status.
    - Merchant may also query `/purchases/{purchaseId}`.
5. **Account Update**
    - Merchant updates customer account balance/order status.

<video width="600" controls>
  <source src="/img/mobilemoneyvideo1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Payout Flow

1. **Initiate Request**
    - Merchant calls `/payout/` API.
    - Required fields: customer’s mobile number, amount, and currency.
2. **Processing**
    - Funds deducted from merchant balance.
    - Transfer routed to customer’s mobile wallet.
3. **Customer Notification**
    - Customer receives USSD/SMS confirmation.
4. **Confirmation**
    - Paysecure sends webhook to merchant.
    - Merchant updates customer account.

## Edge Case Handling

- **Insufficient balance (merchant):** Payout request rejected at initiation.
- **Customer rejects/ignores USSD prompt:** PayIn marked as `failed` or `expired`.
- **Invalid mobile number:** Payment rejected, webhook error returned.
- **Refunds:** Must always be handled as a **new payout** (no native reversal).