# Banks

Created: April 8, 2025 12:29 PM
Status: Done
author: Akshaya S

### Overview

The **Bank Menu** displays all the banks connected to your white-label merchant account. For each bank, you can view its name, activity status, and access options to see detailed bank information as well as the Merchant IDs or MIDs associated with each bank

![Screenshot 2025-04-08 at 12.43.34 PM.png](/img/Screenshot_2025-04-08_at_12.43.34_PM.png)

### Viewing Bank Details

- **Accessing Information:**
    
    Click on the **eye icon** next to any bank entry to view its detailed information.
    
- **On the Details Screen:**
    
    The Bank Details page provides comprehensive insights into the bank’s profile and settings.
    
    ![Screenshot 2025-04-08 at 12.45.09 PM.png](/img/Screenshot_2025-04-08_at_12.45.09_PM.png)
    

### Accessing and Managing MID Setups

- **Navigating to MIDs:**
    
    Click on the **bank icon** adjacent to the bank name to open the page showing the MID setup details for that bank.
    
    ![Screenshot 2025-04-08 at 12.47.09 PM.png](/img/Screenshot_2025-04-08_at_12.47.09_PM.png)
    
    ![Screenshot 2025-04-08 at 1.28.38 PM.png](/img/Screenshot_2025-04-08_at_1.28.38_PM.png)
    
- **MID Overview:**
    
    On this page, you can view current MID details and initiate the process to add new MIDs.
    
    ![Screenshot 2025-04-08 at 1.29.44 PM.png](/img/Screenshot_2025-04-08_at_1.29.44_PM.png)
    

### Adding a New MID

1. **Start the Process:**
    
    Click on the **"Add MID"** button to launch the new MID entry form.
    
2. **Fill Out the MID Form:**
    
    Provide the following details:
    
    - **MID Name:** Enter the descriptive name for the MID.
    - **MID Number:** Input the unique identification number for the MID.
    - **AUTH Key:** Add the authorization key.
    - **Allowed Currencies:**
        
        Select one or more currencies that this MID will accept.
        
        *Tip:* If you wish to process transactions in a single currency despite accepting multiple currencies, check the “Currency Conversion” option and choose the final payment currency. (Conversion rates can be configured under the Utilities menu.)
        
    - **Allowed Cards:**
        
        Choose the accepted card types (e.g., VISA, MasterCard).
        
    - **2D Transactions Only:**
        
        Specify if the MID is limited to 2D transactions.
        
    - **External 3DS Service:**
        
        Indicate whether an external 3D Secure (3DS) service is allowed.
        
    - **Chargeback Optimization:**
        
        Enable or disable chargeback optimization as required.
        
    - **Redirect URL (Optional):**
        
        If applicable, provide a URL to which users are redirected post-transaction.
        
    - **Descriptor (Optional):**
        
        Enter a descriptor for transaction statements.
        
    - **Public Key (Optional):**
        
        Supply the public key if needed.
        
3. **Submit the Form:**
    
    Click **Submit** to save the new MID setup.
    

### Finalizing Setup

Once your MID is configured and submitted, you can immediately start routing transactions through the newly added MID.