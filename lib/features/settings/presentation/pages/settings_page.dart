import 'package:flutter/material.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../core/theme/app_text_styles.dart';
import '../../../../shared/widgets/app_card.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class SettingsPage extends StatelessWidget {
  const SettingsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageScaffold(
      title: 'Settings',
      subtitle: 'Preferences, security, appearance',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: [
          // Security & Privacy
          Text('Security & Privacy', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.fingerprint,
                  title: 'Biometric unlock',
                  subtitle: 'Face ID or fingerprint',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.lock_outline,
                  title: 'Vault password',
                  subtitle: 'Change vault password',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.security,
                  title: 'Two-factor authentication',
                  subtitle: 'Extra layer of security',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.shield_outlined,
                  title: 'Privacy settings',
                  subtitle: 'Data sharing preferences',
                  onTap: () {},
                ),
              ],
            ),
          ),

          const SizedBox(height: AppSpacing.lg),

          // Appearance
          Text('Appearance', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.palette_outlined,
                  title: 'Theme',
                  subtitle: 'Light mode',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.text_fields,
                  title: 'Text size',
                  subtitle: 'Default',
                  onTap: () {},
                ),
              ],
            ),
          ),

          const SizedBox(height: AppSpacing.lg),

          // Notifications
          Text('Notifications', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.notifications_outlined,
                  title: 'Notification settings',
                  subtitle: 'Reminders, alerts, updates',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.alarm,
                  title: 'Reminder defaults',
                  subtitle: '7 days before expiry',
                  onTap: () {},
                ),
              ],
            ),
          ),

          const SizedBox(height: AppSpacing.lg),

          // Data & Storage
          Text('Data & Storage', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.backup_outlined,
                  title: 'Backup & sync',
                  subtitle: 'Local backups only',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.download_outlined,
                  title: 'Export data',
                  subtitle: 'Download all your data',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.storage_outlined,
                  title: 'Storage usage',
                  subtitle: '47 MB used',
                  onTap: () {},
                ),
              ],
            ),
          ),

          const SizedBox(height: AppSpacing.lg),

          // About
          Text('About', style: AppTextStyles.title),
          const SizedBox(height: AppSpacing.sm),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                _SettingTile(
                  icon: Icons.help_outline,
                  title: 'Help & Support',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.info_outline,
                  title: 'About LedgerAI',
                  subtitle: 'Version 1.0.0',
                  onTap: () {},
                ),
                const Divider(height: 1),
                _SettingTile(
                  icon: Icons.description_outlined,
                  title: 'Terms & Privacy',
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
  });

  final IconData icon;
  final String title;
  final String? subtitle;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(icon, color: AppColors.primaryPurple),
      title: Text(title),
      subtitle: subtitle != null ? Text(subtitle!) : null,
      trailing: const Icon(Icons.chevron_right, color: AppColors.textMuted),
      onTap: onTap,
    );
  }
}
