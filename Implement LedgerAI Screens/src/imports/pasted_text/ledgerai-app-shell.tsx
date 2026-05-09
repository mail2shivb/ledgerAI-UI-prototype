Create a brand-new premium FlutterFlow mobile app prototype called **LedgerAI**.

Internal project name: **MySmartAdmin**.
User-facing app name: **LedgerAI**.

This is a **secure, privacy-first personal life-admin vault** for important documents, bills, policies, subscriptions, assets, warranties, tasks, reminders, renewals, vehicle records, property records, work/tax records, family/shared responsibilities, emergency documents, backup/export packs, and life-admin reports.

This app is **not** a banking app, not an investment app, not a budgeting app, not only a receipt scanner, not a chat app, and not a generic CRUD admin panel.

Use a **Slack-style mobile layout pattern** for main content:

* Large purple header
* Big rounded search bar
* Rounded white content sheet
* Horizontal category carousel
* Filter chips
* Compact list rows
* Prominent + button
* Fixed bottom toolbar

Do **not** copy Slack visually. Use the layout idea only and adapt it into a secure life-admin vault.

---

# VERY IMPORTANT PAGE GENERATION REQUIREMENT

You must create **all pages listed in this prompt**.

Do **not** generate only a few pages.
Do **not** stop after auth pages.
Do **not** stop after Home/Vault/AddRecord.
Do **not** skip authentication, MFA, recovery, tasks, reports, family admin, version history, backup/export, review queue, emergency pack, settings, or permission/error states.

If a page cannot be fully detailed, still create a clean placeholder screen with:

* Correct page name
* Correct title
* Correct subtitle
* Correct section cards
* Correct navigation target idea
* Matching LedgerAI design system

Use the exact page names provided below.

---

# VISUAL DESIGN — LIGHT ELEGANT PURPLE

Use a **lighter elegant purple/lavender design**, not dark heavy purple.

Main background:

`#FBF9FF`

Content sheet / main card:

`#FFFFFF`

Soft lavender surface:

`#F7F2FF`

Pale lavender:

`#F3ECFF`

Soft purple border:

`#E3D6FF`

Main action purple:

`#8B5CF6`

Primary purple:

`#9D4EDD`

Royal purple:

`#7C3AED`

Deep purple:

`#5B21B6`

Soft plum header:

`#5B1B73`

Dark plum/navy text:

`#1E1233`

Secondary text:

`#6B5A7A`

Muted text:

`#9485A6`

Divider:

`#ECE3F8`

Success green only for success:

`#2FBF71`

Warning amber:

`#F5A623`

Urgent/error coral:

`#EF5B5B`

Info blue:

`#3B82F6`

Header gradient:

`#5B1B73` → `#7B2CBF` → `#9D4EDD`

Use purple/lavender for branding.
Use green only for success states, not as the main colour.
Avoid teal/green main branding.
Avoid neon purple.
Avoid dark purple everywhere.
Avoid dull grey background.

Typography:

Use Inter, Manrope, Plus Jakarta Sans, or SF Pro style.

Use:

* Large bold page titles
* Clear section headers
* Compact readable list rows
* Deep plum/navy text
* Muted purple-grey secondary text

---

# FIXED BOTTOM TOOLBAR REQUIREMENT

The bottom toolbar must **not be floating**.

Use a **fixed bottom navigation bar attached to the bottom of the screen**.

Bottom navigation must have exactly 5 tabs:

1. Home
2. Vault
3. Add
4. Reminders
5. Reports

Requirements:

* Fixed at bottom
* Not floating above content
* Not a detached pill
* Not covering list content
* Clean white or very light lavender background
* Thin top border or soft shadow
* Active tab purple
* Inactive tabs muted purple-grey
* Centre Add button can be slightly emphasized but must remain part of the fixed toolbar
* Add button opens AddActionSheet, not direct AddRecord

---

# APP SHELL / NAVIGATION

Create reusable app shell:

* Fixed bottom navigation
* Header area
* Search bar where needed
* Consistent page padding
* Consistent card styling
* Add button opens action sheet

The main authenticated app pages using bottom navigation:

