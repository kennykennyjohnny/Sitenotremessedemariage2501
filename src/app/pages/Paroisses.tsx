import { Church, Check, ArrowRight, Users, Calendar, FileCheck, Shield } from 'lucide-react';
import { Link } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function Paroisses() {
  const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/Sitenotremessedemariage2501/main';
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
      icon: FileCheck,
      title: 'Bibliothèque personnalisable',
      desc: 'Créez votre propre répertoire de chants et textes autorisés'
    },
    {
      icon: Shield,
      title: 'Communication directe',
      desc: 'Échangez facilement avec les couples et suivez leur préparation'
    },
    {
      icon: Calendar,
      title: 'Calendrier partagé',
      desc: 'Visualisez tous vos mariages et leurs échéances importantes'
    },
    {
      icon: FileCheck,
      title: 'Documents générés',
      desc: 'Recevez automatiquement les livrets et déroulés de messe'
    },
    {
      icon: Shield,
      title: 'Conformité garantie',
      desc: 'Assurez-vous que chaque célébration respecte les normes liturgiques'
    },
    {
      icon: Check,
      title: 'Formation incluse',
      desc: 'Accès à des ressources pour mieux accompagner les couples'
    }
  ];

  const benefits = [
    {
      title: 'Gain de temps',
      desc: 'Réduisez le temps de préparation et de validation de 50%',
      icon: Check,
      stat: '50%'
    },
    {
      title: 'Moins d\'erreurs',
      desc: 'Garantissez des célébrations conformes automatiquement',
      icon: Check,
      stat: '100%'
    },
    {
      title: 'Meilleur suivi',
      desc: 'Ne perdez jamais de vue l\'avancement d\'une préparation',
      icon: Check,
      stat: '24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF2] via-[#FFF8F0] to-white">
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#98A882]/10 via-[#98A882]/5 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div>
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#98A882] to-[#652D90] rounded-2xl items-center justify-center mb-6 shadow-xl">
                <Church className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#652D90] mb-6 uppercase leading-tight" style={alfarnFont}>
                Pour les<br />
                <span className="text-[#98A882] text-5xl md:text-6xl lg:text-7xl">Paroisses</span>
              </h1>
              
              <p className="text-xl text-[#000000]/70 mb-8 leading-relaxed" style={avenirFont}>
                Centralisez la gestion de vos mariages et <strong className="text-[#98A882]">accompagnez efficacement</strong> les couples dans leur préparation liturgique.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#98A882] to-[#a8b892] rounded-2xl px-8 py-6 shadow-xl">
                  <div className="text-4xl font-bold text-white mb-1 uppercase" style={alfarnFont}>100% GRATUIT</div>
                  <div className="text-white/90 text-sm" style={avenirFont}>Toujours gratuit pour l'Église</div>
                </div>
                
                <button 
                  onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                  className="group bg-gradient-to-r from-[#652D90] to-[#8B4F9D] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
                  style={alfarnFont}>
                  Inscrire ma paroisse
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-[#000000]/60" style={avenirFont}>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Installation simple
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Formation incluse
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Support dédié
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#98A882]/20 to-[#652D90]/20 rounded-3xl blur-2xl"></div>
              <img 
                src={`${GITHUB_RAW}/PAROISSEPAGE1.jpg`}
                alt="Église paroisse"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1200&q=90';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices clés avec statistiques */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Pourquoi choisir NMDM ?
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              Une solution pensée pour libérer du temps pastoral
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <div key={i} className="relative bg-gradient-to-br from-[#98A882] to-[#a8b892] rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-white/10" style={alfarnFont}>
                  {benefit.stat}
                </div>
                <benefit.icon className="w-12 h-12 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold mb-3 uppercase relative z-10" style={alfarnFont}>
                  {benefit.title}
                </h3>
                <p className="text-white/90 leading-relaxed relative z-10" style={avenirFont}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités complètes */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#98A882]/5 to-[#652D90]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Fonctionnalités pour les paroisses
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              Tous les outils nécessaires pour accompagner les couples efficacement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#98A882]/30 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#98A882] to-[#652D90] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#652D90] text-lg mb-3 uppercase" style={alfarnFont}>
                  {feature.title}
                </h3>
                <p className="text-[#000000]/70 text-sm leading-relaxed" style={avenirFont}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image immersive avec témoignage */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
            <img 
              src={`${GITHUB_RAW}/PAROISSE PAGE2.jpg`}
              alt="Paroisse et accompagnement"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?w=1400&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(152,168,130,0.95)] via-[rgba(152,168,130,0.7)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Church className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
                </div>
                <blockquote className="text-3xl md:text-4xl font-bold mb-6 italic leading-tight" style={alfarnFont}>
                  "Un outil précieux pour accompagner les couples"
                </blockquote>
                <div className="mb-4">
                  <p className="text-xl font-bold mb-1" style={alfarnFont}>
                    Père Jean-Marie DUBOIS
                  </p>
                  <p className="text-white/80" style={avenirFont}>
                    Curé de la Paroisse Saint-Joseph • Lyon 7ème
                  </p>
                </div>
                <p className="text-lg text-white/90 leading-relaxed" style={avenirFont}>
                  "NMDM facilite grandement notre travail de préparation des mariages. Les couples sont mieux préparés, la conformité liturgique est assurée, et nous gagnons un temps précieux pour l'accompagnement pastoral. Un outil indispensable pour toute paroisse moderne."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#98A882] to-[#a8b892]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase" style={alfarnFont}>
            Rejoignez-nous gratuitement
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed" style={avenirFont}>
            Des dizaines de paroisses utilisent déjà NMDM pour simplifier la préparation des mariages
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
              className="group bg-white text-[#98A882] px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/30 transition-all hover:scale-105 inline-flex items-center gap-3"
              style={alfarnFont}>
              Inscrire ma paroisse gratuitement
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <Link 
            to="/faq" 
            className="inline-block text-white/90 hover:text-white underline text-lg transition-colors"
            style={avenirFont}>
            Des questions ? Consultez notre FAQ
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}