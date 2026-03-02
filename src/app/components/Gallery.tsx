import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1771556907729-48f284e5db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByYWNpbmclMjBwZXJmb3JtYW5jZSUyMGRhcmt8ZW58MXx8fHwxNzcyMjA5MTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Track Day Spec',
      description: 'BMW M3 - +120hp'
    },
    {
      image: 'https://images.unsplash.com/photo-1631204188707-6decca76fba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlmdCUyMGNhciUyMHNtb2tlfGVufDF8fHx8MTc3MjIwOTEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Drift Build',
      description: 'Nissan 350Z - Projeto Completo'
    },
    {
      image: 'https://images.unsplash.com/photo-1769869263342-b36777a32747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNhciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjIwOTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Supercar Performance',
      description: 'Porsche 911 - +95hp'
    },
    {
      image: 'https://images.unsplash.com/photo-1634066640783-c231155c4ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RpZmllZCUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzIxNzc1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modified Street',
      description: 'Honda Civic Type R - Stage 2'
    },
    {
      image: 'https://images.unsplash.com/photo-1769807644905-35d76acaceb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjB0dXJibyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjIwOTEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Engine Bay Detail',
      description: 'Preparação de Motor Turbo'
    },
    {
      image: 'https://images.unsplash.com/photo-1666947520667-371348873d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBpbnRlcmlvciUyMGNvY2twaXR8ZW58MXx8fHwxNzcyMTQ5Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Racing Interior',
      description: 'Setup Completo para Competição'
    }
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
                  <p className="text-gray-300">{project.description}</p>
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
