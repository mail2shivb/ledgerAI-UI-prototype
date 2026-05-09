import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BiometricUnlockPage extends StatelessWidget {
  const BiometricUnlockPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Unlock with biometrics',
      subtitle: 'Use Face ID, Touch ID or fingerprint',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Unlock with biometrics',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
