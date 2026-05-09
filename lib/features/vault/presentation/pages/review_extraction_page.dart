import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ReviewExtractionPage extends StatelessWidget {
  const ReviewExtractionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Review extraction',
      subtitle: 'Confirm what we read before saving',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Review extraction',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
