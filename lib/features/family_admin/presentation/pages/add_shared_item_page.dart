import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddSharedItemPage extends StatelessWidget {
  const AddSharedItemPage({super.key, required this.groupId});
  final String groupId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Add shared item',
      subtitle: 'Share with the group',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Add shared item',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
