
import React from 'react';
import { Helmet } from 'react-helmet';

interface ServiceSchemaProps {
  name: string;
  description: string;
  followup?: string;
  image?: string;
  procedureType?: string;
  bodyLocation?: string;
  preparation?: string;
  howPerformed?: string;
}

const ServiceDetailSchema = ({ 
  name, 
  description, 
  followup,
  image,
  procedureType = "http://schema.org/TherapeuticProcedure",
  bodyLocation = "Zähne, Mundraum",
  preparation = "Eine Voruntersuchung ist erforderlich, um den individuellen Behandlungsplan zu erstellen.", 
  howPerformed = "Die Behandlung wird von qualifizierten Zahnärzten mit modernsten Methoden und Materialien durchgeführt."
}: ServiceSchemaProps) => {
  const websiteUrl = 'https://zahnarzt-abden.de';
  const serviceUrl = `${websiteUrl}/service/${name.toLowerCase().replace(/\s+/g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "procedureType": procedureType,
    "description": description,
    "followup": followup || "Regelmäßige Kontrollen werden empfohlen, um den Behandlungserfolg zu sichern.",
    "image": image ? `${websiteUrl}${image}` : undefined,
    "bodyLocation": bodyLocation,
    "preparation": preparation,
    "howPerformed": howPerformed,
    "url": serviceUrl,
    "performedBy": {
      "@type": "Dentist",
      "name": "ABDEN Zahnarztpraxis",
      "url": websiteUrl,
      "@id": `${websiteUrl}#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "lastReviewed": new Date().toISOString().split('T')[0],
      "@id": serviceUrl
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Zahnmedizin"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceDetailSchema;
