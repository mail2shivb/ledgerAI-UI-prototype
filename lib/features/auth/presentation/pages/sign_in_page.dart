import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});
  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  final _email = TextEditingController();
  final _password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Sign in',
      subtitle: 'Welcome back to LedgerAI',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          TextField(
            controller: _email,
            keyboardType: TextInputType.emailAddress,
            decoration: const InputDecoration(labelText: 'Email'),
          ),
          const SizedBox(height: AppSpacing.md),
          TextField(
            controller: _password,
            obscureText: true,
            decoration: const InputDecoration(labelText: 'Password'),
          ),
          const SizedBox(height: AppSpacing.lg),
          ElevatedButton(
            onPressed: () => context.goNamed(RouteNames.mfaVerification),
            child: const Text('Continue'),
          ),
          const SizedBox(height: AppSpacing.sm),
          TextButton(
            onPressed: () => context.goNamed(RouteNames.forgotPassword),
            child: const Text('Forgot password?'),
          ),
        ],
      ),
    );
  }
}
