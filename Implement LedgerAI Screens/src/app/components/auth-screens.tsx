import { Shield, Lock, Mail, Phone, Smartphone, Fingerprint, KeyRound, Copy, Download, Check, ChevronRight, FileText, Bell, Users, ScanLine } from "lucide-react";
import { useNav } from "./nav";
import { AuthScaffold, AuthCard, PrimaryButton, GhostButton, SecureVaultChip, Field, Input, OTPInput, C, Card } from "./shell";

export function SplashScreen() {
  const { go } = useNav();
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center px-8"
      style={{ background: `linear-gradient(180deg, ${C.lavSurface} 0%, ${C.bg} 100%)` }}
    >
      <div
        className="size-20 rounded-3xl flex items-center justify-center mb-5"
        style={{ background: `linear-gradient(135deg, ${C.royal}, ${C.primary})`, boxShadow: "0 16px 36px rgba(124,58,237,0.35)" }}
      >
        <Shield className="size-10 text-white" />
      </div>
      <div style={{ color: C.text, fontSize: 28 }}>LedgerAI</div>
      <div style={{ color: C.text2, fontSize: 14 }} className="mb-6">Your private life-admin vault</div>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="size-2 rounded-full animate-pulse" style={{ background: C.primary, animationDelay: `${i * 200}ms` }} />
        ))}
      </div>
      <button onClick={() => go("Onboarding")} className="absolute bottom-10" style={{ color: C.royal, fontSize: 13 }}>
        Continue →
      </button>
    </div>
  );
}

export function Onboarding() {
  const { go } = useNav();
  const features = [
    { icon: Shield, title: "Secure vault", sub: "Encrypted private storage" },
    { icon: Bell, title: "Smart reminders", sub: "Stay ahead of renewals" },
    { icon: ScanLine, title: "Scan or enter manually", sub: "Whatever fits you" },
    { icon: Users, title: "Family admin", sub: "Share what matters" },
  ];
  return (
    <AuthScaffold>
      <div
        className="size-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: `linear-gradient(135deg, ${C.royal}, ${C.primary})` }}
      >
        <Shield className="size-7 text-white" />
      </div>
      <div style={{ color: C.text, fontSize: 24, lineHeight: 1.25 }}>Your life admin, beautifully organised</div>
      <div style={{ color: C.text2, fontSize: 14 }} className="mt-2 mb-5">
        Store documents, track renewals, manage bills, and stay ahead of important life admin — securely and privately.
      </div>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {features.map((f) => {
          const I = f.icon;
          return (
            <Card key={f.title} className="!p-3">
              <div className="size-9 rounded-xl flex items-center justify-center mb-2" style={{ background: C.lavPale, color: C.royal }}>
                <I className="size-[18px]" />
              </div>
              <div style={{ color: C.text, fontSize: 13 }}>{f.title}</div>
              <div style={{ color: C.text2, fontSize: 11 }}>{f.sub}</div>
            </Card>
          );
        })}
      </div>
      <div className="space-y-3">
        <PrimaryButton onClick={() => go("AuthChoice")}>Get Started</PrimaryButton>
        <GhostButton onClick={() => go("HomeDashboard")}>Explore Sample Vault</GhostButton>
      </div>
    </AuthScaffold>
  );
}

export function AuthChoice() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mb-6">
        <div
          className="size-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
          style={{ background: `linear-gradient(135deg, ${C.royal}, ${C.primary})` }}
        >
          <Lock className="size-8 text-white" />
        </div>
        <div style={{ color: C.text, fontSize: 24 }}>Welcome to LedgerAI</div>
        <div style={{ color: C.text2, fontSize: 14 }} className="mt-1">Your private life-admin vault, protected with secure sign-in.</div>
      </div>
      <AuthCard>
        <div className="space-y-3">
          <PrimaryButton onClick={() => go("SignIn")}>Sign In</PrimaryButton>
          <GhostButton onClick={() => go("CreateAccount")}>Create Account</GhostButton>
          <button onClick={() => go("VaultUnlock")} className="w-full py-2" style={{ color: C.royal, fontSize: 13 }}>
            Continue with local vault
          </button>
        </div>
      </AuthCard>
      <div className="mt-5 flex flex-wrap gap-2 justify-center">
        {["Secure access", "Email verified", "Mobile verified", "MFA ready", "Biometric unlock"].map((c) => (
          <span key={c} className="px-2.5 py-1 rounded-full" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 11 }}>
            {c}
          </span>
        ))}
      </div>
    </AuthScaffold>
  );
}

