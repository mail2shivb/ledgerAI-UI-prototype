import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class MfaSetupPage extends StatelessWidget {
  const MfaSetupPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Set up MFA',
      subtitle: 'Add a second factor for sign-in',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Set up MFA',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
