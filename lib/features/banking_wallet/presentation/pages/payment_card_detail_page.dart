import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class PaymentCardDetailPage extends StatelessWidget {
  const PaymentCardDetailPage({super.key, required this.cardId});
  final String cardId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Card detail',
      subtitle: 'Card detail',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Card detail',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
