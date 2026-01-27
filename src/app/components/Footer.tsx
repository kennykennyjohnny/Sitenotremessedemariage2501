import { Heart, Church, Music2, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };
  const avenirFont = { fontFamily: "'Avenir LT Pro', sans-serif" };

  return (
    <footer className="relative bg-gradient-to-r from-[#652D90] via-[rgba(101,45,144,0.69)] to-[#FA8211] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <Link to="/a-propos">
              <h3 className="font-bold text-lg mb-4 uppercase cursor-pointer hover:text-[#FA8211] transition" style={alfarnFont}>
                À propos
              </h3>
            </Link>
            <p className="text-white/80 text-sm mb-4" style={avenirFont}>
              Notre Messe de Mariage aide les couples à préparer leur célébration liturgique conforme et personnalisée.
            </p>
          </div>

          {/* Prospects */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase" style={alfarnFont}>
              Nos offres
            </h3>
            <div className="space-y-2">
              <Link to="/futurs-maries" className="flex items-center gap-2 text-white/80 hover:text-white transition text-sm" style={avenirFont}>
                <Heart className="w-4 h-4" />
                Futurs Mariés
              </Link>
              <Link to="/paroisses" className="flex items-center gap-2 text-white/80 hover:text-white transition text-sm" style={avenirFont}>
                <Church className="w-4 h-4" />
                Paroisses
              </Link>
              <Link to="/musiciens" className="flex items-center gap-2 text-white/80 hover:text-white transition text-sm" style={avenirFont}>
                <Music2 className="w-4 h-4" />
                Musiciens
              </Link>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase" style={alfarnFont}>
              Liens utiles
            </h3>
            <div className="space-y-2 text-sm" style={avenirFont}>
              <Link to="/a-propos" className="block text-white/80 hover:text-white transition">
                À propos
              </Link>
              <a href="https://app.notremessedemariage.fr" className="block text-white/80 hover:text-white transition">
                Se connecter
              </a>
              <a href="https://app.notremessedemariage.fr" className="block text-white/80 hover:text-white transition">
                Créer un compte
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition">
                FAQ
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase" style={alfarnFont}>
              Contact
            </h3>
            <div className="space-y-3">
              <a href="mailto:contact@notremessedemariage.fr" className="flex items-center gap-2 text-white/80 hover:text-white transition text-sm" style={avenirFont}>
                <Mail className="w-4 h-4" />
                contact@notremessedemariage.fr
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/70" style={avenirFont}>
          <p>© 2024 Notre Messe de Mariage - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}