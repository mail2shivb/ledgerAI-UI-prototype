import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Profile',
      subtitle: 'Your account profile',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          // Profile header
          AppCard(
            padding: const EdgeInsets.all(AppSpacing.lg),
            child: Row(
              children: [
                Container(
                  width: 64,
                  height: 64,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [AppColors.primaryPurple, AppColors.headerPurple],
                    ),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.person, color: Colors.white, size: 32),
                ),
                const SizedBox(width: AppSpacing.md),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Alex Carter', style: AppTextStyles.headline),
                      const SizedBox(height: 4),
                      Text('alex.carter@example.co.uk',
                          style: AppTextStyles.bodySecondary),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.lg),

          // Account section
          Text('Account', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.email_outlined,
                  title: 'Email',
                  subtitle: 'alex.carter@example.co.uk',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.phone_outlined,
                  title: 'Phone',
                  subtitle: '+44 7700 900123',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.lock_outline,
                  title: 'Password',
                  subtitle: 'Change your password',
                  onTap: () {},
                ),
              ],
            ),
          ),

          const SizedBox(height: AppSpacing.lg),

          // Security section
          Text('Security', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.fingerprint,
                  title: 'Biometric unlock',
                  subtitle: 'Enabled',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.security,
                  title: 'Two-factor authentication',
                  subtitle: 'Enabled',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.vpn_key,
                  title: 'Recovery key',
                  subtitle: 'View or regenerate',
                  onTap: () {},
                ),
              ],
            ),
          ),

          const SizedBox(height: AppSpacing.lg),

          // More options
          Text('More', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.settings,
                  title: 'Settings',
                  onTap: () => context.goNamed(RouteNames.settings),
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.help_outline,
                  title: 'Help & Support',
                  onTap: () => context.goNamed(RouteNames.helpAbout),
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.logout,
                  title: 'Log out',
                  titleColor: AppColors.error,
                  onTap: () {},
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _SettingTile extends StatelessWidget {
  const _SettingTile({
    required this.icon,
    required this.title,
    this.subtitle,
    this.onTap,
    this.titleColor,
  });

  final IconData icon;
  final String title;
  final String? subtitle;
  final VoidCallback? onTap;
  final Color? titleColor;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(icon, color: titleColor ?? AppColors.primaryPurple),
      title: Text(title, style: TextStyle(color: titleColor)),
      subtitle: subtitle != null ? Text(subtitle!) : null,
      trailing: const Icon(Icons.chevron_right, color: AppColors.textMuted),
      onTap: onTap,
    );
  }
}
