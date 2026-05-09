import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class CameraPermissionPage extends StatelessWidget {
  const CameraPermissionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PageScaffold(
      title: 'Camera permission',
      subtitle: 'Required for OCR scanning',
      showBack: true,
      child: EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Camera permission',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
