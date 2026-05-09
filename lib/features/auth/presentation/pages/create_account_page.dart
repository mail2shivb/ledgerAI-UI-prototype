import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class CreateAccountPage extends StatelessWidget {
  const CreateAccountPage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Create account',
      subtitle: 'Set up your private vault',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          const TextField(decoration: InputDecoration(labelText: 'Full name')),
          const SizedBox(height: AppSpacing.md),
          const TextField(decoration: InputDecoration(labelText: 'Email')),
          const SizedBox(height: AppSpacing.md),
          const TextField(
            obscureText: true,
            decoration: InputDecoration(labelText: 'Password'),
          ),
          const SizedBox(height: AppSpacing.lg),
          ElevatedButton(
            onPressed: () => context.goNamed(RouteNames.emailVerification),
            child: const Text('Continue'),
          ),
        ],
      ),
    );
  }
}
