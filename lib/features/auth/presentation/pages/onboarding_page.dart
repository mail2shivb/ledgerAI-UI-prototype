import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class OnboardingPage extends StatelessWidget {
  const OnboardingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Welcome to LedgerAI',
      subtitle: 'Your private life-admin vault',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Welcome to LedgerAI',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