* HomeDashboard
* VaultExplorer
* AddActionSheet
* RemindersTasks
* Reports

Other pages can be pushed from these pages.

---

# ADD ACTION SHEET

Create page/component: **AddActionSheet**

When user taps + from bottom toolbar, show a premium iOS-style bottom sheet.

Do not say “Scan receipt”.

Title:

**What would you like to add?**

Subtitle:

**Scan, upload, or create a record manually.**

Options:

1. **Scan Document**
   Capture and extract details from a document

2. **Take a Picture**
   Photograph a document, bill, policy, warranty, or task paperwork

3. **Choose from Library**
   Select an image from photos

4. **Import from Files**
   Add PDF, image, checklist, or saved document

5. **Add Manually**
   Enter details without uploading anything

6. **Add Reminder**
   Create renewal, expiry, bill, review, or follow-up reminder

7. **Add Task**
   Create personal, household, work, or shared task

8. **Add Shared Item**
   Family bill, trip cost, responsibility, shared task, or shared record

9. **Cancel**

Design:

* White bottom sheet
* Rounded top corners
* Drag handle
* Lavender icon tiles
* Purple icons
* Compact rows
* Subtitles
* Cancel action

Routing:

* Scan Document → AddRecord
* Take a Picture → AddRecord
* Choose from Library → AddRecord
* Import from Files → AddRecord
* Add Manually → AddRecord
* Add Reminder → AddReminder
* Add Task → AddTask
* Add Shared Item → AddSharedItem

---

# COMPLETE PAGE LIST — CREATE ALL

Create every page below. Use exact names.

## A. Authentication and security pages

1. **SplashScreen**
2. **Onboarding**
3. **AuthChoice**
4. **SignIn**
5. **CreateAccount**
6. **EmailVerification**
7. **MobileVerification**
8. **MFASetup**
9. **MFAVerification**
10. **BiometricUnlock**
11. **VaultUnlock**
12. **RecoveryKeySetup**
13. **BackupCodes**
14. **ForgotPassword**
15. **ResetPassword**
16. **TrustedDeviceConfirmation**
17. **SessionLocked**
18. **SecuritySettings**

## B. Main app pages

19. **HomeDashboard**
20. **VaultExplorer**
21. **CategoryDetail**
22. **SearchResults**
23. **AddActionSheet**
24. **AddRecord**
25. **ReviewExtraction**
26. **RecordDetail**
27. **EditRecord**
28. **ReplaceRenewRecord**
29. **VersionHistory**
30. **ReviewQueue**

## C. Reminders and tasks pages

31. **RemindersTasks**
32. **AddReminder**
33. **ReminderDetail**
34. **Tasks**
35. **AddTask**
36. **TaskDetail**

## D. Reports and insights pages

37. **Reports**
38. **ReportDetail**
39. **LifeTimeline**

## E. Family/shared pages

40. **FamilyAdmin**
41. **FamilyGroupDetail**
42. **AddSharedItem**
43. **SharedItemDetail**

## F. Backup, emergency, settings, support

44. **EmergencyPack**
45. **BackupExport**
46. **ProviderContacts**
47. **Profile**
48. **Settings**
49. **HelpAbout**
50. **NotificationPermission**
51. **CameraPermission**
52. **FilePermission**
53. **BiometricPermission**
54. **LoadingStates**
55. **ErrorStates**
56. **EmptyStates**

Again: create all pages. If any page is not fully designed, create a matching placeholder page with correct title, purpose, and section cards.

---

# AUTHENTICATION FLOW

LedgerAI stores sensitive records, so authentication must be secure and premium.

Required flow:

SplashScreen
→ Onboarding
→ AuthChoice
→ SignIn or CreateAccount

CreateAccount flow:

CreateAccount
→ EmailVerification
→ MobileVerification
→ MFASetup
→ RecoveryKeySetup
→ BackupCodes
→ HomeDashboard

SignIn flow:

SignIn
→ MFAVerification
→ VaultUnlock or BiometricUnlock
→ HomeDashboard

Recovery flow:

