import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddTaskPage extends StatelessWidget {
  const AddTaskPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Add task',
      subtitle: 'Errand or to-do',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Add task',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
