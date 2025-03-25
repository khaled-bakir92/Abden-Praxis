
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

// Define praxis images data
const praxisImages = [
  {
    id: "behandlungsraum",
    image: "/images/carousel/Praxisteam.png",
    alt: "Teamfoto der Zahnarztpraxis mit dem gesamten Praxisteam"
  },
  {
    id: "behandlungsraum",
    image: "/images/carousel/carousel1.jpg",
    alt: "Empfangsbereich der Zahnarztpraxis mit moderner Einrichtung"
  },
  {
    id: "wartezimmer",
    image: "/images/carousel/carousel2.png",
    alt: "Wartezimmer mit schwarzen Stühlen und stilvoller Dekoration"
  },
  {
    id: "empfang",
    image: "/images/carousel/carousel3.jpg",
    alt: "Behandlungszimmer mit gelbem Zahnarztstuhl und moderner Ausstattung"
  },
  {
    id: "technik",
    image: "/images/carousel/carousel4.jpg",
    alt: "Helles Behandlungszimmer mit blauem Zahnarztstuhl und Deckenmotiven"
  },
  {
    id: "technik1",
    image: "/images/carousel/carousel5.jpg",
    alt: "Zahnarztbehandlungsraum mit blauen Stühlen und moderner Technik"
  },
  {
    id: "technik2",
    image: "/images/carousel/carousel6.jpg",
    alt: "Kinderecke mit bunten Stühlen, Spielzeug und Bilderbüchern"
  },
  {
    id: "technik3",
    image: "/images/carousel/carousel7.jpg",
    alt: "Röntgenraum mit moderner 3D-Röntgentechnologie und Schutzweste"
  },
  {
    id: "technik4",
    image: "/images/carousel/carousel8.jpg",
    alt: "Behandlungsraum mit ergonomischem Stuhl und Monitor zur Patienteninformation"
  },
  {
    id: "technik5",
    image: "/images/carousel/carousel9.png",
    alt: "Tür zum Röntgenraum mit Warnschild und rotem Sichtfenster"
  },
  {
    id: "technik6",
    image: "/images/carousel/carousel10.png",
    alt: "Spielecke für Kinder mit bunten Bausteinen und Malbüchern"
  },
  {
    id: "technik7",
    image: "/images/carousel/carousel11.png",
    alt: "Modernes Behandlungszimmer mit blauem Behandlungsstuhl und Monitor"
  }
];

const Praxis = () => {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    // Set up auto-rotation timer
    const autoRotationInterval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change image every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(autoRotationInterval);
  }, [api]);

  return (
    <section id="praxis" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Unsere Praxis</h2>
        </div>

        {/* Image Carousel */}
        <div className="max-w-3xl mx-auto mb-12">
          <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {praxisImages.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        
        {/* Description Text */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#333333] text-lg mb-6">
            Unsere Praxis ist mit modernster Technologie ausgestattet, um Ihnen eine optimale zahnmedizinische Versorgung zu bieten. In angenehmer Atmosphäre und mit einem freundlichen Team sorgen wir dafür, dass Sie sich bei uns wohlfühlen.
          </p>
          <p className="text-[#333333] text-lg">
            Von der digitalen Röntgentechnik bis hin zum komfortablen Wartezimmer – wir legen großen Wert auf Ihren Komfort und die Qualität unserer Behandlungen. Überzeugen Sie sich selbst von unserer modernen Praxis im Herzen der Stadt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Praxis;