ForgotPassword
→ EmailVerification or MobileVerification
→ ResetPassword
→ MFAVerification
→ VaultUnlock
→ HomeDashboard

Session flow:

SessionLocked
→ BiometricUnlock or VaultUnlock
→ HomeDashboard

Security features:

* Email/password sign-in
* Mobile number verification
* Email verification
* MFA
* Authenticator app code
* Email code
* SMS/mobile code
* Recovery codes
* Trusted device
* Biometric unlock
* Vault PIN
* Forgot password
* Reset password
* Recovery key
* Auto-lock timer
* Session timeout

Use wording:

* Sign in securely
* Create your secure vault
* Unlock Vault
* Extra verification
* Verify your email
* Verify your mobile number
* Recovery key
* Backup codes
* Trusted device
* Secure session
* Protected access

Do not use generic login styling.
Do not use social login as the main pattern.
Do not mention Firebase.

---

# AUTH PAGE DETAILS

## SplashScreen

Show:

* LedgerAI logo
* Lock/shield icon
* Tagline: “Your private life-admin vault”
* Light lavender background
* Simple loading indicator

## Onboarding

Must fit mostly on one mobile screen.

Title:

**Your life admin, beautifully organised**

Subtitle:

**Store documents, track renewals, manage bills, and stay ahead of important life admin — securely and privately.**

Feature cards:

* Secure vault
* Smart reminders
* Scan or enter manually
* Family admin

Buttons:

* Get Started
* Explore Sample Vault

Avoid excessive empty gaps.

## AuthChoice

Title:

**Welcome to LedgerAI**

Subtitle:

**Your private life-admin vault, protected with secure sign-in.**

Buttons:

* Sign In
* Create Account
* Continue with local vault

Security chips:

* Secure access
* Email verified
* Mobile verified
* MFA ready
* Biometric unlock

## CreateAccount

Title:

**Create your secure vault**

Fields:

* Full Name
* Email Address
* Mobile Number
* Password
* Confirm Password

Include:

* Password strength indicator
* Password checklist
* Password visibility toggle
* Terms/privacy checkbox
* Enable biometric unlock checkbox

CTA:

**Create Account**

## SignIn

Title:

**Sign in securely**

Fields:

* Email or mobile number
* Password

Include:

* Password visibility toggle
* Remember this device
* Forgot password
* Use biometrics
* Use recovery code

CTA:

**Sign In**

## EmailVerification

Title:

**Verify your email**

Show:

* 6-digit OTP boxes
* Resend code
* Change email
* Timer
* Verify Email button

## MobileVerification

Title:

**Verify your mobile number**

Show:

* Mobile number
* 6-digit OTP boxes
* Resend SMS
* Change number
* Try email instead
* Verify Mobile button

## MFASetup

Title:

**Set up extra protection**

Option cards:

* Authenticator App — Recommended
* Email Code
* SMS / Mobile Code
* Recovery Codes
* Biometric Unlock

CTA:

**Continue Setup**

## MFAVerification

Title:

**Extra verification**

Show:

* 6-digit code input
* Verify & Continue
* Try another method
* Resend code where relevant

## BiometricUnlock

Title:

**Unlock with biometrics**

Show:

* Face ID / Touch ID / fingerprint icon
* Unlock button
* Use passcode instead
* Use recovery key

## VaultUnlock

Title:

**Unlock Vault**

Show:

* PIN/passcode dots
* Numeric keypad
* Use biometrics
* Use recovery key

## RecoveryKeySetup

Title:

**Save your recovery key**

Show:

* Recovery key card
* Copy button
* Download/export
* Checkbox: I have saved my recovery key
* Continue button

## BackupCodes

Title:

**Backup codes**

Show:

* Code list
* Copy
* Download PDF
* Regenerate codes
* Saved confirmation

## TrustedDeviceConfirmation

Title:

**Trust this device?**

Show:

* Device name
* Trust for 30 days
* Trust this device
* Not now

## SessionLocked

Title:

**Vault locked**

Show:

* Unlock with biometrics
* Use passcode
* Sign out

---

# MAIN APP LAYOUT — SLACK STYLE

