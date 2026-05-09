import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../data/seed/sample_data.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/main_shell.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class RemindersTasksPage extends StatelessWidget {
  const RemindersTasksPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MainShell(
      currentIndex: 3,
      body: PageScaffold(
        title: 'Reminders',
        subtitle: 'Renewals, deadlines and tasks',
        actions: [
          IconButton(
            icon: const Icon(Icons.add_rounded, color: Colors.white),
            onPressed: () => context.goNamed(RouteNames.addReminder),
          ),
        ],
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.lg),
          children: [
            Row(children: [
              Expanded(child: TextButton.icon(
                icon: const Icon(Icons.task_alt_rounded),
                onPressed: () => context.goNamed(RouteNames.tasks),
                label: const Text('Tasks'),
              )),
            ]),
            const SizedBox(height: AppSpacing.sm),
            for (final r in SampleData.reminders)
              Padding(
                padding: const EdgeInsets.only(bottom: AppSpacing.sm),
                child: AppCard(
                  padding: const EdgeInsets.all(AppSpacing.md),
                  child: ListTile(
                    contentPadding: EdgeInsets.zero,
                    leading: const Icon(Icons.notifications_active_rounded,
                        color: AppColors.warning),
                    title: Text(r['title'] ?? '',
                        style: AppTextStyles.title.copyWith(fontSize: 15)),
                    subtitle: Text('Due ${r['due']}'),
                    trailing: const Icon(Icons.chevron_right),
                    onTap: () => context.goNamed(RouteNames.reminderDetail,
                        pathParameters: {'reminderId': r['id'] ?? ''}),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
