# Routes

All routes are defined in `lib/core/routing/app_router.dart`. Names live in `lib/core/routing/route_names.dart`. Use `context.goNamed(RouteNames.x)` and pass `pathParameters` / `queryParameters` as needed.

## Auth flow
```
splash → onboarding → authChoice → signIn / createAccount
```

### Create account flow
```
createAccount → emailVerification → mobileVerification → mfaSetup
              → recoveryKeySetup → backupCodes → home
```

### Sign in flow
```
signIn → mfaVerification → vaultUnlock / biometricUnlock → home
```

### Recovery flow
```
forgotPassword → emailVerification / mobileVerification → resetPassword
              → mfaVerification → vaultUnlock → home
```

### Session flow
```
sessionLocked → biometricUnlock / vaultUnlock → home
```

## Bottom-nav main routes
- `home` `/home`
- `vault` `/vault`
- `reminders` `/reminders` (Reminders & Tasks)
- `reports` `/reports`
- The middle "+" tab opens **AddActionSheet** (modal — not a route).

## Person/family routes
- `/people`, `/people/:personId`, `/people/:personId/address-history`, `/people/:personId/employment-history`, `/people/:personId/documents`, `/people/add`, `/people/:personId/add-address`, `/people/:personId/add-employment`

## Assistant routes
- `/assistant`, `/assistant/voice`, `/assistant/query-result`

## Banking & wallet
- `/banking`, `/banking/accounts`, `/banking/accounts/:accountId`, `/banking/cards`, `/banking/cards/:cardId`, `/banking/wallet`, `/banking/wallet/:walletId`, `/banking/statements`, `/banking/providers`

See `SCREEN_INVENTORY.md` for the full list.
