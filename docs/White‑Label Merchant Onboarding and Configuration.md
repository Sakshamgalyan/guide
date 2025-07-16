# White‑Label Merchant Onboarding and Configuration

### Overview

This guide details the entire onboarding process for a new white‑label account. It covers topics including:

- Account creation workflows
- Security and KYB verifications
- Pre-live configuration
- API integrations
- Dashboard settings
- Transaction processing and settlements

Follow the steps below to ensure a smooth setup process and transition to live transactions.

---

## 1. Merchant Account Creation

### 1.1 Creating a New White‑Label Merchant

To onboard a new merchant, a white‑label account must be created from the Paysecure admin panel. Click on the **Add Role** button and provide the email address of the primary contact for the account. Select the **Role** of the user from the drop-down menu and click **Add Role** to create the account.

![Description](/img/Screenshot_2025-02-27_at_4.34.38_PM.png)

### 1.2 Email Verification and Password Setup

After creating the account, the merchant will receive an email notification with instructions on how to verify their email address.

![Description](/img/Screenshot_2025-02-27_at_4.35.23_PM.png)

Once verified, the merchant will be prompted to generate a new password.

![Description](/img/Screenshot_2025-02-27_at_4.37.00_PM.png)

### 1.3 Two‑Factor Authentication (2FA) Registration

Following password creation, the merchant is required to complete 2FA registration. This step adds an extra layer of security. The merchant must scan the QR code using the Google Authenticator app, which can be found in the Play Store and App Store.

![Description](/img/Screenshot_2025-02-27_at_4.42.24_PM.png)

After 2FA is successfully registered, the merchant will be prompted to log in again and will need to provide their Google Authenticator code with every subsequent login.

![Description](/img/Screenshot_2025-02-27_at_4.49.56_PM.png)

![Description](/img/Screenshot_2025-02-27_at_4.50.19_PM.png)

### 1.4 KYB Form Submission

During the account creation process, the merchant will receive KYB requirements from the Paysecure accounts team, which must be filled out and submitted. Upon approval, the merchant can access their full account details via the Paysecure portal.

![Description](/img/Screenshot_2025-02-27_at_5.10.36_PM.png)

---

## 2. Pre‑Live Configuration

Before processing live transactions, several configurations must be completed, including:

- Currency
- Payment methods
- Services offered
- Risk caps
- Limits and charges
- Merchant Discount Rates (MDRs)

### 2.1 Currency Selection

The merchant selects the currencies they wish to process. This ensures that only the chosen currencies are available for transactions.

![Description](/img/Screenshot_2025-02-27_at_5.14.13_PM.png)

### 2.2 Payment Methods Selection

The merchant chooses from the allowed payment methods available within the platform.

![Description](/img/Screenshot_2025-02-27_at_5.15.49_PM.png)

### 2.3 Service Enablement

Next, the merchant enables the services they wish to offer. This might include additional value‑added services or specific transaction types.

![Description](/img/Screenshot_2025-02-27_at_5.20.37_PM.png)

### 2.4 Risk Capping Configuration

To manage potential losses (e.g., from currency conversion or other exposures), the merchant can set risk caps on transactions.

![Description](/img/Screenshot_2025-02-27_at_5.23.20_PM.png)

### 2.5 Setting Limits and Charges

The merchant must configure limits and charges, which can be set either for individual currency–payment method pairs or as common parameters for all pairs. The merchant can do this by visiting the Merchant Profile Menu from the sidebar. 

![Description](/img/Screenshot_2025-02-27_at_5.51.50_PM.png)

1. **Configure Limits:**
    
    Set maximum transaction counts (hourly, daily, weekly, monthly) and amount limits (per transaction and cumulative) across various timeframes.
    
    ![Description](/img/Screenshot_2025-02-27_at_5.53.31_PM.png)
    
2. **Configure Charges:**
    
    Define transaction fees, fund fees, AMC, rolling reserve percentages, decline fees, and designate the currency standard (Major or Minor).

    ![Description](/img/Screenshot_2025-02-27_at_5.56.55_PM.png)
    
3. **Configure MDR Rates:**
    
    Configure Merchant Discount Rates (MDR) based on volume ranges (in millions).
    
    ![Description](/img/Screenshot_2025-02-27_at_5.58.58_PM.png)
    

### 2.6 User Management

The merchant can add multiple users to their account for efficient team management.

![Description](/img/Screenshot_2025-02-27_at_6.02.20_PM.png)

![Description](/img/Screenshot_2025-02-27_at_6.08.57_PM.png)

<aside>
🗒️

