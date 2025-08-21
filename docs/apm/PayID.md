# PayID (Australia)

## Overview

PayID runs on Australia’s NPP and lets customers pay to simple aliases (email, mobile, ABN) instead of BSB/account numbers. With **paysecure’s hosted flow**, customers are **always redirected** to a hosted page that shows the PayID instructions; after payment, they’re sent back to your **success** or **failure** redirect URL.

Supports:

- **PayIn (hosted only):** Redirect to hosted instructions → customer pays in their bank app → return to your site.
- **Payouts:** Real-time disbursements to a recipient’s PayID (API).
- **Refunds:** Executed as PayID payouts tied to the original purchase.

## Concepts

- **Payment Method Codes:**
    - Payin: `PAYID`
    - Payout: `PAYOUT-PAYID`
- **Hosted PayIn only:** No inline/in-page rendering. All instructions (alias, beneficiary, reference) are shown on paysecure’s hosted page.
- **PayID Alias:** An alias (email/phone/ABN/Org ID) mapped to a bank account via NPP.
- **Real-time settlement:** NPP is 24/7; rare bank maintenance can delay.
- **Refunds via Push:** Refunds are executed as **payouts to a PayID** (there’s no “pull” reversal on NPP).

## PayIn Flow (Hosted)

1. **Create Purchase:** Initiate the `/purchases` API by passing the required parameters as per API reference
2. **Receive Hosted URL**
    
    Response includes `purchaseId` and `checkoutURL`.
    
3. **Redirect Customer**
    
    Send the customer to **`checkoutURL`**.
    
    - Hosted page shows: PayID alias, beneficiary, exact amount, (optional) reference, and clear copy buttons.
4. **Customer Pays in Their Bank App**
    - “Pay to PayID” → enter alias, amount, (reference if shown) → confirm.
5. **Real-time Confirmation**
    - Funds post to paysecure.
    - We send **`purchase.paid`** (or `purchase.error` / `purchase.cancelled`) webhook.
6. **Return to Your Site**
    - Hosted page redirects the customer to **`success_redirect`** or **`failure_redirect`**.
    - You may also poll `GET /purchases/{purchaseId}` if needed.

## Payout Flow (API)

1. **Initiate**
    
    `POST /payout` with:
    
    - `payoutMethod: PAYOUT-PAYID`
    - Recipient PayID (email/phone/ABN)
    - Amount, currency (`AUD`), optional reference
2. **Process**
    
    paysecure validates balance & alias → pushes via NPP.
    
3. **Confirm**
    
    Webhook: **`payout.success`** or `payout.error`.
    
    Update internal ledgers accordingly.
    

## Edge Cases & Handling

- **Invalid/Unregistered PayID (PayIn):** Customer’s bank will flag before sending; payment won’t arrive → we remain `pending`/`cancelled`.
- **Name mismatch warning (PayIn):** Hosted page shows your beneficiary name; instruct customers to confirm it matches in their bank app.
- **Bank maintenance delays:** Rare; webhook will follow on completion.
- **Payout failures:** Invalid alias/format → `payout.error`; retry after correction.