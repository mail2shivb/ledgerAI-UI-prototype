import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class LifeTimelinePage extends StatelessWidget {
  const LifeTimelinePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Life timeline',
      subtitle: 'Major events across your records',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Life timeline',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
