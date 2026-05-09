import 'package:flutter/material.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../shared/widgets/empty_state.dart';

class CategoryDetailPage extends StatelessWidget {
  const CategoryDetailPage({super.key, required this.categoryId});
  final String categoryId;

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Category',
      subtitle: 'Records in this category',
      showBack: true,
      child: const EmptyStateCard(
        icon: Icons.auto_awesome_rounded,
        title: 'Category',
        message: 'Connected scaffold — wire to Drift / repositories.',
      ),
    );
  }
}
