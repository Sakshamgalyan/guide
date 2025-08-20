                # Crypto Wallet

## Overview

**Crypto Wallet** is a Paysecure payment method that lets customers **pay in fiat** while you **receive cryptocurrency** (e.g., USDC) behind the scenes. Customers see prices in their local currency; Paysecure handles conversion and on-chain settlement. This guide explains the core concepts and the API steps to enable Crypto Wallet on your platform.

---

## Concepts

- **Fiat in, crypto out:** Customer pays in fiat; Paysecure converts to crypto (e.g., USDC) automatically.
- **Customer wallet:** Converted crypto is credited to a **Paysecure-provided crypto wallet** for the customer in real time; customers can view balance and history.
- **Merchant crypto settlement:** The required amount is moved from the customer’s Paysecure wallet to your **merchant crypto wallet**. Both legs are recorded in Paysecure’s ledger.
- **Observability:** Track status via **webhooks** or the **Paysecure dashboard**.
- **Security & recovery:** **2FA** for wallet access, ledger integrity checks, and **OTP/email** for wallet recovery/closure.
- **Triggering this flow:** Include the following object in your `/purchases` request payload:
    
    ```json
    {
      "extraParam": {
        "IsCryptoPurchase": "yes"
      }
    }
    ```
    

---

## PayIn Flow

### How it works

Customer pays in fiat; Paysecure converts to crypto and settles to the merchant’s crypto wallet, with full ledgering and notifications.

### Key Steps

1. **Onboarding & Wallet Creation**
    - Customer selects a product/service on your site.
    - At checkout, if you haven’t pre-populated the email field, the customer is prompted to enter their **email**.
2. **Fiat Payment Initiation**
    - Customer selects a payment method and pays in **fiat** (currency shown at checkout).
    - Paysecure monitors the transaction and, on success, returns success to the merchant.
    - Backend converts the captured amount to **stablecoin (e.g., USDC)**.
3. **Post Fiat-Payment Notification**
    - Merchant tracks the transaction via **webhooks** or the **dashboard**.
4. **Fiat → Crypto Conversion (behind the scenes)**
    - Paysecure converts the fiat amount using exchange integrations.
    - Converted crypto is **credited to the customer’s Paysecure wallet** in real time.
5. **Merchant Crypto Settlement**
    - Required amount is **transferred from the customer’s wallet to your merchant crypto wallet**.
    - **Both transactions** (funding and transfer) are recorded in the ledger for compliance and traceability.
6. **Wallet Management**
    - Customers can manage their **Crypto Wallet**: view balance and transaction history.
7. **Wallet Security**
    - **2FA** for access; **ledger integrity** checks for all transactions.
8. **Wallet Recovery or Closure**
    - Customers can recover wallet access via **OTP/email**.

### **API Flow**

1. **Create Purchase:** Call **`/purchases`** and include
    - either a specific `"paymentMethod"` (flow varies per method), **or** omit it to redirect the customer to the Paysecure cashier to complete payment, **and**
    - the **extra flag** to trigger this flow:
        
        ```json
        {
          "extraParam": {
            "IsCryptoPurchase": "yes"
          }
        }
        ```
        
2. **Redirect/Instructions:**
    - If `"paymentMethod"` is passed, show the relevant instructions to the customer.
    - If not, redirect the customer to the **Paysecure cashier** to complete payment.
3. **Outcome:** After success or failure, Paysecure **sends a webhook** and **redirects** the user to your **`success_redirect`** or **`failure_redirect`** URL.