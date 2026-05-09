import { NavProvider, useNav, ScreenName } from "./components/nav";
import * as Auth from "./components/auth-screens";
import * as Main from "./components/main-screens";
import * as More from "./components/more-screens";
import { ScreenIndex, ScreenIndexFAB } from "./components/screen-index";

const SCREENS: Record<ScreenName, () => any> = {
  SplashScreen: Auth.SplashScreen,
  Onboarding: Auth.Onboarding,
  AuthChoice: Auth.AuthChoice,
  SignIn: Auth.SignIn,
  CreateAccount: Auth.CreateAccount,
  EmailVerification: Auth.EmailVerification,
  MobileVerification: Auth.MobileVerification,
  MFASetup: Auth.MFASetup,
  MFAVerification: Auth.MFAVerification,
  BiometricUnlock: Auth.BiometricUnlock,
  VaultUnlock: Auth.VaultUnlock,
  RecoveryKeySetup: Auth.RecoveryKeySetup,
  BackupCodes: Auth.BackupCodes,
  ForgotPassword: Auth.ForgotPassword,
  ResetPassword: Auth.ResetPassword,
  TrustedDeviceConfirmation: Auth.TrustedDeviceConfirmation,
  SessionLocked: Auth.SessionLocked,
  SecuritySettings: Auth.SecuritySettings,

  HomeDashboard: Main.HomeDashboard,
  VaultExplorer: Main.VaultExplorer,
  CategoryDetail: Main.CategoryDetail,
  SearchResults: Main.SearchResults,
  AddRecord: Main.AddRecord,
  ReviewExtraction: Main.ReviewExtraction,
  RecordDetail: Main.RecordDetail,
  EditRecord: Main.EditRecord,
  ReplaceRenewRecord: Main.ReplaceRenewRecord,
  VersionHistory: Main.VersionHistory,
  ReviewQueue: Main.ReviewQueue,

  RemindersTasks: More.RemindersTasks,
  AddReminder: More.AddReminder,
  ReminderDetail: More.ReminderDetail,
  Tasks: More.Tasks,
  AddTask: More.AddTask,
  TaskDetail: More.TaskDetail,

  Reports: More.Reports,
  ReportDetail: More.ReportDetail,
  LifeTimeline: More.LifeTimeline,

  FamilyAdmin: More.FamilyAdmin,
  FamilyGroupDetail: More.FamilyGroupDetail,
  AddSharedItem: More.AddSharedItem,
  SharedItemDetail: More.SharedItemDetail,

  EmergencyPack: More.EmergencyPack,
  BackupExport: More.BackupExport,
  ProviderContacts: More.ProviderContacts,
  Profile: More.Profile,
  Settings: More.Settings,
  HelpAbout: More.HelpAbout,

  NotificationPermission: More.NotificationPermission,
  CameraPermission: More.CameraPermission,
  FilePermission: More.FilePermission,
  BiometricPermission: More.BiometricPermission,

  LoadingStates: More.LoadingStates,
  ErrorStates: More.ErrorStates,
  EmptyStates: More.EmptyStates,

  ScreenIndex: ScreenIndex,
};

function CurrentScreen() {
  const { screen } = useNav();
  const Cmp = SCREENS[screen];
  return <Cmp />;
}

function MobileFrame() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 390,
        height: 820,
        borderRadius: 44,
        background: "#FBF9FF",
        boxShadow: "0 30px 80px rgba(91,27,115,0.25), 0 0 0 10px #1E1233, 0 0 0 12px rgba(255,255,255,0.06)",
      }}
    >
      <ScreenIndexFAB />
      <CurrentScreen />
    </div>
  );
}

export default function App() {
  return (
    <NavProvider>
      <div
        className="size-full flex items-center justify-center p-6"
        style={{ background: "linear-gradient(135deg, #2A1145 0%, #5B1B73 100%)", minHeight: "100vh" }}
      >
        <MobileFrame />
      </div>
    </NavProvider>
  );
}
