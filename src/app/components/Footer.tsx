import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-red-600/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              MOBIUS
              <span className="text-red-600">MOTORSPORTS</span>
              <img src="/images/projetos/logo4.png" alt="Logo Mobius" className="w-7 h-7 inline-block ml-1" />
            </h3>
            <p className="text-gray-400 mb-4">
              Especialistas em reprogramação de ECU e TCU.
              Master em Magicflex.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mobius_motorsports/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
             
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="mt-1 flex-shrink-0 text-red-600" />
                <div>
                  <a href="tel:++5562997024871" className="hover:text-white transition-colors">
                    (62) 99702-4871
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-red-600" />
                <div>
                  Goiânia - GO<br />
                  Setor Marista
                </div>
              </li>
            </ul>
          </div>

          {/* Horário de Atendimento */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Sexta: 08h - 18h</li>
              <li>Sábado: 08h - 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/+5562997024871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Mobius Motorsports. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com alta performance para alta performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
