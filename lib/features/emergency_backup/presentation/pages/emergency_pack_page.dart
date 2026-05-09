import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class EmergencyPackPage extends StatelessWidget {
  const EmergencyPackPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Emergency pack',
      subtitle: 'Critical info for trusted contacts',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Emergency pack',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