export function CreateAccount() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <button onClick={() => go("AuthChoice")} style={{ color: C.royal, fontSize: 13 }} className="mb-4">← Back</button>
      <div style={{ color: C.text, fontSize: 24 }}>Create your secure vault</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-5">Premium privacy-first protection from the start.</div>
      <AuthCard>
        <Field label="Full Name"><Input placeholder="Shiv Patel" /></Field>
        <Field label="Email Address"><Input type="email" placeholder="you@example.com" /></Field>
        <Field label="Mobile Number"><Input placeholder="+44 7700 900123" /></Field>
        <Field label="Password"><Input type="password" placeholder="Create a strong password" /></Field>
        <div className="h-1.5 w-full rounded-full overflow-hidden mb-2" style={{ background: C.lavPale }}>
          <div className="h-full" style={{ width: "70%", background: `linear-gradient(90deg, ${C.success}, ${C.primary})` }} />
        </div>
        <ul style={{ fontSize: 11, color: C.text2 }} className="mb-3 space-y-0.5">
          <li>✓ At least 12 characters</li>
          <li>✓ Mix of letters and numbers</li>
          <li>• Add a special character</li>
        </ul>
        <Field label="Confirm Password"><Input type="password" placeholder="Re-enter password" /></Field>
        <label className="flex items-center gap-2 mb-2" style={{ fontSize: 12, color: C.text2 }}>
          <input type="checkbox" defaultChecked /> I agree to the Terms and Privacy Policy
        </label>
        <label className="flex items-center gap-2 mb-4" style={{ fontSize: 12, color: C.text2 }}>
          <input type="checkbox" defaultChecked /> Enable biometric unlock
        </label>
        <PrimaryButton onClick={() => go("EmailVerification")}>Create Account</PrimaryButton>
      </AuthCard>
    </AuthScaffold>
  );
}

export function SignIn() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <button onClick={() => go("AuthChoice")} style={{ color: C.royal, fontSize: 13 }} className="mb-4">← Back</button>
      <div style={{ color: C.text, fontSize: 24 }}>Sign in securely</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-5">Protected access to your private vault.</div>
      <AuthCard>
        <Field label="Email or mobile number"><Input placeholder="you@example.com" /></Field>
        <Field label="Password"><Input type="password" placeholder="Enter password" /></Field>
        <label className="flex items-center gap-2 mb-4" style={{ fontSize: 12, color: C.text2 }}>
          <input type="checkbox" /> Remember this device
        </label>
        <PrimaryButton onClick={() => go("MFAVerification")}>Sign In</PrimaryButton>
        <div className="flex justify-between mt-3" style={{ fontSize: 12 }}>
          <button onClick={() => go("ForgotPassword")} style={{ color: C.royal }}>Forgot password?</button>
          <button onClick={() => go("BiometricUnlock")} style={{ color: C.royal }}>Use biometrics</button>
        </div>
        <button onClick={() => go("BackupCodes")} className="w-full mt-3" style={{ color: C.text2, fontSize: 12 }}>
          Use recovery code
        </button>
      </AuthCard>
    </AuthScaffold>
  );
}

export function EmailVerification() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mb-5">
        <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Mail className="size-7" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Verify your email</div>
        <div style={{ color: C.text2, fontSize: 13 }}>We sent a 6-digit code to s•••@example.com</div>
      </div>
      <AuthCard>
        <OTPInput />
        <div className="flex items-center justify-between mt-4" style={{ fontSize: 12, color: C.text2 }}>
          <span>Resend in 0:42</span>
          <button style={{ color: C.royal }}>Change email</button>
        </div>
        <div className="mt-4">
          <PrimaryButton onClick={() => go("MobileVerification")}>Verify Email</PrimaryButton>
        </div>
      </AuthCard>
    </AuthScaffold>
  );
}

