# Utilities

Created: April 8, 2025 12:30 PM
Status: Not started
author: Akshaya S

## Utilities Module

This module provides account-level configuration options to manage key settings, including processing batch refunds, setting up conversion rates, and handling bank reconciliation.

1. conversion rates
2. bank whitelist 
3. merchant whitelist
4. search card
5. upload email list
6. error categories

---

### Conversion Rates

Configure your currency exchange settings on a pairwise basis in this section. The conversion rate you specify is used exclusively in the selected direction. **It does not apply in reverse.** Therefore, if you need to convert from the target currency back to the source currency, you must add a separate conversion pair.

You also have the option to apply a risk factor. This risk factor is added as a percentage markup on the converted rate to help manage market volatility. It is advised to review these rates on a regular basis to ensure they are up-to-date with current market conditions.

**To set a new conversion pair:**

1. **Click** on the **"Add Conversion Rate"** button.
2. **Select** the source currency (From Currency) and the target currency (To Currency).
3. **Enter** the conversion rate.
4. **Specify** the risk factor as a percentage markup.

![Screenshot 2025-06-04 at 3.44.34 PM.png](/img/Screenshot_2025-06-04_at_3.44.34_PM.png)

---

### **Bank Whitelist**

This feature allows the admin to whitelist a set of **card numbers** for a specific **bank**.

**How to Add a Card Whitelist:**

1. Click **“Add Whitelist”**.
2. Upload a CSV file containing the card numbers.
    
    *(A sample CSV file can be downloaded for reference.)*
    
3. Select the **bank** to which these cards should be whitelisted.
4. Upload the file to complete the whitelist setup.

![Screenshot 2025-06-04 at 4.54.55 PM.png](/img/Screenshot_2025-06-04_at_4.54.55_PM.png)

**Use Cases:**

- When creating a **new bank**, or updating an **existing bank**, you can enable the “Check Whitelist” option. Only whitelisted cards will be allowed through that bank.
- During **routing rule configuration**, rules can be tailored based on whitelisted card sets.

---

### **Merchant Whitelist**

This module allows admins to approve card whitelists uploaded by merchants at the **merchant level**.

- Merchants upload their card whitelist via the **merchant portal**.
- Admins must **review and approve** the uploaded list via the **admin portal**.

![Screenshot 2025-06-04 at 4.56.51 PM.png](/img/Screenshot_2025-06-04_at_4.56.51_PM.png)

**Use Case:**

Used for **rule-based routing**, where transactions are processed based on pre-approved card whitelists specific to a merchant.

---

### **Search Card**

This tool allows you to **search for any card number** to verify its whitelist status.

- The card may be **globally whitelisted** or **bank-specific**.
- This feature is mainly used for **operational support** and **debugging** purposes.

![Screenshot 2025-06-04 at 4.58.08 PM.png](/img/Screenshot_2025-06-04_at_4.58.08_PM.png)

---

### **Upload Email List**

This module enables admins to upload email addresses for **whitelisting or blacklisting**.

**How to Upload:**

1. Prepare a list of emails in **CSV or XLSX** format.
    
    *(A sample template is available for download.)*
    
2. Select whether to add the list to the **Whitelist** or **Blacklist**.
3. Click **Upload** to complete the process.

![Screenshot 2025-06-04 at 4.58.52 PM.png](/img/Screenshot_2025-06-04_at_4.58.52_PM.png)

**Use Case:**

Helpful for setting up **routing rules** based on customer email addresses.

---

### **Error Category**

This module allows admins to create and manage **custom error categories** by grouping relevant PaySecure error codes.

**How to Create a New Error Category:**

1. Click **“Add More Category”**.
2. Enter a **Category Name** and save it.
3. Map specific **PaySecure error codes** to the newly created category by selecting the codes, choosing the category, and clicking **“Add”**.

![Screenshot 2025-06-04 at 4.59.24 PM.png](/img/Screenshot_2025-06-04_at_4.59.24_PM.png)

**Use Case:**

Improves efficiency in configuring **routing** and **cascading rules** by grouping related errors under custom categories.