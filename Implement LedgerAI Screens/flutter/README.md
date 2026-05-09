# LedgerAI — Flutter

Premium private life-admin vault. All 56 screens covering Authentication/Security, Main App, Reminders/Tasks, Reports, Family/Shared, and Backup/Settings/Support.

## Run

This source tree is meant to drop into a real Flutter workspace (the Make environment has no Flutter toolchain).

```bash
flutter create ledgerai
cp -r flutter/lib ledgerai/
cp flutter/pubspec.yaml ledgerai/
cd ledgerai
flutter pub get
flutter run
```

## Structure

- `lib/main.dart` — entrypoint, MaterialApp + named routes
- `lib/theme.dart` — `AppColors` + `buildTheme()` (Inter via google_fonts)
- `lib/router.dart` — full route table for all 56 screens
- `lib/widgets/shell.dart` — shared widgets (Slack-style header, fixed bottom nav, AddActionSheet, list rows, badges, fields, OTP, scaffolds)
- `lib/screens/auth.dart` — 18 auth/security screens
- `lib/screens/main_screens.dart` — 11 main-app screens
- `lib/screens/reminders.dart` — 6 reminder/task screens
- `lib/screens/reports.dart` — 3 report screens
- `lib/screens/family.dart` — 4 family/shared screens
- `lib/screens/misc.dart` — 14 backup/settings/support/permissions/states

## Design

Lavender/purple palette (`#9D4EDD` primary, header gradient `#5B1B73 → #9D4EDD`), white rounded content sheet, fixed 5-slot bottom nav with elevated `+` triggering AddActionSheet. UK sample data (AXA, Aviva, Halifax, Octopus Energy, British Passport).
