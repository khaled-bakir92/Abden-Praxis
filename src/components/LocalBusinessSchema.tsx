import React from 'react';
import { Helmet } from 'react-helmet';

const LocalBusinessSchema = () => {
  const praxisImageUrl = '/images/praxis/Praxisteam.png'; 
  const logoUrl = '/images/logo.png'; 
  
  const websiteUrl = 'https://zahnarzt-abden.de';
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "ABDEN Zahnarztpraxis",
    "alternateName": "Zahnarztpraxis Dr. Abden",
    "image": `${websiteUrl}${praxisImageUrl}`,
    "logo": `${websiteUrl}${logoUrl}`,
    "@id": `${websiteUrl}#organization`,
    "url": websiteUrl,
    "telephone": "+49 5232 3076", 
    "email": "praxis@zahnarzt-abden.de",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Heidensche Strasse 22",
      "addressLocality": "Lage",
      "postalCode": "32791",
      "addressRegion": "Nordrhein-Westfalen",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.9358,
      "longitude": 8.7132
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "08:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "14:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "08:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "14:30",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "08:30",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "08:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "14:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:30",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/abdent",
      "https://www.instagram.com/abdent.zahnarzt"
    ],
    "description": "Ihre moderne Zahnarztpraxis ABDEN in Lage. Wir bieten ein umfassendes Spektrum zahnmedizinischer Behandlungen mit höchster Qualität in angenehmer Atmosphäre. Professionelle Zahnreinigung, Implantologie, Zahnerhaltung und ästhetische Zahnmedizin.",
    "slogan": "Moderne Zahnmedizin mit persönlicher Betreuung und höchsten Qualitätsansprüchen",
    "keywords": "Zahnarzt Lage, Zahnärztin, Implantate, Zahnreinigung, Zahnersatz, Wurzelbehandlung, Parodontitisbehandlung",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Zahnärztliche Dienstleistungen",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Prophylaxe",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "procedureType": "http://schema.org/TherapeuticProcedure",
                "name": "Professionelle Zahnreinigung",
                "description": "Gründliche Entfernung von Zahnbelag und Verfärbungen für ein strahlendes Lächeln und gesunde Zähne."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "procedureType": "http://schema.org/TherapeuticProcedure",
                "name": "Parodontitisbehandlung",
                "description": "Wirksame Therapien zur Bekämpfung von Zahnfleischentzündungen und zur Erhaltung Ihres Zahnhalteapparats."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Zahnerhaltung",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "procedureType": "http://schema.org/TherapeuticProcedure",
                "name": "Füllungen & Inlays",
                "description": "Langlebige und ästhetische Restaurationen für beschädigte Zähne mit modernen Materialien."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "procedureType": "http://schema.org/TherapeuticProcedure",
                "name": "Wurzelbehandlung",
                "description": "Schmerzfreie und effektive Behandlung zur Rettung stark geschädigter Zähne."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Zahnersatz",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "procedureType": "http://schema.org/TherapeuticProcedure",
                "name": "Implantologie",
                "description": "Hochwertige Zahnimplantate als dauerhafte und komfortable Lösung für fehlende Zähne."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "procedureType": "http://schema.org/TherapeuticProcedure",
                "name": "Vollkeramischer Zahnersatz",
                "description": "Ästhetisch ansprechende und biokompatible Kronen und Brücken für ein natürliches Erscheinungsbild."
              }
            }
          ]
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Zufriedener Patient"
      },
      "reviewBody": "Hervorragende Behandlung in angenehmer Atmosphäre. Das Team ist freundlich und kompetent. Sehr empfehlenswert!"
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

export default LocalBusinessSchema;