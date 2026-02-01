import { Heart, Church, Music2, Check, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function LandingPage() {
  const navigate = useNavigate();
  const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/PHOTOSNMDM/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#652D90] via-[#8B4F9D] to-[#FA8211]">
      <Navigation variant="dark" />
      
      {/* Hero avec overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#652D90] via-[#8B4F9D] to-[#FA8211]">
        <div className="absolute inset-0">
          <img 
            src={`${GITHUB_RAW}/Accueil.jpg`}
            alt="Couple de mariés" 
            className="absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105"
            onError={(e) => {
              console.error('Image failed to load');
              (e.currentTarget as HTMLImageElement).src = `${GITHUB_RAW}/DSC05017.jpg`;
            }}
          />
          {/* Dégradé audacieux violet → orange → rose avec blend mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,45,144,0.85)] via-[rgba(250,130,17,0.75)] to-[rgba(181,101,118,0.8)] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(101,45,144,0.95)] via-transparent to-transparent"></div>
          {/* Blobs animés pour effet dynamique */}
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FA8211] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#652D90] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#B56576] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight uppercase drop-shadow-2xl" style={alfarnFont}>
              Préparez votre{' '}
              <br />
              <span className="text-[#FA8211] drop-shadow-lg text-4xl md:text-5xl lg:text-6xl">
                Messe de Mariage
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">en toute sérénité</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-lg leading-relaxed" style={avenirFont}>
              Connectez <strong className="text-[#FA8211]">couples</strong>, <strong className="text-[#FA8211]">musiciens</strong> et <strong className="text-[#FA8211]">paroisses</strong> pour créer des célébrations liturgiques conformes et inoubliables.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="group bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-[#FA8211]/50 transition-all hover:scale-105 inline-flex items-center gap-3"
                style={alfarnFont}>
                <span>Créer mon compte</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full text-xl font-bold border-2 border-white/30 transition-all hover:scale-105 inline-flex items-center gap-3"
                style={alfarnFont}>
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Cards avec vraies photos CARD */}
      <section className="relative -mt-32 pb-24 px-4 z-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card Futurs Mariés */}
            <Link 
              to="/futurs-maries"
              className="group relative bg-white/98 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-[#FA8211]/50 hover:scale-105 transition-all duration-500 border border-white/20">
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#FA8211]/10 to-[#ff9f3a]/5">
                <img 
                  src={`${GITHUB_RAW}/ACCEUIEL MARIECARD.jpg`}
                  alt="Futurs mariés"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FA8211] to-[#ff9f3a] rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#652D90] uppercase" style={alfarnFont}>
                    Futurs Mariés
                  </h3>
                </div>
                <p className="text-[#000000]/70 mb-4 text-sm leading-relaxed" style={avenirFont}>
                  Créez votre livret de messe personnalisé
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#FA8211]" style={alfarnFont}>49€</div>
                  <ArrowRight className="w-5 h-5 text-[#FA8211] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card Paroisses */}
            <Link 
              to="/paroisses"
              className="group relative bg-white/98 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-[#98A882]/50 hover:scale-105 transition-all duration-500 border border-white/20">
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#98A882]/10 to-[#a8b892]/5">
                <img 
                  src={`${GITHUB_RAW}/ACCEUIL PAROISSE CARTE.jpg`}
                  alt="Paroisses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#98A882] to-[#a8b892] rounded-xl flex items-center justify-center shadow-lg">
                    <Church className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#652D90] uppercase" style={alfarnFont}>
                    Paroisses
                  </h3>
                </div>
                <p className="text-[#000000]/70 mb-4 text-sm leading-relaxed" style={avenirFont}>
                  Gérez vos mariages efficacement
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-[#98A882] uppercase" style={alfarnFont}>GRATUIT</div>
                  <ArrowRight className="w-5 h-5 text-[#98A882] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card Musiciens */}
            <Link 
              to="/musiciens"
              className="group relative bg-white/98 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-[#652D90]/50 hover:scale-105 transition-all duration-500 border border-white/20">
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#652D90]/10 to-[#8B4F9D]/5">
                <img 
                  src={`${GITHUB_RAW}/ACCUEIL MUSICIEN CARD.jpg`}
                  alt="Musiciens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#652D90] to-[#8B4F9D] rounded-xl flex items-center justify-center shadow-lg">
                    <Music2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#652D90] uppercase" style={alfarnFont}>
                    Musiciens
                  </h3>
                </div>
                <p className="text-[#000000]/70 mb-4 text-sm leading-relaxed" style={avenirFont}>
                  Professionnalisez votre activité
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-[#652D90]" style={alfarnFont}>9,99€/mois</div>
                  <ArrowRight className="w-5 h-5 text-[#652D90] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités avec screenshot complet */}
      <section className="py-24 px-4 bg-gradient-to-br from-white via-[#FFFCF2] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Découvrez l'application
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              Une interface moderne et intuitive pour une préparation de mariage sereine
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Screenshots verticaux */}
            <div className="space-y-6">
              {/* Image principale (image.png) */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#FA8211]/30 via-[#652D90]/20 to-[#B56576]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img 
                  src={`${GITHUB_RAW}/image.png`}
                  alt="Interface complète de l'application"
                  className="relative w-full rounded-2xl shadow-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `${GITHUB_RAW}/screen appli1 1.png`;
                  }}
                />
              </div>

              {/* Screenshot secondaire (screen appli1 1.png) */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#652D90]/30 to-[#FA8211]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img 
                  src={`${GITHUB_RAW}/screen appli1 1.png`}
                  alt="Interface couples détail"
                  className="relative w-full rounded-2xl shadow-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=90';
                  }}
                />
              </div>
            </div>

            {/* Avantages */}
            <div className="space-y-6">
              {[
                {
                  icon: Check,
                  title: 'Interface intuitive',
                  desc: 'Naviguez facilement dans votre préparation avec une interface moderne et claire'
                },
                {
                  icon: Heart,
                  title: 'Bibliothèque complète',
                  desc: '500+ chants, 100+ textes liturgiques et prières conformes'
                },
                {
                  icon: Sparkles,
                  title: 'Livret professionnel',
                  desc: 'Générez automatiquement un livret PDF magnifique pour vos invités'
                },
                {
                  icon: Music2,
                  title: 'Collaboration facile',
                  desc: 'Invitez musiciens et paroisse pour valider ensemble la célébration'
                }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#FA8211]/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#652D90] mb-2 uppercase" style={alfarnFont}>
                      {feature.title}
                    </h3>
                    <p className="text-[#000000]/70 leading-relaxed" style={avenirFont}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau FAQ Créatif */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#652D90] via-[#8B4F9D] to-[#B56576] relative overflow-hidden">
        {/* Blobs animés */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FA8211] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FA8211] to-[#ff9f3a] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 animate-pulse">
                  <HelpCircle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase" style={alfarnFont}>
                    Des questions ?
                  </h3>
                  <p className="text-white/90 text-lg" style={avenirFont}>
                    Consultez notre FAQ complète avec toutes les réponses !
                  </p>
                </div>
              </div>
              <Link 
                to="/faq"
                className="group bg-white text-[#652D90] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 text-lg whitespace-nowrap"
                style={alfarnFont}>
                Voir la FAQ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-white to-[#FFFCF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-[#000000]/70 mb-10 leading-relaxed" style={avenirFont}>
            Rejoignez les centaines de couples, paroisses et musiciens qui utilisent déjà Notre Messe de Mariage
          </p>
          <button 
            onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
            className="group bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-[#FA8211]/50 transition-all hover:scale-105 inline-flex items-center gap-3"
            style={alfarnFont}>
            Créer mon compte gratuitement
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}