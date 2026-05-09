import { useState } from "react";
import {
  Bell, ListTodo, Calendar, ChevronRight, Users, Plus, Download, Upload,
  FileText, Phone, Mail, Globe, Shield, AlertTriangle, Camera, Folder,
  Fingerprint, BellRing, Clock, CheckCircle2, AlertOctagon, FolderOpen,
  Search, BarChart3, TrendingUp, FileBarChart, Wrench, Home as HomeIcon,
  Briefcase, Wallet, Plane, Car, Receipt
} from "lucide-react";
import { useNav } from "./nav";
import {
  AppScaffold, SlackStyleHeader, RoundedContentSheet, FilterChipRow, ListRow,
  StatusBadge, SectionTitle, C, Card, HeaderIcon, PrimaryButton, GhostButton,
  PageHeaderSimple, ScreenContainer, Field, Input, AuthScaffold, AuthCard
} from "./shell";

// REMINDERS & TASKS
export function RemindersTasks() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  const groups: { title: string; items: { t: string; s: string; b: string; l: string }[] }[] = [
    { title: "Today", items: [
      { t: "Electricity bill due", s: "Octopus Energy • Today", b: "urgent", l: "Today" },
      { t: "Pay council tax instalment", s: "MK Council • Today", b: "urgent", l: "Today" },
    ]},
    { title: "This Week", items: [
      { t: "Passport renewal review", s: "12 Oct 2026 • In 6 days", b: "due", l: "Due Soon" },
      { t: "Compare car insurance quotes", s: "Aviva • In 4 days", b: "due", l: "Due Soon" },
      { t: "Upload updated MOT certificate", s: "DVSA • In 5 days", b: "review", l: "Task" },
      { t: "Submit self-assessment documents", s: "HMRC • In 7 days", b: "review", l: "Task" },
    ]},
    { title: "Later", items: [
      { t: "Car insurance renewal", s: "28 Oct 2026", b: "active", l: "Upcoming" },
      { t: "Mortgage fixed rate review", s: "15 Jan 2027", b: "active", l: "Upcoming" },
      { t: "Boiler warranty expiry", s: "20 Sep 2026", b: "expiring", l: "Expiring" },
      { t: "Replace boiler warranty paperwork", s: "Linked task", b: "info", l: "Task" },
      { t: "Review broadband renewal options", s: "02 Sep 2026", b: "review", l: "Task" },
      { t: "Add kids passport copies", s: "Family", b: "info", l: "Task" },
      { t: "Book annual boiler service", s: "Home", b: "info", l: "Task" },
      { t: "Upload food trailer invoice", s: "Assets", b: "info", l: "Task" },
    ]},
    { title: "Completed", items: [
      { t: "Call Halifax about mortgage rate", s: "Completed yesterday", b: "success", l: "Done" },
      { t: "MOT certificate expiry", s: "Completed", b: "success", l: "Done" },
    ]},
  ];
  return (
    <AppScaffold>
      <SlackStyleHeader
        title="Reminders & Tasks"
        subtitle="Stay ahead of your life admin"
        search="Search reminders and tasks…"
        rightIcon={<HeaderIcon onClick={() => go("Tasks")}><ListTodo className="size-4" /></HeaderIcon>}
      />
      <RoundedContentSheet>
        <FilterChipRow chips={["All", "Today", "Urgent", "Tasks", "Bills", "Policies", "Shared", "Completed"]} active={filter} onChange={setFilter} />
        {groups.map((g) => (
          <div key={g.title} className="mb-4">
            <SectionTitle>{g.title}</SectionTitle>
            <div className="space-y-1">
              {g.items.map((it) => (
                <ListRow
                  key={it.t}
                  icon={<Bell className="size-5" />}
                  title={it.t}
                  subtitle={it.s}
                  badge={<StatusBadge kind={it.b as any}>{it.l}</StatusBadge>}
                  right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
                  onClick={() => go("ReminderDetail")}
                />
              ))}
            </div>
          </div>
        ))}
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function AddReminder() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Add Reminder" onBack={() => go("RemindersTasks")} />
      <ScreenContainer>
        <Card>
          <Field label="Title"><Input placeholder="e.g. Renew passport" /></Field>
          <Field label="Related record"><Input placeholder="British Passport" /></Field>
          <Field label="Due date"><Input placeholder="12 Oct 2026" /></Field>
          <Field label="Repeat"><Input defaultValue="Yearly" /></Field>
          <Field label="Priority"><Input defaultValue="High" /></Field>
          <Field label="Alert time"><Input defaultValue="9:00 AM, 30 days before" /></Field>
          <Field label="Notes"><Input placeholder="Notes" /></Field>
        </Card>
        <div className="mt-4">
          <PrimaryButton onClick={() => go("RemindersTasks")}>Save Reminder</PrimaryButton>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ReminderDetail() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Reminder" onBack={() => go("RemindersTasks")} />
      <ScreenContainer>
        <Card className="mb-3">
          <div className="flex items-center justify-between">
            <div>
              <div style={{ color: C.text, fontSize: 16 }}>Passport renewal review</div>
              <div style={{ color: C.text2, fontSize: 12 }}>British Passport • Identity & Legal</div>
            </div>
            <StatusBadge kind="due">Due Soon</StatusBadge>
          </div>
        </Card>
        <Card className="mb-3">
          {[
            ["Due", "12 Oct 2026"],
            ["Repeat", "Yearly"],
            ["Priority", "High"],
            ["Alert", "30 days before"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5">
              <div style={{ color: C.text2, fontSize: 12 }}>{k}</div>
              <div style={{ color: C.text, fontSize: 13 }}>{v}</div>
            </div>
          ))}
        </Card>
        <div className="grid grid-cols-3 gap-2">
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>Snooze</button>
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>Edit</button>
          <button className="rounded-xl py-2.5" style={{ background: C.success, color: "#fff", fontSize: 12 }}>Complete</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function Tasks() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  const items = [
    { t: "Compare car insurance quotes", s: "Aviva • Due in 4 days", b: "due", l: "Due Soon" },
    { t: "Upload updated MOT certificate", s: "DVSA • Due in 5 days", b: "review", l: "To Do" },
    { t: "Submit self-assessment documents", s: "HMRC • Due in 7 days", b: "review", l: "In Progress" },
    { t: "Replace boiler warranty paperwork", s: "Home", b: "info", l: "Waiting" },
    { t: "Pay council tax instalment", s: "MK Council • Today", b: "urgent", l: "Due" },
    { t: "Book annual boiler service", s: "Home", b: "info", l: "To Do" },
    { t: "Add kids passport copies", s: "Family", b: "info", l: "To Do" },
    { t: "Upload food trailer invoice", s: "Assets", b: "info", l: "To Do" },
  ];
  return (
    <AppScaffold>
      <SlackStyleHeader title="Tasks" subtitle="What needs your attention" search="Search tasks…" onBack={() => go("RemindersTasks")} />
      <RoundedContentSheet>
        <FilterChipRow chips={["All", "To Do", "In Progress", "Waiting", "Due Soon", "Completed"]} active={filter} onChange={setFilter} />
        <div className="space-y-1">
          {items.map((i) => (
            <ListRow
              key={i.t}
              icon={<ListTodo className="size-5" />}
              title={i.t}
              subtitle={i.s}
              badge={<StatusBadge kind={i.b as any}>{i.l}</StatusBadge>}
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("TaskDetail")}
            />
          ))}
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function AddTask() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Add Task" onBack={() => go("Tasks")} />
      <ScreenContainer>
        <Card>
          <Field label="Task title"><Input placeholder="e.g. Compare car insurance quotes" /></Field>
          <Field label="Related record"><Input placeholder="Car Insurance — Aviva" /></Field>
          <Field label="Due date"><Input placeholder="28 Oct 2026" /></Field>
          <Field label="Priority"><Input defaultValue="High" /></Field>
          <Field label="Assignee"><Input defaultValue="Shiv" /></Field>
          <Field label="Notes"><Input placeholder="Notes" /></Field>
        </Card>
        <Card className="mt-3">
          <SectionTitle>Checklist subtasks</SectionTitle>
          {["Get 3 quotes", "Compare cover", "Confirm renewal"].map((c) => (
            <label key={c} className="flex items-center gap-2 py-2" style={{ fontSize: 13, color: C.text }}>
              <input type="checkbox" /> {c}
            </label>
          ))}
        </Card>
        <div className="mt-4">
          <PrimaryButton onClick={() => go("Tasks")}>Save Task</PrimaryButton>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function TaskDetail() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Task" onBack={() => go("Tasks")} />
      <ScreenContainer>
        <Card className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <div style={{ color: C.text, fontSize: 16 }}>Compare car insurance quotes</div>
            <StatusBadge kind="due">In Progress</StatusBadge>
          </div>
          <div style={{ color: C.text2, fontSize: 12 }}>Linked to Car Insurance — Aviva</div>
        </Card>
        <Card className="mb-3">
          <SectionTitle>Checklist</SectionTitle>
          {[{ c: "Get 3 quotes", d: true }, { c: "Compare cover", d: false }, { c: "Confirm renewal", d: false }].map((s) => (
            <label key={s.c} className="flex items-center gap-2 py-1.5" style={{ fontSize: 13, color: s.d ? C.textMuted : C.text }}>
              <input type="checkbox" defaultChecked={s.d} /> <span style={{ textDecoration: s.d ? "line-through" : "none" }}>{s.c}</span>
            </label>
          ))}
        </Card>
        <Card className="mb-3">
          {[["Due", "28 Oct 2026"], ["Priority", "High"], ["Assignee", "Shiv"]].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5">
              <div style={{ color: C.text2, fontSize: 12 }}>{k}</div>
              <div style={{ color: C.text, fontSize: 13 }}>{v}</div>
            </div>
          ))}
        </Card>
        <Card className="mb-3">
          <SectionTitle>Activity</SectionTitle>
          <div style={{ color: C.text2, fontSize: 12 }}>Created 1 May 2026 • Updated yesterday</div>
        </Card>
        <PrimaryButton onClick={() => go("Tasks")}>Mark complete</PrimaryButton>
      </ScreenContainer>
    </AppScaffold>
  );
}

