import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class SearchResultsPage extends StatelessWidget {
  const SearchResultsPage({super.key, required this.query});
  final String query;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Search results',
      subtitle: 'Results across your vault',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Search results',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
