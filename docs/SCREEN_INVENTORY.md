# Screen inventory

Every screen exists as its own Dart file under `lib/features/<feature>/presentation/pages/` and is wired to a named `go_router` route.

## Auth (17)
| Route name | Path | File |
|---|---|---|
| splash | `/` | `features/auth/.../splash_screen.dart` |
| onboarding | `/onboarding` | `onboarding_page.dart` |
| authChoice | `/auth` | `auth_choice_page.dart` |
| signIn | `/auth/sign-in` | `sign_in_page.dart` |
| createAccount | `/auth/create-account` | `create_account_page.dart` |
| emailVerification | `/auth/verify-email` | `email_verification_page.dart` |
| mobileVerification | `/auth/verify-mobile` | `mobile_verification_page.dart` |
| mfaSetup | `/auth/mfa-setup` | `mfa_setup_page.dart` |
| mfaVerification | `/auth/mfa-verify` | `mfa_verification_page.dart` |
| biometricUnlock | `/auth/biometric` | `biometric_unlock_page.dart` |
| vaultUnlock | `/auth/vault-unlock` | `vault_unlock_page.dart` |
| recoveryKeySetup | `/auth/recovery-key` | `recovery_key_setup_page.dart` |
| backupCodes | `/auth/backup-codes` | `backup_codes_page.dart` |
| forgotPassword | `/auth/forgot` | `forgot_password_page.dart` |
| resetPassword | `/auth/reset` | `reset_password_page.dart` |
| trustedDeviceConfirmation | `/auth/trusted-device` | `trusted_device_confirmation_page.dart` |
| sessionLocked | `/locked` | `session_locked_page.dart` |

## Home (1)
| home | `/home` | `features/home/.../home_dashboard_page.dart` |

## Vault (10)
- `vault` → `vault_explorer_page.dart`
- `vaultCategory` → `category_detail_page.dart`
- `searchResults` → `search_results_page.dart`
- `addRecord` → `add_record_page.dart`
- `reviewExtraction` → `review_extraction_page.dart`
- `recordDetail` → `record_detail_page.dart`
- `editRecord` → `edit_record_page.dart`
- `replaceRenewRecord` → `replace_renew_record_page.dart`
- `versionHistory` → `version_history_page.dart`
- `reviewQueue` → `review_queue_page.dart`

## Documents (1 page + 5 widgets)
- `documents` → `documents_page.dart`
- Widgets: `inline_add_document_panel.dart`, `document_type_dropdown.dart`, `document_upload_area.dart`, `passport_form_fields.dart`, `driving_licence_form_fields.dart`

## Person profile (8)
- `personProfiles`, `personDetail`, `addPerson`, `addressHistory`, `employmentHistory`, `personDocuments`, `addEmploymentRecord`, `addAddressRecord`

## AI assistant (3)
- `assistantChat`, `voiceQuery`, `queryResultDetail`

## Banking & wallet (9)
- `bankingOverview`, `bankAccounts`, `bankAccountDetail`, `paymentCards`, `paymentCardDetail`, `walletRecords`, `walletRecoveryDetail`, `bankStatementArchive`, `financialProviderContacts`

## Reminders / tasks (6)
- `reminders` (= `RemindersTasksPage`), `addReminder`, `reminderDetail`, `tasks`, `addTask`, `taskDetail`

## Reports (3)
- `reports`, `reportDetail`, `lifeTimeline`

## Family admin (4)
- `familyAdmin`, `familyGroupDetail`, `addSharedItem`, `sharedItemDetail`

## Emergency / backup (3)
- `emergencyPack`, `backupExport`, `providerContacts`

## Settings / support (10)
- `profile`, `settings`, `helpAbout`, `notificationPermission`, `cameraPermission`, `filePermission`, `biometricPermission`, `loadingStates`, `errorStates`, `emptyStates`

**Total pages: 75** (well above the 56-screen baseline). Every page has a route. Every route has a builder. Every builder constructs the corresponding screen class.
