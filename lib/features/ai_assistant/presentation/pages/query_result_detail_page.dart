import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class QueryResultDetailPage extends StatelessWidget {
  const QueryResultDetailPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Query result',
      subtitle: 'Source-backed answer detail',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Query result',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
