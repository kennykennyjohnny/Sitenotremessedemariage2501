import { Heart, BookOpen, FileText, Users, Calendar, ArrowRight, Check, Music, Upload, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function FuturesMaries() {
  const GITHUB_RAW = 'https://raw.githubusercontent.com/NuptiaLogos/siteNotreMesseDeMariage/main';
  const GITHUB_OLD = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  const features = [
    {
      icon: BookOpen,
      title: 'Bibliothèque complète',
      desc: 'Accédez à plus de 500 chants, 100 textes et 50 prières liturgiques conformes'
    },
    {
      icon: FileText,
      title: 'Livret de messe professionnel',
      desc: 'Génération automatique d\'un livret PDF personnalisé pour vos invités'
    },
    {
      icon: Users,
      title: 'Collaboration facilitée',
      desc: 'Invitez vos musiciens et communiquez directement avec votre paroisse'
    },
    {
      icon: Calendar,
      title: 'Suivi de projet',
      desc: 'Calendrier intégré et checklist pour ne rien oublier'
    },
    {
      icon: Music,
      title: 'Partitions & Audio',
      desc: 'Écoutez les chants et téléchargez les partitions pour vos musiciens'
    },
    {
      icon: Upload,
      title: 'Personnalisation',
      desc: 'Ajoutez vos propres chants et textes personnalisés'
    },
    {
      icon: Sparkles,
      title: 'Design élégant',
      desc: 'Interface moderne et intuitive pour une préparation agréable'
    },
    {
      icon: Award,
      title: 'Validé par l\'Église',
      desc: 'Contenu vérifié et conforme aux normes liturgiques'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Créez votre compte',
      desc: 'Inscription rapide en quelques clics'
    },
    {
      number: '2',
      title: 'Choisissez vos éléments',
      desc: 'Parcourez la bibliothèque et sélectionnez chants, textes et prières'
    },
    {
      number: '3',
      title: 'Collaborez',
      desc: 'Invitez musiciens et paroisse pour valider ensemble'
    },
    {
      number: '4',
      title: 'Générez votre livret',
      desc: 'Obtenez un PDF professionnel prêt à imprimer'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFCF2] via-[#FFF8F0] to-[#FFF5EB]">
      <Navigation variant="dark" />

      {/* Hero Section avec dégradé */}
      <section className="relative py-20 px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,45,144,0.05)] via-transparent to-[rgba(250,130,17,0.05)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-2xl items-center justify-center mb-6 shadow-2xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Préparez votre<br />
              <span className="text-[#FA8211] text-5xl md:text-6xl lg:text-7xl">Messe de Mariage</span>
            </h1>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto mb-8" style={avenirFont}>
              Une solution complète pour créer une célébration liturgique conforme, personnalisée et inoubliable
            </p>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FA8211] to-[#652D90] rounded-full px-8 py-4 shadow-2xl">
              <div>
                <div className="text-3xl font-bold text-white" style={alfarnFont}>49€</div>
                <div className="text-sm text-white/90" style={avenirFont}>Paiement unique</div>
              </div>
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="bg-white text-[#FA8211] px-6 py-2.5 rounded-lg font-bold hover:shadow-xl transition text-sm"
                style={alfarnFont}>
                Commencer
              </button>
            </div>
          </div>

          {/* Image principale avec dégradé */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto">
            <img 
              src={`${GITHUB_RAW}/pexels-photography-maghradze-ph-1659410-31953135.jpg`}
              alt="Couple de mariés"
              className="w-full h-96 object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,45,144,0.4)] via-[rgba(250,130,17,0.3)] to-[rgba(255,159,58,0.4)]"></div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités avec dégradés */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Tout ce dont vous avez besoin
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FA8211]/30">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#652D90] text-lg mb-2" style={alfarnFont}>
                  {feature.title}
                </h3>
                <p className="text-sm text-[#000000]/70" style={avenirFont}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-full items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white" style={alfarnFont}>{step.number}</span>
                  </div>
                  <h3 className="font-bold text-[#652D90] text-lg mb-2" style={alfarnFont}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#000000]/70" style={avenirFont}>
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-[#FA8211]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage visuel avec vraie photo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={`${GITHUB_RAW}/wedding-photography-RJDWzHyh6gE-unsplash.jpg`}
              alt="Témoignage couple"
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(101,45,144,0.9)] via-[rgba(101,45,144,0.6)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-[#FA8211]" />
                <div className="h-1 flex-1 bg-gradient-to-r from-[#FA8211] to-transparent rounded-full"></div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic" style={alfarnFont}>
                "Une préparation de messe sereine et professionnelle !"
              </blockquote>
              <p className="text-lg text-white/90 mb-2" style={avenirFont}>
                Marie & Thomas - Mariés en juin 2024
              </p>
              <p className="text-white/80" style={avenirFont}>
                "NMDM nous a permis de créer un livret magnifique et de coordonner facilement avec nos musiciens. Tout s'est déroulé parfaitement le jour J !"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}