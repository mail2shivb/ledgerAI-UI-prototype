import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../features/auth/presentation/pages/splash_screen.dart';
import '../../features/auth/presentation/pages/onboarding_page.dart';
import '../../features/auth/presentation/pages/auth_choice_page.dart';
import '../../features/auth/presentation/pages/sign_in_page.dart';
import '../../features/auth/presentation/pages/create_account_page.dart';
import '../../features/auth/presentation/pages/email_verification_page.dart';
import '../../features/auth/presentation/pages/mobile_verification_page.dart';
import '../../features/auth/presentation/pages/mfa_setup_page.dart';
import '../../features/auth/presentation/pages/mfa_verification_page.dart';
import '../../features/auth/presentation/pages/biometric_unlock_page.dart';
import '../../features/auth/presentation/pages/vault_unlock_page.dart';
import '../../features/auth/presentation/pages/recovery_key_setup_page.dart';
import '../../features/auth/presentation/pages/backup_codes_page.dart';
import '../../features/auth/presentation/pages/forgot_password_page.dart';
import '../../features/auth/presentation/pages/reset_password_page.dart';
import '../../features/auth/presentation/pages/trusted_device_confirmation_page.dart';
import '../../features/auth/presentation/pages/session_locked_page.dart';

import '../../features/home/presentation/pages/home_dashboard_page.dart';

import '../../features/vault/presentation/pages/vault_explorer_page.dart';
import '../../features/vault/presentation/pages/category_detail_page.dart';
import '../../features/vault/presentation/pages/search_results_page.dart';
import '../../features/vault/presentation/pages/add_record_page.dart';
import '../../features/vault/presentation/pages/review_extraction_page.dart';
import '../../features/vault/presentation/pages/record_detail_page.dart';
import '../../features/vault/presentation/pages/edit_record_page.dart';
import '../../features/vault/presentation/pages/replace_renew_record_page.dart';
import '../../features/vault/presentation/pages/version_history_page.dart';
import '../../features/vault/presentation/pages/review_queue_page.dart';

import '../../features/documents/presentation/pages/documents_page.dart';

import '../../features/person_profile/presentation/pages/person_profiles_page.dart';
import '../../features/person_profile/presentation/pages/person_detail_page.dart';
import '../../features/person_profile/presentation/pages/add_person_page.dart';
import '../../features/person_profile/presentation/pages/address_history_page.dart';
import '../../features/person_profile/presentation/pages/employment_history_page.dart';
import '../../features/person_profile/presentation/pages/person_documents_page.dart';
import '../../features/person_profile/presentation/pages/add_employment_record_page.dart';
import '../../features/person_profile/presentation/pages/add_address_record_page.dart';

import '../../features/ai_assistant/presentation/pages/assistant_chat_page.dart';
import '../../features/ai_assistant/presentation/pages/voice_query_page.dart';
import '../../features/ai_assistant/presentation/pages/query_result_detail_page.dart';

import '../../features/banking_wallet/presentation/pages/banking_overview_page.dart';
import '../../features/banking_wallet/presentation/pages/bank_accounts_page.dart';
import '../../features/banking_wallet/presentation/pages/bank_account_detail_page.dart';
import '../../features/banking_wallet/presentation/pages/payment_cards_page.dart';
import '../../features/banking_wallet/presentation/pages/payment_card_detail_page.dart';
import '../../features/banking_wallet/presentation/pages/wallet_records_page.dart';
import '../../features/banking_wallet/presentation/pages/wallet_recovery_detail_page.dart';
import '../../features/banking_wallet/presentation/pages/bank_statement_archive_page.dart';
import '../../features/banking_wallet/presentation/pages/financial_provider_contacts_page.dart';

import '../../features/reminders_tasks/presentation/pages/reminders_tasks_page.dart';
import '../../features/reminders_tasks/presentation/pages/add_reminder_page.dart';
import '../../features/reminders_tasks/presentation/pages/reminder_detail_page.dart';
import '../../features/reminders_tasks/presentation/pages/tasks_page.dart';
import '../../features/reminders_tasks/presentation/pages/add_task_page.dart';
import '../../features/reminders_tasks/presentation/pages/task_detail_page.dart';

import '../../features/reports/presentation/pages/reports_page.dart';
import '../../features/reports/presentation/pages/report_detail_page.dart';
import '../../features/reports/presentation/pages/life_timeline_page.dart';

