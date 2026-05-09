import { createContext, useContext, useState, ReactNode } from "react";

export type ScreenName =
  | "SplashScreen" | "Onboarding" | "AuthChoice" | "SignIn" | "CreateAccount"
  | "EmailVerification" | "MobileVerification" | "MFASetup" | "MFAVerification"
  | "BiometricUnlock" | "VaultUnlock" | "RecoveryKeySetup" | "BackupCodes"
  | "ForgotPassword" | "ResetPassword" | "TrustedDeviceConfirmation"
  | "SessionLocked" | "SecuritySettings"
  | "HomeDashboard" | "VaultExplorer" | "CategoryDetail" | "SearchResults"
  | "AddRecord" | "ReviewExtraction" | "RecordDetail" | "EditRecord"
  | "ReplaceRenewRecord" | "VersionHistory" | "ReviewQueue"
  | "RemindersTasks" | "AddReminder" | "ReminderDetail" | "Tasks" | "AddTask" | "TaskDetail"
  | "Reports" | "ReportDetail" | "LifeTimeline"
  | "FamilyAdmin" | "FamilyGroupDetail" | "AddSharedItem" | "SharedItemDetail"
  | "EmergencyPack" | "BackupExport" | "ProviderContacts" | "Profile" | "Settings"
  | "HelpAbout" | "NotificationPermission" | "CameraPermission" | "FilePermission"
  | "BiometricPermission" | "LoadingStates" | "ErrorStates" | "EmptyStates"
  | "ScreenIndex";

type NavCtx = {
  screen: ScreenName;
  go: (s: ScreenName) => void;
  showAddSheet: boolean;
  setShowAddSheet: (v: boolean) => void;
};

const Ctx = createContext<NavCtx | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<ScreenName>("SplashScreen");
  const [showAddSheet, setShowAddSheet] = useState(false);
  return (
    <Ctx.Provider value={{ screen, go: setScreen, showAddSheet, setShowAddSheet }}>
      {children}
    </Ctx.Provider>
  );
}

export function useNav() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useNav outside provider");
  return c;
}