export function MobileVerification() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mb-5">
        <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Phone className="size-7" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Verify your mobile number</div>
        <div style={{ color: C.text2, fontSize: 13 }}>Code sent to +44 7700 900•••</div>
      </div>
      <AuthCard>
        <OTPInput />
        <div className="flex items-center justify-between mt-4" style={{ fontSize: 12, color: C.text2 }}>
          <button style={{ color: C.royal }}>Resend SMS</button>
          <button style={{ color: C.royal }}>Change number</button>
        </div>
        <button className="mt-2 w-full text-center" style={{ color: C.text2, fontSize: 12 }}>Try email instead</button>
        <div className="mt-4">
          <PrimaryButton onClick={() => go("MFASetup")}>Verify Mobile</PrimaryButton>
        </div>
      </AuthCard>
    </AuthScaffold>
  );
}

export function MFASetup() {
  const { go } = useNav();
  const opts = [
    { icon: Smartphone, title: "Authenticator App", sub: "Recommended", tag: "Recommended" },
    { icon: Mail, title: "Email Code", sub: "Receive a code via email" },
    { icon: Phone, title: "SMS / Mobile Code", sub: "Receive a code via SMS" },
    { icon: KeyRound, title: "Recovery Codes", sub: "One-time backup codes" },
    { icon: Fingerprint, title: "Biometric Unlock", sub: "Face ID or Touch ID" },
  ];
  return (
    <AuthScaffold>
      <div style={{ color: C.text, fontSize: 24 }}>Set up extra protection</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-5">Add another layer of security to your vault.</div>
      <div className="space-y-2 mb-5">
        {opts.map((o) => {
          const I = o.icon;
          return (
            <Card key={o.title} className="!p-3 flex items-center gap-3">
              <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: C.lavPale, color: C.royal }}>
                <I className="size-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div style={{ color: C.text, fontSize: 14 }}>{o.title}</div>
                  {o.tag && <span style={{ background: C.success, color: "#fff", fontSize: 10 }} className="px-2 py-0.5 rounded-full">{o.tag}</span>}
                </div>
                <div style={{ color: C.text2, fontSize: 12 }}>{o.sub}</div>
              </div>
              <ChevronRight className="size-4" style={{ color: C.textMuted }} />
            </Card>
          );
        })}
      </div>
      <PrimaryButton onClick={() => go("RecoveryKeySetup")}>Continue Setup</PrimaryButton>
    </AuthScaffold>
  );
}

export function MFAVerification() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mb-5">
        <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Shield className="size-7" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Extra verification</div>
        <div style={{ color: C.text2, fontSize: 13 }}>Enter the 6-digit code from your authenticator app</div>
      </div>
      <AuthCard>
        <OTPInput />
        <div className="mt-4">
          <PrimaryButton onClick={() => go("VaultUnlock")}>Verify & Continue</PrimaryButton>
        </div>
        <div className="flex items-center justify-between mt-3" style={{ fontSize: 12, color: C.text2 }}>
          <button style={{ color: C.royal }}>Try another method</button>
          <button style={{ color: C.royal }}>Resend code</button>
        </div>
      </AuthCard>
    </AuthScaffold>
  );
}

export function BiometricUnlock() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mt-10 mb-8">
        <div className="size-24 mx-auto rounded-full flex items-center justify-center mb-4" style={{ background: C.lavPale, color: C.royal, border: `2px dashed ${C.lavBorder}` }}>
          <Fingerprint className="size-12" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Unlock with biometrics</div>
        <div style={{ color: C.text2, fontSize: 13 }}>Use Face ID, Touch ID, or fingerprint</div>
      </div>
      <div className="space-y-3 max-w-sm mx-auto">
        <PrimaryButton onClick={() => go("HomeDashboard")}>Unlock</PrimaryButton>
        <GhostButton onClick={() => go("VaultUnlock")}>Use passcode instead</GhostButton>
        <button className="w-full py-2" style={{ color: C.royal, fontSize: 13 }}>Use recovery key</button>
      </div>
    </AuthScaffold>
  );
}

