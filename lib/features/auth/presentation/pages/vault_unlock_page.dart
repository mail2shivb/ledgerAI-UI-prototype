import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class VaultUnlockPage extends StatelessWidget {
  const VaultUnlockPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Unlock your vault',
      subtitle: 'Enter your vault passphrase',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Unlock your vault',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
