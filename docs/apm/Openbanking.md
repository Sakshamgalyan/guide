# Openbanking

### **Overview**

**Third-Party Net Banking** refers to the integration with local bank transfer systems in specific countries, enabling users to make payments directly from their bank accounts through a secure and trusted interface. This is particularly useful for regions where direct bank transfers are a preferred payment method over cards or other APMs.

Paysecure leverages third-party net banking to facilitate transactions for different regions, enabling businesses to access localized payment options without the complexity of managing individual bank integrations. Each third-party service is tailored to the specific financial infrastructure of the country or region, ensuring compliance, security, and ease of use.

### **Key Benefits of Third-Party Net Banking**:

- **Localized Payment Options**: Supports region-specific payment methods, giving customers familiar and trusted ways to pay.
- **Secure Transactions**: Payments are processed directly through the customer’s bank, enhancing trust and security.
- **Real-Time Verification**: Enables real-time confirmation of payments, reducing risks and improving cash flow.
- **Compliance**: Adheres to local and international regulatory standards like PSD2 for Europe, ensuring that payments are secure and compliant.

This setup allows Paysecure to offer a diverse range of **Bank Transfer** options to its global clientele, catering to the specific needs of different regions while maintaining a consistent and secure payment experience.

**Step 1:**

Create a purchase using `POST /purchases/` API to create a transaction in the system. make sure to meet all the required criteria, which include defining `success_redirect` and `failure_redirect` fields for the Purchase and setting them to valid URLs

**Step 2:**

The customer is redirected to the `checkout_url` page, configured to point to their net banking system.

**Step 3:**

Once the payment is initiated from the net banking site, the user will be redirected to the appropriate redirect URL.

## Secure EFT (South Africa)

### Overview

EFT (Electronic Funds Transfer) is a secure and efficient method of processing online payments in South Africa. It allows customers to make instant payments directly from their bank accounts without using a credit card. EFT leverages the existing online banking infrastructure to facilitate quick and secure transactions, making it a popular choice for consumers and merchants.

### Key Features of EFT

- **Instant Payment Confirmation**: Transactions are processed and confirmed immediately, allowing for real-time payment updates.
- **Secure Transactions**: Uses bank-level security measures to ensure the safety of customer data.
- **Broad Bank Support**: It supports many South African banks, ensuring broad accessibility.
- **User-Friendly**: The payment process is simple and intuitive, providing a seamless experience for users.

### Payment Transaction Flow

**Step 1: Initiating the Payment**

1. **Customer Selects 'Net Bankin' Payment Option**: At the checkout page, the customer selects 'Net Banking' as their preferred payment method.
2. **Merchant Redirects to EFT Gateway**: The merchant's website or application redirects the customer to the EFT payment gateway.

**Step 2: Redirect to Bank Login**

1. **Customer Selects Their Bank**: The customer selects their bank from the list of supported banks on the EFT gateway.
2. **Customer is Redirected to Bank Login Page**: Platform securely redirects customers to their bank’s online banking login page.

**Step 3: Logging into Online Banking**

1. **Customer Logs In** The customer logs into their online banking account using their credentials.
2. **Secure Session**: The login session is safe, and the customer’s banking credentials are not shared with the EFT gateway or the merchant.

**Step 4: Confirming the Payment**

1. **Payment Details**: The customer reviews the pre-filled payment details, including the amount and beneficiary information.
2. **Authorise Payment**: The customer authorises the payment using their bank’s authentication method (e.g., OTP, password).

**Step 5: Payment Processing and Confirmation**

1. **Bank Processes Payment**: The customer’s bank processes the payment and debits the amount from the customer’s account.
2. **Instant Confirmation to the EFT gateway**: Once the payment is processed, the bank sends an instant confirmation to the EFT gateway.

**Step 6: Notification to Merchant**

1. **EFT Gateway Confirms Payment to Merchant**: EFT gateway immediately notifies the merchant of the successful payment.
2. **Order Completion**: The merchant completes and confirms the order to the customer.

**Step 7: Customer Redirect**

1. **Redirect to Merchant’s Site**: After confirming the payment, the customer is redirected back to the merchant’s website.
2. **Payment Confirmation Page**: The merchant’s website displays a payment confirmation page to the customer.

## Openbanking (EUR and UK)

### Overview

Paysecure leverages its OpenBanking network across Europe and UK to make secure and fast payments, making top choice for customers in respective regions. It allows customers to pay in EUR or GBP via Paysecure Gateway, directly thru their bank account

Paysecure Gateway is a web page that handles all the user interaction during a payment initiation process:

- user credentials input
- interactive confirmation
- progress reporting
- error reporting

After your application has received an URL for executing a payment using Paysecure, you can redirect your end-user to it. There, they will see a screen that lets them pick a provider to execute a payment.

Your user will also be asked to input credentials and, if needed, any of the interactive credentials. After the process is done, the user will be redirected back to your application URL

### **Payin User Flow**

**Step 1: Initiating the Payment**

- **Customer Selects 'Net Banking' Payment Option**: At the checkout page, the customer selects 'Net Banking' as their preferred payment method.
- **Merchant Redirects to openbanking Gateway**: The merchant's website or application redirects the customer to a hosted page.

**Step 2: Redirect to Bank Login**

- **Customer Selects Their Bank**: The customer selects the provider/bank from the list of supported providers/banks on the Paysecure Gateway
- **Customer is Redirected to Bank Login Page**: Platform securely redirects customers to their bank’s online banking login page.

**Step 3: Logging into Online Banking**

- **Customer Logs In** The customer logs into their online banking account using their credentials.
- **Secure Session**: The login session is safe, and the customer’s banking credentials are not shared with the SaltEdge or the merchant.

**Step 4: Confirming the Payment**

- **Payment Details**: The customer reviews the pre-filled payment details, including the amount and beneficiary information.
- **Authorise Payment**: The customer authorises the payment using their bank’s authentication method (e.g., OTP, password).

**Step 5: Payment Processing and Confirmation**

- **Bank Processes Payment**: The customer’s bank processes the payment and debits the amount from the customer’s account.
- **Instant Confirmation to the Paysecure gateway**: Once the payment is processed, payment confirmation is received through a webhook url

**Step 6: Notification to Merchant**

- **Paysecure Confirms Payment to Merchant**: Paysecure gateway immediately notifies the merchant of the successful payment.
- **Order Completion**: The merchant completes and confirms the order to the customer.

**Step 7: Customer Redirect**

- **Redirect to Merchant’s Site**: After confirming the payment, the customer is redirected back to the merchant’s website.
- **Payment Confirmation Page**: The merchant’s website displays a payment confirmation page to the customer.