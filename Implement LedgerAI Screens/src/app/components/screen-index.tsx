import { useNav, ScreenName } from "./nav";
import { C, Card, PageHeaderSimple, ScreenContainer, AppScaffold } from "./shell";
import { LayoutGrid } from "lucide-react";

const GROUPS: { title: string; screens: ScreenName[] }[] = [
  { title: "A. Authentication & Security", screens: [
    "SplashScreen", "Onboarding", "AuthChoice", "SignIn", "CreateAccount",
    "EmailVerification", "MobileVerification", "MFASetup", "MFAVerification",
    "BiometricUnlock", "VaultUnlock", "RecoveryKeySetup", "BackupCodes",
    "ForgotPassword", "ResetPassword", "TrustedDeviceConfirmation",
    "SessionLocked", "SecuritySettings",
  ]},
  { title: "B. Main App", screens: [
    "HomeDashboard", "VaultExplorer", "CategoryDetail", "SearchResults",
    "AddRecord", "ReviewExtraction", "RecordDetail", "EditRecord",
    "ReplaceRenewRecord", "VersionHistory", "ReviewQueue",
  ]},
  { title: "C. Reminders & Tasks", screens: [
    "RemindersTasks", "AddReminder", "ReminderDetail", "Tasks", "AddTask", "TaskDetail",
  ]},
  { title: "D. Reports & Insights", screens: ["Reports", "ReportDetail", "LifeTimeline"] },
  { title: "E. Family / Shared", screens: ["FamilyAdmin", "FamilyGroupDetail", "AddSharedItem", "SharedItemDetail"] },
  { title: "F. Backup, Settings, Support", screens: [
    "EmergencyPack", "BackupExport", "ProviderContacts", "Profile", "Settings", "HelpAbout",
    "NotificationPermission", "CameraPermission", "FilePermission", "BiometricPermission",
    "LoadingStates", "ErrorStates", "EmptyStates",
  ]},
];

export function ScreenIndex() {
  const { go } = useNav();
  return (
    <AppScaffold withNav={false}>
      <PageHeaderSimple title="LedgerAI Screens" subtitle="Browse all 56 screens" />
      <ScreenContainer>
        {GROUPS.map((g) => (
          <div key={g.title} className="mb-5">
            <div style={{ color: C.deep, fontSize: 13 }} className="mb-2">{g.title}</div>
            <Card className="!p-1">
              {g.screens.map((s, i) => (
                <button
                  key={s}
                  onClick={() => go(s)}
                  className="w-full text-left flex items-center justify-between px-3 py-2.5"
                  style={{ borderBottom: i < g.screens.length - 1 ? `1px solid ${C.divider}` : "none" }}
                >
                  <span style={{ color: C.text, fontSize: 13 }}>{s}</span>
                  <span style={{ color: C.royal, fontSize: 11 }}>Open →</span>
                </button>
              ))}
            </Card>
          </div>
        ))}
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ScreenIndexFAB() {
  const { go, screen } = useNav();
  if (screen === "ScreenIndex") return null;
  return (
    <button
      onClick={() => go("ScreenIndex")}
      className="absolute top-3 right-3 z-40 size-9 rounded-full flex items-center justify-center"
      style={{ background: "rgba(255,255,255,0.92)", color: C.royal, border: `1px solid ${C.lavBorder}`, boxShadow: "0 4px 10px rgba(91,27,115,0.15)" }}
      title="All screens"
    >
      <LayoutGrid className="size-4" />
    </button>
  );
}
