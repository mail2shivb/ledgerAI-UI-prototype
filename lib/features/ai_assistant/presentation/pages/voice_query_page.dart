import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class VoiceQueryPage extends StatelessWidget {
  const VoiceQueryPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Voice query',
      subtitle: 'Tap and speak — review before answering',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Voice query',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
