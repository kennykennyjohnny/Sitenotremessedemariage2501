import { Heart, Check, ArrowRight, Sparkles, FileText, Users, Download } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function FuturesMaries() {
  const navigate = useNavigate();
  const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/PHOTOSNMDM/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  const features = [
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
      icon: Sparkles,
      title: 'Design élégant',
      desc: 'Interface moderne et intuitive pour une préparation agréable'
    },
    {
      icon: Download,
      title: 'Téléchargement facile',
      desc: 'Téléchargez vos partitions et textes en un clic'
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
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF2] via-[#FFF8F0] to-white">
      <Navigation variant="dark" />

      {/* Hero Section avec vraie photo */}
      <section className="relative py-20 px-4 overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FA8211]/10 via-[#ff9f3a]/5 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div>
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-2xl items-center justify-center mb-6 shadow-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#652D90] mb-6 uppercase leading-tight" style={alfarnFont}>
                Préparez votre<br />
                <span className="text-[#FA8211] text-5xl md:text-6xl lg:text-7xl">Messe de Mariage</span>
              </h1>
              
              <p className="text-xl text-[#000000]/70 mb-8 leading-relaxed" style={avenirFont}>
                Une solution complète pour créer une célébration liturgique <strong className="text-[#FA8211]">conforme</strong>, <strong className="text-[#652D90]">personnalisée</strong> et <strong className="text-[#FA8211]">inoubliable</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#FA8211] to-[#ff9f3a] rounded-2xl px-8 py-6 shadow-xl">
                  <div className="text-4xl font-bold text-white mb-1" style={alfarnFont}>49€</div>
                  <div className="text-white/90 text-sm" style={avenirFont}>Paiement unique</div>
                </div>
                
                <button 
                  onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                  className="group bg-gradient-to-r from-[#652D90] to-[#8B4F9D] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
                  style={alfarnFont}>
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-[#000000]/60" style={avenirFont}>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Sans engagement
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Accès immédiat
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Support inclus
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FA8211]/20 to-[#652D90]/20 rounded-3xl blur-2xl"></div>
              <img 
                src={`${GITHUB_RAW}/PAGEMARIE11.jpg`}
                alt="Couple de mariés"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `${GITHUB_RAW}/DSC05017.jpg`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              Une plateforme complète pensée pour simplifier chaque étape de votre préparation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group bg-gradient-to-br from-white to-[#FFFCF2] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FA8211]/30 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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

      {/* Comment ça marche */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#652D90]/5 to-[#FA8211]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Comment ça marche ?
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-2xl mx-auto" style={avenirFont}>
              4 étapes simples pour créer votre messe de mariage parfaite
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="inline-flex w-20 h-20 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-full items-center justify-center mb-6 shadow-xl">
                  <span className="text-3xl font-bold text-white" style={alfarnFont}>{step.number}</span>
                </div>
                <h3 className="font-bold text-[#652D90] text-xl mb-3 uppercase" style={alfarnFont}>
                  {step.title}
                </h3>
                <p className="text-[#000000]/70 leading-relaxed" style={avenirFont}>
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FA8211] to-transparent"></div>
                )}
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
              src={`${GITHUB_RAW}/PAGEMARIE2.jpg`}
              alt="Célébration de mariage"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(101,45,144,0.95)] via-[rgba(101,45,144,0.7)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FA8211] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#FA8211] to-transparent rounded-full"></div>
                </div>
                <blockquote className="text-3xl md:text-4xl font-bold mb-6 italic leading-tight" style={alfarnFont}>
                  "Une préparation de messe sereine et professionnelle !"
                </blockquote>
                <div className="mb-4">
                  <p className="text-xl font-bold mb-1" style={alfarnFont}>
                    Marie & Thomas
                  </p>
                  <p className="text-white/80" style={avenirFont}>
                    Mariés en juin 2024 • Paroisse Saint-Joseph, Lyon
                  </p>
                </div>
                <p className="text-lg text-white/90 leading-relaxed" style={avenirFont}>
                  "NMDM nous a permis de créer un livret magnifique et de coordonner facilement avec nos musiciens. L'interface est intuitive et tout s'est déroulé parfaitement le jour J ! Nous recommandons vivement cette plateforme à tous les futurs mariés."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#652D90] to-[#8B4F9D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase" style={alfarnFont}>
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed" style={avenirFont}>
            Rejoignez les centaines de couples qui ont préparé leur messe avec sérénité
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
              className="group bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-[#FA8211]/50 transition-all hover:scale-105 inline-flex items-center gap-3"
              style={alfarnFont}>
              Créer mon compte maintenant
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <Link 
            to="/faq" 
            className="inline-block text-white/80 hover:text-white underline text-lg transition-colors"
            style={avenirFont}>
            Des questions ? Consultez notre FAQ
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}