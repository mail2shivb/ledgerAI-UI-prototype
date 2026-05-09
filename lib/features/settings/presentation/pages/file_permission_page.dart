import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class FilePermissionPage extends StatelessWidget {
  const FilePermissionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Files permission',
      subtitle: 'Required to import documents',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Files permission',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
