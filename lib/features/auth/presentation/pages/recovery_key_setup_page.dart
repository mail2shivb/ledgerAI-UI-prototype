import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class RecoveryKeySetupPage extends StatelessWidget {
  const RecoveryKeySetupPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Save your recovery key',
      subtitle: 'Keep this safe — it cannot be recovered',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Save your recovery key',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
