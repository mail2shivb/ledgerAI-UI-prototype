import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class SharedItemDetailPage extends StatelessWidget {
  const SharedItemDetailPage({super.key, required this.itemId});
  final String itemId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Shared item',
      subtitle: 'Shared item detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Shared item',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
