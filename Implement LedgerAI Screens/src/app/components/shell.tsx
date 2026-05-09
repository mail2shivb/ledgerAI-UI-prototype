import { ReactNode } from "react";
import {
  Home, FolderLock, Plus, Bell, BarChart3, Search, ChevronLeft, Settings as SettingsIcon,
  ScanLine, Camera, Image as ImageIcon, FileUp, PenLine, BellPlus, ListTodo, Users, X
} from "lucide-react";
import { ScreenName, useNav } from "./nav";

export const C = {
  bg: "#FBF9FF",
  sheet: "#FFFFFF",
  lavSurface: "#F7F2FF",
  lavPale: "#F3ECFF",
  lavBorder: "#E3D6FF",
  action: "#8B5CF6",
  primary: "#9D4EDD",
  royal: "#7C3AED",
  deep: "#5B21B6",
  plum: "#5B1B73",
  text: "#1E1233",
  text2: "#6B5A7A",
  textMuted: "#9485A6",
  divider: "#ECE3F8",
  success: "#2FBF71",
  warn: "#F5A623",
  urgent: "#EF5B5B",
  info: "#3B82F6",
};

export function SlackStyleHeader({
  title, subtitle, search, rightIcon, onBack, gradient = true,
}: {
  title: string; subtitle?: string; search?: string;
  rightIcon?: ReactNode; onBack?: () => void; gradient?: boolean;
}) {
  return (
    <div
      className="px-5 pt-12 pb-6"
      style={{
        background: gradient
          ? `linear-gradient(135deg, ${C.plum} 0%, #7B2CBF 55%, ${C.primary} 100%)`
          : C.plum,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {onBack && (
            <button onClick={onBack} className="text-white/90 -ml-1">
              <ChevronLeft className="size-6" />
            </button>
          )}
          <div className="text-white tracking-tight" style={{ fontSize: 22 }}>{title}</div>
        </div>
        <div className="text-white/90">{rightIcon}</div>
      </div>
      {subtitle && <div className="text-white/75 mb-4" style={{ fontSize: 13 }}>{subtitle}</div>}
      {search !== undefined && (
        <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
          <Search className="size-4" style={{ color: C.textMuted }} />
          <div style={{ color: C.textMuted, fontSize: 14 }}>{search}</div>
        </div>
      )}
    </div>
  );
}

export function RoundedContentSheet({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex-1 overflow-y-auto -mt-4 rounded-t-3xl px-5 pt-5 pb-28 ${className}`}
      style={{ background: C.sheet }}
    >
      {children}
    </div>
  );
}

export function FilterChipRow({ chips, active, onChange }: { chips: string[]; active: string; onChange: (c: string) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1 mb-4" style={{ scrollbarWidth: "none" }}>
      {chips.map((c) => {
        const on = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className="px-3.5 py-1.5 rounded-full whitespace-nowrap border"
            style={{
              fontSize: 13,
              background: on ? C.primary : C.lavPale,
              color: on ? "#fff" : C.deep,
              borderColor: on ? C.primary : C.lavBorder,
            }}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}

export function CategoryCarousel({ items, onTap }: { items: { label: string; icon: ReactNode }[]; onTap?: (l: string) => void }) {
  return (
    <div className="flex gap-3 overflow-x-auto -mx-5 px-5 pb-2 mb-4" style={{ scrollbarWidth: "none" }}>
      {items.map((it) => (
        <button key={it.label} onClick={() => onTap?.(it.label)} className="flex flex-col items-center gap-1.5 shrink-0">
          <div
            className="size-14 rounded-2xl flex items-center justify-center"
            style={{ background: C.lavPale, color: C.royal, border: `1px solid ${C.lavBorder}` }}
          >
            {it.icon}
          </div>
          <div style={{ fontSize: 11, color: C.text }}>{it.label}</div>
        </button>
      ))}
    </div>
  );
}

export function StatusBadge({ kind, children }: { kind: "active" | "review" | "expiring" | "urgent" | "draft" | "info" | "success" | "due"; children: ReactNode }) {
  const map: Record<string, { bg: string; fg: string }> = {
    active:   { bg: C.lavPale, fg: C.royal },
    review:   { bg: "#FFF4DD", fg: "#9A6500" },
    expiring: { bg: "#FFEAD6", fg: "#A85A00" },
    urgent:   { bg: "#FFE3E3", fg: C.urgent },
    draft:    { bg: "#EFEAF5", fg: C.text2 },
    info:     { bg: "#E1ECFF", fg: C.info },
    success:  { bg: "#D8F5E6", fg: C.success },
    due:      { bg: "#FFEAD6", fg: "#A85A00" },
  };
  const s = map[kind] ?? map.active;
  return (
    <span
      className="px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ background: s.bg, color: s.fg, fontSize: 11 }}
    >
      {children}
    </span>
  );
}

export function ListRow({
  icon, title, subtitle, right, badge, onClick,
}: {
  icon?: ReactNode; title: string; subtitle?: string;
  right?: ReactNode; badge?: ReactNode; onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-3 px-2 rounded-xl text-left hover:bg-[#F7F2FF] transition"
    >
      {icon && (
        <div
          className="size-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: C.lavPale, color: C.royal, border: `1px solid ${C.lavBorder}` }}
        >
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <div className="truncate" style={{ color: C.text, fontSize: 14 }}>{title}</div>
          {badge}
        </div>
        {subtitle && (
          <div className="truncate" style={{ color: C.text2, fontSize: 12 }}>{subtitle}</div>
        )}
      </div>
      {right}
    </button>
  );
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mt-2 mb-2">
      <div style={{ color: C.text, fontSize: 15 }}>{children}</div>
      {action && <div style={{ color: C.royal, fontSize: 12 }}>{action}</div>}
    </div>
  );
}

const NAV_TABS: { id: ScreenName | "Add"; label: string; icon: any }[] = [
  { id: "HomeDashboard", label: "Home", icon: Home },
  { id: "VaultExplorer", label: "Vault", icon: FolderLock },
  { id: "Add", label: "Add", icon: Plus },
  { id: "RemindersTasks", label: "Reminders", icon: Bell },
  { id: "Reports", label: "Reports", icon: BarChart3 },
];

export function FixedBottomNavBar() {
  const { screen, go, setShowAddSheet } = useNav();
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-2 pt-2 pb-3"
      style={{
        background: "#FFFFFF",
        borderTop: `1px solid ${C.divider}`,
        boxShadow: "0 -4px 16px rgba(91,27,115,0.05)",
      }}
    >
      {NAV_TABS.map((t) => {
        const Icon = t.icon;
        const isActive = t.id === screen;
        if (t.id === "Add") {
          return (
            <button
              key="Add"
              onClick={() => setShowAddSheet(true)}
              className="flex flex-col items-center gap-0.5"
            >
              <div
                className="size-12 rounded-2xl flex items-center justify-center"
                style={{ background: C.action, boxShadow: "0 6px 14px rgba(139,92,246,0.4)" }}
              >
                <Plus className="size-6 text-white" strokeWidth={2.5} />
              </div>
            </button>
          );
        }
        return (
          <button
            key={t.id}
            onClick={() => go(t.id as ScreenName)}
            className="flex flex-col items-center gap-0.5 px-3 py-1"
          >
            <Icon className="size-5" style={{ color: isActive ? C.primary : C.textMuted }} />
            <div style={{ fontSize: 10, color: isActive ? C.primary : C.textMuted }}>{t.label}</div>
          </button>
        );
      })}
    </div>
  );
}

export function AppScaffold({ children, withNav = true }: { children: ReactNode; withNav?: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: C.bg }}>
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
      {withNav && <FixedBottomNavBar />}
      <AddActionSheet />
    </div>
  );
}

export function AuthScaffold({ children }: { children: ReactNode }) {
  return (
    <div
      className="absolute inset-0 overflow-y-auto px-6 pt-14 pb-10"
      style={{
        background: `linear-gradient(180deg, ${C.bg} 0%, ${C.lavSurface} 100%)`,
      }}
    >
      {children}
    </div>
  );
}

export function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-3xl p-5"
      style={{
        background: "#fff",
        border: `1px solid ${C.lavBorder}`,
        boxShadow: "0 12px 30px rgba(91,27,115,0.07)",
      }}
    >
      {children}
    </div>
  );
}

export function PrimaryButton({ children, onClick, disabled }: { children: ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-2xl py-3.5 text-white"
      style={{
        background: disabled ? "#C9B8E8" : `linear-gradient(135deg, ${C.royal}, ${C.primary})`,
        boxShadow: disabled ? "none" : "0 8px 18px rgba(124,58,237,0.25)",
        fontSize: 15,
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl py-3.5"
      style={{
        background: C.lavPale,
        color: C.deep,
        border: `1px solid ${C.lavBorder}`,
        fontSize: 15,
      }}
    >
      {children}
    </button>
  );
}

export function SecureVaultChip({ children }: { children: ReactNode }) {
  return (
    <span
      className="px-3 py-1 rounded-full"
      style={{ background: "rgba(255,255,255,0.16)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: 11 }}
    >
      {children}
    </span>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-3">
      <div className="mb-1.5" style={{ fontSize: 12, color: C.text2 }}>{label}</div>
      {children}
    </div>
  );
}

export function Input({ placeholder, type = "text", defaultValue }: { placeholder?: string; type?: string; defaultValue?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="w-full rounded-xl px-4 py-3 outline-none"
      style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}`, color: C.text, fontSize: 14 }}
    />
  );
}

