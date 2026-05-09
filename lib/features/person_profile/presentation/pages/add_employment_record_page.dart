import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddEmploymentRecordPage extends StatelessWidget {
  const AddEmploymentRecordPage({super.key, required this.personId});
  final String personId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Add employment record',
      subtitle: 'Capture an employment entry',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Add employment record',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
