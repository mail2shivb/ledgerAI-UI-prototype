import 'package:flutter/material.dart';
import '../../../../core/theme/app_spacing.dart';

class PassportFormFields extends StatelessWidget {
  const PassportFormFields({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: const [
      TextField(decoration: InputDecoration(labelText: 'Passport number')),
      SizedBox(height: AppSpacing.sm),
      TextField(decoration: InputDecoration(labelText: 'Issuing country')),
      SizedBox(height: AppSpacing.sm),
      TextField(decoration: InputDecoration(labelText: 'Date of issue')),
      SizedBox(height: AppSpacing.sm),
      TextField(decoration: InputDecoration(labelText: 'Date of expiry')),
    ]);
  }
}
