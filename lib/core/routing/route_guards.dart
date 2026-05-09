import 'package:go_router/go_router.dart';

/// Route guards. For the prototype the user is always considered authed once
/// past splash; real biometric / MFA gates plug in here.
class RouteGuards {
  RouteGuards._();

  static String? redirect(GoRouterState state) {
    // No guard for the prototype — always allow.
    return null;
  }
}
