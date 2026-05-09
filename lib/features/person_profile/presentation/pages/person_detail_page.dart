import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../data/seed/sample_data.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class PersonDetailPage extends StatelessWidget {
  const PersonDetailPage({super.key, required this.personId});
  final String personId;

  @override
  Widget build(BuildContext context) {
    final p = SampleData.people.firstWhere(
      (x) => x['id'] == personId,
      orElse: () => const {'name': 'Unknown', 'relation': '—'});
    return PageScaffold(
      title: p['name'] ?? 'Person',
      subtitle: p['relation'] ?? '',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          AppCard(child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Profile', style: AppTextStyles.title),
              const SizedBox(height: AppSpacing.xs),
              Text('Date of birth: ${p['dob'] ?? '—'}',
                  style: AppTextStyles.body),
              Text('Nationality: ${p['nationality'] ?? '—'}',
                  style: AppTextStyles.body),
            ],
          )),
          const SizedBox(height: AppSpacing.md),
          _row(context, Icons.location_on_rounded, 'Address history',
              RouteNames.addressHistory),
          _row(context, Icons.work_rounded, 'Employment history',
              RouteNames.employmentHistory),
          _row(context, Icons.description_rounded, 'Documents',
              RouteNames.personDocuments),
        ],
      ),
    );
  }

  Widget _row(BuildContext context, IconData icon, String label, String r) =>
      Padding(
        padding: const EdgeInsets.only(bottom: AppSpacing.sm),
        child: AppCard(
          padding: const EdgeInsets.all(AppSpacing.md),
          child: ListTile(
            contentPadding: EdgeInsets.zero,
            leading: Icon(icon, color: AppColors.primaryPurple),
            title: Text(label),
            trailing: const Icon(Icons.chevron_right),
            onTap: () => context.goNamed(r,
                pathParameters: {'personId': personId}),
          ),
        ),
      );
}
