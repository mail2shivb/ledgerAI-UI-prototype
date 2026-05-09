import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class PersonDocumentsPage extends StatelessWidget {
  const PersonDocumentsPage({super.key, required this.personId});
  final String personId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Person documents',
      subtitle: 'Documents linked to this person',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Person documents',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
