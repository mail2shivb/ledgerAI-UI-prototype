import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class AddPersonPage extends StatelessWidget {
  const AddPersonPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Add person',
      subtitle: 'Add a family member or dependant',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Add person',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
