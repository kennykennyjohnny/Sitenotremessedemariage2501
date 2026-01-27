import { Church, Users, Check, BookOpen, Mail, Shield, Calendar, FileText, ArrowRight, Award, Target } from 'lucide-react';
import { Link } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function Paroisses() {
  const GITHUB_RAW = 'https://raw.githubusercontent.com/NuptiaLogos/siteNotreMesseDeMariage/main';
  const GITHUB_OLD = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  const features = [
    {
      icon: Users,
      title: 'Tableau de bord centralisé',
      desc: 'Gérez tous vos mariages depuis une interface unique et intuitive'
    },
    {
      icon: Check,
      title: 'Validation liturgique',
      desc: 'Vérifiez et approuvez les célébrations préparées par les couples'
    },
    {
      icon: BookOpen,
      title: 'Bibliothèque personnalisable',
      desc: 'Créez votre propre répertoire de chants et textes autorisés'
    },
    {
      icon: Mail,
      title: 'Communication directe',
      desc: 'Échangez facilement avec les couples et suivez leur préparation'
    },
    {
      icon: Calendar,
      title: 'Calendrier partagé',
      desc: 'Visualisez tous vos mariages et leurs échéances importantes'
    },
    {
      icon: FileText,
      title: 'Documents générés',
      desc: 'Recevez automatiquement les livrets et déroulés de messe'
    },
    {
      icon: Shield,
      title: 'Conformité garantie',
      desc: 'Assurez-vous que chaque célébration respecte les normes liturgiques'
    },
    {
      icon: Award,
      title: 'Formation incluse',
      desc: 'Accès à des ressources pour mieux accompagner les couples'
    }
  ];

  const benefits = [
    {
      title: 'Gain de temps',
      desc: 'Réduisez le temps de préparation et de validation de 50%',
      icon: Calendar
    },
    {
      title: 'Moins d\'erreurs',
      desc: 'Garantissez des célébrations conformes automatiquement',
      icon: Check
    },
    {
      title: 'Meilleur suivi',
      desc: 'Ne perdez jamais de vue l\'avancement d\'une préparation',
      icon: Target
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
              <Church className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Solution pour<br />
              <span className="text-[#FA8211] text-5xl md:text-6xl lg:text-7xl">Paroisses</span>
            </h1>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto mb-8" style={avenirFont}>
              Centralisez la gestion de vos mariages et accompagnez efficacement les couples dans leur préparation liturgique
            </p>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#98A882] to-[#a8b892] rounded-full px-8 py-4 shadow-2xl">
              <div>
                <div className="text-3xl font-bold text-white" style={alfarnFont}>100% GRATUIT</div>
                <div className="text-sm text-white/90" style={avenirFont}>Toujours gratuit pour l'Église</div>
              </div>
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="bg-white text-[#98A882] px-6 py-2.5 rounded-lg font-bold hover:shadow-xl transition text-sm"
                style={alfarnFont}>
                Commencer
              </button>
            </div>
          </div>

          {/* Image principale avec dégradé */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 max-w-4xl mx-auto">
            <img 
              src={`${GITHUB_RAW}/matteo-del-piano-CNTC7WkVNZc-unsplash.jpg`}
              alt="Église"
              className="w-full h-96 object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1200&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(152,168,130,0.7)] via-[rgba(168,184,146,0.6)] to-[rgba(152,168,130,0.5)]"></div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Fonctionnalités pour les paroisses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Image immersive paroisse */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={`${GITHUB_RAW}/pexels-candewesth-32291215.jpg`}
              alt="Paroisse"
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?w=1200&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(152,168,130,0.9)] via-[rgba(152,168,130,0.6)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Church className="w-8 h-8 text-white" />
                <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic" style={alfarnFont}>
                "Un outil précieux pour accompagner les couples"
              </blockquote>
              <p className="text-lg text-white/90 mb-2" style={avenirFont}>
                Père Jean-Marie - Paroisse Saint-Joseph
              </p>
              <p className="text-white/80" style={avenirFont}>
                "NMDM facilite grandement notre travail de préparation des mariages. Les couples sont mieux préparés et la conformité liturgique est assurée."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}