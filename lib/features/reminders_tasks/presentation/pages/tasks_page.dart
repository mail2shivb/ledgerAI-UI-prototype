import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class TasksPage extends StatelessWidget {
  const TasksPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Tasks',
      subtitle: 'Your tasks and to-dos',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Tasks',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
