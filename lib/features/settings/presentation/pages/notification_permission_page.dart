import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class NotificationPermissionPage extends StatelessWidget {
  const NotificationPermissionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Notification permission',
      subtitle: 'Enable reminders',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Notification permission',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
