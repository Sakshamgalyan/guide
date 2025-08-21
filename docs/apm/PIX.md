# PIX (Brazil)

## Overview

PIX is Brazil’s instant payment system that enables real-time transfers 24/7. Customers simply scan a **dynamic QR code** at checkout to complete their payment instantly, without needing card details or banking info. For merchants, PIX ensures fast confirmation, low fees, and immediate settlement, making it one of the most widely adopted payment methods in Brazil.

## Concepts

- **Payment Method Codes:**
    - PayIn → `PIX`
    - PayOut → `PAYOUT-PIX`
- **Dynamic QR Code:** Unique QR generated per transaction for security and reconciliation.
- **PIX Key:** Identifier for payouts — can be phone, email, CPF/CNPJ (tax ID), or random key.

## Payin Flows

**How it works**
To initiate a PIX payment, a payer can scan the code using their PIX payment app (such as Itau, NuBank, etc).

<aside>

The generated QR code comply with BCB’s infrastructure requirements to ensure that the merchant's details are stored securely and there are no errors during the payment journey.

</aside>

**Key Steps**

![Des](/img/pix1.png)

## PayIn Flow

1. **Initiate Request**
    - Merchant calls `/purchases` API.
    - Must specify `paymentMethod: PIX`, amount, and customer details.
2. **Receive QR Code**
    - API response includes:
        - Checkout URL (hosted QR page), or
        - `pix_payload` object (data to render QR on merchant’s own cashier page).
3. **Customer Scan & Authorization**
    - Customer scans QR code using their banking app.
    - Authorizes payment by entering their bank PIN.
4. **Payment Confirmation**
    - Funds are transferred instantly.
    - Paysecure sends webhook to merchant’s callback URL.
    - Merchant can also query `/purchases/{purchaseId}`.

<video controls>
  <source src="/img/pixvideo1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## **Payout flow**

**How it works**

To initiate a payout, the merchant calls `/payout/` API and passes the payout details such as the recipient's PIX key (e.g., CPF/CNPJ), amount, and any additional information.

<aside>

If the merchant has enough balance, then the transaction amount will be deducted from the merchant balance and sent to the user.

</aside>

**Key Steps**

![](/img/pix2.png)

**Process Flow**

1. **Initiate Request**
    1. Merchant calls `/payout/` API.
    2. Required fields: recipient’s PIX key (phone/email/CPF/CNPJ/random), amount, optional message.
2. **Validation & Processing**
    1. Paysecure verifies merchant balance.
    2. PIX key validated through DICT registry.
    3. Funds transfer initiated to recipient’s bank.
3. **Instant Settlement**
    1. Recipient’s bank credits funds instantly.
    2. Customer receives bank notification.
4. **Confirmation**
    1. Merchant receives webhook with status and transaction details.
    2. Status can also be checked via `/getpayout/{payoutId}`.