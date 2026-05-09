import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_radius.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/colourful_icon_tile.dart';
import '../../../../shared/widgets/main_shell.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../data/seed/sample_data.dart';

class VaultExplorerPage extends StatelessWidget {
  const VaultExplorerPage({super.key});

  static const _categoryIcons = <String, IconData>{
    'identity_legal': Icons.badge_rounded,
    'home_property': Icons.home_rounded,
    'vehicles_transport': Icons.directions_car_rounded,
    'banking_credit': Icons.account_balance_rounded,
    'insurance': Icons.shield_rounded,
    'bills_utilities': Icons.receipt_long_rounded,
    'work_income_tax': Icons.work_rounded,
    'person_family': Icons.people_rounded,
  };

  @override
  Widget build(BuildContext context) {
    return MainShell(
      currentIndex: 1,
      body: PageScaffold(
        title: 'Vault',
        subtitle: 'Your secure records, on this device',
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.lg),
          children: [
            GestureDetector(
              onTap: () => context.goNamed(RouteNames.searchResults,
                  queryParameters: {'q': ''}),
              child: Container(
                padding: const EdgeInsets.symmetric(
                    horizontal: AppSpacing.md, vertical: AppSpacing.md),
                decoration: BoxDecoration(
                  color: AppColors.softLavender,
                  borderRadius: BorderRadius.circular(AppRadius.md),
                  border: Border.all(color: AppColors.border),
                ),
                child: Row(children: const [
                  Icon(Icons.search, color: AppColors.textMuted),
                  SizedBox(width: AppSpacing.sm),
                  Text('Search records, people, bills…',
                      style: AppTextStyles.bodySecondary),
                ]),
              ),
            ),
            const SizedBox(height: AppSpacing.lg),
            Text('Categories', style: AppTextStyles.title),
            const SizedBox(height: AppSpacing.sm),
            GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: 2,
              mainAxisSpacing: AppSpacing.sm,
              crossAxisSpacing: AppSpacing.sm,
              childAspectRatio: 1.5,
              children: SampleData.categories.map((c) =>
                ColourfulIconTile(
                  icon: _categoryIcons[c['id']] ?? Icons.folder_rounded,
                  label: c['label'] ?? '',
                  tint: AppColors.paleLavender,
                  onTap: () => context.goNamed(RouteNames.vaultCategory,
                      pathParameters: {'categoryId': c['id'] ?? ''}),
                ),
              ).toList(),
            ),
            const SizedBox(height: AppSpacing.lg),
            ListTile(
              leading: const Icon(Icons.fact_check_rounded,
                  color: AppColors.primaryPurple),
              title: const Text('Review queue'),
              subtitle: const Text('Items waiting for your review'),
              trailing: const Icon(Icons.chevron_right),
              onTap: () => context.goNamed(RouteNames.reviewQueue),
            ),
          ],
        ),
      ),
    );
  }
}
