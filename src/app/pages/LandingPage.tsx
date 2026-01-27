import { Heart, Church, Music2, ArrowRight, LogIn } from 'lucide-react';
import { Link } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function LandingPage() {
  const GITHUB_RAW = 'https://raw.githubusercontent.com/NuptiaLogos/siteNotreMesseDeMariage/main';
  const GITHUB_OLD = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFCF2] via-[#FFF8F0] to-[#FFF5EB]">
      <Navigation variant="dark" />
      
      {/* Hero Section avec photo et dégradé orange vers violet */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={`${GITHUB_RAW}/wedding-photography-RJDWzHyh6gE-unsplash.jpg`}
            alt="Couple de mariés" 
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            onError={(e) => {
              console.error('Image failed to load');
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=90';
            }}
          />
          {/* Dégradé INVERSÉ : violet à gauche → orange à droite (raccord avec header) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(101,45,144,0.73)] to-[rgba(250,130,17,0.52)]"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#652D90] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FA8211] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full px-4 py-20">
          <div className="text-center mb-16 -mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight uppercase drop-shadow-2xl" style={alfarnFont}>
              Préparez votre{' '}
              <br />
              <span className="text-[#FA8211] drop-shadow-lg text-5xl md:text-6xl lg:text-7xl">
                Messe de Mariage
              </span>
              <br />
              <span className="text-white">en toute sérénité</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-32 max-w-3xl mx-auto drop-shadow-lg" style={avenirFont}>
              Connectez <strong className="text-[#FA8211]">couples</strong>, <strong className="text-[#FA8211]">musiciens</strong> et <strong className="text-[#FA8211]">paroisses</strong> pour créer des célébrations liturgiques conformes et inoubliables.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="group bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-[#FA8211]/50 transition-all hover:scale-105 inline-flex items-center gap-2"
                style={alfarnFont}>
                <span>Créer mon compte</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                style={alfarnFont}>
                <LogIn className="w-5 h-5" />
                Connexion
              </button>
            </div>
          </div>

          {/* 3 Cards de prospects */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card Futurs Mariés */}
            <Link 
              to="/futurs-maries"
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#FA8211]/50 hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#FA8211]">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`${GITHUB_RAW}/pexels-ali-jabiyef-3221451-29411115.jpg`}
                  alt="Futurs Mariés"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FA8211]/70 via-[#ff8f3a]/60 to-[#ff9f3a]/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#652D90] to-[#8B4F9D] text-white px-3 py-1 rounded-full text-xs font-bold" style={alfarnFont}>
                  POPULAIRE
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#652D90] mb-2 uppercase group-hover:text-[#FA8211] transition" style={alfarnFont}>
                  Futurs Mariés
                </h3>
                <p className="text-[#000000]/70 text-sm mb-4" style={avenirFont}>
                  Préparez votre messe sereinement avec tous les outils nécessaires
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#FA8211]" style={alfarnFont}>
                    49€
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#652D90] group-hover:translate-x-2 group-hover:text-[#FA8211] transition-all" />
                </div>
              </div>
            </Link>

            {/* Card Paroisses */}
            <Link 
              to="/paroisses"
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#98A882]/50 hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#98A882]">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`${GITHUB_RAW}/matteo-del-piano-CNTC7WkVNZc-unsplash.jpg`}
                  alt="Paroisses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#98A882]/70 via-[#a8b892]/60 to-[#98A882]/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Church className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white text-[#98A882] px-3 py-1 rounded-full text-xs font-bold" style={alfarnFont}>
                  100% GRATUIT
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#652D90] mb-2 uppercase group-hover:text-[#98A882] transition" style={alfarnFont}>
                  Paroisses
                </h3>
                <p className="text-[#000000]/70 text-sm mb-4" style={avenirFont}>
                  Centralisez et validez tous vos mariages efficacement
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#98A882]" style={alfarnFont}>
                    GRATUIT
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#652D90] group-hover:translate-x-2 group-hover:text-[#98A882] transition-all" />
                </div>
              </div>
            </Link>

            {/* Card Musiciens */}
            <Link 
              to="/musiciens"
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#652D90]/50 hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#652D90]">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`${GITHUB_RAW}/pexels-alexander-mass-748453803-32527856.jpg`}
                  alt="Musiciens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#652D90]/70 via-[#8B4F9D]/60 to-[#B56576]/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Music2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-3 py-1 rounded-full text-xs font-bold" style={alfarnFont}>
                  FREEMIUM
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#652D90] mb-2 uppercase group-hover:text-[#652D90] transition" style={alfarnFont}>
                  Musiciens
                </h3>
                <p className="text-[#000000]/70 text-sm mb-4" style={avenirFont}>
                  Professionnalisez votre activité musicale
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-[#652D90]" style={alfarnFont}>
                    Gratuit • 9,99€/mois
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#652D90] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-12 text-center">
            <ArrowRight className="w-6 h-6 text-white/60 mx-auto rotate-90" />
          </div>
        </div>
      </section>

      {/* Section Screenshots de l'application */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FFFCF2] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-4 uppercase" style={alfarnFont}>
              Une plateforme intuitive et complète
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-2xl mx-auto" style={avenirFont}>
              Découvrez l'interface qui simplifie la préparation de votre messe de mariage
            </p>
          </div>

          {/* Screenshot 1 - Mobile */}
          <div className="mb-20">
            <div className="max-w-md mx-auto">
              <img 
                src={`figma:asset/d7217f62a5d6f2762cb8747f2e78ee51fb8b3c7b.png`}
                alt="Accédez simplement aux détails de vos mariages"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Screenshots 2 & 3 - Tablettes côte à côte */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src={`figma:asset/411296d3c2d9a809af386c44d921f1e7f6cb0b14.png`}
                alt="Gérez votre bibliothèque en un clic"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <img 
                src={`figma:asset/8edca19ea9e4a885496dbd8217a3019fd5ecd150.png`}
                alt="L'avancement de vos mariages au premier regard"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}