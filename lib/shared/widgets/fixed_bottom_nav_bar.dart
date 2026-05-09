import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_shadows.dart';

/// Fixed 5-tab bottom bar: Home, Vault, Add (elevated centre), Reminders, Reports.
/// `onAddPressed` opens the AddActionSheet (do NOT route directly to AddRecord).
class FixedBottomNavBar extends StatelessWidget {
  const FixedBottomNavBar({
    super.key,
    required this.currentIndex,
    required this.onTabSelected,
    required this.onAddPressed,
  });

  final int currentIndex;
  final ValueChanged<int> onTabSelected;
  final VoidCallback onAddPressed;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: AppColors.divider)),
      ),
      child: SafeArea(
        top: false,
        child: SizedBox(
          height: 68,
          child: Row(
            children: [
              _Tab(icon: Icons.home_rounded, label: 'Home',
                  index: 0, currentIndex: currentIndex, onTap: onTabSelected),
              _Tab(icon: Icons.lock_rounded, label: 'Vault',
                  index: 1, currentIndex: currentIndex, onTap: onTabSelected),
              _AddButton(onPressed: onAddPressed),
              _Tab(icon: Icons.notifications_rounded, label: 'Reminders',
                  index: 3, currentIndex: currentIndex, onTap: onTabSelected),
              _Tab(icon: Icons.insert_chart_rounded, label: 'Reports',
                  index: 4, currentIndex: currentIndex, onTap: onTabSelected),
            ],
          ),
        ),
      ),
    );
  }
}

class _Tab extends StatelessWidget {
  const _Tab({
    required this.icon,
    required this.label,
    required this.index,
    required this.currentIndex,
    required this.onTap,
  });
  final IconData icon;
  final String label;
  final int index;
  final int currentIndex;
  final ValueChanged<int> onTap;

  @override
  Widget build(BuildContext context) {
    final active = currentIndex == index;
    final color = active ? AppColors.primaryPurple : AppColors.textMuted;
    return Expanded(
      child: InkWell(
        onTap: () => onTap(index),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: color, size: 24),
            const SizedBox(height: 2),
            Text(label,
                style: TextStyle(color: color, fontSize: 11,
                    fontWeight: active ? FontWeight.w600 : FontWeight.w500)),
          ],
        ),
      ),
    );
  }
}

class _AddButton extends StatelessWidget {
  const _AddButton({required this.onPressed});
  final VoidCallback onPressed;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Center(
        child: GestureDetector(
          onTap: onPressed,
          child: Container(
            width: 52, height: 52,
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [AppColors.primaryPurple, AppColors.royalPurple],
                begin: Alignment.topLeft, end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(18),
              boxShadow: AppShadows.elevatedAdd,
            ),
            child: const Icon(Icons.add_rounded, color: Colors.white, size: 28),
          ),
        ),
      ),
    );
  }
}
