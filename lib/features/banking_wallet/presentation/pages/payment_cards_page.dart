import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class PaymentCardsPage extends StatelessWidget {
  const PaymentCardsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Payment cards',
      subtitle: 'Your saved cards',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Payment cards',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
