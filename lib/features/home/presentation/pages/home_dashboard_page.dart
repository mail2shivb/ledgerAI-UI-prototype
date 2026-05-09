import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/colourful_icon_tile.dart';
import '../../../../shared/widgets/main_shell.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../../data/seed/sample_data.dart';

class HomeDashboardPage extends StatelessWidget {
  const HomeDashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MainShell(
      currentIndex: 0,
      body: PageScaffold(
        title: 'Good morning, Alex',
        subtitle: 'Your life-admin at a glance',
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: Colors.white),
            onPressed: () => context.goNamed(RouteNames.searchResults,
                queryParameters: {'q': ''}),
          ),
          IconButton(
            icon: const Icon(Icons.person_outline, color: Colors.white),
            onPressed: () => context.goNamed(RouteNames.profile),
          ),
        ],
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.lg),
          children: [
            AppCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Life admin health',
                      style: AppTextStyles.title),
                  const SizedBox(height: AppSpacing.xs),
                  Text('3 reminders due, 1 doc to review',
                      style: AppTextStyles.bodySecondary),
                  const SizedBox(height: AppSpacing.md),
                  Row(children: [
                    _stat('92%', 'Health', AppColors.success),
                    const SizedBox(width: AppSpacing.md),
                    _stat('3', 'Due soon', AppColors.warning),
                    const SizedBox(width: AppSpacing.md),
                    _stat('1', 'Review', AppColors.info),
                  ]),
                ],
              ),
            ),
            const SizedBox(height: AppSpacing.lg),
            Text('Quick access', style: AppTextStyles.title),
            const SizedBox(height: AppSpacing.sm),
            GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: 3,
              mainAxisSpacing: AppSpacing.sm,
              crossAxisSpacing: AppSpacing.sm,
              childAspectRatio: 1,
              children: [
                ColourfulIconTile(icon: Icons.lock_rounded, label: 'Vault',
                    tint: AppColors.paleLavender,
                    onTap: () => context.goNamed(RouteNames.vault)),
                ColourfulIconTile(icon: Icons.description_rounded,
                    label: 'Documents', tint: AppColors.tileBlue,
                    onTap: () => context.goNamed(RouteNames.documents)),
                ColourfulIconTile(icon: Icons.account_balance_rounded,
                    label: 'Banking', tint: AppColors.tileSlate,
                    onTap: () => context.goNamed(RouteNames.bankingOverview)),
                ColourfulIconTile(icon: Icons.people_rounded, label: 'People',
                    tint: AppColors.tileIndigo,
                    onTap: () => context.goNamed(RouteNames.personProfiles)),
                ColourfulIconTile(icon: Icons.auto_awesome_rounded,
                    label: 'Assistant', tint: AppColors.tileIndigo,
                    onTap: () => context.goNamed(RouteNames.assistantChat)),
                ColourfulIconTile(icon: Icons.shield_rounded,
                    label: 'Emergency', tint: AppColors.tileCoral,
                    onTap: () => context.goNamed(RouteNames.emergencyPack)),
              ],
            ),
            const SizedBox(height: AppSpacing.lg),
            Text('Needs attention', style: AppTextStyles.title),
            const SizedBox(height: AppSpacing.sm),
            ...SampleData.reminders.map((r) => Padding(
              padding: const EdgeInsets.only(bottom: AppSpacing.sm),
              child: AppCard(
                padding: const EdgeInsets.all(AppSpacing.md),
                child: Row(children: [
                  const Icon(Icons.notifications_active_rounded,
                      color: AppColors.warning),
                  const SizedBox(width: AppSpacing.md),
                  Expanded(child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(r['title'] ?? '', style: AppTextStyles.title
                          .copyWith(fontSize: 15)),
                      Text('Due ${r['due']}',
                          style: AppTextStyles.bodySecondary),
                    ],
                  )),
                  IconButton(
                    icon: const Icon(Icons.chevron_right),
                    onPressed: () => context.goNamed(
                        RouteNames.reminderDetail,
                        pathParameters: {'reminderId': r['id'] ?? ''}),
                  ),
                ]),
              ),
            )),
          ],
        ),
      ),
    );
  }

  Widget _stat(String n, String label, Color c) => Expanded(
    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(n, style: AppTextStyles.headline.copyWith(color: c)),
      Text(label, style: AppTextStyles.caption),
    ]),
  );
}
