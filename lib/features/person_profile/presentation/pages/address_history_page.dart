import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddressHistoryPage extends StatelessWidget {
  const AddressHistoryPage({super.key, required this.personId});
  final String personId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Address history',
      subtitle: 'Past and current addresses',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Address history',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
