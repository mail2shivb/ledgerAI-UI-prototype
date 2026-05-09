import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_radius.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import 'document_type_dropdown.dart';
import 'document_upload_area.dart';
import 'passport_form_fields.dart';
import 'driving_licence_form_fields.dart';

/// Inline Add Document flow per spec §10/§17. The user picks a type, the
/// form fields swap in-place, and the OCR review-before-save handoff happens
/// from `DocumentUploadArea`.
class InlineAddDocumentPanel extends StatefulWidget {
  const InlineAddDocumentPanel({super.key});
  @override
  State<InlineAddDocumentPanel> createState() =>
      _InlineAddDocumentPanelState();
}

class _InlineAddDocumentPanelState extends State<InlineAddDocumentPanel> {
  String _type = 'passport';

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.lg),
      decoration: BoxDecoration(
        color: AppColors.cardSurface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
        border: Border.all(color: AppColors.divider),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Add a document', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          DocumentTypeDropdown(
            value: _type,
            onChanged: (v) => setState(() => _type = v),
          ),
          const SizedBox(height: AppSpacing.md),
          const DocumentUploadArea(),
          const SizedBox(height: AppSpacing.md),
          if (_type == 'passport') const PassportFormFields(),
          if (_type == 'driving_licence') const DrivingLicenceFormFields(),
        ],
      ),
    );
  }
}
