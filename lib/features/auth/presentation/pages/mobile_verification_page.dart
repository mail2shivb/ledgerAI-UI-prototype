import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class MobileVerificationPage extends StatelessWidget {
  const MobileVerificationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Verify your mobile',
      subtitle: 'Enter the 6-digit code we sent',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Verify your mobile',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
