import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ForgotPasswordPage extends StatelessWidget {
  const ForgotPasswordPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Forgot password',
      subtitle: 'We'll help you regain access',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Forgot password',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
