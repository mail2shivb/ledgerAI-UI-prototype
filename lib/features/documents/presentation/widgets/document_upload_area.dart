import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_radius.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';

class DocumentUploadArea extends StatelessWidget {
  const DocumentUploadArea({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.lg),
      decoration: BoxDecoration(
        color: AppColors.softLavender,
        borderRadius: BorderRadius.circular(AppRadius.md),
        border: Border.all(color: AppColors.border, style: BorderStyle.solid),
      ),
      child: Column(children: [
        const Icon(Icons.cloud_upload_rounded,
            color: AppColors.primaryPurple, size: 32),
        const SizedBox(height: AppSpacing.sm),
        Text('Drop a file or tap to scan',
            style: AppTextStyles.title.copyWith(fontSize: 15)),
        const SizedBox(height: 4),
        Text('OCR runs on-device. Review before saving.',
            style: AppTextStyles.bodySecondary),
      ]),
    );
  }
}
