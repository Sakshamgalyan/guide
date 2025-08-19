# Overview

Paysecure is a **payment optimization and intelligence layer** that helps you accept more payments with less friction. We abstract the messy bits—bank rails, alternative payment methods (APMs), card quirks, redirects, webhooks—so your product team can focus on shipping, not payment plumbing.

This documentation walks you end-to-end through integrating Paysecure: from creating a purchase to handling webhooks, from hosted flows to server-to-server (S2S). If something isn’t crystal-clear, email us at **info@paysecure.net**. Our support team operates during **standard business hours**.

---

## What you can do with Paysecure

- **Collect payments globally** across multiple rails:
    - Real-time bank methods (e.g., PayID, PIX, SPEI, Interac variants)
    - Cash/retail and wallet rails (e.g., Fawry, Mobile Money)
    - Prepaid & voucher flows (e.g., Neosurf)
    - Cards via **S2S** with 3-D Secure where required
    - Crypto (CryptoBridge) — **pay-in only** via hosted pop-up
- **Orchestrate the experience**: hosted pages, redirects, or S2S—use the model that matches your UX, risk posture, and compliance needs.
- **Instrument everything**: webhooks for final states, callbacks for redirects, and consistent IDs for reconciliation.
- **Optimize conversions** with reference/amount matching, dynamic QR, and clear, copy-ready instructions per rail.

---

## How Paysecure fits in your stack

1. **Create a Purchase**
    
    You call `POST /purchases` with client, order, currency, and redirect URLs.
    
2. **Collect the payment**
    - **Hosted**: redirect to our checkout/rail-specific instructions.
    - **S2S (cards)**: post card data to `/p/{purchaseId}/?s2s=true`; complete 3-D Secure if prompted.
    - **Hosted pop-up (CryptoBridge)**: we handle wallet/exchange linking and on-chain details.
3. **Receive outcomes**
    
    We send **webhooks** (`purchase.paid`, `purchase.error`, `purchase.cancelled` …). You can also poll `GET /purchases/{purchaseId}`.
    
4. **Reconcile & fulfill**
    
    Use `purchaseId` (and your `merchantRef`) to tie payments to orders, update balances, and fulfill.
    

---

## Integration models (pick what’s right for the flow)

- **Hosted checkout/instructions**
    
    Zero client-side PCI scope, consistent UX, automatic redirects to your success/failure URLs.
    
- **Server-to-Server (Cards)**
    
    Full backend control; we’ll prompt 3DS when issuers require SCA.
    
- **Hosted pop-up (CryptoBridge)**
    
    We manage wallet/exchange selection, quoting, and confirmations. *(No refunds/payouts on this rail.)*
    

---

## Products covered in this doc set

- **Cards (S2S + 3DS)**
- **PayID (AU)** — **hosted only** for PayIn; payouts via API; refunds are outbound payouts
- **PIX (BR)** — dynamic QR PayIn; DICT-validated payouts
- **SPEI (MX)** — CLABE-based PayIn; payouts to CLABE/card/mobile
- **Interac e-Transfer / Interac-Express (CA)**
- **Fawry (EG)** — reference-code PayIn; payouts **coming soon**
- **Mobile Money (various African markets)** — PayIns & payouts; refunds are payouts
- **Neosurf** — voucher/MyNeosurf PayIns; **refunds to original source**; payouts to MyNeosurf
- **CryptoBridge** — **PayIn only** (no refunds/payouts)

*(Availability can vary by account configuration. Your account manager can enable specific rails and currencies.)*

---

## Developer essentials

- **Authentication & keys**
    
    Use your API key in headers; **Brand ID** in the request body where required. Rotate keys periodically.
    
- **Idempotency**
    
    Send `merchantRef` on `POST /purchases` to prevent duplicates and to recover from timeouts.
    
- **Redirects & callbacks**
    
    Always provide `success_redirect` and `failure_redirect`. Hosted flows will return customers there after completion.
    
- **Webhooks**
    
    Subscribe endpoints for final states (e.g., `purchase.paid`, `payout.success`, `refund.success`). Implement retries and verify signatures if enabled on your account.
    
- **Errors**
    
    Error responses are JSON with `message` and `code`. Treat 4xx as fix-and-retry; 5xx as transient and retry with backoff.
    
- **Time, money, format**
    - Currency: ISO-4217 (e.g., `AUD`, `BRL`).
    - Country: ISO-3166-1 alpha-2 uppercase (e.g., `SG`).
    - Timestamps: ISO-8601 UTC unless stated otherwise.
    - Prices: decimal strings (e.g., `10.37`).

---

## Operational best practices

- **Display exact instructions** to users (amount, reference, PayID/CLABE/alias, expiry). Provide **copy** buttons.
- **Handle partials/overpays** consistently (top-up windows, auto-refund rules where supported, or ops queues).
- **Set clear expiries** for bank/QR/reference flows to reduce late/stray credits.
- **Store the right identifiers** (`purchaseId`, `merchantRef`, customer ID) for clean reconciliation and support.
- **Plan for rail-specific constraints** (e.g., no on-rail refunds for CryptoBridge; Mobile Money refunds via payout).

---

## Support

- **Email:** **info@paysecure.net**
- **Hours:** Standard business hours
- **For fastest help, include:**
    - `purchaseId` (and `merchantRef` if used)
    - Timestamps (UTC)
    - Payment rail (e.g., PayID, PIX, Cards S2S)
    - Request/response snippets (redact PAN/CVV)
    - Webhook IDs or logs

> We move quickly, but we won’t guess with your money. The more context you share, the faster we can unblock you.
> 

---

## Security & compliance (the practical version)

We follow industry-standard security practices and minimize sensitive data exposure (e.g., hosted pages, S2S patterns, and tokenization where applicable). For formal attestations, data-location questions, or vendor reviews, contact **info@paysecure.net**.