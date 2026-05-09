import { useState } from "react";
import {
  User, Receipt, FileText, Home as HomeIcon, Car, Shield, Briefcase, Users,
  Plane, Wallet, Settings as SettingsCog, ChevronRight, FileCheck, Calendar,
  AlertTriangle, Upload, Camera, PenLine, Edit2, Trash2, History, Download,
  Eye, ChevronDown, Check, Bell, ListTodo
} from "lucide-react";
import { useNav } from "./nav";
import {
  AppScaffold, SlackStyleHeader, RoundedContentSheet, FilterChipRow, CategoryCarousel,
  ListRow, StatusBadge, SectionTitle, C, Card, HeaderIcon, PrimaryButton, GhostButton,
  PageHeaderSimple, ScreenContainer, Field, Input
} from "./shell";

export function HomeDashboard() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  const cats = [
    { label: "Identity", icon: <User className="size-6" /> },
    { label: "Bills", icon: <Receipt className="size-6" /> },
    { label: "Policies", icon: <Shield className="size-6" /> },
    { label: "Property", icon: <HomeIcon className="size-6" /> },
    { label: "Vehicles", icon: <Car className="size-6" /> },
    { label: "Warranties", icon: <FileCheck className="size-6" /> },
    { label: "Assets", icon: <Wallet className="size-6" /> },
    { label: "Tasks", icon: <ListTodo className="size-6" /> },
    { label: "Family", icon: <Users className="size-6" /> },
    { label: "Tax", icon: <Briefcase className="size-6" /> },
    { label: "Travel", icon: <Plane className="size-6" /> },
  ];
  const attention = [
    { t: "British Passport", s: "Identity & Legal • Expires 12 Oct 2026", b: "urgent", l: "Urgent" },
    { t: "Car Insurance — Aviva", s: "Renewal due 28 Oct 2026", b: "due", l: "Due Soon" },
    { t: "Electricity Bill — Octopus Energy", s: "Due this week", b: "review", l: "Pending" },
    { t: "Home Insurance — AXA", s: "Renews 18 Jun 2026", b: "review", l: "Review" },
    { t: "Boiler Warranty — British Gas", s: "Warranty expires soon", b: "expiring", l: "Expiring" },
    { t: "Mortgage Rate Review — Halifax", s: "15 Jan 2027", b: "info", l: "Task" },
  ];
  const tasks = [
    "Compare car insurance quotes",
    "Upload updated MOT certificate",
    "Call Halifax about mortgage rate",
    "Review broadband renewal",
  ];
  return (
    <AppScaffold>
      <SlackStyleHeader
        title="LedgerAI"
        subtitle="Your private life-admin vault"
        search="Search documents, bills, policies…"
        rightIcon={<HeaderIcon onClick={() => go("Profile")}><User className="size-4" /></HeaderIcon>}
      />
      <RoundedContentSheet>
        <SectionTitle>Categories</SectionTitle>
        <CategoryCarousel items={cats} onTap={() => go("CategoryDetail")} />
        <FilterChipRow
          chips={["All", "Needs Review", "Expiring Soon", "Due This Month", "Tasks", "Shared", "Favourites"]}
          active={filter}
          onChange={setFilter}
        />
        <Card className="mb-4 !p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div style={{ color: C.text, fontSize: 15 }}>Life Admin Health</div>
              <div style={{ color: C.text2, fontSize: 12 }}>You're 84% organised</div>
            </div>
            <div
              className="size-12 rounded-full flex items-center justify-center"
              style={{ background: `conic-gradient(${C.primary} 84%, ${C.lavPale} 0)`, color: "#fff", fontSize: 12 }}
            >
              <div className="size-9 rounded-full flex items-center justify-center" style={{ background: "#fff", color: C.deep }}>
                84%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { n: "42", l: "Records" },
              { n: "3", l: "Need review" },
              { n: "2", l: "Renewals" },
              { n: "4", l: "Tasks" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl py-2 text-center" style={{ background: C.lavSurface }}>
                <div style={{ color: C.deep, fontSize: 16 }}>{s.n}</div>
                <div style={{ color: C.text2, fontSize: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>
        <SectionTitle action="View all">Needs Attention</SectionTitle>
        <div className="space-y-1 mb-4">
          {attention.map((a) => (
            <ListRow
              key={a.t}
              icon={<AlertTriangle className="size-5" />}
              title={a.t}
              subtitle={a.s}
              badge={<StatusBadge kind={a.b as any}>{a.l}</StatusBadge>}
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("RecordDetail")}
            />
          ))}
        </div>
        <SectionTitle action="View all">Upcoming Tasks</SectionTitle>
        <div className="space-y-1">
          {tasks.map((t) => (
            <ListRow
              key={t}
              icon={<ListTodo className="size-5" />}
              title={t}
              subtitle="Due this week"
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("TaskDetail")}
            />
          ))}
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

const VAULT_CATS = [
  "Identity & Legal", "Home & Property", "Vehicles", "Insurance", "Bills",
  "Work & Tax", "Assets", "Family", "Emergency Pack",
];

const VAULT_ROWS = [
  { t: "British Passport", s: "HM Passport Office • 12 Oct 2026", b: "urgent", l: "Expiring", icon: <User className="size-5" /> },
  { t: "UK Driving Licence", s: "DVLA • 21 Nov 2031", b: "active", l: "Active", icon: <User className="size-5" /> },
  { t: "Home Insurance Policy", s: "AXA • 18 Jun 2026", b: "review", l: "Review", icon: <Shield className="size-5" /> },
  { t: "Car Insurance Policy", s: "Aviva • 28 Oct 2026", b: "due", l: "Due Soon", icon: <Car className="size-5" /> },
  { t: "Mortgage Agreement", s: "Halifax • Active", b: "active", l: "Active", icon: <HomeIcon className="size-5" /> },
  { t: "Electricity Bill", s: "Octopus Energy • Due this week", b: "review", l: "Pending", icon: <Receipt className="size-5" /> },
  { t: "Broadband Contract", s: "Virgin Media • 02 Sep 2026", b: "active", l: "Active", icon: <Receipt className="size-5" /> },
  { t: "Council Tax Bill", s: "Milton Keynes Council • 20 Sep 2026", b: "active", l: "Active", icon: <Receipt className="size-5" /> },
  { t: "MOT Certificate", s: "DVSA • 15 Jul 2026", b: "expiring", l: "Expiring", icon: <Car className="size-5" /> },
  { t: "V5C Logbook", s: "DVLA • Active", b: "active", l: "Active", icon: <Car className="size-5" /> },
  { t: "Solar Installation Documents", s: "Home & Property", b: "active", l: "Active", icon: <HomeIcon className="size-5" /> },
  { t: "Boiler Warranty", s: "British Gas • Expiring soon", b: "expiring", l: "Expiring", icon: <FileCheck className="size-5" /> },
  { t: "P60 Tax Document", s: "HMRC • 2025–2026", b: "active", l: "Active", icon: <Briefcase className="size-5" /> },
  { t: "Employment Contract", s: "Work & Tax", b: "active", l: "Active", icon: <Briefcase className="size-5" /> },
  { t: "Travel Insurance", s: "Aviva • Active", b: "active", l: "Active", icon: <Plane className="size-5" /> },
  { t: "Food Trailer Equipment Invoice", s: "Assets • £4,500", b: "info", l: "Asset", icon: <Wallet className="size-5" /> },
];

export function VaultExplorer() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  const cats = VAULT_CATS.map((label) => ({ label, icon: <FileText className="size-6" /> }));
  return (
    <AppScaffold>
      <SlackStyleHeader
        title="Vault"
        subtitle="Your private life records"
        search="Search documents, bills, policies…"
        rightIcon={<HeaderIcon onClick={() => go("Settings")}><SettingsCog className="size-4" /></HeaderIcon>}
      />
      <RoundedContentSheet>
        <SectionTitle>Categories</SectionTitle>
        <CategoryCarousel items={cats} onTap={() => go("CategoryDetail")} />
        <FilterChipRow
          chips={["All", "Active", "Expiring", "Review", "Recent", "Favourites", "Archived", "Historical", "Replaced"]}
          active={filter}
          onChange={setFilter}
        />
        <SectionTitle>{VAULT_ROWS.length} records</SectionTitle>
        <div className="space-y-1">
          {VAULT_ROWS.map((r) => (
            <ListRow
              key={r.t}
              icon={r.icon}
              title={r.t}
              subtitle={r.s}
              badge={<StatusBadge kind={r.b as any}>{r.l}</StatusBadge>}
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("RecordDetail")}
            />
          ))}
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function CategoryDetail() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  const rows = [
    { t: "British Passport", s: "Expires 12 Oct 2026", b: "urgent", l: "Expiring" },
    { t: "UK Driving Licence", s: "DVLA • 21 Nov 2031", b: "active", l: "Active" },
    { t: "Visa / BRP", s: "Active", b: "active", l: "Active" },
    { t: "Birth Certificate", s: "Stored", b: "active", l: "Active" },
    { t: "Marriage Certificate", s: "Stored", b: "active", l: "Active" },
  ];
  return (
    <AppScaffold>
      <SlackStyleHeader
        title="Identity & Legal"
        subtitle="Personal identity documents"
        search="Search in this category…"
        onBack={() => go("VaultExplorer")}
      />
      <RoundedContentSheet>
        <FilterChipRow chips={["All", "Active", "Expiring", "Review", "Archived"]} active={filter} onChange={setFilter} />
        <div className="space-y-1">
          {rows.map((r) => (
            <ListRow
              key={r.t}
              icon={<User className="size-5" />}
              title={r.t}
              subtitle={r.s}
              badge={<StatusBadge kind={r.b as any}>{r.l}</StatusBadge>}
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("RecordDetail")}
            />
          ))}
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function SearchResults() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  return (
    <AppScaffold>
      <SlackStyleHeader title="Search" subtitle="Across your vault" search="passport" onBack={() => go("HomeDashboard")} />
      <RoundedContentSheet>
        <FilterChipRow chips={["All", "Documents", "Bills", "Policies", "Tasks", "Reminders", "Shared", "Notes"]} active={filter} onChange={setFilter} />
        <SectionTitle>3 results</SectionTitle>
        <div className="space-y-1">
          <ListRow icon={<User className="size-5" />} title="British Passport" subtitle="Identity & Legal • 12 Oct 2026" badge={<StatusBadge kind="urgent">Expiring</StatusBadge>} onClick={() => go("RecordDetail")} />
          <ListRow icon={<ListTodo className="size-5" />} title="Add kids passport copies" subtitle="Task • Family" badge={<StatusBadge kind="info">Task</StatusBadge>} onClick={() => go("TaskDetail")} />
          <ListRow icon={<Bell className="size-5" />} title="Passport renewal review" subtitle="Reminder • 12 Sep 2026" badge={<StatusBadge kind="due">Due Soon</StatusBadge>} onClick={() => go("ReminderDetail")} />
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function AddRecord() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Add Record" subtitle="Upload, scan, or enter details manually" onBack={() => go("HomeDashboard")} />
      <ScreenContainer>
        <div className="flex items-center gap-2 mb-4">
          {["Type", "Details", "Review"].map((s, i) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div className="size-7 rounded-full flex items-center justify-center" style={{ background: i === 0 ? C.primary : C.lavPale, color: i === 0 ? "#fff" : C.deep, fontSize: 12 }}>{i + 1}</div>
              <div style={{ fontSize: 12, color: i === 0 ? C.text : C.text2 }}>{s}</div>
              {i < 2 && <div className="flex-1 h-px" style={{ background: C.lavBorder }} />}
            </div>
          ))}
        </div>

        <Card className="mb-3">
          <Field label="Category">
            <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}` }}>
              <span style={{ color: C.text, fontSize: 14 }}>Identity & Legal</span>
              <ChevronDown className="size-4" style={{ color: C.textMuted }} />
            </div>
          </Field>
          <Field label="Record Type">
            <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}` }}>
              <span style={{ color: C.text, fontSize: 14 }}>Passport</span>
              <ChevronDown className="size-4" style={{ color: C.textMuted }} />
            </div>
          </Field>
        </Card>

        <SectionTitle>Input method</SectionTitle>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[{ I: Upload, l: "Upload File" }, { I: Camera, l: "Use Camera" }, { I: PenLine, l: "Enter Manually" }].map((m) => {
            const I = m.I;
            return (
              <Card key={m.l} className="!p-3 text-center">
                <div className="size-10 mx-auto rounded-xl flex items-center justify-center mb-2" style={{ background: C.lavPale, color: C.royal }}>
                  <I className="size-5" />
                </div>
                <div style={{ color: C.text, fontSize: 12 }}>{m.l}</div>
              </Card>
            );
          })}
        </div>

        {[
          { title: "Basic Details", fields: ["Title", "Provider/Issuer", "Reference number"] },
          { title: "Important Dates", fields: ["Issue date", "Expiry date", "Renewal date"] },
          { title: "Payment / Policy Details", fields: ["Amount", "Policy number", "Frequency"] },
          { title: "Attachments", fields: ["Add file"] },
          { title: "Reminders", fields: ["Reminder before expiry"] },
          { title: "Related Tasks", fields: ["Linked task"] },
          { title: "Notes", fields: ["Notes"] },
        ].map((s) => (
          <Card key={s.title} className="mb-3">
            <SectionTitle>{s.title}</SectionTitle>
            {s.fields.map((f) => (
              <Field key={f} label={f}><Input placeholder={f} /></Field>
            ))}
          </Card>
        ))}

        <div className="flex gap-2">
          <button className="flex-1 rounded-2xl py-3" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 14 }}>Save Draft</button>
          <button className="flex-1 rounded-2xl py-3 text-white" style={{ background: C.primary, fontSize: 14 }} onClick={() => go("ReviewExtraction")}>Continue</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ReviewExtraction() {
  const { go } = useNav();
  const fields = [
    { l: "Document type", v: "Passport", c: "high" },
    { l: "Full name", v: "Shiv Patel", c: "high" },
    { l: "Passport number", v: "P12345678", c: "med" },
    { l: "Issue date", v: "15 Mar 2016", c: "med" },
    { l: "Expiry date", v: "12 Oct 2026", c: "high" },
    { l: "Nationality", v: "—", c: "missing" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Review Details" subtitle="We found some details. Please check before saving." onBack={() => go("AddRecord")} />
      <ScreenContainer>
        <Card className="mb-3 !p-3">
          <div className="rounded-xl flex items-center justify-center h-40 mb-2" style={{ background: C.lavSurface, border: `1px dashed ${C.lavBorder}` }}>
            <FileText className="size-10" style={{ color: C.textMuted }} />
          </div>
          <div className="flex items-center justify-between">
            <div style={{ color: C.text2, fontSize: 12 }}>passport-scan.pdf</div>
            <button className="flex items-center gap-1" style={{ color: C.royal, fontSize: 12 }}><Eye className="size-3.5" /> View original</button>
          </div>
        </Card>
        <Card>
          {fields.map((f) => (
            <div key={f.l} className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: C.divider }}>
              <div>
                <div style={{ color: C.text2, fontSize: 11 }}>{f.l}</div>
                <div style={{ color: C.text, fontSize: 14 }}>{f.v}</div>
              </div>
              <div className="flex items-center gap-2">
                {f.c === "high" && <StatusBadge kind="success">High</StatusBadge>}
                {f.c === "med" && <StatusBadge kind="review">Medium</StatusBadge>}
                {f.c === "missing" && <StatusBadge kind="urgent">Needs input</StatusBadge>}
                <Edit2 className="size-4" style={{ color: C.textMuted }} />
              </div>
            </div>
          ))}
        </Card>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 rounded-2xl py-3" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 13 }}>Save Draft</button>
          <button className="flex-1 rounded-2xl py-3" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 13 }} onClick={() => go("EditRecord")}>Edit Details</button>
          <button className="flex-1 rounded-2xl py-3 text-white" style={{ background: C.primary, fontSize: 13 }} onClick={() => go("RecordDetail")}>Confirm & Save</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function RecordDetail() {
  const { go } = useNav();
  const sections = [
    { title: "Key Details", rows: [["Document", "British Passport"], ["Name", "Shiv Patel"], ["Number", "P12345678"]] },
    { title: "Important Dates", rows: [["Issued", "15 Mar 2016"], ["Expires", "12 Oct 2026"]] },
    { title: "Notes", rows: [["", "Renewal reminder set 6 months ahead."]] },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Record" onBack={() => go("VaultExplorer")} right={<button onClick={() => go("EditRecord")} style={{ color: C.royal, fontSize: 13 }}>Edit</button>} />
      <ScreenContainer>
        <div
          className="rounded-3xl p-5 mb-4 text-white"
          style={{ background: `linear-gradient(135deg, ${C.plum}, ${C.royal})`, boxShadow: "0 12px 30px rgba(91,27,115,0.18)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div style={{ fontSize: 11, opacity: 0.85 }}>BRITISH PASSPORT</div>
            <Shield className="size-5 opacity-80" />
          </div>
          <div style={{ fontSize: 22 }}>Shiv Patel</div>
          <div style={{ fontSize: 12, opacity: 0.85 }} className="mt-1">P12345678</div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>EXPIRES</div>
              <div style={{ fontSize: 13 }}>12 Oct 2026</div>
            </div>
            <StatusBadge kind="urgent">Expiring soon</StatusBadge>
          </div>
        </div>

        {sections.map((s) => (
          <Card key={s.title} className="mb-3">
            <SectionTitle>{s.title}</SectionTitle>
            {s.rows.map(([k, v], i) => (
              <div key={i} className="flex justify-between py-1.5">
                {k && <div style={{ color: C.text2, fontSize: 12 }}>{k}</div>}
                <div style={{ color: C.text, fontSize: 13 }} className="text-right flex-1">{v}</div>
              </div>
            ))}
          </Card>
        ))}

        <Card className="mb-3">
          <SectionTitle action={<button onClick={() => go("VersionHistory")}>View</button>}>Version History</SectionTitle>
          <div style={{ color: C.text2, fontSize: 12 }}>1 active, 0 historical</div>
        </Card>

        <Card className="mb-3">
          <SectionTitle action={<button onClick={() => go("ProviderContacts")}>Open</button>}>Provider Contacts</SectionTitle>
          <div style={{ color: C.text, fontSize: 13 }}>HM Passport Office</div>
        </Card>

        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { I: Edit2, l: "Edit", a: () => go("EditRecord") },
            { I: Bell, l: "Reminder", a: () => go("AddReminder") },
            { I: ListTodo, l: "Task", a: () => go("AddTask") },
            { I: History, l: "Replace", a: () => go("ReplaceRenewRecord") },
            { I: Download, l: "Export", a: () => {} },
            { I: Trash2, l: "Archive", a: () => {} },
          ].map((b) => {
            const I = b.I;
            return (
              <button key={b.l} onClick={b.a} className="rounded-xl py-3 flex flex-col items-center gap-1" style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}` }}>
                <I className="size-4" style={{ color: C.royal }} />
                <span style={{ color: C.deep, fontSize: 11 }}>{b.l}</span>
              </button>
            );
          })}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function EditRecord() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Edit Record" onBack={() => go("RecordDetail")} />
      <ScreenContainer>
        <Card>
          <Field label="Title"><Input defaultValue="British Passport" /></Field>
          <Field label="Provider"><Input defaultValue="HM Passport Office" /></Field>
          <Field label="Number"><Input defaultValue="P12345678" /></Field>
          <Field label="Expiry date"><Input defaultValue="12 Oct 2026" /></Field>
          <Field label="Notes"><Input placeholder="Add notes…" /></Field>
        </Card>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 rounded-2xl py-3" style={{ background: C.lavPale, color: C.deep, fontSize: 14 }}>Cancel</button>
          <button className="flex-1 rounded-2xl py-3 text-white" style={{ background: C.primary, fontSize: 14 }} onClick={() => go("RecordDetail")}>Save Record</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ReplaceRenewRecord() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Replace / Renew" subtitle="Add a new version of this record" onBack={() => go("RecordDetail")} />
      <ScreenContainer>
        <Card className="mb-3">
          <SectionTitle>Current</SectionTitle>
          <div style={{ color: C.text, fontSize: 14 }}>British Passport</div>
          <div style={{ color: C.text2, fontSize: 12 }}>Expires 12 Oct 2026</div>
        </Card>
        <Card className="mb-3">
          <SectionTitle>New version</SectionTitle>
          <Field label="New expiry"><Input placeholder="12 Oct 2036" /></Field>
          <Field label="Replacement reason">
            <div className="rounded-xl px-4 py-3" style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}`, color: C.text, fontSize: 14 }}>Renewal</div>
          </Field>
          <Field label="Attach new document"><Input placeholder="Upload PDF or photo" /></Field>
        </Card>
        <PrimaryButton onClick={() => go("VersionHistory")}>Replace document</PrimaryButton>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function VersionHistory() {
  const { go } = useNav();
  const versions = [
    { t: "Home Insurance 2026", d: "Active • Renewed 18 Jun 2026", b: "active", l: "Active" },
    { t: "Home Insurance 2025", d: "Replaced 18 Jun 2026", b: "draft", l: "Replaced" },
    { t: "Council Tax 2026", d: "Active", b: "active", l: "Active" },
    { t: "Council Tax 2025", d: "Historical", b: "draft", l: "Historical" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Version History" onBack={() => go("RecordDetail")} />
      <ScreenContainer>
        {versions.map((v) => (
          <Card key={v.t} className="mb-2 flex items-center gap-3">
            <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: C.lavPale, color: C.royal }}>
              <History className="size-5" />
            </div>
            <div className="flex-1">
              <div style={{ color: C.text, fontSize: 14 }}>{v.t}</div>
              <div style={{ color: C.text2, fontSize: 12 }}>{v.d}</div>
            </div>
            <StatusBadge kind={v.b as any}>{v.l}</StatusBadge>
          </Card>
        ))}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>View</button>
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>Restore</button>
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>Compare</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ReviewQueue() {
  const { go } = useNav();
  const rows = [
    { t: "Passport scan", s: "Missing nationality", b: "urgent", l: "Needs input" },
    { t: "Home insurance", s: "Renewal date unclear", b: "review", l: "Low confidence" },
    { t: "Electricity bill", s: "Account number not found", b: "urgent", l: "Needs input" },
    { t: "Mortgage letter", s: "Provider detected, rate missing", b: "review", l: "Low confidence" },
    { t: "Boiler warranty", s: "All fields detected", b: "success", l: "Ready to save" },
    { t: "Travel insurance", s: "Saved as draft", b: "draft", l: "Draft" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Review Queue" subtitle={`${rows.length} items need attention`} onBack={() => go("HomeDashboard")} />
      <ScreenContainer>
        <div className="space-y-2">
          {rows.map((r) => (
            <Card key={r.t} className="flex items-center gap-3 !p-3">
              <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: C.lavPale, color: C.royal }}>
                <FileCheck className="size-5" />
              </div>
              <div className="flex-1">
                <div style={{ color: C.text, fontSize: 14 }}>{r.t}</div>
                <div style={{ color: C.text2, fontSize: 12 }}>{r.s}</div>
              </div>
              <StatusBadge kind={r.b as any}>{r.l}</StatusBadge>
              <button className="px-3 py-1.5 rounded-full" style={{ background: C.primary, color: "#fff", fontSize: 12 }} onClick={() => go("ReviewExtraction")}>Review</button>
            </Card>
          ))}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}
