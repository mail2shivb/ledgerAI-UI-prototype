import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class ForgotPasswordPage extends StatefulWidget {
  const ForgotPasswordPage({super.key});
  @override
  State<ForgotPasswordPage> createState() => _ForgotPasswordPageState();
}

class _ForgotPasswordPageState extends State<ForgotPasswordPage> {
  final _email = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Forgot password',
      subtitle: 'We will help you regain access',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          const Text(
            'Enter the email address associated with your account and we\'ll send you a link to reset your password.',
          ),
          const SizedBox(height: AppSpacing.lg),
          TextField(
            controller: _email,
            keyboardType: TextInputType.emailAddress,
            decoration: const InputDecoration(
              labelText: 'Email',
              hintText: 'your.email@example.com',
            ),
          ),
          const SizedBox(height: AppSpacing.lg),
          ElevatedButton(
            onPressed: () => context.goNamed(RouteNames.resetPassword),
            child: const Text('Send reset link'),
          ),
          const SizedBox(height: AppSpacing.sm),
          TextButton(
            onPressed: () => context.goNamed(RouteNames.signIn),
            child: const Text('Back to sign in'),
          ),
        ],
      ),
    );
  }
}
