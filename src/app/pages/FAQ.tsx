import { useState } from 'react';
import { ChevronDown, Heart, Church, Music2, Mail } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function FAQ() {
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'Futurs Mariés',
      icon: Heart,
      color: '#FA8211',
      questions: [
        {
          q: "Comment créer mon livret de messe ?",
          a: "Après inscription, accédez à votre espace personnel. Suivez les étapes guidées : choix des textes liturgiques, sélection des chants, ajout des intentions de prière. Notre interface intuitive vous accompagne à chaque étape pour créer un livret conforme et personnalisé."
        },
        {
          q: "Combien coûte l'accès pour les couples ?",
          a: "L'accès pour les couples est de 49€ pour un accès illimité jusqu'à votre mariage. Ce tarif unique vous permet de créer, modifier et télécharger votre livret autant de fois que nécessaire."
        },
        {
          q: "Puis-je modifier mon livret après validation ?",
          a: "Oui, vous pouvez modifier votre livret à tout moment avant l'impression finale. Si votre paroisse a déjà validé, elle sera notifiée des modifications pour une nouvelle validation."
        },
        {
          q: "Comment inviter mon musicien ou ma paroisse ?",
          a: "Dans votre espace, utilisez la fonction 'Inviter' pour envoyer un lien à votre musicien ou votre paroisse. Ils pourront alors consulter votre livret et collaborer avec vous."
        },
        {
          q: "Le livret est-il conforme aux règles liturgiques ?",
          a: "Absolument ! Notre bibliothèque ne contient que des textes et chants approuvés par l'Église catholique. Votre paroisse valide également le contenu avant impression."
        }
      ]
    },
    {
      category: 'Paroisses',
      icon: Church,
      color: '#98A882',
      questions: [
        {
          q: "L'outil est-il vraiment gratuit pour les paroisses ?",
          a: "Oui, totalement gratuit ! Notre mission est de faciliter la préparation des mariages pour les paroisses. Aucun frais caché, aucun engagement."
        },
        {
          q: "Comment gérer plusieurs mariages simultanément ?",
          a: "Votre tableau de bord paroissial liste tous les couples inscrits. Vous pouvez filtrer par date, statut de validation, et gérer chaque mariage individuellement avec un suivi clair."
        },
        {
          q: "Puis-je personnaliser les textes disponibles ?",
          a: "Oui, vous pouvez ajouter des textes spécifiques à votre paroisse (prières locales, intentions particulières) qui seront disponibles uniquement pour vos couples."
        },
        {
          q: "Comment valider un livret de messe ?",
          a: "Recevez une notification quand un couple termine son livret. Consultez-le en ligne, ajoutez des commentaires si nécessaire, puis validez en un clic. Le couple est immédiatement notifié."
        },
        {
          q: "Puis-je exporter les données des mariages ?",
          a: "Oui, exportez vos mariages au format Excel ou PDF pour vos archives paroissiales. Les données restent confidentielles et sécurisées."
        }
      ]
    },
    {
      category: 'Musiciens',
      icon: Music2,
      color: '#652D90',
      questions: [
        {
          q: "Quel est le tarif pour les musiciens ?",
          a: "L'abonnement musicien est de 9,99€/mois sans engagement. Annulez à tout moment. Ce tarif vous donne accès à toutes les fonctionnalités professionnelles."
        },
        {
          q: "Comment recevoir des demandes de prestations ?",
          a: "Une fois inscrit, vous apparaissez dans notre annuaire de musiciens. Les couples peuvent vous contacter directement via la plateforme pour leurs mariages."
        },
        {
          q: "Puis-je gérer mon répertoire de chants ?",
          a: "Oui ! Créez votre catalogue personnel de chants, ajoutez vos partitions, indiquez vos tarifs par prestation. Les couples voient directement votre répertoire."
        },
        {
          q: "Comment facturer mes prestations ?",
          a: "L'outil vous permet de générer des devis et factures professionnels directement depuis votre espace. Gagnez du temps sur votre gestion administrative."
        },
        {
          q: "Puis-je collaborer avec plusieurs paroisses ?",
          a: "Absolument ! Vous pouvez être référencé auprès de plusieurs paroisses et gérer toutes vos prestations depuis un seul tableau de bord centralisé."
        }
      ]
    },
    {
      category: 'Questions Générales',
      icon: Mail,
      color: '#B56576',
      questions: [
        {
          q: "Mes données sont-elles sécurisées ?",
          a: "Oui, toutes vos données sont cryptées et stockées sur des serveurs sécurisés en Europe (RGPD). Nous ne partageons jamais vos informations avec des tiers."
        },
        {
          q: "L'application fonctionne-t-elle sur mobile ?",
          a: "Oui ! Notre application est 100% responsive et fonctionne parfaitement sur smartphone, tablette et ordinateur. Préparez votre mariage où que vous soyez."
        },
        {
          q: "Proposez-vous un support technique ?",
          a: "Oui, notre équipe est disponible par email à contact@notremessedemariage.fr. Nous répondons sous 24h pour toute question ou assistance technique."
        },
        {
          q: "Puis-je essayer avant de payer ?",
          a: "Les couples peuvent créer leur compte et explorer l'interface gratuitement. Le paiement n'est demandé qu'au moment de générer le livret PDF final."
        },
        {
          q: "Comment annuler mon abonnement ?",
          a: "Pour les musiciens, l'annulation se fait en un clic depuis votre espace personnel. Aucune justification nécessaire, aucun frais d'annulation."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF2] via-white to-[#FFFCF2]">
      <Navigation variant="light" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#652D90] via-[#8B4F9D] to-[#FA8211] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#FA8211] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#652D90] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase drop-shadow-2xl" style={alfarnFont}>
            Foire Aux Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={avenirFont}>
            Trouvez toutes les réponses à vos questions sur Notre Messe de Mariage
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-[#FA8211]/20 transition-all">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-[#FFFCF2]">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)` 
                  }}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold uppercase" style={{ ...alfarnFont, color: category.color }}>
                  {category.category}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div 
                      key={qIndex} 
                      className="border-2 border-[#FFFCF2] rounded-2xl overflow-hidden hover:border-[#FA8211]/30 transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FFFCF2]/50 transition-colors"
                      >
                        <span className="text-lg font-bold text-[#652D90] pr-4" style={alfarnFont}>
                          {item.q}
                        </span>
                        <ChevronDown 
                          className={`w-6 h-6 text-[#FA8211] flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-[#000000]/70 leading-relaxed" style={avenirFont}>
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#652D90] to-[#FA8211]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 uppercase" style={alfarnFont}>
            Une question sans réponse ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" style={avenirFont}>
            Notre équipe est là pour vous aider
          </p>
          <a 
            href="mailto:contact@notremessedemariage.fr"
            className="inline-flex items-center gap-3 bg-white text-[#652D90] px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/30 transition-all hover:scale-105"
            style={alfarnFont}
          >
            <Mail className="w-6 h-6" />
            contact@notremessedemariage.fr
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
