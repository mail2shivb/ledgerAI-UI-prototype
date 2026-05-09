import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class HelpAboutPage extends StatelessWidget {
  const HelpAboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Help & about',
      subtitle: 'Support, privacy, version',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Help & about',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
