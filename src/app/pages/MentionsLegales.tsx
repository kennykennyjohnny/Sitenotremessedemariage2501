import { Scale, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function MentionsLegales() {
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF2] via-white to-[#FFFCF2]">
      <Navigation variant="light" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#652D90] via-[#8B4F9D] to-[#B56576] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#FA8211] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl items-center justify-center mb-8 shadow-2xl">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase drop-shadow-2xl" style={alfarnFont}>
            Mentions Légales
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={avenirFont}>
            Informations légales concernant le site Notre Messe de Mariage
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Éditeur du site */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Éditeur du site
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  <strong className="text-[#652D90]">Raison sociale :</strong> Notre Messe de Mariage
                </p>
                <p>
                  <strong className="text-[#652D90]">Forme juridique :</strong> SAS (Société par Actions Simplifiée)
                </p>
                <p>
                  <strong className="text-[#652D90]">Capital social :</strong> [À compléter]
                </p>
                <p>
                  <strong className="text-[#652D90]">Siège social :</strong> [Adresse à compléter]
                </p>
                <p>
                  <strong className="text-[#652D90]">SIRET :</strong> [Numéro SIRET à compléter]
                </p>
                <p>
                  <strong className="text-[#652D90]">Numéro TVA intracommunautaire :</strong> [Numéro TVA à compléter]
                </p>
                <p>
                  <strong className="text-[#652D90]">Directeur de la publication :</strong> [Nom du directeur]
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Hébergement
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  Le site <strong className="text-[#652D90]">notremessedemariage.fr</strong> est hébergé par :
                </p>
                <p>
                  <strong className="text-[#652D90]">Nom de l'hébergeur :</strong> [À compléter]
                </p>
                <p>
                  <strong className="text-[#652D90]">Adresse :</strong> [Adresse de l'hébergeur]
                </p>
                <p>
                  <strong className="text-[#652D90]">Téléphone :</strong> [Numéro de téléphone]
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Contact
              </h2>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@notremessedemariage.fr"
                  className="flex items-center gap-3 text-[#000000]/70 hover:text-[#FA8211] transition-colors group"
                  style={avenirFont}>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">contact@notremessedemariage.fr</span>
                </a>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques <strong className="text-[#652D90]">Notre Messe de Mariage</strong> et <strong className="text-[#652D90]">NMDM</strong> ainsi que les logos figurant sur le site sont des marques déposées.
                </p>
              </div>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Données personnelles
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, 
                  et au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d'un droit d'accès, 
                  de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : 
                  <a href="mailto:contact@notremessedemariage.fr" className="text-[#FA8211] hover:underline ml-1">
                    contact@notremessedemariage.fr
                  </a>
                </p>
                <p>
                  Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion des utilisateurs du site 
                  et de l'application Notre Messe de Mariage.
                </p>
                <p>
                  Aucune information personnelle n'est cédée à des tiers.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Cookies
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  Le site Notre Messe de Mariage peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques 
                  et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                </p>
                <p>
                  Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur 
                  accède pour lire et enregistrer des informations.
                </p>
                <p>
                  Vous pouvez à tout moment désactiver les cookies en configurant votre navigateur. Cependant, certaines fonctionnalités 
                  du site pourraient ne plus être disponibles.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                  mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler 
                  par email à <a href="mailto:contact@notremessedemariage.fr" className="text-[#FA8211] hover:underline">
                    contact@notremessedemariage.fr
                  </a> en décrivant le problème de la manière la plus précise possible.
                </p>
                <p>
                  Notre Messe de Mariage ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
                  lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, 
                  soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-3xl font-bold text-[#652D90] mb-6 uppercase flex items-center gap-3" style={alfarnFont}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#FA8211] to-[#652D90] rounded-full"></div>
                Droit applicable
              </h2>
              <div className="space-y-4 text-[#000000]/70 leading-relaxed" style={avenirFont}>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
                  le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#652D90] to-[#FA8211]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 uppercase" style={alfarnFont}>
            Une question juridique ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" style={avenirFont}>
            N'hésitez pas à nous contacter
          </p>
          <a 
            href="mailto:contact@notremessedemariage.fr"
            className="inline-flex items-center gap-3 bg-white text-[#652D90] px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/30 transition-all hover:scale-105"
            style={alfarnFont}>
            <Mail className="w-6 h-6" />
            contact@notremessedemariage.fr
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
