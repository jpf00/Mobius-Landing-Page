import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: 'images/projetos/HB20 1.0 3C 2015.jpg',
      title: 'HB20 1.0 3C',
      description: '• Pops and bangs'
    },
    {
      image: 'images/projetos/Jetta 2.0.webp',
      title: 'Jetta 2.0 stage 2',
      description: `• Pops and bangs  
                    • Remoção do delay do acelerador 
                    • Aumento de potência e torque`
    },
    {
      image: 'images/projetos/Up 170tsi.webp',
      title: 'Up 170 tsi',
      description: `• Launch control progressivo ativado
                    • Hardcut com flames ativado
                    • Break boost
                    • Pops and bangs
                    • Catback: Full inox 304`
    },
  ];

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-red-600">Projetos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage(project.image)}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <pre className="text-gray-300 whitespace-pre-line">{project.description}</pre>
                </div>
              </div>

              {/* Red border effect on hover */}
              <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-600 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <ImageWithFallback
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

