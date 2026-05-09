import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class EmptyStatesPage extends StatelessWidget {
  const EmptyStatesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Empty states',
      subtitle: 'Design system reference',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Empty states',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
