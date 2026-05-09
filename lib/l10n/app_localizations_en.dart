// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appName => 'LedgerAI';

  @override
  String get tabHome => 'Home';

  @override
  String get tabVault => 'Vault';

  @override
  String get tabAdd => 'Add';

  @override
  String get tabReminders => 'Reminders';

  @override
  String get tabReports => 'Reports';

  @override
  String get actionAddDocument => 'Add document';

  @override
  String get actionAddBill => 'Add bill or receipt';

  @override
  String get actionAddReminder => 'Add reminder';

  @override
  String get actionAddTask => 'Add task';

  @override
  String get actionAddPerson => 'Add person';

  @override
  String get actionBankingWallet => 'Banking & wallet';

  @override
  String get vaultEmptyTitle => 'Your vault is private';

  @override
  String get vaultEmptyMessage => 'Records you add stay on this device.';

  @override
  String get signIn => 'Sign in';

  @override
  String get createAccount => 'Create account';

  @override
  String get continueWithBiometrics => 'Continue with biometrics';

  @override
  String get unlockVault => 'Unlock vault';
}

/// The translations for English, as used in the United Kingdom (`en_GB`).
class AppLocalizationsEnGb extends AppLocalizationsEn {
  AppLocalizationsEnGb() : super('en_GB');

  @override
  String get appName => 'LedgerAI';
}