export function OTPInput({ length = 6 }: { length?: number }) {
  return (
    <div className="flex gap-2 justify-between">
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          className="size-12 rounded-xl flex items-center justify-center"
          style={{
            background: C.lavSurface,
            border: `1px solid ${C.lavBorder}`,
            color: C.text,
            fontSize: 18,
          }}
        >
          {i < 3 ? "•" : ""}
        </div>
      ))}
    </div>
  );
}

export function AddActionSheet() {
  const { showAddSheet, setShowAddSheet, go } = useNav();
  if (!showAddSheet) return null;
  const items: { icon: any; title: string; sub: string; target: ScreenName }[] = [
    { icon: ScanLine, title: "Scan Document", sub: "Capture and extract details from a document", target: "AddRecord" },
    { icon: Camera, title: "Take a Picture", sub: "Photograph a document, bill, policy, warranty, or task paperwork", target: "AddRecord" },
    { icon: ImageIcon, title: "Choose from Library", sub: "Select an image from photos", target: "AddRecord" },
    { icon: FileUp, title: "Import from Files", sub: "Add PDF, image, checklist, or saved document", target: "AddRecord" },
    { icon: PenLine, title: "Add Manually", sub: "Enter details without uploading anything", target: "AddRecord" },
    { icon: BellPlus, title: "Add Reminder", sub: "Create renewal, expiry, bill, review, or follow-up reminder", target: "AddReminder" },
    { icon: ListTodo, title: "Add Task", sub: "Create personal, household, work, or shared task", target: "AddTask" },
    { icon: Users, title: "Add Shared Item", sub: "Family bill, trip cost, responsibility, shared task, or shared record", target: "AddSharedItem" },
  ];
  return (
    <div className="absolute inset-0 z-50 flex items-end" style={{ background: "rgba(30,18,51,0.45)" }} onClick={() => setShowAddSheet(false)}>
      <div
        className="w-full rounded-t-3xl px-5 pt-3 pb-5 max-h-[85%] overflow-y-auto"
        style={{ background: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto w-10 h-1.5 rounded-full mb-4" style={{ background: C.lavBorder }} />
        <div style={{ color: C.text, fontSize: 18 }}>What would you like to add?</div>
        <div style={{ color: C.text2, fontSize: 13 }} className="mb-4">Scan, upload, or create a record manually.</div>
        <div className="space-y-1">
          {items.map((it) => {
            const I = it.icon;
            return (
              <button
                key={it.title}
                onClick={() => { setShowAddSheet(false); go(it.target); }}
                className="w-full flex items-center gap-3 py-2.5 px-2 rounded-xl text-left hover:bg-[#F7F2FF]"
              >
                <div
                  className="size-10 rounded-xl flex items-center justify-center"
                  style={{ background: C.lavPale, color: C.royal, border: `1px solid ${C.lavBorder}` }}
                >
                  <I className="size-5" />
                </div>
                <div className="flex-1">
                  <div style={{ color: C.text, fontSize: 14 }}>{it.title}</div>
                  <div style={{ color: C.text2, fontSize: 12 }}>{it.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setShowAddSheet(false)}
          className="w-full mt-3 py-3 rounded-2xl"
          style={{ background: C.lavPale, color: C.deep, fontSize: 15 }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export function PageHeaderSimple({ title, subtitle, onBack, right }: { title: string; subtitle?: string; onBack?: () => void; right?: ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 pt-12 pb-4" style={{ background: "#fff", borderBottom: `1px solid ${C.divider}` }}>
      <div className="flex items-center gap-2">
        {onBack && (
          <button onClick={onBack} style={{ color: C.deep }}>
            <ChevronLeft className="size-6" />
          </button>
        )}
        <div>
          <div style={{ color: C.text, fontSize: 18 }}>{title}</div>
          {subtitle && <div style={{ color: C.text2, fontSize: 12 }}>{subtitle}</div>}
        </div>
      </div>
      {right}
    </div>
  );
}

export function ScreenContainer({ children, scroll = true }: { children: ReactNode; scroll?: boolean }) {
  return (
    <div className={`flex-1 ${scroll ? "overflow-y-auto" : ""} px-5 py-4 pb-28`} style={{ background: C.bg }}>
      {children}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-4 ${className}`}
      style={{ background: "#fff", border: `1px solid ${C.lavBorder}`, boxShadow: "0 4px 12px rgba(91,27,115,0.04)" }}
    >
      {children}
    </div>
  );
}

export function HeaderIcon({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="size-9 rounded-full flex items-center justify-center"
      style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
    >
      {children}
    </button>
  );
}

export { SettingsIcon, X };
