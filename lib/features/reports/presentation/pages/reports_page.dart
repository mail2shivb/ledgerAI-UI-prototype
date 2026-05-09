import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/main_shell.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class ReportsPage extends StatelessWidget {
  const ReportsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final reports = const [
      ['life-admin-health', 'Life admin health',
        'Vault completeness and gaps'],
      ['bills-monthly', 'Bills this month',
        'Direct debits and standing orders'],
      ['expiring', 'Expiring soon',
        'Documents and policies in the next 90 days'],
      ['identity-coverage', 'Identity coverage',
        'IDs across the household'],
    ];
    return MainShell(
      currentIndex: 4,
      body: PageScaffold(
        title: 'Reports',
        subtitle: 'Insights from your private vault',
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.lg),
          children: [
            ListTile(
              tileColor: AppColors.paleLavender,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12)),
              leading: const Icon(Icons.timeline_rounded,
                  color: AppColors.deepPurple),
              title: const Text('Life timeline'),
              subtitle: const Text('Major events across all records'),
              trailing: const Icon(Icons.chevron_right),
              onTap: () => context.goNamed(RouteNames.lifeTimeline),
            ),
            const SizedBox(height: AppSpacing.lg),
            for (final r in reports)
              Padding(
                padding: const EdgeInsets.only(bottom: AppSpacing.sm),
                child: AppCard(
                  padding: const EdgeInsets.all(AppSpacing.md),
                  child: ListTile(
                    contentPadding: EdgeInsets.zero,
                    leading: const Icon(Icons.insert_chart_rounded,
                        color: AppColors.primaryPurple),
                    title: Text(r[1],
                        style: AppTextStyles.title.copyWith(fontSize: 15)),
                    subtitle: Text(r[2]),
                    trailing: const Icon(Icons.chevron_right),
                    onTap: () => context.goNamed(RouteNames.reportDetail,
                        pathParameters: {'reportId': r[0]}),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
