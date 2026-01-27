import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, UserPlus } from 'lucide-react';

interface NavigationProps {
  variant?: 'light' | 'dark';
}

export default function Navigation({ variant = 'light' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const GITHUB_RAW = 'https://raw.githubusercontent.com/NuptiaLogos/siteNotreMesseDeMariage/main';
  const GITHUB_OLD = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';
  const alfarnFont = { fontFamily: "'Alfarn', sans-serif" };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/futurs-maries', label: 'Futurs Mariés' },
    { path: '/paroisses', label: 'Paroisses' },
    { path: '/musiciens', label: 'Musiciens' },
    { path: '/a-propos', label: 'À propos' }
  ];

  // Toujours le dégradé violet→orange sur toutes les pages
  const bgClass = 'bg-gradient-to-r from-[#652D90] via-[rgba(101,45,144,0.69)] to-[#FA8211] backdrop-blur-xl border-b border-white/10';
  const textClass = 'text-white';
  const textHoverClass = 'hover:text-white/80';
  const activeClass = 'text-[#FA8211]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} shadow-lg shadow-[#652D90]/20 m-0 p-0`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="group">
            <img 
              src={`${GITHUB_OLD}/images/logo_avectexte_horizontal.png`}
              alt="Notre Messe de Mariage" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main/images/logo_avectexte_horizontal.png';
              }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all pb-1 ${
                  isActive(item.path) ? activeClass : `${textClass}/90 ${textHoverClass}`
                }`}
                style={alfarnFont}>
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#FA8211] rounded-full"></span>
                )}
              </Link>
            ))}
            
            <div className="flex items-center gap-2">
              <button 
                className={`${textClass}/90 ${textHoverClass} px-3 py-1.5 text-sm font-medium transition`}
                style={alfarnFont}>
                Connexion
              </button>
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:shadow-lg transition"
                style={alfarnFont}>
                Créer un compte
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
              className="bg-gradient-to-r from-[#FA8211] to-[#ff9f3a] text-white p-2 rounded-lg">
              <UserPlus className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={`${textClass} p-2`}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-3 space-y-1 border-t border-white/10 mt-2 pt-3">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm transition block ${
                  isActive(item.path) 
                    ? 'bg-white/20 text-white font-bold' 
                    : `${textClass}/90 hover:bg-white/10`
                }`}
                style={alfarnFont}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}