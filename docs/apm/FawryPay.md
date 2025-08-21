# FawryPay (Egypt)

## Overview

Fawry is Egypt’s largest electronic payments network, offering both **online** and **offline** payment channels through banks, mobile apps, and a nationwide network of retail agents.

With Paysecure’s Fawry integration, merchants can:

- **PayIns (collections):** Customers pay via bank apps, online checkout, or by visiting a Fawry retail agent.
    
    <aside>
    
    Only hosted checkout is available on this payment method.
    
    </aside>
    
- **Payouts (disbursements):** Send funds to customer accounts or via Fawry’s network **(*coming soon*)**.

### Key Benefits

- **Nationwide reach:** Thousands of retail locations across Egypt.
- **Multiple channels:** Online, mobile, and offline support.
- **Secure & convenient:** Industry-standard encryption and validations.
- **Flexible use cases:** Bill payments, e-commerce, digital wallets, and more.

## Concepts

- **Payment Method Codes:**
    - Payin → `FAWRYPAY`
    - Payout → `PAYOUT-FAWRYPAY`
- **Unique Reference Code:** Each transaction generates a code customers must present at a Fawry agent or use online.
- **Checkout Options:** Merchants can either redirect users to hosted checkout page (available 0 or display PayIn instructions directly on their cashier page (currently unavailable).
- **Payouts:** Currently in development, designed for real-time disbursements via accounts or Fawry network.

## PayIn Flows

**How it works**

Paysecure’s Fawry PayIn leverages Fawry’s payment network to support a wide range of collection scenarios. Merchants can initiate payment requests via various channels such as mobile apps, online platforms, or physical retail points, providing secure, efficient, and flexible options for collecting payments from customers.

**Key Steps**

[](https://content.pstmn.io/f6db7c5d-71f5-4e5e-aeb8-e238de5cff02/aW1hZ2UucG5n)

1. **Initiate Payment**
    - Customer selects *Pay with Fawry* at checkout.
    - Merchant calls `/purchases` API.
2. **Receive Instructions**
    - API response includes the checkoutURL, where the customer has to be redirected to complete the payment.
    - Customer is redirected to hosted flow to get the payment instructions.
3. **Customer Payment**
    - Customer either:
        - Visits a Fawry agent → provides reference code → pays in cash or electronically, or
        - Completes payment online via Fawry’s supported digital channels.
4. **Confirmation**
    - Customer receives confirmation via SMS/email.
    - Paysecure sends webhook to merchant.
    - Merchant may also query `/purchases/{purchaseId}`.

## Transaction Limits:

### Pay Ins:

| **Criteria** | **Min Amount** | **Max Amount** |
| --- | --- | --- |
| Per Transaction | 10 EGP | 100,000 EGP |

## Edge Case Handling

- **Expired reference code** → Payment rejected; customer must generate a new one.
- **Incorrect reference code at agent** → Payment cannot be reconciled; customer must retry with correct code.