# Bank Transfer

## Overview

Paysecure’s **Account-to-Account (A2A)** rails use **Virtual Accounts** to collect and disburse funds over traditional banking networks. For **Payins**, your platform retrieves bank account details (Account Number/IBAN/SWIFT) for a merchant-assigned **currency account** and shares them with the payer, who pushes funds from their own bank app.

For **Payouts**, you can pay out to customers, individuals, or businesses directly to their bank accounts via the **dashboard**or the same **suite of APIs**—so you can go live with minimal engineering lift while keeping operational control. Multiple currency accounts and multiple business accounts (per-KYB) are supported subject to onboarding and jurisdictional/commercial constraints.

---

## Concepts

- Payment Method Codes:
    - Payin: `BANKTRANSFER`
    - Payout: `PAYOUT-BANKTRANSFER`
- **Virtual Account (per currency account):** A bank account issued to your merchant profile for a specific currency/jurisdiction whose **Account Number/IBAN/SWIFT** you present to payers for Payins.
- **Hosted vs. Own UI (Payin):** After you create a purchase, present bank details yourself **or** redirect users to the **checkout URL** where we present the details.
- **Payout Beneficiary Data:** To create a payout you pass beneficiary identifiers (email/phone), **address** (mandatory but not validated), **bank details**, and **name**, plus payout specifics.
- **Currency & Routing:** Bank routing varies by currency (e.g., **ACH/Fedwire** in USD, **BSB** in AUD). See **Routing Parameters** below.
- **Webhooks (authoritative):** Upon **success or failure**, Paysecure **sends a webhook to the merchant with full transaction details** for reconciliation and next steps. Alternatively the transaction status can be polled by the Status APIs for payins and payouts.

---

## Payin Flow

### How it works

Paysecure's A2A paying system, utilizes the powerful Virtual Accounts capabilities, enabling you to support a wide range of scenarios using the following method.

### Key Steps

1. **Create Purchase (API)**
    - The merchant initiates the purchase via the **create purchase API**.
    - If successful, the response JSON includes **PayIn bank details** (Account number/IBAN/SWIFT for the merchant-assigned currency account) **and a checkout URL**.
2. **Present Instructions (choose one)**
    - **Option A — Own UI:** Use the PayIn bank details in the JSON to create a page within your estate and show PayIn instructions.
    - **Option B — Hosted:** Redirect the end-user to the **checkout URL**, where the client sees the bank details for payment.
3. **Payer Sends Funds (Bank App)**
    - The payer uses their banking app, inputs the **provided account details** and **amount**, and submits the transfer.
4. **Webhook to Merchant (Source of Truth)**
    - **After payment completes—success or failure—Paysecure sends a webhook to the merchant** containing all relevant transaction details (amount, currency, timestamps, references, status). Use this to reconcile and update order state.
5. **Redirects (Hosted option only)**
    - If **Option B (hosted)** was used, the user is **redirected to the appropriate success or failure redirect URL**after the payment outcome is determined.

---

## Payout Flow

### How it works

Paysecure offers the ability to make payments to customers', individuals', or businesses' bank accounts using various transfer methods via its dashboard or suite of APIs. The dashboard consolidates all available features accessible through APIs, allowing you to easily go live with minimal technical setup.

### Key Steps

1. **Initiate Payout (Dashboard or API)**
    - The merchant platform creates a payout by passing **beneficiary details** with **payout details**.
    - Beneficiary details include:
        - **Beneficiary ID** (email or phone)
        - **Beneficiary’s address** *(mandatory but not validated—send real data if available; otherwise a placeholder)*
        - **Beneficiary’s bank details**
        - **Beneficiary’s name**
2. **Accounts & Onboarding Context**
    - At onboarding, merchants are configured with **currency accounts** (typically one per jurisdiction; multiple are supported—contact your account manager; restrictions may apply).
    - The platform supports **multiple business accounts** within one merchant (each business with its own KYB). Paysecure handles backend balance distribution and exposes simple APIs.
3. **Processing & Routing**
    - Paysecure processes the payout from the relevant currency account using the appropriate **routing** for the currency (see **Routing Parameters**).
4. **Webhook to Merchant (Final Status)**
    - Upon completion—**Success or Failure**—**Paysecure notifies the merchant via webhook** with the final status and additional transaction details.

---

## Routing Parameters

| **Currency code** | **Routing code 1** | **Routing Code 2** |
| --- | --- | --- |
| SGD | bankCode | bankBranchCode |
| USD | ach | fedwire |
| AUD | BSB |  |
| CAD | transit_number | institution_number |
| GBP | sort_code |  |
| HKD | bankCode | bankBranchCode |
| JPY | bankCode *(Zengin Bank Code)* | bankBranchCode *(Zengin Branch Code)* |
| NZD | bankCode | bankBranchCode |