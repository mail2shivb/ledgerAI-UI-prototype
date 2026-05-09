import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BackupCodesPage extends StatelessWidget {
  const BackupCodesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Backup codes',
      subtitle: 'Use these if you lose access to MFA',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Backup codes',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
