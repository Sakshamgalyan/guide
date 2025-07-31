---
title: Authentication
sidebar_position: 4
---

# Authentication

To access the API, you must acquire your unique API key from the merchant dashboard -> API Keys section in your account. Make sure to use this key as a bearer token in the Authorization header for every request you send.

Access your sandbox API key credentials by navigating to your merchant login and checking the 'is sandbox' option, located in the top right corner under merchant profile.

<div >

`AUTHORIZATION: Bearer Token`  

</div>

<div>

`Token: {{APIKey}}`
</div>

![Description](/img/authimage1.png)

To get to the live API key, uncheck the 'Is Sandbox' option in the top right corner of your merchant dashboard. After unchecking, the page will refresh, and you can generate an API key for live transactions in this environment.

![Description](/img/authimage2.png)

Reiterating, the API keys in Sandbox mode are for testing (when 'is sandbox' is CHECKED in the top right corner under merchant profile). The live API key credentials are for processing actual card transactions in Live mode (when 'is sandbox' is UNCHECKED in the same location)