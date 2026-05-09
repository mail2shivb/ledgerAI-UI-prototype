/// Centralised named routes — every screen has one.
class RouteNames {
  RouteNames._();

  // Auth
  static const splash = 'splash';
  static const onboarding = 'onboarding';
  static const authChoice = 'authChoice';
  static const signIn = 'signIn';
  static const createAccount = 'createAccount';
  static const emailVerification = 'emailVerification';
  static const mobileVerification = 'mobileVerification';
  static const mfaSetup = 'mfaSetup';
  static const mfaVerification = 'mfaVerification';
  static const biometricUnlock = 'biometricUnlock';
  static const vaultUnlock = 'vaultUnlock';
  static const recoveryKeySetup = 'recoveryKeySetup';
  static const backupCodes = 'backupCodes';
  static const forgotPassword = 'forgotPassword';
  static const resetPassword = 'resetPassword';
  static const trustedDeviceConfirmation = 'trustedDeviceConfirmation';
  static const sessionLocked = 'sessionLocked';

  // Main shell
  static const home = 'home';
  static const vault = 'vault';
  static const reminders = 'reminders';
  static const reports = 'reports';

  // Vault
  static const vaultCategory = 'vaultCategory';
  static const searchResults = 'searchResults';
  static const addRecord = 'addRecord';
  static const reviewExtraction = 'reviewExtraction';
  static const recordDetail = 'recordDetail';
  static const editRecord = 'editRecord';
  static const replaceRenewRecord = 'replaceRenewRecord';
  static const versionHistory = 'versionHistory';
  static const reviewQueue = 'reviewQueue';

  // Documents
  static const documents = 'documents';

  // Person profile
  static const personProfiles = 'personProfiles';
  static const personDetail = 'personDetail';
  static const addPerson = 'addPerson';
  static const addressHistory = 'addressHistory';
  static const employmentHistory = 'employmentHistory';
  static const personDocuments = 'personDocuments';
  static const addEmploymentRecord = 'addEmploymentRecord';
  static const addAddressRecord = 'addAddressRecord';

  // AI assistant
  static const assistantChat = 'assistantChat';
  static const voiceQuery = 'voiceQuery';
  static const queryResultDetail = 'queryResultDetail';

  // Banking & wallet
  static const bankingOverview = 'bankingOverview';
  static const bankAccounts = 'bankAccounts';
  static const bankAccountDetail = 'bankAccountDetail';
  static const paymentCards = 'paymentCards';
  static const paymentCardDetail = 'paymentCardDetail';
  static const walletRecords = 'walletRecords';
  static const walletRecoveryDetail = 'walletRecoveryDetail';
  static const bankStatementArchive = 'bankStatementArchive';
  static const financialProviderContacts = 'financialProviderContacts';

  // Reminders/tasks
  static const addReminder = 'addReminder';
  static const reminderDetail = 'reminderDetail';
  static const tasks = 'tasks';
  static const addTask = 'addTask';
  static const taskDetail = 'taskDetail';

  // Reports
  static const reportDetail = 'reportDetail';
  static const lifeTimeline = 'lifeTimeline';

  // Family admin
  static const familyAdmin = 'familyAdmin';
  static const familyGroupDetail = 'familyGroupDetail';
  static const addSharedItem = 'addSharedItem';
  static const sharedItemDetail = 'sharedItemDetail';

  // Emergency / backup
  static const emergencyPack = 'emergencyPack';
  static const backupExport = 'backupExport';
  static const providerContacts = 'providerContacts';

  // Settings / support
  static const profile = 'profile';
  static const settings = 'settings';
  static const helpAbout = 'helpAbout';
  static const notificationPermission = 'notificationPermission';
  static const cameraPermission = 'cameraPermission';
  static const filePermission = 'filePermission';
  static const biometricPermission = 'biometricPermission';
  static const loadingStates = 'loadingStates';
  static const errorStates = 'errorStates';
  static const emptyStates = 'emptyStates';
}
