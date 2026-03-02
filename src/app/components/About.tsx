import { motion } from 'motion/react';
import { Cpu, Gauge, Shield, TrendingUp } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Cpu size={32} />,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos a tecnologia Magicflex, referência mundial em reprogramação automotiva'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Performance Otimizada',
      description: 'Aumento real de potência e torque, com gráficos de dynamometer para comprovar'
    },
    {
      icon: <Shield size={32} />,
      title: 'Confiabilidade',
      description: 'Ajustes precisos que respeitam os limites do motor, garantindo durabilidade'
    },
    {
      icon: <Gauge size={32} />,
      title: 'Master em Magicflex',
      description: 'Somos certificados Master, o mais alto nível de capacitação na tecnologia'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-black relative">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Master em <span className="text-red-600">Magicflex</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologia de ponta para extrair o máximo potencial do seu veículo,
            mantendo a confiabilidade e eficiência do motor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all group"
            >
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Veículos Reprogramados' },
            { value: '30%', label: 'Ganho Médio de Potência' },
            { value: '100%', label: 'Satisfação Garantida' },
            { value: '5 Anos', label: 'de Experiência' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
