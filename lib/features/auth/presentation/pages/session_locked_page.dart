import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class SessionLockedPage extends StatelessWidget {
  const SessionLockedPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Session locked',
      subtitle: 'Your session is locked for security',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Session locked',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
