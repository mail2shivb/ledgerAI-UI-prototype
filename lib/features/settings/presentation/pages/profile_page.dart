import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Profile',
      subtitle: 'Your account profile',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Profile',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
