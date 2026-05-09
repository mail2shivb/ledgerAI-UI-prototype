import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class MfaVerificationPage extends StatelessWidget {
  const MfaVerificationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'MFA verification',
      subtitle: 'Enter the code from your app',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'MFA verification',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
