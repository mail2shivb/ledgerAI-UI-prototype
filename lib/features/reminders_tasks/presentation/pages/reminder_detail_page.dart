import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ReminderDetailPage extends StatelessWidget {
  const ReminderDetailPage({super.key, required this.reminderId});
  final String reminderId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Reminder',
      subtitle: 'Reminder detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Reminder',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
