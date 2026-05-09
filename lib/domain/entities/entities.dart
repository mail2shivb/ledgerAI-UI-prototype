/// Lightweight immutable entity classes used by the UI layer until the Drift
/// schema is implemented. These are deliberately plain Dart classes (no
/// freezed/json serialisation) for portability.

class Person {
  const Person({
    required this.id, required this.fullName, required this.relation,
    this.dateOfBirth, this.nationality,
  });
  final String id;
  final String fullName;
  final String relation;
  final String? dateOfBirth;
  final String? nationality;
}

class AddressRecord {
  const AddressRecord({
    required this.id, required this.line1, required this.town,
    required this.postcode, required this.from, required this.to,
    this.line2, this.county,
  });
  final String id;
  final String line1;
  final String? line2;
  final String town;
  final String? county;
  final String postcode;
  final String from;
  final String to;
}

class EmploymentRecord {
  const EmploymentRecord({
    required this.id, required this.employer, required this.role,
    required this.from, required this.to,
  });
  final String id;
  final String employer;
  final String role;
  final String from;
  final String to;
}

class VaultRecord {
  const VaultRecord({
    required this.id, required this.title, required this.category,
    this.expiresOn, this.notes,
  });
  final String id;
  final String title;
  final String category;
  final String? expiresOn;
  final String? notes;
}

class Reminder {
  const Reminder({
    required this.id, required this.title, required this.due,
    required this.status,
  });
  final String id;
  final String title;
  final String due;
  final String status;
}

class BankAccount {
  const BankAccount({
    required this.id, required this.provider, required this.name,
    required this.maskedNumber, required this.sortCode,
  });
  final String id;
  final String provider;
  final String name;
  final String maskedNumber;
  final String sortCode;
}
