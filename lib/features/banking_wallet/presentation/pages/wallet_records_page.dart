import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class WalletRecordsPage extends StatelessWidget {
  const WalletRecordsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Wallets',
      subtitle: 'Software and hardware wallets',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Wallets',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
