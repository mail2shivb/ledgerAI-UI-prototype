import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BackupExportPage extends StatelessWidget {
  const BackupExportPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Backup & export',
      subtitle: 'Encrypted local export',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Backup & export',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
