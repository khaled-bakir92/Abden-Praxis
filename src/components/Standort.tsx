import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactBubbleProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  href?: string;
  className?: string;
}

const ContactBubble = ({ icon, title, content, href, className }: ContactBubbleProps) => {
  const BubbleContent = () => (
    <div className={cn(
      "flex flex-col items-center text-center gap-3 p-5 rounded-full bg-[#E7EBF5] transition-colors hover:bg-abdent-200 aspect-square max-w-[180px] w-full mx-auto", 
      className
    )}>
      <div className="text-abdent-600 mb-1">
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-medium text-dark">{title}</h4>
        <div className="text-dark-light text-sm">{content}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        <BubbleContent />
      </a>
    );
  }

  return <BubbleContent />;
};

const Standort = () => {
  return (
    <section id="kontakt" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">So finden Sie uns</h2>
          <h3 className="text-2xl font-semibold mb-4 text-[#8091B6]">Zentral gelegen in Lage und gut zu erreichen</h3>
          <p className="max-w-3xl mx-auto text-dark-light">
            Unsere zentral gelegene Klinik im Herzen von Lage ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut zu erreichen. 
            Wir bieten umfassende Gesundheitsdienstleistungen für alle Altersgruppen. Mit moderner Technik und geschultem Personal bieten wir 
            vielfältige medizinische Behandlungen an und stellen den Patientenkomfort in den Vordergrund. Wählen Sie uns für eine außergewöhnliche 
            Betreuung. Besuchen Sie uns bald und lassen Sie uns Ihr Gesundheitspartner sein.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
          {/* Left Column: Opening Hours & Contact */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-10 h-10 text-abdent-600" />
                <h3 className="text-xl font-semibold text-dark">Öffnungszeiten</h3>
              </div>
              <div className="space-y-2">
                <div className="whitespace-nowrap">
                  <span className="font-medium inline-block w-28 text-left">Montag:</span>
                  <span>8:30 - 13:00, 14:30 - 18:30</span>
                </div>
                
                <div className="whitespace-nowrap">
                  <span className="font-medium inline-block w-28 text-left">Dienstag:</span>
                  <span>8:30 - 13:00, 14:30 - 19:30</span>
                </div>
                
                <div className="whitespace-nowrap">
                  <span className="font-medium inline-block w-28 text-left">Mittwoch:</span>
                  <span>8:30 - 14:00</span>
                </div>
                
                <div className="whitespace-nowrap">
                  <span className="font-medium inline-block w-28 text-left">Donnerstag:</span>
                  <span>8:30 - 13:00, 14:30 - 18:30</span>
                </div>
                
                <div className="whitespace-nowrap">
                  <span className="font-medium inline-block w-28 text-left">Freitag:</span>
                  <span>8:30 - 14:00</span>
                </div>
              </div>
            </div>

            {/* Contact Bubbles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ContactBubble
                icon={<MapPin className="w-10 h-10" />}
                title="Adresse"
                content="Heidensche Strasse 22, 32791 Lage"
                href="https://maps.google.com/?q=Heidensche+Strasse+22,+32791+Lage,+Germany"
              />
              <ContactBubble
                icon={<Phone className="w-10 h-10" />}
                title="Telefon"
                content="+49 05232 3076"
                href="tel:+4905232076"
              />
              <ContactBubble
                icon={<Mail className="w-10 h-10" />}
                title="E-Mail"
                content="praxis@zahnarzt-abden.de"
                href="mailto:praxis@zahnarzt-abden.de"
              />
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="h-full min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.7382766561444!2d8.71323511581921!3d51.935772589713115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba4107ceacb2c7%3A0xeee9cb97c18c0ba9!2sHeidensche%20Str.%2022%2C%2032791%20Lage%2C%20Germany!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABDENT Zahnarztpraxis Standort"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.google.com/?q=Heidensche+Strasse+22,+32791+Lage,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white rounded-md shadow-md text-abdent-600 font-medium hover:bg-abdent-50 transition-colors"
                >
                  Routenplaner
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standort;