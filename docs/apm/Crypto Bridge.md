# Crypto Bridge

## Overview

CryptoBridge lets you **price in fiat** while customers **pay in crypto**. At checkout, we show a hosted crypto pop-up that handles wallet/exchange linking, token + network selection, real-time quotes, and fees. We compute the crypto amount from your fiat total and **route the on-chain transfer** to your configured **receiver wallet**—no crypto ops needed on your side.

**Key benefits**

- Fiat pricing, crypto-native checkout
- No wallet ops or inventory management for merchants
- Real-time pricing & conversion to eligible tokens
- Works with **major exchanges and DeFi wallets** (e.g., Binance, Coinbase, MetaMask, etc.)
- **Smart Funding (auto swap)** offer when the selected token balance is low
- Transparent fee breakdown (network gas, provider fee, optional `clientFee`)
- Webhook-based confirmation + success/failure redirects

## Concepts

- Payment Method Codes:
    - Payin: `CRYPTO-BRIDGE`
- **Hosted pop-up:** All customer interactions (wallet selection, auth, token/network, fees, QR/address) happen in a secure hosted UI we return via `checkout_url`.
- **Receiver wallet (per MID):** You configure a destination for each supported **network + token** (e.g., `Network`, `Token/Symbol`, `Receiver Address`). **Warning:** on-chain transfers are irreversible—ensure addresses are correct.
- **Eligible tokens & networks:** We present only networks/tokens you enabled. Pricing converts your fiat total into the selected crypto.
- **Quote + TTL:** Each quote has a short validity window; if it expires before broadcast, a fresh quote is issued.
- **Confirmations:** Payment reaches *processing* on first seen; we mark *paid* after the required confirmation depth for that chain.
- **Fees surfaced to customer:**
    - **Gas fee** (network)
    - **Institution/wallet fee** (when applicable)
    - **Client fee** (your optional surcharge via `clientFee`)
- **Smart Funding (auto swap):** If user’s chosen token is insufficient, we suggest an in-flow swap path to reduce drop-offs.
- **Reference & idempotency:** Pass a `merchantRef` to dedupe purchase creation and help with reconciliation.

## Payin Flow (Hosted)

1. **Create Purchase**
    1. Call `POST /purchases` with:
        1. `paymentMethod: "CRYPTO-BRIDGE"`
        2. Fiat `currency` + amount (e.g., USD, EUR)
        3. `client` (billing info)
        4. Optional `extraParam.clientFee` (your surcharge)
        5. `success_redirect`, `failure_redirect`
        6. We return `purchaseId` + **`checkout_url`**.
2. **Redirect to Hosted Page**
    1. Redirect your customer to `checkout_url`.
    2. They select **exchange or wallet**, then choose **token + network** from the allowed list.
3. **Quote & Fee Preview**
    - We display the **crypto amount**, **TTL**, and **fee breakdown** (gas, provider, `clientFee`).
    - If balance is low, we offer **Smart Funding** (auto swap suggestion).
4. **Authentication & Transfer**
    1. Customer authenticates (exchange OAuth, wallet signature) if needed.
    2. We show the **receiver address/QR** (or deep-link the wallet).
    3. Customer submits the on-chain transfer.
5. **Confirmation & Redirects**
    1. We detect the transaction on-chain → status moves through `processing` → `paid` once confirmations meet threshold.
    2. We fire webhooks (`purchase.paid` / `purchase.error` / `purchase.cancelled`).
    3. Customer is redirected to your `success_redirect` or `failure_redirect`.
6. **Merchant Reconciliation**
    1. Use webhook payload (plus optional `merchantRef`) to mark the order **Paid** and fulfill.
    2. You can also poll `GET /purchases/{purchaseId}`.

<video width="600" controls>
  <source src="/img/cryptobridgevideo1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

CryptoBridge Payment Flow

<video width="600" controls>
  <source src="/img/cryptobridgevideo2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

Smart Funding on CryptoBridge

## Edge Case Handling

- **Quote expired (TTL):** Auto re-quote; block broadcast until refreshed.
- **Wrong network/token:** Detect via chain metadata; show corrective guidance; status→`error` if funds land incorrectly (irrecoverable).
- **Insufficient gas:** Prompt to add native gas; block until resolved.
- **Compliance hold:** Large or flagged tx → hold in `processing` with reason code until cleared.
- **Duplicate purchase clicks:** Use `merchantRef` to dedupe.