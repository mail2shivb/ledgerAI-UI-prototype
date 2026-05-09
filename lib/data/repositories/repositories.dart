/// Repository facades. For the prototype these read from `SampleData`; once
/// Drift is implemented they become thin wrappers around DAOs.
import '../seed/sample_data.dart';

class PeopleRepository {
  List<Map<String, String>> all() => SampleData.people;
  Map<String, String>? byId(String id) =>
      SampleData.people.firstWhere((p) => p['id'] == id,
          orElse: () => const {});
}

class VaultRepository {
  List<Map<String, String>> categories() => SampleData.categories;
}

class RemindersRepository {
  List<Map<String, String>> all() => SampleData.reminders;
}

class BankingRepository {
  List<Map<String, String>> accounts() => SampleData.bankAccounts;
  List<Map<String, String>> cards() => SampleData.paymentCards;
  List<Map<String, String>> wallets() => SampleData.walletRecords;
}
