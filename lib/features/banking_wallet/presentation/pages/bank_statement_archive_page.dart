import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BankStatementArchivePage extends StatelessWidget {
  const BankStatementArchivePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Statement archive',
      subtitle: 'PDF/CSV bank statements',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Statement archive',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
