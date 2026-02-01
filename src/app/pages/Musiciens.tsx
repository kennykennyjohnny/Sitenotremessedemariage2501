import { Music2, Check, ArrowRight, Users, FileText, DollarSign, Calendar, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function Musiciens() {
  const navigate = useNavigate();
  const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/PHOTOSNMDM/main';
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
      icon: Music2,
      title: 'Chorales paroissiales',
      desc: 'Gérez votre répertoire et coordonnez vos interventions'
    },
    {
      icon: Music2,
      title: 'Musiciens professionnels',
      desc: 'Professionnalisez votre activité de musicien liturgique'
    },
    {
      icon: Music2,
      title: 'Organistes',
      desc: 'Organisez vos prestations et partagez vos partitions'
    },
    {
      icon: Music2,
      title: 'Ensembles vocaux',
      desc: 'Collaborez efficacement sur vos arrangements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF2] via-[#FFF8F0] to-white">
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#652D90]/10 via-[#B56576]/5 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div>
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#652D90] to-[#B56576] rounded-2xl items-center justify-center mb-6 shadow-xl">
                <Music2 className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#652D90] mb-6 uppercase leading-tight" style={alfarnFont}>
                Pour les<br />
                <span className="text-[#652D90] text-5xl md:text-6xl lg:text-7xl">Musiciens</span>
              </h1>
              
              <p className="text-xl text-[#000000]/70 mb-8 leading-relaxed" style={avenirFont}>
                Professionnalisez votre activité de <strong className="text-[#652D90]">musicien liturgique</strong> avec des outils dédiés.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#652D90] to-[#8B4F9D] rounded-2xl px-8 py-6 shadow-xl">
                  <div className="text-white/80 text-sm mb-1 uppercase" style={alfarnFont}>À partir de</div>
                  <div className="text-3xl font-bold text-white mb-1" style={alfarnFont}>GRATUIT</div>
                  <div className="text-white/80 text-sm" style={avenirFont}>ou 9,99€/mois Premium</div>
                </div>
                
                <button 
                  onClick={() => navigate('/inscription')}
                  className="group bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
                  style={alfarnFont}>
                  Créer mon profil
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
                  Essai gratuit
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#98A882]" />
                  Annulation simple
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#652D90]/20 to-[#B56576]/20 rounded-3xl blur-2xl"></div>
              <img 
                src={`${GITHUB_RAW}/MUSICIENPAGE.jpeg`}
                alt="Musicien liturgique"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `${GITHUB_RAW}/DSC05017.jpg`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Pour qui ?
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              NMDM s'adapte à tous les profils de musiciens liturgiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoIsItFor.map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-white to-[#FFFCF2] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#652D90]/30 hover:-translate-y-1 text-center">
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#652D90] to-[#B56576] rounded-xl items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#652D90] text-xl mb-3 uppercase" style={alfarnFont}>
                  {item.title}
                </h3>
                <p className="text-[#000000]/70 text-sm leading-relaxed" style={avenirFont}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison Gratuit vs Premium */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#652D90]/5 to-[#B56576]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              Choisissez votre formule
            </h2>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              Commencez gratuitement, passez Premium quand vous êtes prêt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Formule Gratuite */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#652D90]/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#98A882]/20 to-[#98A882]/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-[#98A882] font-bold text-sm uppercase" style={alfarnFont}>Gratuit</span>
                </div>
                <div className="text-5xl font-bold text-[#652D90] mb-2" style={alfarnFont}>0€</div>
                <p className="text-[#000000]/60" style={avenirFont}>Pour toujours</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#98A882] flex-shrink-0 mt-0.5" />
                    <span className="text-[#000000]/70" style={avenirFont}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => navigate('/inscription')}
                className="w-full bg-gradient-to-r from-[#652D90] to-[#8B4F9D] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={alfarnFont}>
                Commencer gratuitement
              </button>
            </div>

            {/* Formule Premium */}
            <div className="relative bg-gradient-to-br from-[#652D90] to-[#8B4F9D] rounded-3xl p-10 shadow-2xl border-2 border-[#FA8211]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg" style={alfarnFont}>
                ⭐ RECOMMANDÉ
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-sm uppercase" style={alfarnFont}>Premium</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2" style={alfarnFont}>9,99€</div>
                <p className="text-white/80" style={avenirFont}>par mois</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FA8211] flex-shrink-0 mt-0.5" />
                    <span className="text-white" style={avenirFont}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => navigate('/inscription')}
                className="w-full bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={alfarnFont}>
                Essayer Premium gratuit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image immersive */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
            <img 
              src={`${GITHUB_RAW}/musicien2.jpg`}
              alt="Musicien en action"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1400&q=90';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(101,45,144,0.95)] via-[rgba(101,45,144,0.7)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FA8211] rounded-full flex items-center justify-center">
                    <Music2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#FA8211] to-transparent rounded-full"></div>
                </div>
                <blockquote className="text-3xl md:text-4xl font-bold mb-6 italic leading-tight" style={alfarnFont}>
                  "Un outil indispensable pour gérer mes prestations"
                </blockquote>
                <div className="mb-4">
                  <p className="text-xl font-bold mb-1" style={alfarnFont}>
                    Sophie MARTIN
                  </p>
                  <p className="text-white/80" style={avenirFont}>
                    Organiste professionnelle • Paris
                  </p>
                </div>
                <p className="text-lg text-white/90 leading-relaxed" style={avenirFont}>
                  "NMDM m'a permis de professionnaliser complètement mon activité. Je gère mes partitions, mon planning et même ma facturation en un seul endroit. Les couples apprécient la facilité de communication et la qualité du service."
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
            Rejoignez la communauté
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed" style={avenirFont}>
            Des centaines de musiciens utilisent déjà NMDM pour développer leur activité liturgique
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => navigate('/inscription')}
              className="group bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-[#FA8211]/50 transition-all hover:scale-105 inline-flex items-center gap-3"
              style={alfarnFont}>
              Créer mon profil gratuitement
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