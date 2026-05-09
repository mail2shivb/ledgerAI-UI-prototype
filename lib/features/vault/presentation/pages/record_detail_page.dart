import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class RecordDetailPage extends StatelessWidget {
  const RecordDetailPage({super.key, required this.recordId});
  final String recordId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Record',
      subtitle: 'Details and source documents',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Record',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
