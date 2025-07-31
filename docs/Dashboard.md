import { CompanyName } from '@site/src/components/EnvVars';

## 1. Introduction

This guide provides a comprehensive explanation of how each module on the <CompanyName/> Dashboard works. You will find detailed instructions for:

- Setting up the account and switching between production and sandbox modes.
- Generating and managing API keys and Brand IDs.
- Configuring webhooks for various transaction events.
- Using public keys to verify hash signatures.
- Setting parameters such as expiry minutes for specific payment methods.

*Each section includes actionable steps, code examples where applicable, and guidelines for troubleshooting common issues.*

---

## 2. Dashboard Overview

### 2.1 Statistics Module

The dashboard offers an overview of both **payin** and **payout** statistics. The key functionalities include:

![Description](/img/Screenshot_2025-05-16_at_5.22.12_PM.png)

- **Transaction Counts:**
    - Displays the total number of transactions categorized by status:
        - **Expired**
        - **Error**
        - **Paid**
        - **Payment in Progress**
        - **Refunded**
    - **Timeframes:**
        - **Daily**
        - **Weekly**
        - **Monthly**
        - **Yearly**
- **Time-Filtered Geo Chart:**
    - Shows a geographical breakdown of transaction values and volumes.
    - Users can filter by time period to view country-specific data.
    
    ![Description](/img/Screenshot_2025-05-16_at_5.29.12_PM.png)    

**Usage Instructions:**

1. **Viewing Stats:**
    
    Upon logging into the dashboard, the default view displays key metrics. Hover over individual metrics to see a breakdown by status.
    
2. **Filtering Data:**
    - Select the desired timeframe (daily, weekly, etc.) from the dropdown menu.
    - Use the geo chart filter to view transactions by country.
3. **Dashboard Refresh:**
    - The dashboard auto-refreshes data periodically. You can also manually refresh to see the latest updates.

### 2.2 Mode Switching: Sandbox vs. Production

Merchants can switch between sandbox (testing) and production (live) environments:

- **Sandbox Mode:**
    - Use this mode for testing integrations and new features without affecting live transactions.
- **Production Mode:**
    - Use this mode for processing live transactions.

**Steps to Switch Modes:**

1. Locate the mode toggle at the top right corner of the dashboard, under the profile section.
2. Click on the toggle to switch between sandbox and production.
3. Confirm your selection in the pop-up confirmation dialog.

![Description](/img/Screenshot_2025-05-16_at_5.24.52_PM.png)

---

## 3. API Keys

The API Keys module is crucial for authenticating requests to the <CompanyName/> API. For merchants under the whitle-lable merchant, they will see additional tabs on the dashboard to generate API Keys, Brand IDs and more.

### Functionality Overview

- **Auth Key (Bearer Token):**
    - Used in the request header for calling any <CompanyName/> API endpoint.

### Steps to Generate an API Key

1. **Access API Keys Module:**
    - Navigate to the “API Keys” section from the dashboard menu.
        
        ![Description](/img/Screenshot_2025-05-16_at_5.30.51_PM.png)
        
2. **Generate a New Key:**
    - Click on the “Generate Key” button.
    - A modal window will open.
3. **Enter Key Details:**
    - **Title:** Provide a descriptive title for the key (e.g., “Production Key – Website Integration”).
        
        ![Description](/img/Screenshot_2025-05-16_at_5.41.57_PM.png)
        
4. **Generate and Save:**
    - Click the “Generate” button.
    - The generated key appears in the list with creation date and status.
5. **Usage:**
    - Include this key as a Bearer token in the header of every API call.
    - Example HTTP header:
        
        ```http
        Authorization: Bearer <YOUR_API_KEY>
        ```
        

*Suggested Image Placeholder: Screenshot of the API Keys modal window with highlighted input fields and buttons.*

---

## 4. Brands

Certain <CompanyName/> API calls require a Brand ID, which uniquely identifies the merchant brand.

### How to Generate a Brand ID

