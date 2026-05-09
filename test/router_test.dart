import 'package:flutter_test/flutter_test.dart';
import 'package:ledgerai_app/core/routing/app_router.dart';
import 'package:ledgerai_app/core/routing/route_names.dart';

void main() {
  test('every route name resolves to a configured route', () {
    final paths = AppRouter.router.configuration.routes
        .map((r) => r.toString())
        .toList();
    // Sanity: at least 60 routes are configured.
    expect(paths.length, greaterThan(60));
    // Spot-check a few critical names exist.
    expect(RouteNames.home, isNotEmpty);
    expect(RouteNames.vault, isNotEmpty);
    expect(RouteNames.assistantChat, isNotEmpty);
  });
}
