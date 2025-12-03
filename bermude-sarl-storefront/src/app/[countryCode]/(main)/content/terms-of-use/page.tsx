import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Bermude",
  description: "Consultez nos conditions d'utilisation",
}

export default function TermsOfUsePage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Conditions d'utilisation</h1>

        <div className="prose prose-sm max-w-none text-base-regular space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              1. Acceptation des conditions
            </h2>
            <p>
              En accédant et en utilisant ce site web, vous acceptez d'être lié
              par ces conditions d'utilisation. Si vous n'acceptez pas ces
              conditions, veuillez ne pas utiliser ce site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              2. Utilisation du site
            </h2>
            <p>
              Vous acceptez d'utiliser ce site uniquement à des fins légales et
              de ne pas utiliser le site d'une manière qui pourrait endommager,
              désactiver, surcharger ou altérer le fonctionnement du site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              Tout le contenu du site, y compris les textes, les images, les
              logos et les graphiques, est la propriété de Bermude ou de ses
              fournisseurs de contenu et est protégé par les lois sur le droit
              d'auteur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              4. Produits et services
            </h2>
            <p>
              Les prix, la disponibilité et les descriptions des produits sont
              sujets à changement sans préavis. Nous nous réservons le droit
              d'accepter ou de refuser toute commande.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              5. Limitation de responsabilité
            </h2>
            <p>
              Bermude ne sera pas responsable de tout dommage indirect,
              accidentel, spécial, consécutif ou punitif résultant de votre
              utilisation du site ou de l'incapacité à utiliser le site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              6. Modifications des conditions
            </h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions
              d'utilisation à tout moment. Les modifications seront effectives
              dès leur publication sur le site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              7. Droit applicable
            </h2>
            <p>
              Ces conditions d'utilisation sont régies par les lois de la Suisse
              et vous consentez à la juridiction exclusive des tribunaux situés
              en Suisse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact</h2>
            <p>
              Si vous avez des questions concernant ces conditions
              d'utilisation, veuillez nous contacter à contact@bermude.ch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
