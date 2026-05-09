import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ledgerai_app/app.dart';

void main() {
  testWidgets('App boots to splash without throwing', (tester) async {
    await tester.pumpWidget(const LedgerAIApp());
    await tester.pump();
    expect(find.byType(MaterialApp), findsOneWidget);
  });
}