For HomeDashboard, VaultExplorer, RemindersTasks, FamilyAdmin and SearchResults, follow this layout:

* Large purple header
* Page title
* Subtitle
* Profile/avatar or settings icon
* Big rounded search bar
* Rounded white content sheet
* Horizontal carousel
* Filter chips
* Compact rows
* Fixed bottom toolbar

Do not use oversized dashboard cards.
Do not use floating bottom toolbar.
Do not make it look like banking/investment.

---

# HomeDashboard

Header:

**LedgerAI**

Subtitle:

**Your private life-admin vault**

Search:

**Search documents, bills, policies…**

Horizontal carousel categories:

* Identity
* Bills
* Policies
* Property
* Vehicles
* Warranties
* Assets
* Tasks
* Family
* Tax
* Travel

Filter chips:

* All
* Needs Review
* Expiring Soon
* Due This Month
* Tasks
* Shared
* Favourites

Include compact Life Admin Health card:

* 84% organised
* 42 records
* 3 need review
* 2 renewals soon
* 4 open tasks

Needs Attention rows:

* British Passport — Identity & Legal • Expires 12 Oct 2026 — Urgent
* Car Insurance — Aviva • Renewal due 28 Oct 2026 — Due Soon
* Electricity Bill — Octopus Energy • Due this week — Pending
* Home Insurance — AXA • Renews 18 Jun 2026 — Review
* Boiler Warranty — British Gas • Warranty expires soon — Expiring
* Mortgage Rate Review — Halifax • 15 Jan 2027 — Task

Add Upcoming Tasks section:

* Compare car insurance quotes
* Upload updated MOT certificate
* Call Halifax about mortgage rate
* Review broadband renewal

Rows should be compact.

---

# VaultExplorer

Header:

**Vault**

Subtitle:

**Your private life records**

Search:

**Search documents, bills, policies…**

Categories:

* Identity & Legal
* Home & Property
* Vehicles
* Insurance
* Bills
* Work & Tax
* Assets
* Family
* Emergency Pack

Filters:

* All
* Active
* Expiring
* Review
* Recent
* Favourites
* Archived
* Historical
* Replaced

Record rows:

* British Passport
* UK Driving Licence
* Home Insurance Policy
* Car Insurance Policy
* Mortgage Agreement
* Electricity Bill
* Broadband Contract
* Council Tax Bill
* MOT Certificate
* V5C Logbook
* Solar Installation Documents
* Boiler Warranty
* P60 Tax Document
* Employment Contract
* Travel Insurance
* Food Trailer Equipment Invoice

Each row:

* Icon tile
* Title
* Provider/category
* Date
* Status badge
* Chevron

---

# CategoryDetail

Show selected category, search within category, filters, and records.

Example category:

**Identity & Legal**

Rows:

* British Passport
* UK Driving Licence
* Visa / BRP
* Birth Certificate
* Marriage Certificate

---

# AddRecord

Single dynamic guided flow.

Do not create separate pages for each document type.

Header:

**Add Record**

Subtitle:

**Upload, scan, or enter details manually**

Progress:

Type → Details → Review

Category dropdown:

* Identity & Legal
* Home & Property
* Vehicles & Transport
* Insurance & Protection
* Bills & Subscriptions
* Banking & Borrowing
* Work, Income & Tax
* Assets & Warranties
* Travel
* Family & Shared

Record type dropdown changes based on category.

Input methods:

* Upload File
* Use Camera
* Enter Manually

Manual entry must always be available.

Form sections:

* Basic Details
* Important Dates
* Payment / Policy Details
* Attachments
* Reminders
* Related Tasks
* Notes

Sticky actions:

* Save Draft
* Continue
* Save Record

---

# ReviewExtraction

Title:

**Review Details**

Subtitle:

**We found some details. Please check before saving.**

Show:

* Document preview
* View original
* File name
* Extracted fields
* Confidence badges
* Edit icons
* Missing fields marked “Needs input”

Actions:

* Save Draft
* Edit Details
* Confirm & Save

Extraction is only a helper. User can edit everything.

---

# RecordDetail

