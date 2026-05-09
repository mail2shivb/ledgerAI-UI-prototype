import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/routing/route_names.dart';
import '../../../../core/theme/app_colors.dart';
import '../../../../core/theme/app_spacing.dart';
import '../../../../shared/widgets/page_scaffold.dart';

class BankingOverviewPage extends StatelessWidget {
  const BankingOverviewPage({super.key});

  @override
  Widget build(BuildContext context) {
    final tiles = <List<Object>>[
      [Icons.account_balance_rounded, 'Bank accounts',
        RouteNames.bankAccounts],
      [Icons.credit_card_rounded, 'Payment cards', RouteNames.paymentCards],
      [Icons.account_balance_wallet_rounded, 'Wallets',
        RouteNames.walletRecords],
      [Icons.folder_zip_rounded, 'Statement archive',
        RouteNames.bankStatementArchive],
      [Icons.contact_phone_rounded, 'Provider contacts',
        RouteNames.financialProviderContacts],
    ];
    return PageScaffold(
      title: 'Banking & wallet',
      subtitle: 'Numbers stay masked by default',
      showBack: true,
      child: ListView(
        padding: const EdgeInsets.all(AppSpacing.lg),
        children: tiles.map((t) => ListTile(
          tileColor: AppColors.cardSurface,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
              side: const BorderSide(color: AppColors.divider)),
          contentPadding: const EdgeInsets.symmetric(
              horizontal: AppSpacing.md),
          leading: Icon(t[0] as IconData,
              color: AppColors.primaryPurple),
          title: Text(t[1] as String),
          trailing: const Icon(Icons.chevron_right),
          onTap: () => context.goNamed(t[2] as String),
        )).toList(),
      ),
    );
  }
}
