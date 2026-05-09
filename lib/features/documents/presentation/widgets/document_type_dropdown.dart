import 'package:flutter/material.dart';

class DocumentTypeDropdown extends StatelessWidget {
  const DocumentTypeDropdown({
    super.key, required this.value, required this.onChanged,
  });
  final String value;
  final ValueChanged<String> onChanged;

  @override
  Widget build(BuildContext context) {
    return DropdownButtonFormField<String>(
      value: value,
      decoration: const InputDecoration(labelText: 'Document type'),
      items: const [
        DropdownMenuItem(value: 'passport', child: Text('Passport')),
        DropdownMenuItem(value: 'driving_licence',
            child: Text('Driving licence')),
        DropdownMenuItem(value: 'utility_bill', child: Text('Utility bill')),
        DropdownMenuItem(value: 'tenancy', child: Text('Tenancy agreement')),
        DropdownMenuItem(value: 'other', child: Text('Other document')),
      ],
      onChanged: (v) { if (v != null) onChanged(v); },
    );
  }
}
