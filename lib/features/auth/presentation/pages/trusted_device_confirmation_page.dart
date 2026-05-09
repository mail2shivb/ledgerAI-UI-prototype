import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class TrustedDeviceConfirmationPage extends StatelessWidget {
  const TrustedDeviceConfirmationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Trust this device?',
      subtitle: 'Skip MFA on this device next time',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Trust this device?',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
