# Guide des paiements de test

## Options de paiement disponibles

### 1. Carte de crédit (Stripe)

**Numéro de test :** `4242 4242 4242 4242`

- Expiration : n'importe quelle date future (ex: 12/25)
- CVC : n'importe quel code à 3 chiffres (ex: 123)
- Nom : n'importe quel nom

### 2. PayPal (Test)

Connecte-toi avec le compte PayPal de test fourni par Stripe.

- Email : généralement fourni dans le tableau de bord Stripe
- Mot de passe : fourni dans le tableau de bord Stripe

### 3. Paiement manuel (Simulation)

Pour tester sans intégration réelle, un paiement manuel simule juste le processus.

## Configuration actuelle

### Environnement

- **Stripe Public Key :** Configurée dans `.env.local`
- **Backend URL :** http://localhost:9000
- **Frontend URL :** http://localhost:8000

### Providers disponibles

1. **Stripe Card** (`pp_stripe_stripe`) ✅
2. **PayPal** (`pp_paypal_paypal`) ✅
3. **Manual Payment** (`pp_system_default`) ✅

## Comment tester

1. Ajoute des produits au panier
2. Va au checkout
3. Remplis les adresses (livraison et facturation)
4. Sélectionne une méthode de livraison
5. **Choisis une option de paiement :**
   - Carte de crédit → utilise les numéros de test ci-dessus
   - PayPal → connecte-toi avec ton compte de test
   - Paiement manuel → simule simplement le paiement
6. Passe la commande

## Notes importantes

- Les paiements ne seront **pas vraiment débités** en mode test
- Stripe et PayPal ont des clés de test séparées des clés de production
- Tous les paiements sont en mode **sandbox/test**
