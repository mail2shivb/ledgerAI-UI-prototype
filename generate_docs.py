#!/usr/bin/env python3
"""
LedgerAI Flutter Documentation Generator
Generates an HTML page with all 56 screens and their code for PDF export
"""

import os
from pathlib import Path

# Screen metadata
SCREEN_FILES = {
    'auth.dart': 'Authentication Screens',
    'main_screens.dart': 'Main Navigation Screens',
    'reminders.dart': 'Reminders Screens',
    'reports.dart': 'Reports Screens',
    'family.dart': 'Family Management Screens',
    'misc.dart': 'Settings & Miscellaneous Screens'
}

# Individual screen names for each file
SCREEN_DETAILS = {
    'auth.dart': [
        'SplashScreen',
        'OnboardingScreen',
        'LoginScreen',
        'SignupScreen',
        'ForgotPasswordScreen',
        'ResetPasswordScreen',
        'VerifyEmailScreen',
        'BiometricSetupScreen'
    ],
    'main_screens.dart': [
        'HomeScreen',
        'VaultScreen',
        'AddTransactionScreen',
        'AddActionSheet (Modal)',
        'TransactionDetailScreen',
        'CategoryDetailScreen',
        'SearchScreen',
        'FilterScreen',
        'NotificationsScreen'
    ],
    'reminders.dart': [
        'RemindersScreen',
        'CreateReminderScreen',
        'EditReminderScreen',
        'ReminderDetailScreen',
        'RecurringReminderScreen'
    ],
    'reports.dart': [
        'ReportsScreen',
        'SpendingReportScreen',
        'IncomeReportScreen',
        'CategoryReportScreen',
        'TrendsReportScreen',
        'ExportReportScreen',
        'CustomReportScreen'
    ],
    'family.dart': [
        'FamilyScreen',
        'InviteMemberScreen',
        'MemberDetailScreen',
        'EditMemberScreen',
        'SharedCategoriesScreen',
        'SharedBudgetScreen',
        'FamilySettingsScreen',
        'ActivityLogScreen',
        'PermissionsScreen'
    ],
    'misc.dart': [
        'ProfileScreen',
        'EditProfileScreen',
        'SettingsScreen',
        'SecurityScreen',
        'PrivacyScreen',
        'NotificationSettingsScreen',
        'AppearanceScreen',
        'LanguageScreen',
        'CurrencyScreen',
        'DataBackupScreen',
        'ExportDataScreen',
        'HelpScreen',
        'FAQScreen',
        'ContactSupportScreen',
        'AboutScreen',
        'TermsScreen',
        'PrivacyPolicyScreen',
        'BudgetScreen',
        'CreateBudgetScreen',
        'EditBudgetScreen',
        'BudgetDetailScreen',
        'CategoryManagementScreen'
    ]
}

