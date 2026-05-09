import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:ledgerai_app/app.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('app launches and renders splash', (tester) async {
    await tester.pumpWidget(const LedgerAIApp());
    await tester.pump();
    expect(find.byType(MaterialApp), findsOneWidget);
  });
}
