import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class VersionHistoryPage extends StatelessWidget {
  const VersionHistoryPage({super.key, required this.recordId});
  final String recordId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Version history',
      subtitle: 'Previous versions of this record',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Version history',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
