import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/routing/route_names.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_radius.dart';
import '../../core/theme/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';

/// Bottom-sheet modal triggered by the centre "+" tab.
class AddActionSheet extends StatelessWidget {
  const AddActionSheet({super.key});

  static Future<void> show(BuildContext context) {
    return showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => const AddActionSheet(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: AppColors.cardSurface,
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xxl)),
      ),
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.lg, AppSpacing.md, AppSpacing.lg, AppSpacing.xxl),
      child: SafeArea(
        top: false,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(child: Container(
              width: 40, height: 4,
              decoration: BoxDecoration(
                color: AppColors.divider,
                borderRadius: BorderRadius.circular(2),
              ),
            )),
            const SizedBox(height: AppSpacing.lg),
            Text('Add to your vault', style: AppTextStyles.title),
            const SizedBox(height: AppSpacing.xs),
            Text('Choose what you want to capture.',
                style: AppTextStyles.bodySecondary),
            const SizedBox(height: AppSpacing.lg),
            _Action(icon: Icons.description_rounded, color: AppColors.tileBlue,
                label: 'Document', subtitle: 'Passport, licence, contract…',
                onTap: () { Navigator.pop(context);
                  context.goNamed(RouteNames.addRecord); }),
            _Action(icon: Icons.receipt_long_rounded, color: AppColors.tileAmber,
                label: 'Bill or receipt', subtitle: 'Invoice, utility, expense',
                onTap: () { Navigator.pop(context);
                  context.goNamed(RouteNames.addRecord); }),
            _Action(icon: Icons.notifications_active_rounded,
                color: AppColors.tileCoral,
                label: 'Reminder', subtitle: 'Renewal, deadline, payment',
                onTap: () { Navigator.pop(context);
                  context.goNamed(RouteNames.addReminder); }),
            _Action(icon: Icons.task_alt_rounded, color: AppColors.tileGreen,
                label: 'Task', subtitle: 'Errand or to-do',
                onTap: () { Navigator.pop(context);
                  context.goNamed(RouteNames.addTask); }),
            _Action(icon: Icons.person_add_alt_1_rounded,
                color: AppColors.tileIndigo,
                label: 'Person', subtitle: 'Family member or dependant',
                onTap: () { Navigator.pop(context);
                  context.goNamed(RouteNames.addPerson); }),
            _Action(icon: Icons.account_balance_wallet_rounded,
                color: AppColors.tileSlate,
                label: 'Banking & wallet', subtitle: 'Account, card, recovery',
                onTap: () { Navigator.pop(context);
                  context.goNamed(RouteNames.bankingOverview); }),
          ],
        ),
      ),
    );
  }
}

class _Action extends StatelessWidget {
  const _Action({
    required this.icon, required this.color, required this.label,
    required this.subtitle, required this.onTap,
  });
  final IconData icon;
  final Color color;
  final String label;
  final String subtitle;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(AppRadius.md),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: AppSpacing.sm),
        child: Row(
          children: [
            Container(
              width: 44, height: 44,
              decoration: BoxDecoration(color: color,
                  borderRadius: BorderRadius.circular(AppRadius.md)),
              child: Icon(icon, color: AppColors.deepPurple),
            ),
            const SizedBox(width: AppSpacing.md),
            Expanded(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: AppTextStyles.title.copyWith(fontSize: 16)),
                Text(subtitle, style: AppTextStyles.bodySecondary),
              ],
            )),
            const Icon(Icons.chevron_right, color: AppColors.textMuted),
          ],
        ),
      ),
    );
  }
}
