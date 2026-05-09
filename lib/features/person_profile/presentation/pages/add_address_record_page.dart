import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddAddressRecordPage extends StatelessWidget {
  const AddAddressRecordPage({super.key, required this.personId});
  final String personId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Add address record',
      subtitle: 'Capture an address entry',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Add address record',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
