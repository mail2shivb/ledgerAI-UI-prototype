# LedgerAI (MySmartAdmin)

Offline-first, privacy-first life-admin vault. Flutter SDK ^3.10. The device is the system of record — no Firebase for core storage. Drift (SQLite) is wired in `pubspec.yaml` and ready to be implemented in `lib/data/`.

## Quick start
```bash
cd flutter/ledgerai_app
flutter pub get
flutter gen-l10n
flutter run
```
Supported targets: Android, iOS, macOS, Windows.

## Architecture
Feature-first. One screen per Dart file. State kept simple (`ChangeNotifier` / `InheritedWidget`). Routing via `go_router`.

See `docs/SCREEN_INVENTORY.md`, `docs/ROUTES.md`, `docs/MISSING_SCREEN_RECOVERY.md`, and `guidelines/`.