Once the merchant profile is fully set up, they can begin integrating with Paysecure APIs. For integration details and API references, please refer to [developer.paysecure.net](http://developer.paysecure.net/).

</aside>

---

## 3. API Integration and Dashboard Configuration

Before commencing merchant-level testing, additional configurations must be completed from the dashboard.

### 3.1 Mode Switching: Sandbox vs. Production

Merchants can toggle between sandbox (for testing) and production (for live transactions):

- **Sandbox Mode:**
    
    Use for testing integrations and new features without impacting live transactions. (Note: Only Visa and Mastercard test cards are supported; test card details are available in the developer documentation.)
    
- **Production Mode:**
    
    Use for processing live transactions.
    

**Steps to Switch Modes:**

1. Locate the mode toggle at the top right corner of the dashboard, under the profile section.
2. Click the toggle to switch between sandbox and production.
3. Confirm your selection in the pop‑up confirmation dialog.

![Description](/img/Screenshot_2025-02-27_at_6.34.53_PM.png)

### 3.2 API Keys

The API Keys module is crucial for authenticating API calls to Paysecure.

**Functionality Overview:**

- **Auth Key (Bearer Token):**Used in the request header for calling any Paysecure API endpoint.

**Steps to Generate an API Key:**

1. Navigate to the “API Keys” section.
2. Click on “Generate Key” to open the modal window.
3. Enter a descriptive title (e.g., “Production Key – Website Integration”).
4. Click “Generate” to create the key, which is then listed with its creation date and status.
5. **Usage:**Include this key as a Bearer token in every API call.*Example HTTP header:*

```
Authorization: Bearer <YOUR_API_KEY>
```

![Description](/img/Screenshot_2025-02-27_at_6.37.06_PM.png)

### 3.3 Brands Setup

For white‑label merchants, a brand represents the sub‑merchants under the control of the white‑label entity. Many Paysecure API calls require a Brand ID to uniquely identify the merchant brand.

**How to Generate a Brand ID:**

1. Navigate to the “Brands” tab on the dashboard.
2. Click on “Generate Brand” and enter a title (e.g., “Main Website” or “Mobile App”).
3. Once generated, the Brand ID is displayed and can be copied for use in API requests.

![Description](/img/Screenshot_2025-02-27_at_6.37.49_PM.png)

### 3.4 Webhook Configuration

Webhooks enable real‑time notifications for transaction events.

**Overview:**

- **Purpose:**Configure a callback URL to receive event notifications.
- **Scope:**Can be set for individual payment methods or universally for all methods.

**Steps to Configure a Webhook:**

1. Click the “New Webhook” button.
2. Enter the following details:
    - **Name:** A descriptive name for the webhook.
    - **Payment Method Selection:** Choose a specific payment method or “All” for universal callbacks.
    - **URL:** Enter the callback URL.
    - **Event Triggers:** Select from available events (note that not all events may be available for every payment method).
3. Click “Save” to store the webhook configuration.

**Available Event Triggers:**

- hold release
- payment in progress
- payment refund
- purchase cancelled
- purchase created
- purchase expired
- purchase failed
- purchase hold
- purchase overdue
- purchase paid
- refund in progress

> Note: For purchase requests, if success and failure callback URLs are provided directly in the API request, they override the dashboard settings. Payout-related callback URLs must be set within the payout API.
> 

![Description](/img/Screenshot_2025-02-27_at_6.38.37_PM.png)

### 3.5 Public Key Usage

The public key is used to verifying hash signatures and decrypting payload responses from Paysecure.

**How It Works:**

- **Purpose:**The public key ensures that response payloads are secure and untampered.
- **Access:**The public key is available in the “Public Key” section of the dashboard.
- **Usage:**It is used together with the corresponding private key for data validation and webhook verification,

![Description](/img/Screenshot_2025-02-27_at_6.39.40_PM.png)

### 3.6 Settings and Transaction Expiry

The Settings module allows merchants to adjust parameters for specific payment methods.

**Transaction Expiry Settings:**

- **Purpose:**Set the expiry minutes for Alternative Payment Methods (APMs) that support expiry configuration.
- **How it Works:** The  `purchase.expireInMin`  parameter can be passed in the API request. If provided, this parameter takes precedence over the dashboard default.
- **Functionality:**Defines the time window for completing an Interac payment. Payments not completed within this window are automatically marked as **EXPIRED**.

**Best Practices:**

- Set an appropriate expiry time.
- Clearly communicate the payment window to customers.
- Reconcile any discrepancies between Paysecure records and customer bank transactions during settlement.

![Description](/img/Screenshot_2025-02-27_at_6.40.25_PM.png)

---

## 4. Testing and Go‑Live Process

After completing the KYB process and pre‑live configurations, the merchant performs sandbox testing using the designated test cards (only Visa and Mastercard are supported in sandbox mode; test card details are available in the developer documentation). Once sandbox testing is successfully carried out, the accounts team will notify the merchant that they are ready to go live.

Following the go‑live notification, the merchant can process live transactions. *Ensure brand level configurations are done properly before going live.* 

---

## 5. Additional Information

- **API Integration:**
    
    For detailed API documentation, integration guides, and references, please visit [developer.paysecure.net](http://developer.paysecure.net/).
    
- **Support:**
    
    The support team is available throughout the integration process for technical and operational assistance.
    

---

This comprehensive guide outlines every step in the white‑label merchant onboarding process—from back‑office account creation and security setups to detailed configuration of transaction limits, charges, and API integrations. Follow this guide to ensure your onboarding is both thorough and efficient, paving the way for smooth live operations.