Use Apple Wallet-style secure document pass.

Sections:

* Hero document card
* Key Details
* Important Dates
* Attached Files
* Related Tasks
* Reminders
* Related Records
* Provider Contacts
* Version History
* Notes
* Activity History

Actions:

* Edit
* Add Reminder
* Add Task
* Replace Document
* Export
* Archive

---

# VersionHistory

Support document lifecycle.

Show:

* Current version
* Previous versions
* Replacement date
* Renewed date
* Status
* Notes
* View
* Restore
* Compare

Examples:

* Home Insurance 2025 — Replaced
* Home Insurance 2026 — Active
* Council Tax 2025 — Historical
* Council Tax 2026 — Active

---

# ReviewQueue

Show scanned/imported records needing confirmation.

Rows:

* Passport scan — missing nationality
* Home insurance — renewal date unclear
* Electricity bill — account number not found
* Mortgage letter — provider detected, rate missing

Statuses:

* Needs input
* Low confidence
* Ready to save
* Draft

Action:

**Review**

---

# RemindersTasks

Combined reminders and tasks page.

Header:

**Reminders & Tasks**

Subtitle:

**Stay ahead of your life admin**

Search:

**Search reminders and tasks…**

Filters:

* All
* Today
* Urgent
* Tasks
* Bills
* Policies
* Shared
* Completed

Groups:

* Today
* This Week
* Later
* Completed

Rows:

* Passport renewal review
* Car insurance renewal
* Electricity bill due
* Mortgage fixed rate review
* Boiler warranty expiry
* MOT certificate expiry
* Compare car insurance quotes
* Upload updated MOT certificate
* Call Halifax about mortgage rate
* Submit self-assessment documents
* Replace boiler warranty paperwork
* Pay council tax instalment
* Upload food trailer invoice
* Review broadband renewal options
* Add kids passport copies
* Book annual boiler service

Each row:

* Checkbox or reminder icon
* Title
* Related record
* Due date
* Priority/status badge
* Quick complete
* Snooze/manage

---

# AddReminder

Create reminder form:

* Title
* Related record
* Due date
* Repeat
* Priority
* Alert time
* Notes
* Save Reminder

# AddTask

Create task form:

* Task title
* Related record
* Due date
* Priority
* Assignee
* Checklist subtasks
* Notes
* Save Task

# TaskDetail

Show:

* Title
* Status
* Related record
* Checklist
* Due date
* Priority
* Assignee
* Activity
* Complete action

---

# Reports

Life-admin insights, not finance analytics.

Cards:

* Expiring Soon
* Documents Needing Review
* Open Tasks
* Monthly Commitments
* Insurance Overview
* Vehicle Admin
* Home & Property
* Assets & Warranties
* Family Admin Summary
* Tax & Work Documents
* Security Health
* Backup Status

Natural query cards:

* What is expiring soon?
* Which bills are due this month?
* Which records need review?
* Which tasks are overdue?
* Which warranties expire soon?
* What car documents do I have?
* What policies renew this year?

# ReportDetail

Show detailed report list with filters and export action.

---

# FamilyAdmin

Header:

**Family Admin**

Subtitle:

**Shared bills, documents, tasks, and responsibilities**

Groups:

* Family
* Household Bills
* Paris Trip 2026
* Food Trailer Setup
* Rental Property
* Family Documents

Shared items:

* Electricity bill
* Broadband contract
* Netflix subscription
* Kids passport renewal
* Home insurance renewal
* Paris trip fuel
* Solar installation payment
* Food trailer equipment
* Council tax document

Actions:

* Add shared item
* Add shared task
* Mark resolved
* Settle up
* Export summary
* Attach proof

Balances are secondary, not the main Home feature.

# FamilyGroupDetail

Show group detail with members, shared records, shared tasks, balances if relevant, activity, and export summary.

# AddSharedItem

Form:

* Group
* Item type
* Description
* Amount if relevant
* Paid by
* Assigned to
* Split method if relevant
* Due date
* Attachment
* Notes

# SharedItemDetail

Show shared item details, members, responsibility, payments if relevant, attachments, and activity.

