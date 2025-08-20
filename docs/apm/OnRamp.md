# OnRamp

## Overview

Paysecure provides a user-friendly, direct integration with Quickbit wallet where users can purchase and manage their crypto funds easily. Integrating this interface into your payment process is a straightforward process, requiring just a few simple steps.

We continuously work on improving the integration flow, and as we roll out updates, both customers and merchants can look forward to an enhanced and improved payment experience.

## Integration Flow

**Step 1**

The first call to the PaySecure API is `POST /purchases/` initiated by the merchant's backend when they receive a request from the user to make a QuickBit purchase.

It's essential to ensure that the request body includes:

- success_redirect - URL where the user will be redirected from Quickbit after completing the purchase
- failure_redirect - URL where the user will be redirected from Quickbit if the purchase fails
- paymentMethod - Payment method requested. It must specify QBPAYFTOPUP.

> It is important to note that paymentMethod is not a mandatory parameter. If it is not provided, the redirect URL will point to Paysecure Cashier. It must be provided for direct payment with Quickbit.
> 

**Step 2**

Once the customer is redirected to the `checkout_url` where user will go through a hosted flow depending on the user's country. For the users in Sweden, the page will look like this:

![](/img/onramp1.png)

For user's in other countries, the page will look following:

![](/img/onramp2.png)

On this page, new users will have to verify their identity and existing users will be prompted to log in.

**Step 3**

In the Quickbit app, the user will be requested to provide their payment details:

![](/img/onramp3.png)

Once the payment goes through, the user has to confirm sending the transaction to complete the process:

![](/img/onramp4.png)

Step 4

Depending on the outcome of the payment at Quickbit, the customer will be directed to the:

1. If the payment is successful - the URL specified in `success_redirect` that was provided in the initial `POST /purchases` request
2. If the payment is unsuccessful - the URL specified in `failure_redirect` that was provided in the initial `POST /purchases` request