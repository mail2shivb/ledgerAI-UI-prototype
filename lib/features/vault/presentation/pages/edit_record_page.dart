import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class EditRecordPage extends StatelessWidget {
  const EditRecordPage({super.key, required this.recordId});
  final String recordId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Edit record',
      subtitle: 'Update fields',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Edit record',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
