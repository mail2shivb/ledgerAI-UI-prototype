import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ReviewQueuePage extends StatelessWidget {
  const ReviewQueuePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Review queue',
      subtitle: 'Items awaiting your review',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Review queue',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
