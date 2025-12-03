import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité | Bermude",
  description: "Consultez notre politique de confidentialité",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-sm max-w-none text-base-regular space-y-6">
          <div>
            <p>
              Bermude s'engage à protéger votre vie privée. Cette politique de
              confidentialité explique comment nous collectons, utilisons et
              protégeons vos informations personnelles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              1. Informations collectées
            </h2>
            <p>
              Nous collectons des informations que vous nous fournissez
              directement, telles que votre nom, adresse e-mail, adresse de
              livraison et informations de paiement. Nous collectons également
              des informations automatiquement lorsque vous utilisez notre site,
              telles que votre adresse IP et vos habitudes de navigation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              2. Utilisation des informations
            </h2>
            <p>
              Nous utilisons vos informations pour traiter vos commandes,
              améliorer nos services, communiquer avec vous et vous envoyer des
              mises à jour promotionnelles (si vous avez accepté de les
              recevoir).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              3. Partage des informations
            </h2>
            <p>
              Nous ne vendons pas vos informations personnelles à des tiers.
              Cependant, nous pouvons partager vos informations avec nos
              partenaires de services de paiement, nos fournisseurs de
              logistique et nos prestataires de services pour exécuter votre
              commande.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Sécurité</h2>
            <p>
              Nous utilisons des mesures de sécurité appropriées pour protéger
              vos informations personnelles contre l'accès non autorisé, la
              modification ou la divulgation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Vos droits</h2>
            <p>
              Vous avez le droit d'accéder, de corriger ou de supprimer vos
              informations personnelles. Pour exercer ces droits, veuillez nous
              contacter à contact@bermude.ch
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              6. Modifications
            </h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout
              moment. Les modifications seront effectives dès leur publication
              sur le site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de
              confidentialité, veuillez nous contacter à contact@bermude.ch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
