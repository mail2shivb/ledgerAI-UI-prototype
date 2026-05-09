import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';

class AuthChoicePage extends StatelessWidget {
  const AuthChoicePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.headerPurple,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.xxl),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Spacer(),
              const Icon(Icons.shield_rounded,
                  color: Colors.white, size: 64),
              const SizedBox(height: AppSpacing.lg),
              Text('LedgerAI',
                  style: AppTextStyles.displayLarge
                      .copyWith(color: Colors.white)),
              const SizedBox(height: AppSpacing.xs),
              Text('Your records stay on this device.',
                  style: AppTextStyles.body.copyWith(color: Colors.white70)),
              const Spacer(),
              ElevatedButton(
                onPressed: () => context.goNamed(RouteNames.signIn),
                child: const Text('Sign in'),
              ),
              const SizedBox(height: AppSpacing.md),
              OutlinedButton(
                style: OutlinedButton.styleFrom(
                  foregroundColor: Colors.white,
                  side: const BorderSide(color: Colors.white70),
                  minimumSize: const Size.fromHeight(48),
                ),
                onPressed: () => context.goNamed(RouteNames.createAccount),
                child: const Text('Create account'),
              ),
              const SizedBox(height: AppSpacing.lg),
              TextButton(
                style: TextButton.styleFrom(foregroundColor: Colors.white70),
                onPressed: () => context.goNamed(RouteNames.biometricUnlock),
                child: const Text('Continue with biometrics'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
