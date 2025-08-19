# Environments

These are the BaseUrl for the APIs on different environments:

| **Environment** | **Base URL** |
| --- | --- |
| **Production & Sandbox** | [https://api.paysecure.net/api/v1](https://api.paysecure.net/api/v1/) |

<aside>

**Note:** Set the Sandbox flag true (checked) in your merchant account, as shown in the image below

</aside>

## **Authentication**

---

To access the API, you must acquire your unique API key from the merchant dashboard -> API Keys section in your account. Make sure to use this key as a **bearer token** in the Authorization header for every request you send.

`AUTHORIZATION: Bearer Token`

`Token: {{APIKey}}`

Access your sandbox API key credentials by navigating to your merchant login and checking the **'is sandbox'** option, located in the top right corner under merchant profile.

[](https://content.pstmn.io/dfe64a66-8699-45c8-9f10-b00f7df380b7/U2NyZWVuc2hvdCAyMDIzLTA5LTE1IGF0IDE2LjU2LjQyLnBuZw==)

To get to the live API key, uncheck the **'Is Sandbox'** option in the top right corner of your merchant dashboard. After unchecking, the page will refresh, and you can generate an API key for live transactions in this environment."

[](https://content.pstmn.io/afa2574d-8438-4a63-9b29-81feb0f755e5/U2NyZWVuc2hvdCAyMDIzLTA5LTE1IGF0IDE3LjE0LjI4LnBuZw==)

Reiterating, the API keys in Sandbox mode are for testing (when 'is sandbox' is CHECKED in the top right corner under merchant profile). The live API key credentials are for processing actual card transactions in Live mode (when 'is sandbox' is UNCHECKED in the same location)

## **Headers**

---

Please specify the following headers in each of the API calls.

- `Content-Type: application/json`
- `Authorization: Bearer {{Merchant API Key}}`
- `BrandID: {{Merchant Brand ID}}` (Optional: only relevant for the Session APIs)