import '../../features/family_admin/presentation/pages/family_admin_page.dart';
import '../../features/family_admin/presentation/pages/family_group_detail_page.dart';
import '../../features/family_admin/presentation/pages/add_shared_item_page.dart';
import '../../features/family_admin/presentation/pages/shared_item_detail_page.dart';

import '../../features/emergency_backup/presentation/pages/emergency_pack_page.dart';
import '../../features/emergency_backup/presentation/pages/backup_export_page.dart';
import '../../features/emergency_backup/presentation/pages/provider_contacts_page.dart';

import '../../features/settings/presentation/pages/profile_page.dart';
import '../../features/settings/presentation/pages/settings_page.dart';
import '../../features/settings/presentation/pages/help_about_page.dart';
import '../../features/settings/presentation/pages/notification_permission_page.dart';
import '../../features/settings/presentation/pages/camera_permission_page.dart';
import '../../features/settings/presentation/pages/file_permission_page.dart';
import '../../features/settings/presentation/pages/biometric_permission_page.dart';
import '../../features/settings/presentation/pages/loading_states_page.dart';
import '../../features/settings/presentation/pages/error_states_page.dart';
import '../../features/settings/presentation/pages/empty_states_page.dart';

import 'route_names.dart';

class AppRouter {
  AppRouter._();

