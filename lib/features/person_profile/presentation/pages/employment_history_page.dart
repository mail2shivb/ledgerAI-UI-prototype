import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class EmploymentHistoryPage extends StatelessWidget {
  const EmploymentHistoryPage({super.key, required this.personId});
  final String personId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Employment history',
      subtitle: 'Past and current employment',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Employment history',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