1. **Access the Brands Section:**
    - Navigate to the “Brands” tab on the dashboard.
        
        ![Description](/img/Screenshot_2025-05-16_at_5.42.35_PM.png)
        
2. **Generate a New Brand ID:**
    - Click on “Generate Brand”
    - Enter a title for the brand (e.g., “Main Website” or “Mobile App”).
        
        ![Description](/img/Screenshot_2025-05-16_at_5.43.51_PM.png)
        
3. **Confirmation:**
    - Once generated, the Brand ID is displayed and can be copied for use in API requests.

**Usage in API Requests:**

- The Brand ID must be included in the header or request parameters when calling most <CompanyName/> APIs.

*Suggested Image Placeholder: Diagram showing the process of generating a Brand ID and where it appears in the dashboard.*

---

## 5. Webhook Configuration

Webhooks enable real-time communication of transaction events from <CompanyName/> to your server.

![Description](/img/Screenshot_2025-05-16_at_5.46.24_PM.png)

### Overview

- **Purpose:**
    - Configure a URL to receive callback notifications for payment events.
- **Scope:**
    - Can be set individually for each payment method or for all methods simultaneously.

### Steps to Configure a Webhook

![Description](/img/Screenshot_2025-05-16_at_5.47.47_PM.png)

1. **Add a New Webhook:**
    - Click on the “New Webhook” button.
2. **Provide Details:**
    - **Name:** Give the webhook a descriptive name.
    - **Payment Method Selection:**
        - Choose a specific payment method or select “All” for universal callbacks.
    - **Enter URL:**
        - Provide the callback URL where the event notifications will be sent.
    - **Select Event Triggers:**
        - Choose from a list of available events.
            - Note: Depending on the payment method, not all events may be available.
3. **Save Configuration:**
    - Click “Save” to store the webhook settings.

### Event Trigger Options

The available events include:

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

*Important Note:*

<aside>
🗒️

For purchase requests, if you set success and failure callback URLs directly in the request, they will override the ones configured in the dashboard. For payout events, callback URLs must be configured within the payout API itself and are not managed from the dashboard.

</aside>

*Suggested Image Placeholder: A flowchart or annotated screenshot showing the webhook configuration screen and event selection.*

---

## 6. Public Key

The public key plays a crucial role in verifying the hash signature used to decrypt payload responses.

![Description](/img/Screenshot_2025-05-16_at_5.48.18_PM.png)

### How It Works

- **Purpose:**
    - The public key is used to decrypt the response payload and verify its integrity.

### Configuration

- **Access:**
    - The public key is displayed in the “Public Key” section of the dashboard.
- **Usage in Transactions:**
    - It must be used in conjunction with the corresponding private key to validate that the data received from <CompanyName/> is untampered.

*Suggested Image Placeholder: Diagram illustrating the encryption/decryption process using the public key.*

---

## 7. Settings

The Settings module allows merchants to fine-tune parameters for specific payment methods.

![Description](/img/Screenshot_2025-05-16_at_5.49.42_PM.png)

### Transaction Expiry Settings

- **Purpose:**
    - Set the expiry minutes for APMs (Alternative Payment Methods) that support an expiry configuration.
- **How It Works:**
    - The `purchase.expireInMin` parameter can be passed in the API request.
        - If provided, this parameter takes precedence over the dashboard’s default settings.
    - **Functionality:**
        - Defines the time window within which a customer must complete an Interac payment.
        - If the customer fails to complete payment within the configured window, the transaction status is automatically set to **EXPIRED**.

### Considerations and Best Practices

- **Potential Inconsistencies:**
    - In some cases, a payment made after the expiry window might still succeed (e.g., if the customer’s bank processes the payment later), leading to discrepancies.
- **Recommendations:**
    - Set an appropriate expiry time and communicate clearly to customers the required payment window.
    - In the event of inconsistencies between <CompanyName/>’s records and the customer’s bank, reconciliation is performed during settlement.