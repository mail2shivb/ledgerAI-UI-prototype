import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class TaskDetailPage extends StatelessWidget {
  const TaskDetailPage({super.key, required this.taskId});
  final String taskId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Task',
      subtitle: 'Task detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Task',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
