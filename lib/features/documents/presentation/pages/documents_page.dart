import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/page_scaffold.dart';
import '../widgets/inline_add_document_panel.dart';

/// Documents owns its own AppBar via PageScaffold — do NOT wrap with another.
class DocumentsPage extends StatelessWidget {
  const DocumentsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Documents',
      subtitle: 'Passports, licences, contracts and more',
      showBack: true,
      actions: [
        IconButton(
          icon: const Icon(Icons.add_rounded, color: Colors.white),
          onPressed: () => context.goNamed(RouteNames.addRecord),
        ),
      ],
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          const InlineAddDocumentPanel(),
          const SizedBox(height: AppSpacing.lg),
          Text('Recent documents', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          for (final d in const [
            ['Passport — Alex Carter', 'Identity & legal', 'Expires 2031-04'],
            ['Driving licence — Alex Carter', 'Identity & legal',
              'Expires 2029-08'],
            ['Tenancy agreement', 'Home & property', '12 mo from 2024-09'],
          ])
            Padding(
              padding: const EdgeInsets.only(bottom: AppSpacing.sm),
              child: AppCard(
                padding: const EdgeInsets.all(AppSpacing.md),
                child: Row(children: [
                  const Icon(Icons.description_rounded,
                      color: AppColors.primaryPurple),
                  const SizedBox(width: AppSpacing.md),
                  Expanded(child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(d[0], style: AppTextStyles.title.copyWith(
                          fontSize: 15)),
                      Text('${d[1]} · ${d[2]}',
                          style: AppTextStyles.bodySecondary),
                    ],
                  )),
                  const Icon(Icons.chevron_right, color: AppColors.textMuted),
                ]),
              ),
            ),
        ],
      ),
    );
  }
}
