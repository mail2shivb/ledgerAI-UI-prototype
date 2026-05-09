import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class FamilyGroupDetailPage extends StatelessWidget {
  const FamilyGroupDetailPage({super.key, required this.groupId});
  final String groupId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Family group',
      subtitle: 'Group detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Family group',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
