# Reports and Analytics

Created: March 19, 2025 12:11 PM
Status: Not started
author: Akshaya S

## **Introduction**

PaySecure offers a robust and feature-rich **Reporting & Analytics** suite that empowers merchants with real-time visibility and data-driven insights into their business performance.

Designed to support **business, operations, and finance teams**, this module provides in-depth reporting on transactions, system activity, customer behavior, and payment success trends—enabling smarter decisions, streamlined operations, and improved approval rates.

- The **Reporting Module** helps merchants monitor transactions, view API and error logs, and generate downloadable reports for reconciliation and audits.
- The **Analytics Module** offers visual dashboards and metrics covering success rates, customer behavior, merchant performance, and risk trends.

---

## **Reports**

The following reports are available under the **Reports** section:

---

### **Transactions Report**

View a comprehensive list of transactions with advanced filtering options:

- Filter by **Date/Time Range**, **Bank Name**, **Merchant Name**, **Transaction Status**, and **Currency**
- Search transactions using **Purchase ID** or **Merchant Reference**
- Export or review data for tracking, analysis, or support

![Screenshot 2025-06-04 at 5.13.40 PM.png](/img/Screenshot_2025-06-04_at_5.13.40_PM.png)

---

### **Download Reports**

Generate and export customized reports based on filters such as:

- **Date and Time**
- **Bank**
- **MID (Merchant ID)**
- **Payment Status**
- **Payment ID**

These reports are useful for:

- **Transaction tracking**
- **Daily or periodic reconciliation**
- **Internal audits and compliance**

---

### **Error Logs**

Monitor and review transaction errors across merchants:

- Filter by **Time Range**, **Merchant Name**, **Purchase ID**, or **Merchant Reference**
- Useful for identifying patterns and improving routing or cascading rules

![Screenshot 2025-06-04 at 5.47.35 PM.png](/img/Screenshot_2025-06-04_at_5.47.35_PM.png)

---

### **Audit Logs**

Track system-level activity to maintain transparency and security:

- Filter by **Username**, **Action Type**, and **User Role**
- Provides a record of administrative actions and system changes

![Screenshot 2025-06-04 at 5.48.06 PM.png](/img/Screenshot_2025-06-04_at_5.48.06_PM.png)

---

## **Analytics**

- **Analytics Reporting**
- **Comparison Graph**
- **Success Rate Analysis**
- **Error Summary**
- **Merchant Transaction Summary**
- **Customer Summary**
- **Merchant Analytics**
- **Merchant GeoChart (only for whitelable and Admin)**
- **Sensitivity Report (only for whitelable merchant and Admin)**
- **Approval Band Report (only for whitelable merchant and Admin)**
- **Best Approval Conditions (only for whitelable merchant and Admin)**
- **Merchant Quality Index (only for whitelable and Admin)**
- **Trends & Forecasting**

---

In the following sections, we will explore each module in detail, discussing the insights these reports provide and **best practices** for leveraging analytics to enhance business decisions.

## Analytics Reporting

This is an advanced reporting module that offers the merchant the flexibility to generate detailed reports with advanced filters.

**Available Filters**

Currency

Amount Range

Transaction Status

Date Range

As per the above filters, the merchant can group these reports by following parameters:

### Group by

