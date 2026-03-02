import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              MOBIUS<span className="text-red-600"> MOTORSPORTS</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-red-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-red-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-300 hover:text-red-600 transition-colors"
            >
              Projetos
            </button>
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Fazer Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-red-600/20">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-gray-300 hover:text-red-600 transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-gray-300 hover:text-red-600 transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="block w-full text-left text-gray-300 hover:text-red-600 transition-colors py-2"
            >
              Projetos
            </button>
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors text-center"
            >
              Fazer Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