  static final GoRouter router = GoRouter(
    initialLocation: '/',
    routes: <RouteBase>[
      // Auth flow
      GoRoute(path: '/', name: RouteNames.splash,
          builder: (_, __) => const SplashScreen()),
      GoRoute(path: '/onboarding', name: RouteNames.onboarding,
          builder: (_, __) => const OnboardingPage()),
      GoRoute(path: '/auth', name: RouteNames.authChoice,
          builder: (_, __) => const AuthChoicePage()),
      GoRoute(path: '/auth/sign-in', name: RouteNames.signIn,
          builder: (_, __) => const SignInPage()),
      GoRoute(path: '/auth/create-account', name: RouteNames.createAccount,
          builder: (_, __) => const CreateAccountPage()),
      GoRoute(path: '/auth/verify-email', name: RouteNames.emailVerification,
          builder: (_, __) => const EmailVerificationPage()),
      GoRoute(path: '/auth/verify-mobile', name: RouteNames.mobileVerification,
          builder: (_, __) => const MobileVerificationPage()),
      GoRoute(path: '/auth/mfa-setup', name: RouteNames.mfaSetup,
          builder: (_, __) => const MfaSetupPage()),
      GoRoute(path: '/auth/mfa-verify', name: RouteNames.mfaVerification,
          builder: (_, __) => const MfaVerificationPage()),
      GoRoute(path: '/auth/biometric', name: RouteNames.biometricUnlock,
          builder: (_, __) => const BiometricUnlockPage()),
      GoRoute(path: '/auth/vault-unlock', name: RouteNames.vaultUnlock,
          builder: (_, __) => const VaultUnlockPage()),
      GoRoute(path: '/auth/recovery-key', name: RouteNames.recoveryKeySetup,
          builder: (_, __) => const RecoveryKeySetupPage()),
      GoRoute(path: '/auth/backup-codes', name: RouteNames.backupCodes,
          builder: (_, __) => const BackupCodesPage()),
      GoRoute(path: '/auth/forgot', name: RouteNames.forgotPassword,
          builder: (_, __) => const ForgotPasswordPage()),
      GoRoute(path: '/auth/reset', name: RouteNames.resetPassword,
          builder: (_, __) => const ResetPasswordPage()),
      GoRoute(path: '/auth/trusted-device',
          name: RouteNames.trustedDeviceConfirmation,
          builder: (_, __) => const TrustedDeviceConfirmationPage()),
      GoRoute(path: '/locked', name: RouteNames.sessionLocked,
          builder: (_, __) => const SessionLockedPage()),

      // Main shell
      GoRoute(path: '/home', name: RouteNames.home,
          builder: (_, __) => const HomeDashboardPage()),
      GoRoute(path: '/vault', name: RouteNames.vault,
          builder: (_, __) => const VaultExplorerPage()),
      GoRoute(path: '/reminders', name: RouteNames.reminders,
          builder: (_, __) => const RemindersTasksPage()),
      GoRoute(path: '/reports', name: RouteNames.reports,
          builder: (_, __) => const ReportsPage()),

      // Vault sub-routes
      GoRoute(path: '/vault/category/:categoryId',
          name: RouteNames.vaultCategory,
          builder: (_, s) => CategoryDetailPage(
              categoryId: s.pathParameters['categoryId'] ?? '')),
      GoRoute(path: '/vault/search', name: RouteNames.searchResults,
          builder: (_, s) => SearchResultsPage(
              query: s.uri.queryParameters['q'] ?? '')),
      GoRoute(path: '/vault/add', name: RouteNames.addRecord,
          builder: (_, __) => const AddRecordPage()),
      GoRoute(path: '/vault/review', name: RouteNames.reviewExtraction,
          builder: (_, __) => const ReviewExtractionPage()),
      GoRoute(path: '/vault/record/:recordId',
          name: RouteNames.recordDetail,
          builder: (_, s) => RecordDetailPage(
              recordId: s.pathParameters['recordId'] ?? '')),
      GoRoute(path: '/vault/record/:recordId/edit',
          name: RouteNames.editRecord,
          builder: (_, s) => EditRecordPage(
              recordId: s.pathParameters['recordId'] ?? '')),
      GoRoute(path: '/vault/record/:recordId/replace',
          name: RouteNames.replaceRenewRecord,
          builder: (_, s) => ReplaceRenewRecordPage(
              recordId: s.pathParameters['recordId'] ?? '')),
      GoRoute(path: '/vault/record/:recordId/versions',
          name: RouteNames.versionHistory,
          builder: (_, s) => VersionHistoryPage(
              recordId: s.pathParameters['recordId'] ?? '')),
      GoRoute(path: '/vault/review-queue', name: RouteNames.reviewQueue,
          builder: (_, __) => const ReviewQueuePage()),

      // Documents
      GoRoute(path: '/documents', name: RouteNames.documents,
          builder: (_, __) => const DocumentsPage()),

      // Person profile
      GoRoute(path: '/people', name: RouteNames.personProfiles,
          builder: (_, __) => const PersonProfilesPage()),
      GoRoute(path: '/people/add', name: RouteNames.addPerson,
          builder: (_, __) => const AddPersonPage()),
      GoRoute(path: '/people/:personId', name: RouteNames.personDetail,
          builder: (_, s) => PersonDetailPage(
              personId: s.pathParameters['personId'] ?? '')),
      GoRoute(path: '/people/:personId/address-history',
          name: RouteNames.addressHistory,
          builder: (_, s) => AddressHistoryPage(
              personId: s.pathParameters['personId'] ?? '')),
      GoRoute(path: '/people/:personId/employment-history',
          name: RouteNames.employmentHistory,
          builder: (_, s) => EmploymentHistoryPage(
              personId: s.pathParameters['personId'] ?? '')),
      GoRoute(path: '/people/:personId/documents',
          name: RouteNames.personDocuments,
          builder: (_, s) => PersonDocumentsPage(
              personId: s.pathParameters['personId'] ?? '')),
      GoRoute(path: '/people/:personId/add-address',
          name: RouteNames.addAddressRecord,
          builder: (_, s) => AddAddressRecordPage(
              personId: s.pathParameters['personId'] ?? '')),
      GoRoute(path: '/people/:personId/add-employment',
          name: RouteNames.addEmploymentRecord,
          builder: (_, s) => AddEmploymentRecordPage(
              personId: s.pathParameters['personId'] ?? '')),

      // AI assistant
      GoRoute(path: '/assistant', name: RouteNames.assistantChat,
          builder: (_, __) => const AssistantChatPage()),
      GoRoute(path: '/assistant/voice', name: RouteNames.voiceQuery,
          builder: (_, __) => const VoiceQueryPage()),
      GoRoute(path: '/assistant/query-result',
          name: RouteNames.queryResultDetail,
          builder: (_, __) => const QueryResultDetailPage()),

      // Banking & wallet
      GoRoute(path: '/banking', name: RouteNames.bankingOverview,
          builder: (_, __) => const BankingOverviewPage()),
      GoRoute(path: '/banking/accounts', name: RouteNames.bankAccounts,
          builder: (_, __) => const BankAccountsPage()),
      GoRoute(path: '/banking/accounts/:accountId',
          name: RouteNames.bankAccountDetail,
          builder: (_, s) => BankAccountDetailPage(
              accountId: s.pathParameters['accountId'] ?? '')),
      GoRoute(path: '/banking/cards', name: RouteNames.paymentCards,
          builder: (_, __) => const PaymentCardsPage()),
      GoRoute(path: '/banking/cards/:cardId',
          name: RouteNames.paymentCardDetail,
          builder: (_, s) => PaymentCardDetailPage(
              cardId: s.pathParameters['cardId'] ?? '')),
      GoRoute(path: '/banking/wallet', name: RouteNames.walletRecords,
          builder: (_, __) => const WalletRecordsPage()),
      GoRoute(path: '/banking/wallet/:walletId',
          name: RouteNames.walletRecoveryDetail,
          builder: (_, s) => WalletRecoveryDetailPage(
              walletId: s.pathParameters['walletId'] ?? '')),
      GoRoute(path: '/banking/statements',
          name: RouteNames.bankStatementArchive,
          builder: (_, __) => const BankStatementArchivePage()),
      GoRoute(path: '/banking/providers',
          name: RouteNames.financialProviderContacts,
          builder: (_, __) => const FinancialProviderContactsPage()),

      // Reminders / tasks
      GoRoute(path: '/reminders/add', name: RouteNames.addReminder,
          builder: (_, __) => const AddReminderPage()),
      GoRoute(path: '/reminders/:reminderId',
          name: RouteNames.reminderDetail,
          builder: (_, s) => ReminderDetailPage(
              reminderId: s.pathParameters['reminderId'] ?? '')),
      GoRoute(path: '/tasks', name: RouteNames.tasks,
          builder: (_, __) => const TasksPage()),
      GoRoute(path: '/tasks/add', name: RouteNames.addTask,
          builder: (_, __) => const AddTaskPage()),
      GoRoute(path: '/tasks/:taskId', name: RouteNames.taskDetail,
          builder: (_, s) => TaskDetailPage(
              taskId: s.pathParameters['taskId'] ?? '')),

      // Reports
      GoRoute(path: '/reports/:reportId', name: RouteNames.reportDetail,
          builder: (_, s) => ReportDetailPage(
              reportId: s.pathParameters['reportId'] ?? '')),
      GoRoute(path: '/timeline', name: RouteNames.lifeTimeline,
          builder: (_, __) => const LifeTimelinePage()),

      // Family admin
      GoRoute(path: '/family', name: RouteNames.familyAdmin,
          builder: (_, __) => const FamilyAdminPage()),
      GoRoute(path: '/family/:groupId',
          name: RouteNames.familyGroupDetail,
          builder: (_, s) => FamilyGroupDetailPage(
              groupId: s.pathParameters['groupId'] ?? '')),
      GoRoute(path: '/family/:groupId/add-shared',
          name: RouteNames.addSharedItem,
          builder: (_, s) => AddSharedItemPage(
              groupId: s.pathParameters['groupId'] ?? '')),
      GoRoute(path: '/family/shared/:itemId',
          name: RouteNames.sharedItemDetail,
          builder: (_, s) => SharedItemDetailPage(
              itemId: s.pathParameters['itemId'] ?? '')),

      // Emergency / backup
      GoRoute(path: '/emergency', name: RouteNames.emergencyPack,
          builder: (_, __) => const EmergencyPackPage()),
      GoRoute(path: '/backup', name: RouteNames.backupExport,
          builder: (_, __) => const BackupExportPage()),
      GoRoute(path: '/providers', name: RouteNames.providerContacts,
          builder: (_, __) => const ProviderContactsPage()),

      // Settings / support
      GoRoute(path: '/profile', name: RouteNames.profile,
          builder: (_, __) => const ProfilePage()),
      GoRoute(path: '/settings', name: RouteNames.settings,
          builder: (_, __) => const SettingsPage()),
      GoRoute(path: '/help', name: RouteNames.helpAbout,
          builder: (_, __) => const HelpAboutPage()),
      GoRoute(path: '/permissions/notifications',
          name: RouteNames.notificationPermission,
          builder: (_, __) => const NotificationPermissionPage()),
      GoRoute(path: '/permissions/camera',
          name: RouteNames.cameraPermission,
          builder: (_, __) => const CameraPermissionPage()),
      GoRoute(path: '/permissions/files',
          name: RouteNames.filePermission,
          builder: (_, __) => const FilePermissionPage()),
      GoRoute(path: '/permissions/biometric',
          name: RouteNames.biometricPermission,
          builder: (_, __) => const BiometricPermissionPage()),
      GoRoute(path: '/states/loading', name: RouteNames.loadingStates,
          builder: (_, __) => const LoadingStatesPage()),
      GoRoute(path: '/states/error', name: RouteNames.errorStates,
          builder: (_, __) => const ErrorStatesPage()),
      GoRoute(path: '/states/empty', name: RouteNames.emptyStates,
          builder: (_, __) => const EmptyStatesPage()),
    ],
    errorBuilder: (_, state) => Scaffold(
      body: Center(child: Text('Route not found: ${state.uri}')),
    ),
  );
}
