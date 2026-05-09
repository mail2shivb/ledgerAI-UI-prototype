import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../../../documents/presentation/widgets/inline_add_document_panel.dart';

/// Add record entrypoint. Inline document add flow lives in
/// `InlineAddDocumentPanel`, the OCR-first capture surface used by Documents
/// and the AddActionSheet.
class AddRecordPage extends StatelessWidget {
  const AddRecordPage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Add a record',
      subtitle: 'Capture a document, bill or receipt',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          AppCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Capture method', style: AppTextStyles.title),
                const SizedBox(height: AppSpacing.sm),
                ListTile(
                  leading: const Icon(Icons.photo_camera_rounded,
                      color: AppColors.primaryPurple),
                  title: const Text('Scan with camera'),
                  subtitle: const Text('OCR runs locally — review before save'),
                  onTap: () => context.goNamed(RouteNames.reviewExtraction),
                ),
                ListTile(
                  leading: const Icon(Icons.upload_file_rounded,
                      color: AppColors.primaryPurple),
                  title: const Text('Upload from files'),
                  subtitle: const Text('PDF, image or text'),
                  onTap: () => context.goNamed(RouteNames.reviewExtraction),
                ),
                ListTile(
                  leading: const Icon(Icons.edit_note_rounded,
                      color: AppColors.primaryPurple),
                  title: const Text('Enter manually'),
                  subtitle: const Text('Type the details yourself'),
                  onTap: () => context.goNamed(RouteNames.reviewExtraction),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.lg),
          const InlineAddDocumentPanel(),
        ],
      ),
    );
  }
}
