import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BankAccountsPage extends StatelessWidget {
  const BankAccountsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Bank accounts',
      subtitle: 'Your saved accounts',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Bank accounts',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
