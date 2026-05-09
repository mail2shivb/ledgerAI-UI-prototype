import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddReminderPage extends StatelessWidget {
  const AddReminderPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Add reminder',
      subtitle: 'Renewal, deadline, payment',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Add reminder',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