---

# SearchResults

Global search covers:

* Documents
* Bills
* Policies
* Subscriptions
* Assets
* Warranties
* Reminders
* Tasks
* Family/shared items
* Notes

Filters:

* All
* Documents
* Bills
* Policies
* Tasks
* Reminders
* Shared
* Notes

---

# EmergencyPack

Quick access to critical records:

* Passport
* Driving licence
* Car insurance
* Travel insurance
* Home insurance
* Medical information
* Emergency contacts
* Vehicle documents
* Family documents

Actions:

* View pack
* Export Emergency Pack
* Add critical document

---

# LifeTimeline

Chronological view of:

* Uploaded records
* Bill due dates
* Policy renewals
* Expiry dates
* Warranty ends
* Reminders
* Tasks
* Family activity
* Review events

Groups:

* Today
* This Week
* This Month
* Later

---

# BackupExport

Features:

* Export Local Backup
* Import Backup
* Export PDF Summary
* Export CSV Report
* Export Emergency Pack
* Backup reminder
* Last backup status
* Backup codes

Text:

**Your records are important. Export a backup regularly.**

---

# ProviderContacts

Show provider contacts for records:

* Provider name
* Phone
* Email
* Website
* Policy/account number
* Call
* Email
* Open Website

---

# Settings

Sections:

Profile:

* Name
* Email
* Mobile
* Vault status
* Account status

Privacy & Security:

* Change password
* Change vault PIN
* App lock
* Biometric unlock
* MFA settings
* Email verification
* Mobile verification
* Trusted devices
* Recovery key
* Backup codes
* Auto-lock timer
* Session timeout
* Privacy screen
* Delete vault

Backup & Export:

* Export Local Backup
* Import Backup
* Export PDF Summary
* Export CSV
* Backup Reminder

Notifications:

* Reminder notifications
* Task notifications
* Renewal alerts
* Backup reminder alerts

Appearance:

* Light mode
* Dark mode
* Accent colour
* Font size

Organisation:

* Categories
* Tags
* Archived Records
* Version History
* Favourites

Help:

* How LedgerAI works
* Privacy information
* Security information
* Contact/support placeholder
* About LedgerAI

---

# Permission Pages

Create:

* NotificationPermission
* CameraPermission
* FilePermission
* BiometricPermission

Each page should explain why permission is needed and have Allow / Not Now actions.

---

# LoadingStates

Create examples:

* Securely opening vault
* Verifying code
* Scanning document
* Extracting details
* Saving record
* Exporting backup

# ErrorStates

Create friendly errors:

* That code doesn’t look right. Please try again.
* We could not read this document clearly. You can enter details manually.
* Password does not meet security requirements.
* Your session expired. Please unlock your vault again.
* Camera permission is needed to scan documents.

# EmptyStates

Create empty states for:

* Empty Vault
* Empty Reminders
* Empty Tasks
* Empty Family Admin
* Empty Review Queue
* Empty Search Results

---

# Status System

Record statuses:

* Active
* Draft
* Review Needed
* Missing Info
* Expiring Soon
* Expired
* Renewed
* Replaced
* Archived
* Historical
* Ready to Save

Task statuses:

* To Do
* In Progress
* Waiting
* Due Soon
* Completed
* Archived

Security statuses:

* Verified
* MFA Enabled
* Recovery Key Saved
* Trusted Device
* Locked
* Session Expired

Shared/payment statuses:

* Pending
* Paid
* Unpaid
* Settled
* Marked Resolved

Colour rules:

* Purple: primary/active
* Green: success only
* Amber: review/due soon
* Red/coral: urgent/expired/overdue
* Blue: info
* Grey: draft/archived

Use rounded badges.

---

# Components To Create

Create reusable components:

