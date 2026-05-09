import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class ReportDetailPage extends StatelessWidget {
  const ReportDetailPage({super.key, required this.reportId});
  final String reportId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Report',
      subtitle: 'Report detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Report',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