// REPORTS
export function Reports() {
  const { go } = useNav();
  const cards = [
    { I: AlertTriangle, t: "Expiring Soon", s: "5 records expiring in 60 days", b: "expiring" },
    { I: FileBarChart, t: "Documents Needing Review", s: "3 records to confirm", b: "review" },
    { I: ListTodo, t: "Open Tasks", s: "8 active tasks", b: "info" },
    { I: TrendingUp, t: "Monthly Commitments", s: "12 recurring bills", b: "active" },
    { I: Shield, t: "Insurance Overview", s: "4 active policies", b: "active" },
    { I: Car, t: "Vehicle Admin", s: "MOT, V5C, insurance", b: "active" },
    { I: HomeIcon, t: "Home & Property", s: "Mortgage + utilities", b: "active" },
    { I: Wallet, t: "Assets & Warranties", s: "9 items tracked", b: "active" },
    { I: Users, t: "Family Admin Summary", s: "6 shared items", b: "active" },
    { I: Briefcase, t: "Tax & Work Documents", s: "P60 + contracts", b: "active" },
    { I: Shield, t: "Security Health", s: "MFA + biometrics enabled", b: "success" },
    { I: Download, t: "Backup Status", s: "Last backup 3 days ago", b: "review" },
  ];
  const queries = [
    "What is expiring soon?",
    "Which bills are due this month?",
    "Which records need review?",
    "Which tasks are overdue?",
    "Which warranties expire soon?",
    "What car documents do I have?",
    "What policies renew this year?",
  ];
  return (
    <AppScaffold>
      <SlackStyleHeader
        title="Reports"
        subtitle="Life admin insights"
        rightIcon={<HeaderIcon onClick={() => go("LifeTimeline")}><Calendar className="size-4" /></HeaderIcon>}
      />
      <RoundedContentSheet>
        <SectionTitle>Insights</SectionTitle>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {cards.map((c) => {
            const I = c.I;
            return (
              <button key={c.t} onClick={() => go("ReportDetail")} className="text-left">
                <Card className="!p-3 h-full">
                  <div className="size-9 rounded-xl flex items-center justify-center mb-2" style={{ background: C.lavPale, color: C.royal }}>
                    <I className="size-[18px]" />
                  </div>
                  <div style={{ color: C.text, fontSize: 13 }}>{c.t}</div>
                  <div style={{ color: C.text2, fontSize: 11 }} className="mb-1.5">{c.s}</div>
                  <StatusBadge kind={c.b as any}>View</StatusBadge>
                </Card>
              </button>
            );
          })}
        </div>
        <SectionTitle>Ask LedgerAI</SectionTitle>
        <div className="space-y-2">
          {queries.map((q) => (
            <button
              key={q}
              onClick={() => go("ReportDetail")}
              className="w-full text-left rounded-2xl px-4 py-3 flex items-center justify-between"
              style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}` }}
            >
              <span style={{ color: C.text, fontSize: 13 }}>{q}</span>
              <Search className="size-4" style={{ color: C.royal }} />
            </button>
          ))}
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function ReportDetail() {
  const { go } = useNav();
  const items = [
    { t: "British Passport", s: "Identity • 12 Oct 2026", b: "urgent", l: "Expiring" },
    { t: "Boiler Warranty", s: "Home • 20 Sep 2026", b: "expiring", l: "Expiring" },
    { t: "MOT Certificate", s: "Vehicle • 15 Jul 2026", b: "expiring", l: "Expiring" },
    { t: "Home Insurance", s: "Insurance • 18 Jun 2026", b: "review", l: "Renewal" },
    { t: "Car Insurance — Aviva", s: "Insurance • 28 Oct 2026", b: "due", l: "Due Soon" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple
        title="Expiring Soon"
        subtitle="5 records in next 60 days"
        onBack={() => go("Reports")}
        right={<button style={{ color: C.royal, fontSize: 13 }}>Export</button>}
      />
      <ScreenContainer>
        <FilterChipRow chips={["All", "30 days", "60 days", "90 days"]} active="60 days" onChange={() => {}} />
        <div className="space-y-1">
          {items.map((i) => (
            <ListRow
              key={i.t}
              icon={<AlertTriangle className="size-5" />}
              title={i.t}
              subtitle={i.s}
              badge={<StatusBadge kind={i.b as any}>{i.l}</StatusBadge>}
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("RecordDetail")}
            />
          ))}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function LifeTimeline() {
  const { go } = useNav();
  const groups = [
    { t: "Today", items: [
      { t: "Electricity bill due", s: "Octopus Energy", b: "urgent" },
      { t: "Pay council tax", s: "MK Council", b: "urgent" },
    ]},
    { t: "This Week", items: [
      { t: "Boiler service", s: "Booking", b: "info" },
      { t: "MOT renewal", s: "DVSA • 15 Jul 2026", b: "expiring" },
    ]},
    { t: "This Month", items: [
      { t: "Home Insurance renewal", s: "AXA • 18 Jun 2026", b: "review" },
      { t: "Boiler Warranty expiry", s: "British Gas • 20 Sep 2026", b: "expiring" },
    ]},
    { t: "Later", items: [
      { t: "Passport expiry", s: "12 Oct 2026", b: "urgent" },
      { t: "Car Insurance renewal", s: "28 Oct 2026", b: "due" },
      { t: "Mortgage rate review", s: "15 Jan 2027", b: "info" },
    ]},
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Life Timeline" onBack={() => go("Reports")} />
      <ScreenContainer>
        {groups.map((g) => (
          <div key={g.t} className="mb-5 relative">
            <div style={{ color: C.deep, fontSize: 13 }} className="mb-2">{g.t}</div>
            <div className="space-y-2 relative pl-5" style={{ borderLeft: `2px dashed ${C.lavBorder}` }}>
              {g.items.map((it) => (
                <div key={it.t} className="relative">
                  <div className="absolute -left-[26px] top-3 size-3 rounded-full" style={{ background: C.primary, border: `3px solid ${C.lavPale}` }} />
                  <Card className="!p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div style={{ color: C.text, fontSize: 13 }}>{it.t}</div>
                        <div style={{ color: C.text2, fontSize: 11 }}>{it.s}</div>
                      </div>
                      <StatusBadge kind={it.b as any}>•</StatusBadge>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ScreenContainer>
    </AppScaffold>
  );
}

// FAMILY
export function FamilyAdmin() {
  const { go } = useNav();
  const [filter, setFilter] = useState("All");
  const groups = [
    { t: "Family", c: 9 }, { t: "Household Bills", c: 6 }, { t: "Paris Trip 2026", c: 4 },
    { t: "Food Trailer Setup", c: 3 }, { t: "Rental Property", c: 5 }, { t: "Family Documents", c: 8 },
  ];
  const items = [
    { t: "Electricity bill", s: "Household • £142", b: "due", l: "Pending" },
    { t: "Broadband contract", s: "Household • Active", b: "active", l: "Active" },
    { t: "Netflix subscription", s: "Household • Monthly", b: "active", l: "Active" },
    { t: "Kids passport renewal", s: "Family Documents", b: "review", l: "Task" },
    { t: "Home insurance renewal", s: "Household • 18 Jun 2026", b: "review", l: "Renewal" },
    { t: "Paris trip fuel", s: "Paris Trip • £80", b: "info", l: "Shared" },
    { t: "Solar installation payment", s: "Rental Property", b: "info", l: "Shared" },
    { t: "Food trailer equipment", s: "Food Trailer • £4,500", b: "info", l: "Shared" },
    { t: "Council tax document", s: "Household", b: "active", l: "Active" },
  ];
  return (
    <AppScaffold>
      <SlackStyleHeader
        title="Family Admin"
        subtitle="Shared bills, documents, tasks, and responsibilities"
        search="Search shared items…"
        rightIcon={<HeaderIcon onClick={() => go("AddSharedItem")}><Plus className="size-4" /></HeaderIcon>}
      />
      <RoundedContentSheet>
        <SectionTitle>Groups</SectionTitle>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {groups.map((g) => (
            <button key={g.t} onClick={() => go("FamilyGroupDetail")} className="text-left">
              <Card className="!p-3">
                <div className="size-9 rounded-xl flex items-center justify-center mb-2" style={{ background: C.lavPale, color: C.royal }}>
                  <Users className="size-[18px]" />
                </div>
                <div style={{ color: C.text, fontSize: 13 }}>{g.t}</div>
                <div style={{ color: C.text2, fontSize: 11 }}>{g.c} items</div>
              </Card>
            </button>
          ))}
        </div>
        <FilterChipRow chips={["All", "Bills", "Documents", "Tasks", "Trips", "Resolved"]} active={filter} onChange={setFilter} />
        <SectionTitle>Shared items</SectionTitle>
        <div className="space-y-1">
          {items.map((i) => (
            <ListRow
              key={i.t}
              icon={<Users className="size-5" />}
              title={i.t}
              subtitle={i.s}
              badge={<StatusBadge kind={i.b as any}>{i.l}</StatusBadge>}
              right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              onClick={() => go("SharedItemDetail")}
            />
          ))}
        </div>
      </RoundedContentSheet>
    </AppScaffold>
  );
}

export function FamilyGroupDetail() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Household Bills" subtitle="6 members • 6 shared items" onBack={() => go("FamilyAdmin")} />
      <ScreenContainer>
        <Card className="mb-3">
          <SectionTitle>Members</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {["Shiv", "Sudha", "Alice", "John"].map((n) => (
              <div key={n} className="flex items-center gap-2 px-2.5 py-1.5 rounded-full" style={{ background: C.lavPale, border: `1px solid ${C.lavBorder}` }}>
                <div className="size-6 rounded-full flex items-center justify-center text-white" style={{ background: C.primary, fontSize: 10 }}>{n[0]}</div>
                <span style={{ fontSize: 12, color: C.deep }}>{n}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="mb-3">
          <SectionTitle>Shared records</SectionTitle>
          {["Electricity bill", "Broadband contract", "Council tax document"].map((t) => (
            <ListRow key={t} title={t} subtitle="Shared" right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />} />
          ))}
        </Card>
        <Card className="mb-3">
          <SectionTitle>Shared tasks</SectionTitle>
          {["Pay council tax instalment", "Review broadband renewal"].map((t) => (
            <ListRow key={t} title={t} subtitle="Open" right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />} />
          ))}
        </Card>
        <Card className="mb-3">
          <SectionTitle>Balances</SectionTitle>
          <div className="flex justify-between py-1"><span style={{ color: C.text2, fontSize: 12 }}>Shiv owes Sudha</span><span style={{ color: C.text, fontSize: 13 }}>£40</span></div>
          <div className="flex justify-between py-1"><span style={{ color: C.text2, fontSize: 12 }}>Settled this month</span><span style={{ color: C.success, fontSize: 13 }}>£280</span></div>
        </Card>
        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 13 }}>Settle up</button>
          <button className="rounded-xl py-2.5" style={{ background: C.primary, color: "#fff", fontSize: 13 }}>Export summary</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function AddSharedItem() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Add Shared Item" onBack={() => go("FamilyAdmin")} />
      <ScreenContainer>
        <Card>
          <Field label="Group"><Input defaultValue="Household Bills" /></Field>
          <Field label="Item type"><Input defaultValue="Bill" /></Field>
          <Field label="Description"><Input placeholder="What's this for?" /></Field>
          <Field label="Amount"><Input placeholder="£0.00" /></Field>
          <Field label="Paid by"><Input defaultValue="Shiv" /></Field>
          <Field label="Assigned to"><Input defaultValue="Family" /></Field>
          <Field label="Split method"><Input defaultValue="Equally" /></Field>
          <Field label="Due date"><Input placeholder="20 May 2026" /></Field>
          <Field label="Attachment"><Input placeholder="Add proof" /></Field>
          <Field label="Notes"><Input placeholder="Notes" /></Field>
        </Card>
        <div className="mt-4">
          <PrimaryButton onClick={() => go("FamilyAdmin")}>Save Shared Item</PrimaryButton>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function SharedItemDetail() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Shared Item" onBack={() => go("FamilyAdmin")} />
      <ScreenContainer>
        <Card className="mb-3">
          <div style={{ color: C.text, fontSize: 16 }}>Electricity bill</div>
          <div style={{ color: C.text2, fontSize: 12 }}>Household Bills • Octopus Energy</div>
          <div className="mt-2"><StatusBadge kind="due">Pending</StatusBadge></div>
        </Card>
        <Card className="mb-3">
          {[["Amount", "£142.30"], ["Paid by", "Shiv"], ["Split", "Equally"], ["Due", "20 May 2026"]].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5">
              <span style={{ color: C.text2, fontSize: 12 }}>{k}</span>
              <span style={{ color: C.text, fontSize: 13 }}>{v}</span>
            </div>
          ))}
        </Card>
        <Card className="mb-3">
          <SectionTitle>Members</SectionTitle>
          {["Shiv — £35.58", "Sudha — £35.58", "Alice — £35.58", "John — £35.56"].map((m) => (
            <div key={m} style={{ color: C.text, fontSize: 13 }} className="py-1">{m}</div>
          ))}
        </Card>
        <Card className="mb-3">
          <SectionTitle>Activity</SectionTitle>
          <div style={{ color: C.text2, fontSize: 12 }}>Created 1 May 2026 • Awaiting payment</div>
        </Card>
        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-xl py-2.5" style={{ background: C.lavPale, color: C.deep, fontSize: 13 }}>Mark resolved</button>
          <button className="rounded-xl py-2.5" style={{ background: C.success, color: "#fff", fontSize: 13 }}>Settle up</button>
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

// EMERGENCY / BACKUP / PROVIDER
export function EmergencyPack() {
  const { go } = useNav();
  const items = [
    { I: FileText, t: "Passport", s: "Shiv Patel" },
    { I: Car, t: "Driving licence", s: "DVLA" },
    { I: Shield, t: "Car insurance", s: "Aviva" },
    { I: Plane, t: "Travel insurance", s: "Aviva" },
    { I: HomeIcon, t: "Home insurance", s: "AXA" },
    { I: AlertOctagon, t: "Medical information", s: "Allergies, blood group" },
    { I: Phone, t: "Emergency contacts", s: "4 contacts" },
    { I: Car, t: "Vehicle documents", s: "MOT, V5C" },
    { I: Users, t: "Family documents", s: "5 records" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Emergency Pack" subtitle="Quick access to critical records" onBack={() => go("HomeDashboard")} />
      <ScreenContainer>
        <Card className="mb-3 !p-4" style={{ background: C.lavSurface }}>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: "#fff", color: C.urgent }}>
              <AlertOctagon className="size-5" />
            </div>
            <div className="flex-1">
              <div style={{ color: C.text, fontSize: 14 }}>Emergency-ready</div>
              <div style={{ color: C.text2, fontSize: 12 }}>Available offline. Encrypted.</div>
            </div>
            <button className="px-3 py-1.5 rounded-full text-white" style={{ background: C.primary, fontSize: 12 }}>Export</button>
          </div>
        </Card>
        <div className="space-y-1">
          {items.map((i) => {
            const I = i.I;
            return (
              <ListRow
                key={i.t}
                icon={<I className="size-5" />}
                title={i.t}
                subtitle={i.s}
                right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
                onClick={() => go("RecordDetail")}
              />
            );
          })}
        </div>
        <button className="w-full mt-4 py-3 rounded-2xl flex items-center justify-center gap-2" style={{ background: C.lavPale, color: C.deep, fontSize: 13 }}>
          <Plus className="size-4" /> Add critical document
        </button>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function BackupExport() {
  const { go } = useNav();
  const items = [
    { I: Download, t: "Export Local Backup", s: "Encrypted .ledger file" },
    { I: Upload, t: "Import Backup", s: "Restore from a backup file" },
    { I: FileText, t: "Export PDF Summary", s: "All records as PDF" },
    { I: FileBarChart, t: "Export CSV Report", s: "Spreadsheet of records" },
    { I: AlertOctagon, t: "Export Emergency Pack", s: "Critical documents only" },
    { I: Bell, t: "Backup reminder", s: "Every 30 days" },
    { I: Shield, t: "Backup codes", s: "8 unused codes" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Backup & Export" onBack={() => go("Settings")} />
      <ScreenContainer>
        <Card className="mb-3 !p-4">
          <div style={{ color: C.text, fontSize: 14 }}>Your records are important.</div>
          <div style={{ color: C.text2, fontSize: 12 }} className="mb-2">Export a backup regularly.</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4" style={{ color: C.success }} />
            <span style={{ color: C.text2, fontSize: 12 }}>Last backup 3 days ago</span>
          </div>
        </Card>
        <div className="space-y-1">
          {items.map((i) => {
            const I = i.I;
            return (
              <ListRow
                key={i.t}
                icon={<I className="size-5" />}
                title={i.t}
                subtitle={i.s}
                right={<ChevronRight className="size-4" style={{ color: C.textMuted }} />}
              />
            );
          })}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ProviderContacts() {
  const { go } = useNav();
  const providers = [
    { n: "HM Passport Office", p: "+44 300 222 0000", e: "passport@gov.uk", w: "gov.uk", r: "P12345678" },
    { n: "Aviva", p: "+44 800 285 1090", e: "support@aviva.co.uk", w: "aviva.co.uk", r: "POL-9912" },
    { n: "Octopus Energy", p: "+44 808 164 1088", e: "hello@octopus.energy", w: "octopus.energy", r: "ACC-44218" },
    { n: "Halifax", p: "+44 345 720 3040", e: "—", w: "halifax.co.uk", r: "MOR-30021" },
    { n: "DVLA", p: "+44 300 790 6801", e: "—", w: "gov.uk/dvla", r: "DL-77321" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Provider Contacts" onBack={() => go("HomeDashboard")} />
      <ScreenContainer>
        <div className="space-y-2">
          {providers.map((p) => (
            <Card key={p.n}>
              <div style={{ color: C.text, fontSize: 14 }}>{p.n}</div>
              <div style={{ color: C.text2, fontSize: 12 }} className="mb-2">Ref: {p.r}</div>
              <div className="grid grid-cols-3 gap-2">
                <button className="rounded-xl py-2 flex items-center justify-center gap-1" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>
                  <Phone className="size-3.5" /> Call
                </button>
                <button className="rounded-xl py-2 flex items-center justify-center gap-1" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>
                  <Mail className="size-3.5" /> Email
                </button>
                <button className="rounded-xl py-2 flex items-center justify-center gap-1" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>
                  <Globe className="size-3.5" /> Web
                </button>
              </div>
            </Card>
          ))}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

// PROFILE / SETTINGS / HELP
export function Profile() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Profile" onBack={() => go("HomeDashboard")} right={<button onClick={() => go("Settings")} style={{ color: C.royal, fontSize: 13 }}>Settings</button>} />
      <ScreenContainer>
        <Card className="mb-3 text-center !p-5">
          <div className="size-16 mx-auto rounded-full flex items-center justify-center text-white mb-2" style={{ background: `linear-gradient(135deg, ${C.royal}, ${C.primary})`, fontSize: 22 }}>S</div>
          <div style={{ color: C.text, fontSize: 18 }}>Shiv Patel</div>
          <div style={{ color: C.text2, fontSize: 12 }}>shiv@example.com</div>
          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            <StatusBadge kind="success">Verified</StatusBadge>
            <StatusBadge kind="active">MFA Enabled</StatusBadge>
            <StatusBadge kind="info">Trusted Device</StatusBadge>
          </div>
        </Card>
        {[
          { t: "Vault status", s: "Unlocked • Auto-lock in 1 min" },
          { t: "Account status", s: "Active, premium" },
          { t: "Recovery key", s: "Saved" },
          { t: "Backup", s: "Last 3 days ago" },
        ].map((r) => (
          <Card key={r.t} className="!p-3 mb-2 flex justify-between items-center">
            <div>
              <div style={{ color: C.text, fontSize: 14 }}>{r.t}</div>
              <div style={{ color: C.text2, fontSize: 12 }}>{r.s}</div>
            </div>
            <ChevronRight className="size-4" style={{ color: C.textMuted }} />
          </Card>
        ))}
      </ScreenContainer>
    </AppScaffold>
  );
}

export function Settings() {
  const { go } = useNav();
  const sections: { title: string; items: { t: string; s?: string; target?: any }[] }[] = [
    { title: "Profile", items: [
      { t: "Name", s: "Shiv Patel" }, { t: "Email", s: "shiv@example.com" },
      { t: "Mobile", s: "+44 7700 900123" }, { t: "Vault status", s: "Unlocked" },
      { t: "Account status", s: "Active" },
    ]},
    { title: "Privacy & Security", items: [
      { t: "Change password" }, { t: "Change vault PIN" }, { t: "App lock" },
      { t: "Biometric unlock" }, { t: "MFA settings", target: "SecuritySettings" },
      { t: "Email verification" }, { t: "Mobile verification" },
      { t: "Trusted devices" }, { t: "Recovery key" }, { t: "Backup codes" },
      { t: "Auto-lock timer", s: "1 minute" }, { t: "Session timeout", s: "15 minutes" },
      { t: "Privacy screen" }, { t: "Delete vault" },
    ]},
    { title: "Backup & Export", items: [
      { t: "Export Local Backup", target: "BackupExport" }, { t: "Import Backup" },
      { t: "Export PDF Summary" }, { t: "Export CSV" }, { t: "Backup Reminder" },
    ]},
    { title: "Notifications", items: [
      { t: "Reminder notifications" }, { t: "Task notifications" },
      { t: "Renewal alerts" }, { t: "Backup reminder alerts" },
    ]},
    { title: "Appearance", items: [
      { t: "Light mode", s: "Default" }, { t: "Dark mode" },
      { t: "Accent colour", s: "Purple" }, { t: "Font size", s: "Default" },
    ]},
    { title: "Organisation", items: [
      { t: "Categories" }, { t: "Tags" }, { t: "Archived Records" },
      { t: "Version History", target: "VersionHistory" }, { t: "Favourites" },
    ]},
    { title: "Help", items: [
      { t: "How LedgerAI works", target: "HelpAbout" }, { t: "Privacy information" },
      { t: "Security information" }, { t: "Contact / support" }, { t: "About LedgerAI", target: "HelpAbout" },
    ]},
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Settings" onBack={() => go("HomeDashboard")} />
      <ScreenContainer>
        {sections.map((s) => (
          <div key={s.title} className="mb-4">
            <div style={{ color: C.deep, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.4 }} className="mb-2 px-1">{s.title}</div>
            <Card className="!p-1">
              {s.items.map((it, i) => (
                <button
                  key={it.t}
                  onClick={() => it.target && go(it.target)}
                  className="w-full flex items-center justify-between py-3 px-3 text-left"
                  style={{ borderBottom: i < s.items.length - 1 ? `1px solid ${C.divider}` : "none" }}
                >
                  <div>
                    <div style={{ color: C.text, fontSize: 14 }}>{it.t}</div>
                    {it.s && <div style={{ color: C.text2, fontSize: 12 }}>{it.s}</div>}
                  </div>
                  <ChevronRight className="size-4" style={{ color: C.textMuted }} />
                </button>
              ))}
            </Card>
          </div>
        ))}
      </ScreenContainer>
    </AppScaffold>
  );
}

export function HelpAbout() {
  const { go } = useNav();
  return (
    <AppScaffold>
      <PageHeaderSimple title="Help & About" onBack={() => go("Settings")} />
      <ScreenContainer>
        <Card className="mb-3 text-center">
          <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-2" style={{ background: `linear-gradient(135deg, ${C.royal}, ${C.primary})` }}>
            <Shield className="size-7 text-white" />
          </div>
          <div style={{ color: C.text, fontSize: 18 }}>LedgerAI</div>
          <div style={{ color: C.text2, fontSize: 12 }}>v1.0 • Privacy-first life-admin vault</div>
        </Card>
        {[
          { t: "How LedgerAI works", s: "Vault-first, scan or manual entry, secure backup" },
          { t: "Privacy information", s: "Data stays on your device by default" },
          { t: "Security information", s: "MFA, biometrics, recovery keys" },
          { t: "Contact support", s: "We typically reply in 24 hours" },
        ].map((it) => (
          <Card key={it.t} className="!p-3 mb-2 flex items-center justify-between">
            <div>
              <div style={{ color: C.text, fontSize: 14 }}>{it.t}</div>
              <div style={{ color: C.text2, fontSize: 12 }}>{it.s}</div>
            </div>
            <ChevronRight className="size-4" style={{ color: C.textMuted }} />
          </Card>
        ))}
      </ScreenContainer>
    </AppScaffold>
  );
}

// PERMISSIONS
function PermissionPage({ title, body, icon: Icon, target }: { title: string; body: string; icon: any; target: any }) {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mt-6 mb-6">
        <div className="size-16 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Icon className="size-8" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>{title}</div>
        <div style={{ color: C.text2, fontSize: 13 }} className="mt-1">{body}</div>
      </div>
      <AuthCard>
        <PrimaryButton onClick={() => go(target)}>Allow</PrimaryButton>
        <button className="w-full mt-3 py-2" onClick={() => go(target)} style={{ color: C.text2, fontSize: 13 }}>Not now</button>
      </AuthCard>
    </AuthScaffold>
  );
}

export function NotificationPermission() {
  return <PermissionPage title="Allow notifications" body="So we can alert you about renewals, expiries, bills, tasks, and backup reminders." icon={BellRing} target="HomeDashboard" />;
}
export function CameraPermission() {
  return <PermissionPage title="Allow camera access" body="So you can scan documents, bills, policies, and warranties directly into your vault." icon={Camera} target="HomeDashboard" />;
}
export function FilePermission() {
  return <PermissionPage title="Allow file access" body="So you can import PDFs, images, and saved documents into your vault." icon={FolderOpen} target="HomeDashboard" />;
}
export function BiometricPermission() {
  return <PermissionPage title="Use biometrics" body="Quickly unlock your vault with Face ID, Touch ID, or fingerprint." icon={Fingerprint} target="HomeDashboard" />;
}

// STATES
export function LoadingStates() {
  const { go } = useNav();
  const states = [
    "Securely opening vault",
    "Verifying code",
    "Scanning document",
    "Extracting details",
    "Saving record",
    "Exporting backup",
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Loading States" onBack={() => go("ScreenIndex")} />
      <ScreenContainer>
        <div className="space-y-3">
          {states.map((s) => (
            <Card key={s} className="!p-4 flex items-center gap-3">
              <div className="size-9 rounded-full flex items-center justify-center" style={{ background: C.lavPale }}>
                <Clock className="size-4 animate-spin" style={{ color: C.royal }} />
              </div>
              <div>
                <div style={{ color: C.text, fontSize: 14 }}>{s}…</div>
                <div style={{ color: C.text2, fontSize: 12 }}>Please wait</div>
              </div>
            </Card>
          ))}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function ErrorStates() {
  const { go } = useNav();
  const errs = [
    "That code doesn't look right. Please try again.",
    "We could not read this document clearly. You can enter details manually.",
    "Password does not meet security requirements.",
    "Your session expired. Please unlock your vault again.",
    "Camera permission is needed to scan documents.",
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Error States" onBack={() => go("ScreenIndex")} />
      <ScreenContainer>
        <div className="space-y-3">
          {errs.map((e) => (
            <Card key={e} className="!p-4 flex items-start gap-3">
              <div className="size-9 rounded-full flex items-center justify-center" style={{ background: "#FFE3E3" }}>
                <AlertOctagon className="size-4" style={{ color: C.urgent }} />
              </div>
              <div className="flex-1">
                <div style={{ color: C.text, fontSize: 14 }}>{e}</div>
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1.5 rounded-full" style={{ background: C.lavPale, color: C.deep, fontSize: 12 }}>Try again</button>
                  <button className="px-3 py-1.5 rounded-full" style={{ background: C.primary, color: "#fff", fontSize: 12 }}>Enter manually</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}

export function EmptyStates() {
  const { go } = useNav();
  const items = [
    { t: "Empty Vault", s: "Add your first document to start your secure vault.", I: Folder, cta: "Add a record" },
    { t: "Empty Reminders", s: "No reminders yet. Add one to stay ahead of renewals.", I: Bell, cta: "Add reminder" },
    { t: "Empty Tasks", s: "Nothing to do right now. Enjoy the calm.", I: ListTodo, cta: "Add task" },
    { t: "Empty Family Admin", s: "Create a family group to share bills and documents.", I: Users, cta: "Create group" },
    { t: "Empty Review Queue", s: "Nothing needs review. Your vault is up to date.", I: CheckCircle2, cta: "Back to home" },
    { t: "Empty Search Results", s: "We couldn't find anything matching your query.", I: Search, cta: "Try different keywords" },
  ];
  return (
    <AppScaffold>
      <PageHeaderSimple title="Empty States" onBack={() => go("ScreenIndex")} />
      <ScreenContainer>
        <div className="space-y-3">
          {items.map((i) => {
            const I = i.I;
            return (
              <Card key={i.t} className="!p-5 text-center">
                <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-2" style={{ background: C.lavPale, color: C.royal }}>
                  <I className="size-7" />
                </div>
                <div style={{ color: C.text, fontSize: 15 }}>{i.t}</div>
                <div style={{ color: C.text2, fontSize: 12 }} className="mb-3">{i.s}</div>
                <button className="px-4 py-2 rounded-full text-white" style={{ background: C.primary, fontSize: 13 }}>{i.cta}</button>
              </Card>
            );
          })}
        </div>
      </ScreenContainer>
    </AppScaffold>
  );
}
