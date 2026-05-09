import 'package:flutter/foundation.dart';

class AssistantController extends ChangeNotifier {
  final List<String> _messages = [];
  List<String> get messages => List.unmodifiable(_messages);

  void send(String text) {
    if (text.trim().isEmpty) return;
    _messages.add(text);
    notifyListeners();
  }
}
