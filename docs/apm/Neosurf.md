# Neosurf (Global)

## Overview

**Neosurf** is a globally accepted prepaid payment method that enables customers to pay online using vouchers or a MyNeosurf account. It is especially popular for **digital goods, gaming, and entertainment services** where customers want secure and anonymous payment options.

With Paysecure, merchants can:

- **PayIns (collections):** Customers pay with Neosurf vouchers or their MyNeosurf account.
- **Refunds:** Merchants can return funds to the **original voucher/MyNeosurf account** used for payment.
- **Payouts (disbursements):** Merchants send funds to a customer’s MyNeosurf account (email-linked).

## Concepts

### Payment Method Codes:

- Payin: `NEOSURF`
- Payout: `PAYOUT-NEOSURF`

### Neosurf Voucher

- A **prepaid instrument** with a unique 10-digit code (sometimes also a PIN).
- Issued in fixed denominations (e.g., €10, €20, €50).
- Can be used immediately after purchase for online payments.
- Partially usable (remaining balance stays valid until spent or expired).

### Where Customers Buy Neosurf Vouchers

Neosurf vouchers are widely available both **offline** (retail) and **online**.

- **Europe (core market):**
    - Countries: France, Germany, UK, Italy, Spain, Belgium, Netherlands, Switzerland, Austria, Portugal, Nordics.
    - Where: Convenience stores, newsagents, supermarkets, petrol stations, and authorized online resellers.
- **Eastern Europe:**
    - Countries: Poland, Czech Republic, Hungary, Romania, etc.
    - Where: Local kiosks, gaming shops, and digital resellers.
- **North America:**
    - US & Canada: Select online vendors and physical distributors (limited availability).
- **Asia (SE Asia focus):**
    - Countries: Singapore, Malaysia, Indonesia, Thailand.
    - Where: Licensed e-voucher platforms online.
- **Africa:**
    - Countries: South Africa, Morocco, Tunisia.
    - Where: Online platforms and selected retail stores.
- **Oceania:**
    - Australia & New Zealand: Mostly through authorized online resellers.

:::note 
💡For the most accurate and up-to-date list, merchants should refer customers to the official Neosurf website or in-app store locator.
:::


### MyNeosurf Account

- Online wallet linked to a **customer’s registered email**.
- Customers can redeem vouchers into their account, store balances, and spend online.
- Mandatory for **receiving payouts**.

### Refund vs Payout

- **Refunds:** Always tied to the original PayIn, sent back to the same voucher/MyNeosurf account.
- **Payouts:** Standalone transfers to a MyNeosurf account (cannot be directed to a voucher).

### Why Merchants Should Accept Neosurf

- **Customer reach:** Attract unbanked or underbanked customers.
- **Fraud reduction:** No chargebacks since funds are prepaid.
- **Higher conversion:** Simple voucher entry reduces cart abandonment.
- **Customer privacy:** Anonymous option is attractive in digital industries.
- **Global availability:** Supports sales across multiple regions.

## Payin Flow (Voucher / MyNeosurf)

**Step 1: Customer Checkout**

- Customer adds items to cart → selects **Neosurf** as payment method.
- Merchant backend calls Paysecure’s `/purchases` API with:
    - `paymentMethod = NEOSURF`
    - Customer info (email, country, etc.)
    - Purchase info (currency, amount, product details).

**Step 2: API Response**

- Paysecure returns:
    - `purchaseId` (internal reference)
    - `checkoutUrl` (hosted Neosurf page)
    - Initial `status = payment_in_process`

**Step 3: Redirect to Checkout**

- Merchant redirects the customer to the `checkoutUrl`.
- On the Neosurf hosted page, customer chooses:
    - **Voucher option** → Enters voucher code (10 digits, sometimes with PIN).
    - **MyNeosurf option** → Logs in with registered email and authorizes payment.

**Step 4: Voucher Validation**

- Neosurf validates voucher/account:
    - Authenticity of code/login.
    - Available balance.
    - Expiry status.
- If valid & sufficient → balance debited instantly.

**Step 5: Payment Confirmation**

- Customer sees confirmation screen.
- Neosurf sends result back to Paysecure.
- Paysecure updates transaction → sends webhook to merchant:
    - `purchase.paid` (success),
    - `purchase.error` (invalid/expired code, insufficient funds),
    - `purchase.cancelled` (customer abandoned).

**Step 6: Merchant Update**

- Merchant receives webhook payload (purchaseId, status, amount).
- Backend updates order status accordingly.
- Customer is redirected to `success_redirect` or `failure_redirect` page.

<video width="600" controls>
  <source src="/img/neosurfvideo1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Refund Flow (Back to Original Source)

**Step 1: Merchant Initiates Refund**

- Merchant calls `/purchases/{purchaseId}/refund` API
- Required fields:
    - Original `purchaseId`

**Step 2: Paysecure Validation**

- Paysecure checks:
    - If original transaction is refundable.
    - If requested refund ≤ remaining refundable balance.

**Step 3: Refund Processing**

- If original PayIn was via **voucher**:
    - Refund credited back to the same voucher code.
    - Customer can reuse the voucher for new purchases until balance depleted/expired.
- If original PayIn was via **MyNeosurf**:
    - Refund credited directly to the same MyNeosurf account (email).

**Step 5: Confirmation**

- Paysecure sends webhook:
    - `refund.paid` (with amount, transaction details),
    - or `refund.error` (if failed)
- Merchant backend updates customer order/account.

:::tip 📌
- Refunds must always return to the **same source** (voucher/MyNeosurf).  
- Cannot redirect to a different voucher or email.  
- Expired/depleted vouchers may not accept refunds → merchant should fallback to a payout via MyNeosurf.  
:::


## Payout Flow (MyNeosurf Accounts Only)

**Step 1: Merchant Initiates Payout**

- Merchant calls `/payout/` API.
- Required fields:
    - `payoutMethod = NEOSURF`
    - Recipient’s MyNeosurf registered email
    - Amount + currency

**Step 2: Paysecure Validation**

- Verifies:
    - Merchant has sufficient balance.
    - MyNeosurf account (email) exists and is valid.

**Step 3: Transfer Processing**

- Funds deducted from merchant’s Neosurf balance.
- Payout sent directly to customer’s MyNeosurf account.

**Step 4: Customer Notification**

- Customer receives email/notification from Neosurf confirming funds received.
- Balance updated in their MyNeosurf account.

**Step 5: Merchant Confirmation**

- Paysecure sends webhook with payout status:
    - `payout.success` → amount credited successfully.
    - `payout.error` → invalid email, insufficient balance, technical error.
- Merchant backend updates customer’s profile/account.

:::note 
**Note:** Payouts are **not supported to voucher codes**, only to MyNeosurf accounts.
:::

## Edge Case Scenarios (All Flows)

- **Voucher invalid/expired at PayIn** → Status = `purchase.error`
- **Voucher balance insufficient** → Declined at validation
- **Customer abandons during PayIn** → Status = `purchase.expired`
- **Refund blocked (voucher expired/depleted)** → Status = `refund.error`
- **Failed payout** → Invalid/unknown MyNeosurf email → Status = `payout.error`