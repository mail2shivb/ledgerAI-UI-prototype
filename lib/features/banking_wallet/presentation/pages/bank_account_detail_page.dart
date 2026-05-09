import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BankAccountDetailPage extends StatelessWidget {
  const BankAccountDetailPage({super.key, required this.accountId});
  final String accountId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Bank account',
      subtitle: 'Account detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Bank account',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
