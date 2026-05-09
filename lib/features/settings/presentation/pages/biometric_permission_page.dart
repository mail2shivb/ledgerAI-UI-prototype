import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class BiometricPermissionPage extends StatelessWidget {
  const BiometricPermissionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Biometric permission',
      subtitle: 'Unlock your vault with biometrics',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Biometric permission',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
