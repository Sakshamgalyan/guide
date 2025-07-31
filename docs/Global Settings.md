import { CompanyName } from '@site/src/components/EnvVars';

### Overview

This module allows you to configure various global options that affect all your accounts, including transaction limits, error handling, and cascading rules. The available settings are:

1. Global MID Limits
2. Admin Settings
3. Error Code Mapping
4. Error Code Action
5. Cascading Rules
6. BinCategory
7. Throttling settings

---

### 1. Global MID Limits

In this section, you can set overall transaction limits that apply across all MIDs for a customer. These settings allow you to establish limits based on transactions and amount on an hourly, daily, weekly, or monthly basis.

> Note: If individual limits have been configured in the MID Settings module, those settings will override the global limits.
> 

![Screenshot 2025-05-19 at 5.18.14 PM.png](/img/Screenshot_2025-05-19_at_5.18.14_PM.png)

---

### 2. Admin Settings

Configure key administrative parameters that govern transaction handling time:

- **Overdue Transactions:**
    
    Set the number of hours after which a transaction’s status automatically changes to overdue.
    
- **Expired Transactions:**
    
    Define the number of days after which a transaction is considered expired.
    

Additionally, you can view test card information along with their associated test CVC values for system validation.

![Screenshot 2025-05-19 at 5.20.19 PM.png](/img/Screenshot_2025-05-19_at_5.20.19_PM.png)

---

### 3. Error Code Mapping

This section allows you to map error codes received from banks or payment processors to predefined <CompanyName/> error codes. You can also create your own custom error codes if needed. A single <CompanyName/> error code can be associated with multiple processor error codes.

**Mapping Process:**

1. **Select the Bank:** Choose the bank from which the error originates.
2. **Choose a <CompanyName/> Error Code:**
    - Pick an error code from the dropdown list.
    - If the error code is not already available, you can create a new one.
3. **Map Processor Error Codes:** Select the processor error codes that correspond to the chosen <CompanyName/> error code.
4. **Finalize Mapping:** Click the **Map** button to complete the configuration.

**To create a new <CompanyName/> error code:**

- Click on the **Add More** button.
- Type the new error code.
- Click **Save** or **Cancel** to confirm or discard the new entry.

![Screenshot 2025-05-19 at 5.21.05 PM.png](/img/Screenshot_2025-05-19_at_5.21.05_PM.png)

---

### 4. Error Code Action

This feature lets you automate the handling of errors received from processors by performing predefined actions. When an error occurs, the system will initiate the associated action based on your settings.

**Steps to Configure an Error Action:**

1. **Select the Error Code:** Choose the <CompanyName/> error code for which you want to define an action.
2. **Define the Action:** Choose the specific action to be executed when the error occurs.
3. **Set the Duration:** Specify how long the action should be active (in minutes, hours, or days).
4. **Compose a Block Message:** Enter a message that will be shown when the action is triggered.
5. **Save the Configuration:** Click **Save** to apply your settings.

![Screenshot 2025-05-19 at 5.21.40 PM.png](/img/Screenshot_2025-05-19_at_5.21.40_PM.png)

---

### **5. Cascading Rules**

**Cascading rules** are designed to improve transaction success rates by automatically rerouting failed transactions to alternative banks or processors.

If a transaction fails due to specific error codes returned by a bank, cascading rules allow the system to forward the transaction to another bank that may successfully process it. This significantly enhances overall approval rates.

### **How to Configure Cascading Rules:**

1. Select the bank from the **dropdown menu**.
2. For that bank, choose the specific **processor error codes** that should trigger a cascade.
3. Assign the **next bank** to which the transaction should be routed if the selected errors occur.

Cascading rules operate on a **per-bank** basis, and each rule defines how to handle particular failure scenarios for more resilient transaction processing.

![Screenshot 2025-05-19 at 5.23.08 PM.png](/img/Screenshot_2025-05-19_at_5.23.08_PM.png)

---

### **6. BIN Category Management**

The **BIN Category** module allows you to organize and manage BINs (Bank Identification Numbers) for various transaction purposes such as routing, blocking, and categorization.

### **To Add a New BIN Category:**

1. Click **“Add More Category”**.
2. Enter a name for the new BIN category.

### **To Add BINs to a Category:**

1. Select the newly created BIN category.
2. Enter the BIN number you want to associate.
3. Click **Add** to include it in the category.

BIN categories are crucial for implementing targeted transaction logic like BIN-based routing and restrictions.

![Screenshot 2025-05-19 at 5.29.41 PM.png](/img/Screenshot_2025-05-19_at_5.29.41_PM.png)

### 7. Throttling Settings

Throttling settings allow the merchants to set progressive transaction velocity on different BINs.

![Screenshot 2025-05-19 at 5.38.50 PM.png](/img/Screenshot_2025-05-19_at_5.38.50_PM.png)