import 'package:flutter/material.dart';
import '../../../../core/theme/app_spacing.dart';

class DrivingLicenceFormFields extends StatelessWidget {
  const DrivingLicenceFormFields({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: const [
      TextField(decoration: InputDecoration(labelText: 'Licence number')),
      SizedBox(height: AppSpacing.sm),
      TextField(decoration: InputDecoration(labelText: 'Issuing authority')),
      SizedBox(height: AppSpacing.sm),
      TextField(decoration: InputDecoration(labelText: 'Date of issue')),
      SizedBox(height: AppSpacing.sm),
      TextField(decoration: InputDecoration(labelText: 'Date of expiry')),
    ]);
  }
}
