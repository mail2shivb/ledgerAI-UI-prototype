import 'package:flutter/foundation.dart';
import '../../../data/repositories/repositories.dart';

/// Lightweight ChangeNotifier-based controller. Migrate to a richer state
/// solution if the team chooses Riverpod/BLoC later (deferred per spec).
class PersonProfileController extends ChangeNotifier {
  PersonProfileController(this._repo);
  final PeopleRepository _repo;

  List<Map<String, String>> get people => _repo.all();

  Map<String, String>? select(String id) => _repo.byId(id);
}