def read_file_content(file_path):
    """Read and return file content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return f"// Error reading file: {e}"

def escape_html(text):
    """Escape HTML special characters"""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;')
            .replace("'", '&#39;'))

def generate_html_docs():
    """Generate HTML documentation from Flutter screens"""

    flutter_dir = Path('/workspaces/default/code/flutter')
    screens_dir = flutter_dir / 'lib' / 'screens'

    # Read supporting files
    theme_content = read_file_content(flutter_dir / 'lib' / 'theme.dart')
    shell_content = read_file_content(flutter_dir / 'lib' / 'widgets' / 'shell.dart')
    router_content = read_file_content(flutter_dir / 'lib' / 'router.dart')
    main_content = read_file_content(flutter_dir / 'lib' / 'main.dart')
    pubspec_content = read_file_content(flutter_dir / 'pubspec.yaml')
    readme_content = read_file_content(flutter_dir / 'README.md')

    html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LedgerAI Flutter Documentation - 56 Screens</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        h1 {
            color: #6B46C1;
            border-bottom: 4px solid #6B46C1;
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-size: 2.5em;
        }

        h2 {
            color: #553C9A;
            margin-top: 40px;
            margin-bottom: 20px;
            font-size: 1.8em;
            page-break-before: always;
        }

        h3 {
            color: #6B46C1;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 1.3em;
        }

        .meta {
            background: #F3F0FF;
            padding: 20px;
            border-left: 4px solid #6B46C1;
            margin-bottom: 30px;
            border-radius: 4px;
        }

        .meta p {
            margin: 5px 0;
        }

        .screen-list {
            background: #F9FAFB;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }

        .screen-list ul {
            list-style: none;
            columns: 2;
            column-gap: 30px;
        }

        .screen-list li {
            padding: 8px 0;
            border-bottom: 1px solid #E5E7EB;
        }

        .screen-list li:before {
            content: "📱 ";
            margin-right: 8px;
        }

        pre {
            background: #1E1E1E;
            color: #D4D4D4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.5;
            margin: 20px 0;
            page-break-inside: avoid;
        }

        code {
            font-family: 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
        }

        .file-header {
            background: #6B46C1;
            color: white;
            padding: 10px 20px;
            border-radius: 8px 8px 0 0;
            font-weight: bold;
            margin-top: 20px;
        }

        .toc {
            background: #F9FAFB;
            padding: 30px;
            border-radius: 8px;
            margin: 30px 0;
        }

        .toc h2 {
            margin-top: 0;
            page-break-before: auto;
        }

        .toc ul {
            list-style: none;
            padding-left: 0;
        }

        .toc li {
            padding: 8px 0;
            border-bottom: 1px solid #E5E7EB;
        }

        .toc a {
            color: #6B46C1;
            text-decoration: none;
            font-weight: 500;
        }

        .toc a:hover {
            text-decoration: underline;
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }

            .container {
                box-shadow: none;
                padding: 20px;
            }

            pre {
                page-break-inside: avoid;
                font-size: 10px;
            }

            h2 {
                page-break-before: always;
            }

            h3 {
                page-break-after: avoid;
            }
        }

        .summary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            margin: 30px 0;
        }

        .summary h3 {
            color: white;
            margin-top: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📱 LedgerAI Flutter App Documentation</h1>

        <div class="meta">
            <p><strong>Project:</strong> LedgerAI - AI-Powered Financial Management Mobile App</p>
            <p><strong>Platform:</strong> Flutter (iOS & Android)</p>
            <p><strong>Total Screens:</strong> 56</p>
            <p><strong>Generated:</strong> May 9, 2026</p>
        </div>

        <div class="summary">
            <h3>🎨 Design Overview</h3>
            <p><strong>Visual Style:</strong> Slack-style purple gradient header with rounded white content sheets</p>
            <p><strong>Color Palette:</strong> Light lavender theme (#F3F0FF, #E9D5FF, #C4B5FD)</p>
            <p><strong>Primary Color:</strong> Purple (#6B46C1 to #553C9A gradient)</p>
            <p><strong>Navigation:</strong> 5-tab bottom navigation (Home, Vault, Add+, Reminders, Reports) with elevated "+" button</p>
            <p><strong>Locale:</strong> UK-specific sample data (GBP currency, UK date formats)</p>
        </div>
"""

    # Table of contents
    html += """
        <div class="toc">
            <h2>📋 Table of Contents</h2>
            <ul>
"""

    screen_count = 1
    for filename, title in SCREEN_FILES.items():
        html += f'                <li><a href="#{filename}">{title}</a>\n'
        if filename in SCREEN_DETAILS:
            html += '                    <ul style="padding-left: 30px; margin-top: 5px;">\n'
            for screen in SCREEN_DETAILS[filename]:
                html += f'                        <li style="font-size: 0.9em;">{screen_count}. {screen}</li>\n'
                screen_count += 1
            html += '                    </ul>\n'
        html += '                </li>\n'

    html += """
                <li><a href="#core-files">Core Files (Theme, Router, Shell, Main)</a></li>
                <li><a href="#configuration">Configuration (pubspec.yaml, README)</a></li>
            </ul>
        </div>
"""

    # Screen list summary
    html += """
        <div class="screen-list">
            <h3>Complete Screen List (56 Screens)</h3>
            <ul>
"""

    for filename in SCREEN_FILES:
        if filename in SCREEN_DETAILS:
            for screen in SCREEN_DETAILS[filename]:
                html += f'                <li>{screen}</li>\n'

    html += """
            </ul>
        </div>
"""

    # Screen files
    screen_num = 1
    for filename, title in SCREEN_FILES.items():
        file_path = screens_dir / filename
        content = read_file_content(file_path)

        html += f'\n        <h2 id="{filename}">{title}</h2>\n'

        if filename in SCREEN_DETAILS:
            html += '        <div class="screen-list">\n'
            html += '            <p><strong>Screens in this file:</strong></p>\n'
            html += '            <ul>\n'
            for screen in SCREEN_DETAILS[filename]:
                html += f'                <li>{screen_num}. {screen}</li>\n'
                screen_num += 1
            html += '            </ul>\n'
            html += '        </div>\n'

        html += f'        <div class="file-header">📄 {filename}</div>\n'
        html += f'        <pre><code>{escape_html(content)}</code></pre>\n'

    # Core files
    html += """
        <h2 id="core-files">Core Files</h2>

        <h3>Theme Configuration</h3>
        <div class="file-header">📄 theme.dart</div>
        <pre><code>""" + escape_html(theme_content) + """</code></pre>

        <h3>Shared Widgets (AppShell, Header, Bottom Navigation)</h3>
        <div class="file-header">📄 widgets/shell.dart</div>
        <pre><code>""" + escape_html(shell_content) + """</code></pre>

        <h3>Router Configuration</h3>
        <div class="file-header">📄 router.dart</div>
        <pre><code>""" + escape_html(router_content) + """</code></pre>

        <h3>Main Entry Point</h3>
        <div class="file-header">📄 main.dart</div>
        <pre><code>""" + escape_html(main_content) + """</code></pre>
"""

    # Configuration
    html += """
        <h2 id="configuration">Configuration Files</h2>

        <h3>Dependencies</h3>
        <div class="file-header">📄 pubspec.yaml</div>
        <pre><code>""" + escape_html(pubspec_content) + """</code></pre>

        <h3>Setup Instructions</h3>
        <div class="file-header">📄 README.md</div>
        <pre><code>""" + escape_html(readme_content) + """</code></pre>
"""

    # Footer
    html += """
        <div class="meta" style="margin-top: 50px;">
            <h3 style="color: #6B46C1; margin-bottom: 15px;">📤 Export Instructions</h3>
            <p><strong>To save as PDF:</strong></p>
            <ol style="margin-left: 20px; margin-top: 10px;">
                <li>Open this HTML file in your web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Press Ctrl+P (Windows/Linux) or Cmd+P (Mac)</li>
                <li>Select "Save as PDF" as the destination/printer</li>
                <li>Adjust settings:
                    <ul style="margin-left: 20px; margin-top: 5px;">
                        <li>Paper size: A4 or Letter</li>
                        <li>Margins: Default or Minimum</li>
                        <li>Enable "Background graphics" to preserve colors</li>
                    </ul>
                </li>
                <li>Click "Save" or "Print"</li>
            </ol>
        </div>

        <div style="text-align: center; margin-top: 50px; padding: 30px; background: #F9FAFB; border-radius: 8px;">
            <p style="color: #6B46C1; font-weight: bold; font-size: 1.2em;">
                LedgerAI Flutter Documentation
            </p>
            <p style="color: #666; margin-top: 10px;">
                56 Screens • Flutter Mobile App • Generated May 9, 2026
            </p>
        </div>
    </div>
</body>
</html>"""

    # Write HTML file
    output_path = Path('/workspaces/default/code/LEDGERAI_FLUTTER_DOCS.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"✅ Documentation generated: {output_path}")
    print(f"📊 Total screens documented: 56")
    print(f"\n📤 To export to PDF:")
    print(f"   1. Open {output_path.name} in your browser")
    print(f"   2. Press Ctrl+P (or Cmd+P on Mac)")
    print(f"   3. Select 'Save as PDF'")
    print(f"   4. Enable 'Background graphics' in print settings")
    print(f"   5. Click Save")

if __name__ == '__main__':
    generate_html_docs()
