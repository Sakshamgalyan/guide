# Rule Engine

**Rule Engine User Manual**

**Overview**

The Rule Engine in Paysecure enables users to create and manage rule categories, set priorities, and define transaction routing logic. It allows dynamic rule-based transaction routing to specific Banks/MIDs based on predefined conditions. The system supports priority-based rule execution and error-driven cascading, optimizing transaction success rates. Users can modify, activate, or deactivate rules, ensuring efficient and secure payment processing.

**Accessing the Rule Engine**

1. **Login** to the Paysecure dashboard at [https://app.paysecure.net/login](https://app.paysecure.net/login).
2. On the left-hand panel, navigate to **Rule Engine**.

![image.png](/img/reimage.png)

**Configuring Transaction Filters**

Users can select any bank and apply criteria such as:

- Minimum number of social site registrations (email-based verification).
- Allowed social sites.
- Whitelist checks.
- Minimum/maximum transaction amounts.
- Merchant permissions.

These filters define how the rule engine processes transactions.

![image.png](/img/reimage%201.png)

**Managing Rule Categories**

**Creating a Rule Category**

1. Click on **Rule Category** to create or review category priorities.
2. Click on the **Add** icon (top right-hand corner).
3. Enter the required details:
    - The **category name** (without spaces).
    - **Rule category type**, which associates the category with a specific cause.
    
    ![image.png](/img/reimage%202.png)
    
    ![image.png](/img/reimage%203.png)
    

**Setting Priorities**

- Use the **priority buttons** (red and green) to adjust the priority of a rule category.

![image.png](/img/reimage%204.png)

**Configuring Rule-Based Routing**

1. Navigate to **Rule-Based Routing**.
2. Use the **search bar** or select a rule category from the **Display by Rule Category** dropdown.
3. The displayed list will show all rules within the selected category.

![image.png](/img/reimage%205.png)

**Rule Details and Actions**

Each rule includes the following configurable options:

- **Rule Priority:** Displays the priority within the rule category.
- **Rule Name:** Editable via the **edit** icon.
- **Action Buttons:**
    - Edit or delete the rule.
    - Modify descriptors, rule categories, and rule tags.
    - Activate or deactivate rules.
    - Adjust rule priority.
    - Create a new rule using the **plus** icon.

**Defining Rule Conditions**

1. Click on the rule name to view details.
2. Under the **Conditions** section, specify transaction conditions that trigger rule actions.
3. Click the **add icon** (top right) to define new conditions.
4. Optionally, copy conditions from existing rules by selecting a rule from the top-right dropdown and clicking **Copy Rules**.

**Setting Rule Actions**

Based on the defined conditions, configure the rule’s action:

- **Reject the transaction** or
- **Route the transaction to a specific Bank/MID**:
    - Select the Bank/MID from the available list.
    - Define the **weightage** to determine traffic distribution.
- 

![image.png](/img/reimage%206.png)

![image.png](/img/reimage%207.png)

![image.png](/img/reimage%208.png)

**Cascading Logic**

- If a transaction fails, it can be rerouted based on error type.
- Cascading is applicable **only** between:
    - 2D to 2D MIDs.
    - 2D to 3D MIDs.
    - **Not supported from 3D to 2D/3D MIDs.**

**Managing Banks/MIDs**

- The **Bank/MID List** displays all active Banks/MIDs.
- Users can select:
    - **All MIDs**
    - **New MID (add manually)**
    - **Selected MIDs with weightage-based routing**

By configuring these settings, transactions will be directed to MIDs with higher weightage, optimizing approval rates.