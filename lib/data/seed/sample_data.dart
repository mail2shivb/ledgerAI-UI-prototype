/// UK-flavoured sample/mock data used while Drift persistence is wired up.
class SampleData {
  SampleData._();

  static const List<Map<String, String>> people = [
    {'id': 'p1', 'name': 'Alex Carter', 'relation': 'Main user',
      'dob': '1988-04-21', 'nationality': 'British'},
    {'id': 'p2', 'name': 'Priya Carter', 'relation': 'Spouse',
      'dob': '1990-09-02', 'nationality': 'British'},
    {'id': 'p3', 'name': 'Maya Carter', 'relation': 'Child',
      'dob': '2018-06-15', 'nationality': 'British'},
  ];

  static const List<Map<String, String>> categories = [
    {'id': 'identity_legal', 'label': 'Identity & legal'},
    {'id': 'home_property', 'label': 'Home & property'},
    {'id': 'vehicles_transport', 'label': 'Vehicles & transport'},
    {'id': 'banking_credit', 'label': 'Banking & credit'},
    {'id': 'insurance', 'label': 'Insurance'},
    {'id': 'bills_utilities', 'label': 'Bills & utilities'},
    {'id': 'work_income_tax', 'label': 'Work, income & tax'},
    {'id': 'person_family', 'label': 'Person & family'},
  ];

  static const List<Map<String, String>> reminders = [
    {'id': 'r1', 'title': 'Renew passport', 'due': '2026-08-12',
      'status': 'upcoming'},
    {'id': 'r2', 'title': 'Council tax direct debit',
      'due': '2026-05-15', 'status': 'due-soon'},
    {'id': 'r3', 'title': 'MOT — KX19 ABC', 'due': '2026-09-30',
      'status': 'upcoming'},
  ];

  static const List<Map<String, String>> bankAccounts = [
    {'id': 'b1', 'provider': 'Monzo', 'name': 'Current account',
      'maskedNumber': '•••• 8421', 'sortCode': '04-00-04'},
    {'id': 'b2', 'provider': 'Nationwide', 'name': 'Joint savings',
      'maskedNumber': '•••• 1209', 'sortCode': '07-00-93'},
  ];

  static const List<Map<String, String>> paymentCards = [
    {'id': 'c1', 'network': 'Visa Debit', 'maskedPan': '•••• •••• •••• 4421',
      'expiry': '08/28'},
    {'id': 'c2', 'network': 'Amex', 'maskedPan': '•••• •••••• •10072',
      'expiry': '11/27'},
  ];

  static const List<Map<String, String>> walletRecords = [
    {'id': 'w1', 'label': 'Hardware wallet — Ledger Nano X',
      'recoveryStatus': 'Stored offline'},
    {'id': 'w2', 'label': 'Software wallet — Phantom',
      'recoveryStatus': 'Recovery phrase backed up'},
  ];

  static const List<Map<String, String>> addresses = [
    {'id': 'a1', 'line1': '14 Beechwood Road', 'town': 'Manchester',
      'postcode': 'M20 4EU', 'from': '2021-03', 'to': 'Present'},
    {'id': 'a2', 'line1': '7 Park Lane', 'town': 'Leeds',
      'postcode': 'LS6 2DJ', 'from': '2017-09', 'to': '2021-02'},
  ];

  static const List<Map<String, String>> employment = [
    {'id': 'e1', 'employer': 'Northwind Ltd', 'role': 'Senior Engineer',
      'from': '2022-01', 'to': 'Present'},
    {'id': 'e2', 'employer': 'Acme PLC', 'role': 'Engineer',
      'from': '2018-04', 'to': '2021-12'},
  ];

  static const List<Map<String, String>> assistantSuggestions = [
    {'q': 'When does my passport expire?'},
    {'q': 'Show all bills due this month'},
    {'q': 'Which addresses have I lived at since 2018?'},
    {'q': "What's my MOT date for KX19 ABC?"},
  ];
}
