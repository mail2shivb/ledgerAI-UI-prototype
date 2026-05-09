import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_radius.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../data/seed/sample_data.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class AssistantChatPage extends StatelessWidget {
  const AssistantChatPage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Assistant',
      subtitle: 'Ask about your records — answers cite sources',
      showBack: true,
      actions: [
        IconButton(
          icon: const Icon(Icons.mic_rounded, color: Colors.white),
          onPressed: () => context.goNamed(RouteNames.voiceQuery),
        ),
      ],
      child: Column(children: [
        Expanded(child: ListView(
          padding: const EdgeInsets.all(AppSpacing.lg),
          children: [
            Text('Try asking', style: AppTextStyles.title),
            const SizedBox(height: AppSpacing.sm),
            Wrap(
              spacing: AppSpacing.sm, runSpacing: AppSpacing.sm,
              children: SampleData.assistantSuggestions.map((s) =>
                ActionChip(
                  backgroundColor: AppColors.paleLavender,
                  label: Text(s['q'] ?? ''),
                  onPressed: () =>
                      context.goNamed(RouteNames.queryResultDetail),
                ),
              ).toList(),
            ),
          ],
        )),
        Padding(
          padding: const EdgeInsets.all(AppSpacing.lg),
          child: Container(
            padding: const EdgeInsets.symmetric(
                horizontal: AppSpacing.md, vertical: AppSpacing.sm),
            decoration: BoxDecoration(
              color: AppColors.softLavender,
              borderRadius: BorderRadius.circular(AppRadius.xl),
              border: Border.all(color: AppColors.border),
            ),
            child: Row(children: [
              const Expanded(child: TextField(
                decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: 'Ask about a document, bill or person…',
                ),
              )),
              IconButton(
                icon: const Icon(Icons.send_rounded,
                    color: AppColors.primaryPurple),
                onPressed: () =>
                    context.goNamed(RouteNames.queryResultDetail),
              ),
            ]),
          ),
        ),
      ]),
    );
  }
}
