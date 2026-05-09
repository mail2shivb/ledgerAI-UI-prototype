import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class FinancialProviderContactsPage extends StatelessWidget {
  const FinancialProviderContactsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Provider contacts',
      subtitle: 'Banks, lenders, brokers',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Provider contacts',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
