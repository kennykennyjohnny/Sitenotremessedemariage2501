import { Music2, FileText, Calendar, Users, Upload, Check, ArrowRight, Award, Sparkles, Music } from 'lucide-react';
import { Link } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function Musiciens() {
  const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  const freeFeatures = [
    'Répertoire personnel de chants',
    'Téléchargement PDF des partitions',
    'Accès à la bibliothèque de 500+ chants',
    'Écoute des fichiers audio',
    'Profil musicien public',
    'Contact avec les couples'
  ];

  const premiumFeatures = [
    'Planning professionnel de prestations',
    'Import de vos propres partitions',
    'Gestion de vos tarifs',
    'Facturation intégrée',
    'Statistiques d\'activité',
    'Support prioritaire',
    'Badge "Musicien Pro"',
    'Visibilité accrue'
  ];

  const whoIsItFor = [
    {
      icon: Users,
      title: 'Chorales paroissiales',
      desc: 'Gérez votre répertoire et coordonnez vos interventions'
    },
    {
      icon: Music,
      title: 'Musiciens professionnels',
      desc: 'Professionnalisez votre activité de musicien liturgique'
    },
    {
      icon: Award,
      title: 'Organistes',
      desc: 'Organisez vos prestations et partagez vos partitions'
    },
    {
      icon: Sparkles,
      title: 'Ensembles vocaux',
      desc: 'Collaborez efficacement sur vos arrangements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFCF2] via-[#FFF8F0] to-[#FFF5EB]">
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,45,144,0.05)] via-transparent to-[rgba(181,101,118,0.05)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#652D90] to-[#B56576] rounded-2xl items-center justify-center mb-8 shadow-2xl">
              <Music2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Pour les<br />
              <span className="text-[#652D90] text-4xl md:text-5xl lg:text-6xl">Musiciens</span>
            </h1>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto mb-8" style={avenirFont}>
              Professionnalisez votre activité de musicien liturgique avec des outils dédiés
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#652D90] to-[#8B4F9D] rounded-full px-6 py-3 shadow-2xl text-white">
              <span className="font-bold text-lg" style={alfarnFont}>Gratuit</span>
              <span className="text-white/70">•</span>
              <span className="font-bold text-lg" style={alfarnFont}>9,99€/mois Premium</span>
            </div>
          </div>

          {/* Image principale avec dégradé */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto">
            <img 
              src={`${GITHUB_RAW}/images/pexels-reneterp-10970319.jpg`}
              alt="Chœur"
              className="w-full h-96 object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,45,144,0.7)] via-[rgba(139,79,157,0.6)] to-[rgba(181,101,118,0.5)]"></div>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Pour qui ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoIsItFor.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FA8211]/30 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#652D90] text-lg mb-2" style={alfarnFont}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#000000]/70" style={avenirFont}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison Gratuit vs Premium */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Choisissez votre formule
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Version Gratuite */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#98A882]/30">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-[#98A882] to-[#a8b892] text-white px-4 py-1 rounded-full text-sm font-bold mb-4" style={alfarnFont}>
                  GRATUIT
                </div>
                <h3 className="text-3xl font-bold text-[#652D90] mb-2" style={alfarnFont}>
                  Version Gratuite
                </h3>
                <p className="text-[#000000]/70" style={avenirFont}>
                  Parfait pour débuter
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {freeFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FA8211] flex-shrink-0 mt-0.5" />
                    <span className="text-[#000000]" style={avenirFont}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="w-full bg-gradient-to-r from-[#98A882] to-[#a8b892] text-white py-3 rounded-lg font-bold hover:shadow-xl transition text-sm"
                style={alfarnFont}>
                Créer mon compte gratuit
              </button>
            </div>

            {/* Version Premium */}
            <div className="bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-2xl p-8 shadow-2xl border-2 border-[#FA8211] relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg" style={alfarnFont}>
                RECOMMANDÉ
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-4" style={alfarnFont}>
                  PREMIUM
                </div>
                <h3 className="text-3xl font-bold text-white mb-2" style={alfarnFont}>
                  Version Pro
                </h3>
                <div className="text-4xl font-bold text-white mb-1" style={alfarnFont}>
                  9,99€<span className="text-lg">/mois</span>
                </div>
                <p className="text-white/80 text-sm" style={avenirFont}>
                  Sans engagement • Annulable à tout moment
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-white/90 font-bold text-sm mb-2" style={alfarnFont}>
                  ✓ Toutes les fonctions gratuites, PLUS :
                </div>
                {premiumFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white" style={avenirFont}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="w-full bg-white text-[#652D90] py-3 rounded-lg font-bold hover:shadow-xl transition text-sm"
                style={alfarnFont}>
                Commencer l'essai gratuit 14 jours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités détaillées */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Fonctionnalités en détail
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Gestion du répertoire',
                desc: 'Organisez vos chants par catégories, tonalités et occasions liturgiques'
              },
              {
                icon: Calendar,
                title: 'Planning intégré',
                desc: 'Visualisez vos prestations à venir et gérez votre disponibilité (Premium)'
              },
              {
                icon: Upload,
                title: 'Import de partitions',
                desc: 'Ajoutez vos propres arrangements et partitions personnalisées (Premium)'
              },
              {
                icon: Users,
                title: 'Collaboration',
                desc: 'Travaillez avec d\'autres musiciens et coordonnez-vous efficacement'
              },
              {
                icon: Music2,
                title: 'Bibliothèque complète',
                desc: 'Accédez à 500+ chants liturgiques avec partitions et audio'
              },
              {
                icon: Award,
                title: 'Profil professionnel',
                desc: 'Créez votre vitrine et soyez trouvé par les couples (Premium)'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FA8211]/30">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#652D90] text-lg mb-2" style={alfarnFont}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#000000]/70" style={avenirFont}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image immersive musiciens */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={`${GITHUB_RAW}/images/pexels-photography-maghradze-ph-1659410-31953127.jpg`}
              alt="Musiciens en action"
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(101,45,144,0.9)] via-[rgba(139,79,157,0.6)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Music2 className="w-8 h-8 text-[#FA8211]" />
                <div className="h-1 flex-1 bg-gradient-to-r from-[#FA8211] to-transparent rounded-full"></div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic" style={alfarnFont}>
                "Une révolution pour ma profession !"
              </blockquote>
              <p className="text-lg text-white/90 mb-2" style={avenirFont}>
                Sophie Martin - Organiste professionnelle
              </p>
              <p className="text-white/80" style={avenirFont}>
                "Grâce à NMDM Pro, je gère maintenant 3 fois plus de mariages avec moins de stress. Le planning automatique et la facturation intégrée ont tout changé."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}