| **Field** | **Description** |
| --- | --- |
| `accept_header` | Headers in Paysecure API calls; can be filtered by bank and/or currency. |
| `Accept_language` | Language preference of the user’s browser or device. |
| `Amount_in_USD` | Transaction amount converted into USD. |
| `Bankname` | Name of the bank handling the transaction. |
| `Bankmid` | Merchant Identification Number (MID) assigned by the bank. |
| `BinCCode` | Country code associated with the BIN (Bank Identification Number). |
| `BinNumber` | First 6–8 digits of the card number used to identify the issuing bank. |
| `BrandName` | Brand name of the merchant or service provider. |
| `Browser` | Browser type used for the transaction (e.g., Chrome, Firefox). |
| `BrowserVersion` | Version of the browser being used. |
| `CardBrand` | The card network (e.g., Visa, Mastercard, AMEX). |
| `Cascade_Num` | Routing sequence number in case of multiple transaction attempts. |
| `CheckOutTemplate` | Template used for rendering the checkout page. |
| `ColourDepth` | Number of bits used to represent color on the user’s screen. |
| `Country` | Country where the transaction originates. |
| `Currency` | Currency in which the transaction is processed. |
| `Day` | Day of the month when the transaction occurred. |
| `DayInYear` | Transaction day as a number within the year (1–365/366). |
| `Dayname` | Name of the day (e.g., Monday, Tuesday). |
| `DebitOrcredit` | Specifies whether the card used is **debit** or **credit**. |
| `Descriptor` | Transaction description that appears on the customer's statement. |
| `ErrorMsg` | Error message returned in case of failed transactions. |
| `FraudScore` | Risk assessment score for detecting fraudulent transactions. |
| `Hour` | Hour (24-hour format) when the transaction took place. |
| `IpAddress` | IP address of the user making the transaction. |
| `IsIframe` | Indicates if the transaction is happening within an embedded **iframe**. |
| `IsJavaEnabled` | Specifies whether Java is enabled on the user's browser. |
| `IsJavaScriptEnabled` | Specifies whether JavaScript is enabled on the user's browser. |
| `IsS2s` | Indicates if the transaction is processed **Server-to-Server (S2S)**. |
| `LastAction` | Last recorded action in the transaction process. |
| `MaskedNumber` | Masked version of the card number (e.g., 5200******0015). |
| `MerchantName` | Name of the merchant processing the payment. |
| `Month` | Month when the transaction occurred. |
| `Os` | Operating system used by the user (e.g., Windows, macOS, Android). |
| `Otp` | One-Time Password used for authentication. |
| `PaySecureDeviceId` | Unique device identifier for Paysecure transactions. |
| `PixelDepth` | Pixel depth of the user’s screen. |
| `ProfileId` | Unique identifier for the user profile making the transaction. |
| `Referer` | URL of the referring website before initiating the transaction. |
| `RequestIpCCode` | Country code of the IP address making the request. |
| `RuleCategoryName` | Category under which a specific transaction rule is applied. |
| `RuleName` | Name of the applied rule. |
| `RuleTagName` | Tags associated with the applied rule. |
| `ScreenHeight` | Height of the user’s screen in pixels. |
| `ScreenWidht` | Width of the user’s screen in pixels. |
| `TrustScore` | Trustworthiness score of the transaction based on risk analysis. |
| `TwoDPayment` | Specifies whether the transaction is a **2D Secure** payment. |
| `UserCookie` | Cookie data related to the user’s session. |
| `UserDetail` | Additional details about the user. |
| `UserDeviceId` | Unique device identifier assigned to the user. |
| `Utc_offset` | UTC time zone offset of the user. |
| `WeekInMonth` | Specifies the week number within the month. |
| `WeekInYear` | Specifies the week number within the year. |
| `Year` | Year when the transaction occurred. |

### **Comparison Graph**

This interactive graph allows merchants to **visually compare transaction trends** across different dimensions.

**Use Cases:**

- Identify seasonal peaks and dips in transaction activity
- Compare volume trends across different months or years
- Track performance by currency or payment status

**Filters:**

- Transaction Metric: **Count** or **Amount**
- Time Range: **Yearly**, **Monthly**, **Weekly**
- **Payment Status**, **Merchant**, **Currency**

![Screenshot 2025-06-06 at 4.47.45 PM.png](/img/Screenshot_2025-06-06_at_4.47.45_PM.png)

![Screenshot 2025-06-06 at 4.48.33 PM.png](/img/Screenshot_2025-06-06_at_4.48.33_PM.png)

---

### **Success Rate Analysis**

Provides a summary of transaction outcomes—**Approved**, **Rejected**, **Pending**—within a defined timeframe.

**Use Cases:**

- Evaluate overall performance and approval rate trends
- Identify drop-offs in specific currencies or merchant flows
- Optimize processing based on success rates

**Filters:**

- Metric: **Transaction Count** or **Amount**
- **Merchant**
- **Currency**

![Screenshot 2025-06-06 at 4.49.16 PM.png](/img/Screenshot_2025-06-06_at_4.49.16_PM.png)

---

### **Error Summary**

Displays the most frequent **error codes** encountered, grouped by volume and occurrence.

**Use Cases:**

- Diagnose technical failures or declines from banks/processors
- Improve routing or cascading by targeting problematic error codes
- Collaborate with PSPs to reduce decline reasons

**Filters:**

- **Date Range**
- **Merchant**
- **Bank**

![Screenshot 2025-06-06 at 4.49.51 PM.png](/img/Screenshot_2025-06-06_at_4.49.51_PM.png)

---

### **Merchant Transaction Summary**

Shows how transactions are distributed across different **status codes** such as Paid, Failed, Cancelled, etc.

**Use Cases:**

- Understand the transaction lifecycle breakdown
- Quickly detect unusual failure spikes or abandonments
- Measure retry and reversal rates

**Filters:**

- **Merchant**
- **Bank**
- **Currency**
- **Date/Time Range**

![Screenshot 2025-06-06 at 4.51.22 PM.png](/img/Screenshot_2025-06-06_at_4.51.22_PM.png)

---

### **Customer Summary**

