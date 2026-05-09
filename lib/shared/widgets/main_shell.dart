import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/routing/route_names.dart';
import 'add_action_sheet.dart';
import 'fixed_bottom_nav_bar.dart';

/// Wraps a body with the fixed 5-tab bottom navigation. Used by Home, Vault,
/// Reminders, Reports.
class MainShell extends StatelessWidget {
  const MainShell({
    super.key, required this.currentIndex, required this.body,
  });
  final int currentIndex;
  final Widget body;

  void _onTab(BuildContext context, int i) {
    switch (i) {
      case 0: context.goNamed(RouteNames.home); break;
      case 1: context.goNamed(RouteNames.vault); break;
      case 3: context.goNamed(RouteNames.reminders); break;
      case 4: context.goNamed(RouteNames.reports); break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: body,
      bottomNavigationBar: FixedBottomNavBar(
        currentIndex: currentIndex,
        onTabSelected: (i) => _onTab(context, i),
        onAddPressed: () => AddActionSheet.show(context),
      ),
    );
  }
}
