import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ResetPasswordPage extends StatelessWidget {
  const ResetPasswordPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Reset password',
      subtitle: 'Choose a new strong password',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Reset password',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
