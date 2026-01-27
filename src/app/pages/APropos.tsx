import { Users, Heart, Sparkles, Target, Award, Code } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function APropos() {
  const GITHUB_OLD = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  const team = [
    {
      name: 'Paul-Henri Andrieu',
      role: 'Co-fondateur',
      icon: Code,
      description: 'IT & Développement de la plateforme'
    },
    {
      name: 'Pierre-Roger Tuffery',
      role: 'Co-fondateur',
      icon: Award,
      description: 'Juridique, Légal & Liturgie'
    },
    {
      name: 'Raphaël Isambert',
      role: 'Co-fondateur',
      icon: Target,
      description: 'Finance & Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFCF2] via-[#FFF8F0] to-[#FFF5EB]">
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,45,144,0.05)] via-transparent to-[rgba(250,130,17,0.05)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-2xl items-center justify-center mb-6 shadow-2xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
              À propos de<br />
              <span className="text-[#FA8211] text-5xl md:text-6xl lg:text-7xl">NuptiaLogos</span>
            </h1>
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto" style={avenirFont}>
              L'équipe passionnée derrière Notre Messe de Mariage
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] mb-8 uppercase" style={alfarnFont}>
            Notre Mission
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#FA8211]/20">
            <Heart className="w-12 h-12 text-[#FA8211] mx-auto mb-4" />
            <p className="text-lg text-[#000000]/80 leading-relaxed mb-4" style={avenirFont}>
              Chez <strong className="text-[#652D90]">NuptiaLogos</strong>, nous croyons que chaque mariage religieux mérite une célébration liturgique <strong className="text-[#FA8211]">conforme, personnalisée et mémorable</strong>.
            </p>
            <p className="text-lg text-[#000000]/80 leading-relaxed" style={avenirFont}>
              Notre plateforme connecte couples, paroisses et musiciens pour créer ensemble des célébrations qui honorent la tradition tout en reflétant l'unicité de chaque union.
            </p>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            L'équipe fondatrice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FA8211]/30 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#652D90] mb-2" style={alfarnFont}>
                  {member.name}
                </h3>
                <div className="text-sm text-[#FA8211] font-bold mb-4 uppercase" style={alfarnFont}>
                  {member.role}
                </div>
                <p className="text-[#000000]/70" style={avenirFont}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] text-center mb-12 uppercase" style={alfarnFont}>
            Nos Valeurs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Passion',
                desc: 'Un engagement sincère pour la liturgie et les couples'
              },
              {
                icon: Sparkles,
                title: 'Excellence',
                desc: 'Des outils professionnels et une expérience soignée'
              },
              {
                icon: Users,
                title: 'Collaboration',
                desc: 'Connecter tous les acteurs de la célébration'
              },
              {
                icon: Target,
                title: 'Innovation',
                desc: 'Moderniser sans dénaturer la tradition'
              }
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FA8211]/30 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FA8211] to-[#652D90] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#652D90] text-lg mb-2" style={alfarnFont}>
                  {value.title}
                </h3>
                <p className="text-sm text-[#000000]/70" style={avenirFont}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#652D90] to-[#FA8211] p-12 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase" style={alfarnFont}>
                Notre Vision
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6" style={avenirFont}>
                Devenir la référence mondiale pour la préparation de mariages religieux, en unissant tradition liturgique et innovation technologique.
              </p>
              <p className="text-lg text-white/80 leading-relaxed" style={avenirFont}>
                Nous rêvons d'un monde où chaque couple peut vivre une célébration spirituelle profonde, accompagné par des outils modernes et une communauté bienveillante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Rejoindre */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#652D90] mb-6 uppercase" style={alfarnFont}>
            Rejoignez l'aventure
          </h2>
          <p className="text-lg text-[#000000]/70 mb-8 max-w-2xl mx-auto" style={avenirFont}>
            Que vous soyez couple, paroisse ou musicien, rejoignez notre communauté et participez à cette belle aventure.
          </p>
          <button 
            onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
            className="bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-[#FA8211]/50 transition-all hover:scale-105"
            style={alfarnFont}>
            Créer mon compte gratuitement
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}