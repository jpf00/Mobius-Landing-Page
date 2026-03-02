import { motion } from 'motion/react';
import { Zap, Settings, Wrench } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: <Zap size={40} />,
      title: 'Remap de ECU',
      description: 'Reprogramação da central de injeção eletrônica para aumentar potência e torque, mantendo a confiabilidade do motor.',
      features: [
        'Aumento de potência e torque',
        'Melhor resposta do acelerador',
        'Otimização do consumo',
        'Dyno antes e depois'
      ],
      image: 'https://images.unsplash.com/photo-1769807644905-35d76acaceb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjB0dXJibyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjIwOTEwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Settings size={40} />,
      title: 'Remap de TCU',
      description: 'Otimização da central de transmissão automática para trocas mais rápidas e esportivas.',
      features: [
        'Trocas de marcha mais rápidas',
        'Eliminação de delays',
        'Personalização de modos',
        'Maior esportividade'
      ],
      image: 'https://images.unsplash.com/photo-1666947520667-371348873d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBpbnRlcmlvciUyMGNvY2twaXR8ZW58MXx8fHwxNzcyMTQ5Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Projetos Customizados',
      description: 'Desenvolvemos projetos personalizados para track day, drift e competições, com preparação completa.',
      features: [
        'Preparação para pista',
        'Setup para drift',
        'Consultoria técnica',
        'Suporte contínuo'
      ],
      image: 'https://images.unsplash.com/photo-1631204188707-6decca76fba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlmdCUyMGNhciUyMHNtb2tlfGVufDF8fHx8MTc3MjIwOTEwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas para extrair o máximo do seu veículo
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg group">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-8 rounded-lg border border-red-600/20">
                  <div className="text-red-600 mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/+5562997024871"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
