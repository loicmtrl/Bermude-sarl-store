import { Metadata } from "next"
import { notFound } from "next/navigation"

const CONTENT_PAGES = {
  "terms-of-use": {
    title: "Conditions d'utilisation",
    description: "Conditions d'utilisation de Bermude",
  },
  "privacy-policy": {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité de Bermude",
  },
}

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Bermude",
  description: "Consultez nos conditions d'utilisation",
}

export default function ContentPage({
  params,
}: {
  params: { slug: string; countryCode: string }
}) {
  const page = CONTENT_PAGES[params.slug as keyof typeof CONTENT_PAGES]

  if (!page) {
    notFound()
  }

  return (
    <div className="content-container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{page.title}</h1>

        {params.slug === "terms-of-use" && <TermsOfUse />}
        {params.slug === "privacy-policy" && <PrivacyPolicy />}
      </div>
    </div>
  )
}

function TermsOfUse() {
  return (
    <div className="prose prose-sm max-w-none text-base-regular">
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Acceptation des conditions
      </h2>
      <p>
        En accédant et en utilisant ce site web, vous acceptez d'être lié par
        ces conditions d'utilisation. Si vous n'acceptez pas ces conditions,
        veuillez ne pas utiliser ce site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Utilisation du site
      </h2>
      <p>
        Vous acceptez d'utiliser ce site uniquement à des fins légales et de ne
        pas utiliser le site d'une manière qui pourrait endommager, désactiver,
        surcharger ou altérer le fonctionnement du site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Propriété intellectuelle
      </h2>
      <p>
        Tout le contenu du site, y compris les textes, les images, les logos et
        les graphiques, est la propriété de Bermude ou de ses fournisseurs de
        contenu et est protégé par les lois sur le droit d'auteur.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Produits et services
      </h2>
      <p>
        Les prix, la disponibilité et les descriptions des produits sont sujets
        à changement sans préavis. Nous nous réservons le droit d'accepter ou de
        refuser toute commande.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. Limitation de responsabilité
      </h2>
      <p>
        Bermude ne sera pas responsable de tout dommage indirect, accidentel,
        spécial, consécutif ou punitif résultant de votre utilisation du site ou
        de l'incapacité à utiliser le site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Modifications des conditions
      </h2>
      <p>
        Nous nous réservons le droit de modifier ces conditions d'utilisation à
        tout moment. Les modifications seront effectives dès leur publication
        sur le site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Droit applicable</h2>
      <p>
        Ces conditions d'utilisation sont régies par les lois de la Suisse et
        vous consentez à la juridiction exclusive des tribunaux situés en
        Suisse.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact</h2>
      <p>
        Si vous avez des questions concernant ces conditions d'utilisation,
        veuillez nous contacter à contact@bermude.ch
      </p>
    </div>
  )
}

function PrivacyPolicy() {
  return (
    <div className="prose prose-sm max-w-none text-base-regular">
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Politique de confidentialité
      </h2>
      <p>
        Bermude s'engage à protéger votre vie privée. Cette politique de
        confidentialité explique comment nous collectons, utilisons et
        protégeons vos informations personnelles.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Informations collectées
      </h2>
      <p>
        Nous collectons des informations que vous nous fournissez directement,
        telles que votre nom, adresse e-mail, adresse de livraison et
        informations de paiement. Nous collectons également des informations
        automatiquement lorsque vous utilisez notre site, telles que votre
        adresse IP et vos habitudes de navigation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Utilisation des informations
      </h2>
      <p>
        Nous utilisons vos informations pour traiter vos commandes, améliorer
        nos services, communiquer avec vous et vous envoyer des mises à jour
        promotionnelles (si vous avez accepté de les recevoir).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Partage des informations
      </h2>
      <p>
        Nous ne vendons pas vos informations personnelles à des tiers.
        Cependant, nous pouvons partager vos informations avec nos partenaires
        de services de paiement, nos fournisseurs de logistique et nos
        prestataires de services pour exécuter votre commande.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Sécurité</h2>
      <p>
        Nous utilisons des mesures de sécurité appropriées pour protéger vos
        informations personnelles contre l'accès non autorisé, la modification
        ou la divulgation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Vos droits</h2>
      <p>
        Vous avez le droit d'accéder, de corriger ou de supprimer vos
        informations personnelles. Pour exercer ces droits, veuillez nous
        contacter à contact@bermude.ch
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Modifications</h2>
      <p>
        Nous pouvons modifier cette politique de confidentialité à tout moment.
        Les modifications seront effectives dès leur publication sur le site.
      </p>
    </div>
  )
}
