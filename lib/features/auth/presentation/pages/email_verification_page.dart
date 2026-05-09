import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class EmailVerificationPage extends StatelessWidget {
  const EmailVerificationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Verify your email',
      subtitle: 'Enter the 6-digit code we sent',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Verify your email',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