1. AppScaffold
2. AuthScaffold
3. SlackStyleHeader
4. RoundedContentSheet
5. SecureVaultChip
6. SearchBar
7. FilterChipRow
8. CategoryCarouselItem
9. FixedBottomNavBar
10. AddActionSheet
11. AuthCard
12. OTPInput
13. PasswordStrengthMeter
14. MFAOptionCard
15. RecoveryKeyCard
16. LifeAdminHealthCard
17. DocumentRecordRow
18. ReminderRow
19. TaskRow
20. TaskChecklistCard
21. ReportCard
22. FamilyGroupCard
23. SharedItemCard
24. ResponsibilityCard
25. StatusBadge
26. DynamicFormSection
27. UploadMethodCard
28. ExtractionReviewCard
29. StickyActionBar
30. EmptyStateCard
31. TimelineItem
32. ProviderContactCard
33. RelatedRecordCard
34. VersionHistoryRow
35. BackupReminderCard
36. EmergencyPackCard
37. SettingsSectionCard

All components should share:

* Light purple/lavender palette
* Rounded corners
* White cards
* Soft shadows
* Consistent typography
* Consistent icons
* Consistent spacing
* Consistent badges

---

# Sample Data

Use realistic UK-style sample data.

People:

* Shiv
* Sudha
* Family
* Alice
* John

Documents:

* British Passport
* UK Driving Licence
* Home Insurance Policy
* Car Insurance Policy
* Mortgage Agreement
* Electricity Bill
* Broadband Contract
* Council Tax Bill
* MOT Certificate
* V5C Logbook
* Solar Installation Documents
* Boiler Warranty
* Washing Machine Receipt
* P60 Tax Document
* Employment Contract
* Travel Insurance
* Kids Passport Renewal
* Food Trailer Equipment Invoice

Providers:

* HM Passport Office
* DVLA
* AXA
* Aviva
* Halifax
* Octopus Energy
* Thames Water
* Virgin Media
* Milton Keynes Council
* British Gas
* Barclays
* HMRC

Dates:

* 12 Oct 2026
* 28 Oct 2026
* 18 Jun 2026
* 15 Jan 2027
* 21 Nov 2031
* 02 Sep 2026
* 20 Sep 2026

Avoid old 2023 dates unless showing historical activity.

---

# Microcopy Rules

Use:

* Secure Vault
* Unlock Vault
* Sign in securely
* Create your secure vault
* Verify your email
* Verify your mobile number
* Extra verification
* Recovery key
* Backup codes
* Trusted device
* Protected access
* Review before saving
* Scan Document
* Import from Files
* Add Manually
* Confirm & Save
* Save Record
* Save Draft
* Needs input
* Review now
* Add Task
* Mark resolved
* Export summary
* Backup ready
* View in Vault

Avoid:

* Scan receipt
* Submit
* OCR failed
* Entity created
* Invalid
* Firebase
* Synced
* Cloud storage required
* Total assets
* Investment snapshot
* Random user names

---

# What Not To Do

Do not:

* Generate only a few pages
* Miss Login/Register
* Miss Email Verification
* Miss Mobile Verification
* Miss MFA
* Miss Recovery Key / Backup Codes
* Miss Forgot Password / Reset Password
* Miss Biometric Unlock
* Make bottom toolbar floating
* Use social login as main pattern
* Use green/teal as main colour
* Make the app dark purple everywhere
* Use Scan receipt
* Make app look like banking/investment
* Make Home mainly about money
* Create separate page for every document type
* Use old dates
* Use huge widgets with empty space
* Use cluttered charts
* Use confusing bottom nav
* Add more than 5 bottom tabs
* Hide manual entry
* Assume extraction is always correct

---

# Final Quality Target

The final LedgerAI prototype must feel:

* Slack-style fast
* Fixed-toolbar mobile app
* Light purple/lavender themed
* Premium
* Secure
* Elegant
* Calm
* Modern
* Compact
* Practical
* Privacy-first
* MFA-ready
* Family-friendly
* Investor-ready
* Production-quality

The user should immediately think:

* This app protects my important life records.
* I can securely sign in with MFA.
* I can unlock my vault quickly.
* I can search everything quickly.
* I can scan, upload, or manually enter documents.
* I can see what needs attention.
* I can track renewals, bills, tasks, and reminders.
* I can manage family responsibilities.
* This feels like a serious private vault, not a generic app.

Create **all pages listed above**. Do not stop after only a few pages.
