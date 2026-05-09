# Privacy & offline-first rules

LedgerAI / MySmartAdmin treats the **device as the system of record**.

- **No Firebase for core storage.** Drift (SQLite) on-device only.
- **No cloud sync of vault content** without explicit user-initiated encrypted export.
- **Sensitive numbers are masked by default** (bank account, sort code, card PAN, recovery phrase).
- **OCR runs locally.** Scanned content is reviewed before save — never auto-saved.
- **Biometrics gate** the vault (`local_auth`) and short-lived secrets (`flutter_secure_storage`).
- **Family/shared records** are stored locally and shared via explicit export, not background sync.
- **Voice queries** are processed on-device where possible; cloud STT requires explicit opt-in per session.
- Wording across the app must be **privacy-first** — never social-network framing.