export function VaultUnlock() {
  const { go } = useNav();
  const dots = [true, true, true, false];
  return (
    <AuthScaffold>
      <div className="text-center mt-6 mb-6">
        <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Lock className="size-7" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Unlock Vault</div>
        <div style={{ color: C.text2, fontSize: 13 }}>Enter your secure passcode</div>
      </div>
      <div className="flex justify-center gap-3 mb-6">
        {dots.map((on, i) => (
          <div key={i} className="size-3.5 rounded-full" style={{ background: on ? C.primary : C.lavBorder }} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-5">
        {["1","2","3","4","5","6","7","8","9","","0","⌫"].map((k, i) => (
          <button
            key={i}
            disabled={!k}
            className="aspect-square rounded-2xl"
            style={{ background: k ? "#fff" : "transparent", border: k ? `1px solid ${C.lavBorder}` : "none", color: C.text, fontSize: 22 }}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="flex justify-around max-w-sm mx-auto" style={{ fontSize: 12 }}>
        <button onClick={() => go("BiometricUnlock")} style={{ color: C.royal }}>Use biometrics</button>
        <button style={{ color: C.royal }}>Use recovery key</button>
      </div>
      <div className="mt-6 max-w-sm mx-auto">
        <PrimaryButton onClick={() => go("HomeDashboard")}>Unlock Vault</PrimaryButton>
      </div>
    </AuthScaffold>
  );
}

export function RecoveryKeySetup() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div style={{ color: C.text, fontSize: 24 }}>Save your recovery key</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-4">Use this key if you lose access to your devices.</div>
      <div
        className="rounded-2xl p-4 mb-3 font-mono"
        style={{ background: C.lavSurface, border: `1px dashed ${C.lavBorder}`, color: C.deep, fontSize: 13, lineHeight: 1.8 }}
      >
        L3DG-2026-AI-VAULT-7Q9P-HX4R-MN2B-K8T6
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button className="rounded-xl py-2.5 flex items-center justify-center gap-2" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 13 }}>
          <Copy className="size-4" /> Copy
        </button>
        <button className="rounded-xl py-2.5 flex items-center justify-center gap-2" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 13 }}>
          <Download className="size-4" /> Download
        </button>
      </div>
      <label className="flex items-center gap-2 mb-4" style={{ fontSize: 12, color: C.text2 }}>
        <input type="checkbox" /> I have saved my recovery key
      </label>
      <PrimaryButton onClick={() => go("BackupCodes")}>Continue</PrimaryButton>
    </AuthScaffold>
  );
}

export function BackupCodes() {
  const { go } = useNav();
  const codes = ["7Q9P-HX4R","MN2B-K8T6","V3LM-W2KE","RT5Z-9XAB","P1NQ-DH8L","BG4T-7CWR","KF8M-2YHN","XJ3R-PV6T"];
  return (
    <AuthScaffold>
      <div style={{ color: C.text, fontSize: 24 }}>Backup codes</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-4">Each code works once. Keep them somewhere safe.</div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {codes.map((c) => (
          <div key={c} className="py-2.5 px-3 rounded-xl font-mono text-center" style={{ background: C.lavSurface, border: `1px solid ${C.lavBorder}`, color: C.deep, fontSize: 13 }}>
            {c}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <button className="flex-1 rounded-xl py-2.5 flex items-center justify-center gap-2" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 13 }}>
          <Copy className="size-4" /> Copy
        </button>
        <button className="flex-1 rounded-xl py-2.5 flex items-center justify-center gap-2" style={{ background: C.lavPale, color: C.deep, border: `1px solid ${C.lavBorder}`, fontSize: 13 }}>
          <Download className="size-4" /> Download PDF
        </button>
      </div>
      <button className="w-full mb-4" style={{ color: C.royal, fontSize: 13 }}>Regenerate codes</button>
      <PrimaryButton onClick={() => go("HomeDashboard")}>Saved — Continue</PrimaryButton>
    </AuthScaffold>
  );
}

export function ForgotPassword() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <button onClick={() => go("SignIn")} style={{ color: C.royal, fontSize: 13 }} className="mb-4">← Back</button>
      <div style={{ color: C.text, fontSize: 24 }}>Forgot password</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-4">We'll send a recovery code to verify it's you.</div>
      <AuthCard>
        <Field label="Email or mobile"><Input placeholder="you@example.com" /></Field>
        <PrimaryButton onClick={() => go("EmailVerification")}>Send recovery code</PrimaryButton>
      </AuthCard>
    </AuthScaffold>
  );
}