Tracks transactions at the **customer level**, with visibility into behavior, device usage, and geographic activity.

**Use Cases:**

- Identify loyal or high-value customers
- Track suspicious customers/devices by failure rates
- Segment users for targeted campaigns or risk filters

**Grouping Options:**

- **Customer Email**
- **Customer Type**
- **Device Type** (if device data is captured)

**Filters:**

- **Transaction Status**
- **Country**
- **Merchant**

![Screenshot 2025-06-06 at 4.54.05 PM.png](/img/Screenshot_2025-06-06_at_4.54.05_PM.png)

---

### **Merchant Analytics**

A complete overview of **merchant performance**, combining volume, value, and approval metrics in one place.

**Use Cases:**

- Benchmark merchants based on approval rates and volume
- Evaluate revenue contribution and risk exposure
- Compare merchants under the same white-label account

**Metrics Displayed:**

- Total Paid Transactions
- Total Approved Value
- Approval Rate
- Status-Wise Breakdown (by Count and Amount)

**Filters:**

- **Time Range**: Current Year or Current Month
- **Merchant**
- **Currency**

![Screenshot 2025-06-06 at 5.16.16 PM.png](/img/Screenshot_2025-06-06_at_5.16.16_PM.png)

![Screenshot 2025-06-06 at 5.15.59 PM.png](/img/Screenshot_2025-06-06_at_5.15.59_PM.png)

---

### **Merchant GeoChart**

An interactive heatmap showing **global transaction distribution**.

**Use Cases:**

- Visualize cross-border performance
- Identify strong markets and underperforming regions
- Monitor activity by geographic zone (e.g., EU, GCC, Africa)

**Filters:**

- **Date Range**
- **Continent**
- **Merchant**
- **Currency**
- **Status**

![Screenshot 2025-06-06 at 5.30.13 PM.png](/img/Screenshot_2025-06-06_at_5.30.13_PM.png)

---

### **Sensitivity Report**

This diagnostic report shows how frequently a **merchant (or customer email)** sends transactions to the same **Bank/MID**in a short time frame (e.g., within 5 minutes).

**Use Cases:**

- Detect automated or abusive retry behavior
- Enforce throttling rules
- Identify fraud patterns based on frequency

**Filters:**

- **Merchant**
- **Bank**
- **Currency**
- **Time Interval (in minutes)**

![Screenshot 2025-06-06 at 5.31.08 PM.png](/img/Screenshot_2025-06-06_at_5.31.08_PM.png)

---

### **Approval Band Report**

Breaks down merchant or bank performance into **approval rate bands** (e.g., 90–100%, 70–89%, etc.).

**Use Cases:**

- Classify banks or merchants based on reliability
- Flag underperforming banks for optimization
- Define rule-based escalation or rerouting logic

**Filters:**

- **Merchant**
- **Bank**
- **Currency**

![Screenshot 2025-06-06 at 5.32.06 PM.png](/img/Screenshot_2025-06-06_at_5.32.06_PM.png)

---

### **Best Approval Conditions**

Identifies combinations of parameters that result in **the best approval rates**.

**Use Cases:**

- Build intelligent routing rules based on data
- Discover the ideal conditions (e.g., card brand + browser + IP) that yield highest success
- Identify high-risk patterns (low approval + high chargeback)

**Filters:**

- **Routing Rule**
- **Currency**
- **Payment Method**
- **Merchant**
- **Bank**, **Bank MID**
- **Transaction Status**

**Additional Filter Dimensions:**

- **Merchant Name**
- **Request IP Country Code**
- **BIN Number**
- **Trust Score**
- **Card Brand**
- **Browser**
- **Referer**
- **Currency**
- **Email ID**

![Screenshot 2025-06-06 at 5.32.44 PM.png](/img/Screenshot_2025-06-06_at_5.32.44_PM.png)

---

### **Merchant Quality Index** *(Coming Soon)*

---

### **Trends and Forecasts**

Predicts future transaction behavior based on historical trends.

**Features:**

- **Projected Transaction Count** and **Amount** for the current month
- **Daily Run Rate** (based on current month activity)
- Graphs for **daily**, **weekly**, and **monthly** insights

**Use Cases:**

- Forecast month-end volumes for cash flow planning
- Track growth trajectory in real-time
- Align marketing or sales efforts with volume surges

**Grouping Options:**

- **By Merchant**
- **By Bank**

**Filters:**

- **Merchant**
- **Bank**
- **Currency**
- **Transaction Status**

![Screenshot 2025-06-06 at 5.35.01 PM.png](/img/Screenshot_2025-06-06_at_5.35.01_PM.png)

![Screenshot 2025-06-06 at 5.35.11 PM.png](/img/Screenshot_2025-06-06_at_5.35.11_PM.png)