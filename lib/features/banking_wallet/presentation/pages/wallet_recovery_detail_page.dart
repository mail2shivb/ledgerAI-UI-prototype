import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class WalletRecoveryDetailPage extends StatelessWidget {
  const WalletRecoveryDetailPage({super.key, required this.walletId});
  final String walletId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Wallet recovery',
      subtitle: 'Recovery and seed phrase status',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Wallet recovery',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
