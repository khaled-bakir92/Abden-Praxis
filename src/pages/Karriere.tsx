import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';

const Karriere = () => {
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Zahnmedizinischer Fachangestellter / ZFA / ZMF (m/w/d)",
    "description": "Zahnmedizinischer Fachangestellter (m/w/d) für moderne Zahnarztpraxis in Detmold gesucht. Chairside-Assistenz, Sterilisation, Patientenbetreuung und administrative Tätigkeiten.",
    "datePosted": "2024-01-01",
    "validThrough": "2024-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "ABDENT Zahnarztpraxis",
      "sameAs": "https://zahnarzt-abden.de"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Heidensche Strasse 22",
        "addressLocality": "Lage",
        "postalCode": "32791",
        "addressCountry": "DE"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 2500,
        "maxValue": 5500,
        "unitText": "MONTH"
      }
    },
    "skills": "Chairside-Assistenz, Sterilisation, Patientenbetreuung, Abrechnung BEMA und GOZ",
    "qualifications": "Abgeschlossene Ausbildung als Zahnmedizinische/r Fachangestellte/r",
    "educationRequirements": "Berufsausbildung",
    "experienceRequirements": "Berufserfahrung wünschenswert, auch Berufseinsteiger willkommen",
    "workHours": "Vollzeit oder Teilzeit",
    "applicationContact": {
      "@type": "ContactPoint",
      "email": "praxis@zahnarzt-abden.de",
      "telephone": "+495232123456"
    }
  };

  return (
    <>
      <SEO 
        title="Karriere bei ABDEN Praxis | Stellenangebote in unserer Zahnarztpraxis"
        description="Aktuelle Stellenangebote bei ABDEN Zahnarztpraxis in Lage. Werden Sie Teil unseres Teams als Zahnmedizinischer Fachangestellter/ZFA/ZMF (m/w/d)."
        canonicalUrl="/karriere"
        schema={jobSchema}
      />
      
      <Header />
      
      <main className="pt-23 pb-16">
      <div className="w-full h-64 md:h-80 mb-8 overflow-hidden rounded-lg shadow-md">
              <img 
                src="/images/karriere.png" 
                alt="Teamarbeit in der Zahnarztpraxis" 
                className="w-full h-full object-cover"
              />
            </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-abdent-600 text-lg font-medium mb-2">Stellenangebot 01/2024</h2>
              <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Zahnmedizinischer Fachangestellter / ZFA / ZMF (m/w/d)
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="mailto:praxis@zahnarzt-abden.de" 
                  className="flex items-center gap-2 text-abdent-600 hover:text-abdent-700 transition-colors"
                >
                  <Mail size={18} />
                  <span>praxis@zahnarzt-abden.de</span>
                </a>
                
                <a 
                  href="tel:+495232123456" 
                  className="flex items-center gap-2 text-abdent-600 hover:text-abdent-700 transition-colors"
                >
                  <Phone size={18} />
                  <span>+49 5232 123456</span>
                </a>
              </div>
              
              <div className="space-y-8">
                <section>
                  <p className="text-dark-light mb-4">
                    Unsere moderne Zahnarztpraxis mit freundlichem Team sucht Verstärkung.
                    In unserer Praxis legen wir großen Wert auf ein angenehmes Arbeitsklima und einen respektvollen Umgang miteinander.
                    Wir bieten hochwertige zahnmedizinische Versorgung mit einem Schwerpunkt auf Implantologie und ästhetischer Zahnheilkunde.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-dark font-bold text-lg mb-3">Ihre Aufgaben:</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    {[
                      "Chairside-Assistenz bei allen zahnärztlichen Behandlungen",
                      "Vorbereitung und Nachbereitung des Behandlungsplatzes",
                      "Sterilisation und Hygienemaßnahmen nach aktuellen RKI-Richtlinien",
                      "Betreuung der Patienten vor, während und nach der Behandlung",
                      "Terminkoordination und administrative Tätigkeiten",
                      "Abrechnung nach BEMA und GOZ"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-abdent-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-dark font-bold text-lg mb-3">Ihr Profil:</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    {[
                      "Abgeschlossene Ausbildung als Zahnmedizinische/r Fachangestellte/r",
                      "Berufserfahrung wünschenswert, aber auch Berufseinsteiger sind willkommen",
                      "Freundliches und empathisches Auftreten",
                      "Teamfähigkeit und Verantwortungsbewusstsein",
                      "Zuverlässigkeit und Engagement",
                      "Gute EDV-Kenntnisse (idealerweise mit Praxisverwaltungssoftware)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-abdent-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-dark font-bold text-lg mb-3">Wir bieten:</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    {[
                      "Unbefristete Festanstellung in Voll- oder Teilzeit",
                      "Attraktive Vergütung über Tarif",
                      "Strukturierte Einarbeitung",
                      "Regelmäßige Fort- und Weiterbildungsmöglichkeiten",
                      "Modernes Arbeitsumfeld mit digitaler Praxisausstattung",
                      "Angenehme Arbeitsatmosphäre in einem freundlichen Team",
                      "Flexible Arbeitszeiten und Urlaubsplanung",
                      "Keine Wochenendarbeit"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-abdent-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section className="text-center pt-4">
                  <p className="text-lg font-medium text-dark">
                    Wir freuen uns auf Ihre Bewerbung!
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Karriere;
