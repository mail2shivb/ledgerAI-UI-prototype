import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../data/seed/sample_data.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class PersonProfilesPage extends StatelessWidget {
  const PersonProfilesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'People',
      subtitle: 'Family and household profiles',
      showBack: true,
      actions: [
        IconButton(
          icon: const Icon(Icons.person_add_alt_1_rounded,
              color: Colors.white),
          onPressed: () => context.goNamed(RouteNames.addPerson),
        ),
      ],
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          for (final p in SampleData.people)
            Padding(
              padding: const EdgeInsets.only(bottom: AppSpacing.sm),
              child: AppCard(
                padding: const EdgeInsets.all(AppSpacing.md),
                child: Row(children: [
                  CircleAvatar(
                    backgroundColor: AppColors.paleLavender,
                    child: Text((p['name'] ?? '?')[0],
                        style: const TextStyle(
                            color: AppColors.deepPurple,
                            fontWeight: FontWeight.w700)),
                  ),
                  const SizedBox(width: AppSpacing.md),
                  Expanded(child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(p['name'] ?? '', style: AppTextStyles.title
                          .copyWith(fontSize: 15)),
                      Text(p['relation'] ?? '',
                          style: AppTextStyles.bodySecondary),
                    ],
                  )),
                  IconButton(
                    icon: const Icon(Icons.chevron_right),
                    onPressed: () => context.goNamed(RouteNames.personDetail,
                        pathParameters: {'personId': p['id'] ?? ''}),
                  ),
                ]),
              ),
            ),
        ],
      ),
    );
  }
}