export function ResetPassword() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div style={{ color: C.text, fontSize: 24 }}>Reset password</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-4">Choose a new strong password.</div>
      <AuthCard>
        <Field label="New password"><Input type="password" placeholder="New password" /></Field>
        <Field label="Confirm password"><Input type="password" placeholder="Confirm password" /></Field>
        <PrimaryButton onClick={() => go("MFAVerification")}>Reset password</PrimaryButton>
      </AuthCard>
    </AuthScaffold>
  );
}

export function TrustedDeviceConfirmation() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mb-4">
        <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Smartphone className="size-7" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Trust this device?</div>
      </div>
      <AuthCard>
        <div className="mb-3">
          <div style={{ color: C.text, fontSize: 14 }}>iPhone 15 Pro</div>
          <div style={{ color: C.text2, fontSize: 12 }}>London, UK • New device</div>
        </div>
        <label className="flex items-center gap-2 mb-4" style={{ fontSize: 12, color: C.text2 }}>
          <input type="checkbox" defaultChecked /> Trust for 30 days
        </label>
        <PrimaryButton onClick={() => go("HomeDashboard")}>Trust this device</PrimaryButton>
        <button className="w-full mt-3" style={{ color: C.royal, fontSize: 13 }} onClick={() => go("HomeDashboard")}>Not now</button>
      </AuthCard>
    </AuthScaffold>
  );
}

export function SessionLocked() {
  const { go } = useNav();
  return (
    <AuthScaffold>
      <div className="text-center mt-12 mb-8">
        <div className="size-20 mx-auto rounded-full flex items-center justify-center mb-3" style={{ background: C.lavPale, color: C.royal }}>
          <Lock className="size-10" />
        </div>
        <div style={{ color: C.text, fontSize: 22 }}>Vault locked</div>
        <div style={{ color: C.text2, fontSize: 13 }}>Your secure session has timed out.</div>
      </div>
      <div className="space-y-3 max-w-sm mx-auto">
        <PrimaryButton onClick={() => go("BiometricUnlock")}>Unlock with biometrics</PrimaryButton>
        <GhostButton onClick={() => go("VaultUnlock")}>Use passcode</GhostButton>
        <button className="w-full py-2" onClick={() => go("AuthChoice")} style={{ color: C.urgent, fontSize: 13 }}>Sign out</button>
      </div>
    </AuthScaffold>
  );
}

export function SecuritySettings() {
  const { go } = useNav();
  const items = [
    { title: "Change password", sub: "Last changed 3 months ago" },
    { title: "Change vault PIN", sub: "Numeric vault passcode" },
    { title: "App lock", sub: "Auto-lock after inactivity" },
    { title: "Biometric unlock", sub: "Face ID enabled" },
    { title: "MFA settings", sub: "Authenticator app + SMS" },
    { title: "Trusted devices", sub: "2 devices trusted" },
    { title: "Recovery key", sub: "Saved 12 Mar 2026" },
    { title: "Backup codes", sub: "8 unused codes" },
    { title: "Auto-lock timer", sub: "1 minute" },
    { title: "Session timeout", sub: "15 minutes" },
    { title: "Privacy screen", sub: "Hide content in app switcher" },
  ];
  return (
    <AuthScaffold>
      <button onClick={() => go("Settings")} style={{ color: C.royal, fontSize: 13 }} className="mb-3">← Settings</button>
      <div style={{ color: C.text, fontSize: 24 }} className="mb-1">Security</div>
      <div style={{ color: C.text2, fontSize: 13 }} className="mb-4">Protected access to your vault.</div>
      <div className="space-y-2">
        {items.map((it) => (
          <Card key={it.title} className="!p-3 flex items-center gap-3">
            <div className="flex-1">
              <div style={{ color: C.text, fontSize: 14 }}>{it.title}</div>
              <div style={{ color: C.text2, fontSize: 12 }}>{it.sub}</div>
            </div>
            <ChevronRight className="size-4" style={{ color: C.textMuted }} />
          </Card>
        ))}
      </div>
      <button className="w-full mt-4 py-3 rounded-2xl" style={{ background: "#FFE3E3", color: C.urgent, fontSize: 14 }}>
        Delete vault
      </button>
    </AuthScaffold>
  );
}
