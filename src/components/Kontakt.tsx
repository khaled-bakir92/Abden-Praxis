
import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Contact data
const contactData = {
  phone: "+49 05232 3076",
  email: "praxis@zahnarzt-abden.de",
  address: "Heidensche Strasse 22, 32791 Lage",
  hours: {
    mo: "8:30 - 13:00, 14:30 - 18:30",
    di: "8:30 - 13:00, 14:30 - 19:30",
    mi: "8:30 - 14:00",
    do: "8:30 - 13:00, 14:30 - 18:30",
    fr: "8:30 - 14:00"
  }
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactCard = ({ icon, title, children }: ContactCardProps) => (
  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
    <CardContent className="flex flex-col items-center text-center p-6 h-full">
      <div className="mb-4 text-abdent-600">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-[#333333]">{title}</h3>
      <div className="text-[#333333] flex-grow">{children}</div>
    </CardContent>
  </Card>
);

const Kontakt = () => {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Unser Kontakt</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Phone Card */}
          <ContactCard 
            icon={<Phone size={32} />} 
            title="Telefon"
          >
            <a 
              href={`tel:${contactData.phone}`} 
              className="hover:text-abdent-500 transition-colors"
            >
              {contactData.phone}
            </a>
          </ContactCard>
          
          {/* Location Card */}
          <ContactCard 
            icon={<MapPin size={32} />} 
            title="Standort"
          >
            <a 
              href={`https://maps.google.com/?q=${contactData.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-abdent-500 transition-colors"
            >
              {contactData.address}
            </a>
          </ContactCard>
          
          {/* Email Card */}
          <ContactCard 
            icon={<Mail size={32} />} 
            title="E-Mail"
          >
            <a 
              href={`mailto:${contactData.email}`} 
              className="hover:text-abdent-500 transition-colors"
            >
              {contactData.email}
            </a>
          </ContactCard>
          
          {/* Hours Card */}
          <ContactCard 
            icon={<Clock size={32} />} 
            title="Öffnungszeiten"
          >
            <div className="space-y-1">
              <p>Mo: {contactData.hours.mo}</p>
              <p>Di: {contactData.hours.di}</p>
              <p>Mi: {contactData.hours.mi}</p>
              <p>Do: {contactData.hours.do}</p>
              <p>Fr: {contactData.hours.fr}</p>
            </div>
          </ContactCard>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-[#333333] mb-4 text-center">So finden Sie uns</h3>
            <p className="text-[#333333] mb-6 text-center max-w-3xl mx-auto">
              Unsere Praxis befindet sich in zentraler Lage in Lage, gut erreichbar mit dem Auto und öffentlichen Verkehrsmitteln. 
              Parkplätze sind direkt vor der Praxis vorhanden.
            </p>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.7754436935096!2d8.7156649!3d51.9851906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba5a957a4cfad1%3A0x14b36e2e3ee11e46!2sHeidensche%20Str.%2022%2C%2032791%20Lage!5e0!3m2!1sde!2sde!4v1716295414379!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxisstandort auf Google Maps"
                className="rounded-lg"
              />
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-[#333333]">Mit dem Auto</h4>
                <p className="text-[#333333]">
                  Sie können bequem direkt vor der Praxis parken. 
                  Es stehen ausreichend kostenfreie Parkplätze zur Verfügung.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-[#333333]">Mit öffentlichen Verkehrsmitteln</h4>
                <p className="text-[#333333]">
                  Die nächste Bushaltestelle ist nur wenige Gehminuten entfernt. 
                  Mehrere Buslinien halten in unmittelbarer Nähe der Praxis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
