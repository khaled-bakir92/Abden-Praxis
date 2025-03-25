import React from 'react';
import ServiceCard from './ServiceCard';

// Define dental services data   dental-care.png
export const services = [
  {
    id: 'zahnreinigung',
    title: 'Professionelle Zahnreinigung',
    description: 'Eine professionelle Zahnreinigung ist ein wichtiger Bestandteil der zahnärztlichen Vorsorge und Mundgesundheit. Die Behandlung wird von ausgebildeten Dentalhygienikern durchgeführt …',
    imageSrc: '/images/Leistungen/tooth.png'
  },
  {
    id: 'parodontitis',
    title: 'Parodontitis-Behandlung',
    description: 'Parodontitis ist eine Erkrankung des Zahnhalteapparates, die unbehandelt zum Zahnverlust führen kann. Sie entsteht, wenn eine anfängliche Zahnfleischentzündung (Gingivitis) …',
    imageSrc: '/images/Leistungen/dental-care.png'
  },
  {
    id: 'fuellungen',
    title: 'Füllungen & Inlays',
    description: 'Füllungen und Inlays sind zwei Arten von zahnärztlichen Restaurationen, die verwendet werden, um die Funktion und das Aussehen von beschädigten oder kariösen Zähnen wiederherzustellen …',
    imageSrc: '/images/Leistungen/filling.png'
  },
  {
    id: 'wurzelbehandlung',
    title: 'Wurzelbehandlung',
    description: 'Eine Wurzelbehandlung ist ein effektives, zahnärztliches Verfahren, um die Mundgesundheit zu erhalten. Sie zielt darauf ab, einen beschädigten oder infizierten Zahn zu retten und zu …',
    imageSrc: '/images/Leistungen/dental-care-2.png'
  },
  {
    id: 'funktionsdiagnostik',
    title: 'Funktionsdiagnostik',
    description: 'Die Funktionsdiagnostik in der Zahnmedizin ist ein spezialisiertes Verfahren und unverzichtbares Instrument, das darauf abzielt, Funktionsstörungen des …',
    imageSrc: '/images/Leistungen/tooth-2.png'
  },
  {
    id: 'zahnersatz',
    title: 'Vollkeramischer Zahnersatz',
    description: 'Vollkeramischer Zahnersatz bezeichnet Kronen, Brücken und andere Formen des Zahnersatzes, die vollständig aus Keramik bestehen. Dieses Material ist bekannt für seine hohe Ästhetik …',
    imageSrc: '/images/Leistungen/tooth-whitening.png'
  },
  {
    id: 'implantologie',
    title: 'Implantologie',
    description: 'Die Implantologie ist ein hochmoderner Bereich der Zahnmedizin, der sich mit der Einsetzung von Zahnimplantaten beschäftigt. Zahnimplantate sind künstliche Zahnwurzeln, die in …',
    imageSrc: '/images/Leistungen/dental-implant.png'
  }
];

const Leistungen = () => {
  return (
    <section id="leistungen" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Unsere Leistungen</h2>
          <p className="text-dark-light max-w-2xl mx-auto">
            Wir bieten Ihnen ein umfassendes Spektrum moderner zahnmedizinischer Behandlungen mit höchsten Qualitätsstandards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leistungen;
