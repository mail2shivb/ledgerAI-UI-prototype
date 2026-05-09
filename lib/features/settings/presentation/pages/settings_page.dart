import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class SettingsPage extends StatelessWidget {
  const SettingsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Settings',
      subtitle: 'Preferences, security, appearance',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Settings',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
