import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_spacing.dart';
import '../../core/theme/app_text_styles.dart';

class EmptyStateCard extends StatelessWidget {
  const EmptyStateCard({
    super.key, required this.icon, required this.title, this.message,
  });
  final IconData icon;
  final String title;
  final String? message;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(AppSpacing.xxl),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 48, color: AppColors.primaryPurple),
            const SizedBox(height: AppSpacing.md),
            Text(title, style: AppTextStyles.title, textAlign: TextAlign.center),
            if (message != null) ...[
              const SizedBox(height: AppSpacing.xs),
              Text(message!, style: AppTextStyles.bodySecondary,
                  textAlign: TextAlign.center),
            ],
          ],
        ),
      ),
    );
  }
}
