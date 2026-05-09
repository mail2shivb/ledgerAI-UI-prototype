import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_radius.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';

class PersonCard extends StatelessWidget {
  const PersonCard({
    super.key, required this.name, required this.relation, this.onTap,
  });
  final String name;
  final String relation;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(AppRadius.lg),
      child: Container(
        padding: const EdgeInsets.all(AppSpacing.md),
        decoration: BoxDecoration(
          color: AppColors.cardSurface,
          borderRadius: BorderRadius.circular(AppRadius.lg),
          border: Border.all(color: AppColors.divider),
        ),
        child: Row(children: [
          CircleAvatar(
            backgroundColor: AppColors.paleLavender,
            child: Text(name.isEmpty ? '?' : name[0],
                style: const TextStyle(
                    color: AppColors.deepPurple,
                    fontWeight: FontWeight.w700)),
          ),
          const SizedBox(width: AppSpacing.md),
          Expanded(child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(name, style: AppTextStyles.title.copyWith(fontSize: 15)),
              Text(relation, style: AppTextStyles.bodySecondary),
            ],
          )),
          const Icon(Icons.chevron_right, color: AppColors.textMuted),
        ]),
      ),
    );
  }
}
