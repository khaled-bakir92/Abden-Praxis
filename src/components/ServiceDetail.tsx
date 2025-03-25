import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { services } from "./Leistungen";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import SEO from "./SEO";
import ServicesSidebar from "./ServicesSidebar";

// Service content details
const serviceContents = {
  zahnreinigung: {
    subtitle: "Professionelle Zahnreinigung",
    title: "Ihr Weg zu einem gesünderen Lächeln",
    intro:
      "Die professionelle Zahnreinigung ist ein wichtiger Bestandteil der Prophylaxe und trägt wesentlich zur Erhaltung Ihrer Zahngesundheit bei. Durch die gründliche Entfernung von Zahnbelag und Verfärbungen wird nicht nur das Risiko von Karies und Parodontitis reduziert, sondern auch das ästhetische Erscheinungsbild Ihrer Zähne verbessert.",
    image: "/images/Leistungen_Details/professionellezahnreinigung.png",
    sections: [
      {
        title: "Gründe für eine Zahnreinigung",
        content: [
          "Entfernung von **hartnäckigen Verfärbungen** durch Kaffee, Tee oder Nikotin",
          "Beseitigung von **Zahnstein und Belägen**, die mit der normalen Zahnpflege nicht erreicht werden",
          "Reduzierung von **Kariesrisiko und Parodontitis**",
          "Früherkennung von **Zahnschäden und Erkrankungen**",
          "Verbesserung der **Ästhetik und des Erscheinungsbildes** Ihrer Zähne",
        ],
        type: "list",
      },
      {
        title: "Ablauf der Behandlung",
        content: [
          "**Untersuchung und Beratung**: Zunächst erfolgt eine gründliche Untersuchung Ihrer Zähne und des Zahnfleisches.",
          "**Entfernung von Belägen**: Mit speziellen Instrumenten werden Zahnstein und Plaque über und unter dem Zahnfleischrand entfernt.",
          "**Politur**: Die Zahnoberflächen werden poliert, um neue Anlagerungen zu erschweren.",
          "**Fluoridierung**: Abschließend werden die Zähne mit einem Fluoridlack oder -gel versiegelt.",
          "**Individuelle Beratung**: Sie erhalten Tipps zur optimalen häuslichen Zahnpflege.",
        ],
        type: "steps",
      },
      {
        title: "Häufigkeit der Behandlung",
        content:
          "Wir empfehlen, die professionelle Zahnreinigung **zweimal jährlich** durchführen zu lassen. Je nach individueller Situation kann auch ein kürzeres oder längeres Intervall sinnvoll sein. Besonders bei Patienten mit Parodontitis, Implantaten oder erhöhtem Kariesrisiko kann eine häufigere Reinigung notwendig sein.",
        type: "paragraph",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Professionelle Zahnreinigung",
      procedureType: "http://schema.org/TherapeuticProcedure",
      description:
        "Gründliche Entfernung von Zahnbelag und Verfärbungen für ein strahlendes Lächeln und gesunde Zähne.",
      followup:
        "Regelmäßige Kontrollen und Wiederholung alle 6 Monate empfohlen",
    },
  },
  parodontitis: {
    subtitle: "Parodontitisbehandlung",
    title: "Verstehen, Vorbeugen und Behandeln",
    intro:
      "Parodontitis ist eine chronische Entzündung des Zahnhalteapparates, die unbehandelt zum Zahnverlust führen kann. Sie entwickelt sich aus einer unbehandelten Zahnfleischentzündung (Gingivitis) und schreitet schleichend fort. Frühzeitige Diagnose und gezielte Behandlung sind entscheidend, um Ihre Zähne langfristig zu erhalten.",
    image: "/images/Leistungen_Details/parodontitisbehadlung.png",
    sections: [
      {
        title: "Ursachen und Symptome",
        content: [
          "Hauptursache ist **bakterieller Zahnbelag (Plaque)**, der sich täglich auf den Zähnen bildet",
          "Risikofaktoren: **Rauchen**, **Diabetes**, **Stress**, **genetische Veranlagung**, **mangelhafte Mundhygiene**",
          "Typische Symptome sind:",
          "- **Zahnfleischbluten**",
          "- **Geschwollenes oder gerötetes Zahnfleisch**",
          "- **Zahnfleischrückgang**",
          "- **Schlechter Atem**",
          "- **Lockerung der Zähne**",
        ],
        type: "list",
      },
      {
        title: "Behandlungsoptionen",
        content: [
          "**Gründliche Untersuchung**: Inspektion des Zahnfleisches, Taschentiefenmessung und ggf. Röntgenaufnahmen zur Beurteilung des Knochens.",
          "**Professionelle Zahnreinigung**: Entfernung von Plaque und Zahnstein als Basismaßnahme zur Eindämmung der Erkrankung.",
          "**Tiefenreinigung (Scaling und Root Planing)**: Nicht-chirurgische Reinigung unterhalb des Zahnfleischrandes zur Entfernung von Belägen an den Zahnwurzeln.",
          "**Medikamentöse Therapie**: Einsatz von antibakteriellen Gelen oder Chips zur gezielten Bekämpfung von Keimen in den Zahnfleischtaschen.",
          "**Chirurgische Maßnahmen**: Bei fortgeschrittener Parodontitis können Eingriffe notwendig sein, um Taschen zu reinigen oder Knochen wiederherzustellen.",
        ],
        type: "steps",
      },
      {
        title: "Vorbeugung",
        content:
          "Eine gründliche Mundhygiene ist der Schlüssel zur Vorbeugung von Parodontitis. Dazu zählen das **zweimal tägliche Zähneputzen**, die **tägliche Anwendung von Zahnseide** sowie **regelmäßige Kontrollen und professionelle Zahnreinigungen** beim Zahnarzt. Sollten Sie Anzeichen wie Zahnfleischbluten oder Rückgang bemerken, zögern Sie nicht, uns zu kontaktieren – wir beraten Sie individuell.",
        type: "paragraph",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: "Parodontitis",
      description:
        "Chronische Entzündung des Zahnhalteapparats mit Risiko für Zahnverlust – erfordert gezielte Behandlung und Vorbeugung.",
      possibleTreatment: [
        "Professionelle Zahnreinigung",
        "Scaling und Root Planing",
        "Antibakterielle Medikation",
        "Parodontalchirurgische Eingriffe"
      ],
      associatedAnatomy: {
        "@type": "AnatomicalStructure",
        name: "Zahnhalteapparat"
      }
    },
  },
  fuellungen: {
    subtitle: "Füllungen & Inlays",
    title: "Restaurative Lösungen für Ihre Zähne",
    intro:
      "Füllungen und Inlays dienen der Wiederherstellung von Form, Funktion und Ästhetik geschädigter Zähne. Während Füllungen bei kleineren Defekten direkt im Zahn verarbeitet werden, kommen Inlays bei größeren Schäden zum Einsatz und werden individuell angefertigt. Beide Verfahren ermöglichen es, die Zahngesundheit effektiv zu erhalten – schmerzfrei, langlebig und ästhetisch ansprechend.",
    image: "/images/Leistungen_Details/fuellungen_inlays.png",
    sections: [
      {
        title: "Füllungen: Schnelle und effektive Behandlung",
        content: [
          "**Anwendung**: Ideal zur Versorgung kleinerer kariöser Läsionen oder Zahndefekte.",
          "**Materialien**: Je nach Bedarf stehen Amalgam, Komposit, Gold oder Porzellan zur Verfügung.",
        ],
        type: "list",
      },
      {
        title: "Inlays: Präzise und langlebige Restaurationen",
        content: [
          "**Anwendung**: Bei größeren Defekten, bei denen eine Füllung nicht mehr ausreicht.",
          "**Anfertigung**: Maßgefertigt im zahntechnischen Labor für perfekte Passform und Funktion.",
          "**Materialien**: Hochwertige Materialien wie Gold, Porzellan oder Komposit sorgen für Stabilität und Ästhetik.",
        ],
        type: "list",
      },
      {
        title: "Gründe für professionelle Füllungen und Inlays",
        content: [
          "**Wiederherstellung der Funktion**: Schmerzfreies Kauen und Schutz der natürlichen Zahnsubstanz.",
          "**Ästhetik**: Zahnfarbene Materialien ermöglichen ein natürliches und harmonisches Erscheinungsbild.",
          "**Langlebigkeit**: Bei sorgfältiger Pflege können Füllungen und Inlays viele Jahre stabil bleiben.",
        ],
        type: "list",
      },
      {
        title: "Ablauf der Behandlung",
        content: [
          "**Untersuchung und Beratung**: Analyse des Zahnschadens und Auswahl der passenden Lösung.",
          "**Vorbereitung**: Entfernung kariöser Stellen und sorgfältige Reinigung des Zahns.",
          "**Anpassung**: Bei Inlays Abdrucknahme für das Labor, bei Füllungen direkte Applikation.",
          "**Einsetzen und Anpassen**: Inlays werden eingesetzt und justiert, Füllungen modelliert und gehärtet.",
          "**Abschlusskontrolle**: Prüfung der Bissfunktion und individueller Feinanpassung für optimalen Komfort.",
        ],
        type: "steps",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Füllungen und Inlays",
      procedureType: "http://schema.org/TherapeuticProcedure",
      description:
        "Zahnärztliche Restaurationen zur Behandlung von Karies und Zahnschäden mit langlebigen, ästhetischen Materialien.",
      followup:
        "Regelmäßige Kontrolle bei Routineuntersuchungen empfohlen; gute Mundhygiene verlängert die Haltbarkeit.",
    },
  },
  wurzelbehandlung: {
    subtitle: "Wurzelbehandlung",
    title: "Ein wichtiger Schritt zur Zahnerhaltung",
    intro:
      "Die Wurzelbehandlung ist ein bewährtes Verfahren zur Rettung eines stark beschädigten oder infizierten Zahns. Ziel ist es, den natürlichen Zahn zu erhalten, Schmerzen zu lindern und die Ausbreitung von Infektionen zu verhindern. Moderne Technik und präzise Arbeitsweise sorgen heute für eine schonende, effektive und nahezu schmerzfreie Behandlung.",
    image: "/images/Leistungen_Details/wurzelbehandlung.png",
    sections: [
      {
        title: "Gründe für eine Wurzelbehandlung",
        content: [
          "**Zahnerhaltung**: Vermeidung der Extraktion durch Erhalt der natürlichen Zahnsubstanz.",
          "**Schmerzlinderung**: Behebung von Beschwerden, die durch Entzündungen oder Infektionen verursacht werden.",
          "**Vermeidung von Komplikationen**: Schutz vor Abszessen, Knochenschwund und Ausbreitung von Bakterien.",
        ],
        type: "list",
      },
      {
        title: "Ablauf einer Wurzelbehandlung",
        content: [
          "**Diagnose**: Gründliche Untersuchung und Röntgenaufnahmen zur Beurteilung des Zahnzustands.",
          "**Lokalanästhesie**: Schmerzfreie Behandlung durch örtliche Betäubung des betroffenen Bereichs.",
          "**Zugang zum Zahninneren**: Eröffnung des Zahns zur Freilegung des Wurzelkanals.",
          "**Reinigung des Wurzelkanals**: Entfernung von infiziertem Gewebe und Desinfektion des Kanals.",
          "**Füllung des Kanals**: Versiegelung mit speziellem Füllmaterial zur Verhinderung einer Reinfektion.",
          "**Wiederherstellung des Zahnes**: Stabilisierung durch eine Krone oder hochwertige Füllung.",
        ],
        type: "steps",
      },
      {
        title: "Nach der Behandlung",
        content:
          "Nach der Behandlung kann der Zahn vorübergehend empfindlich sein – diese Beschwerden klingen in der Regel nach wenigen Tagen ab. Um die Langlebigkeit des behandelten Zahns zu sichern, sind eine sorgfältige Mundhygiene und regelmäßige Kontrolluntersuchungen besonders wichtig. In vielen Fällen bleibt der Zahn nach erfolgreicher Wurzelbehandlung noch viele Jahre erhalten.",
        type: "paragraph",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Wurzelbehandlung",
      procedureType: "http://schema.org/TherapeuticProcedure",
      description:
        "Endodontische Behandlung zur Entfernung infizierten Gewebes und Erhaltung eines natürlichen Zahnes.",
      followup:
        "Empfindlichkeit möglich, regelmäßige Kontrollen empfohlen; Zahnschutz durch Krone oder Füllung sichert Langzeiterfolg.",
    },
  },
  funktionsdiagnostik: {
    subtitle: "Funktionsdiagnostik",
    title: "Ein wichtiger Schritt für Ihre orale Gesundheit",
    intro:
      "Die Funktionsdiagnostik ist ein spezialisiertes Verfahren zur Erkennung von Funktionsstörungen im Kausystem. Sie hilft dabei, Beschwerden wie Kiefergelenkschmerzen, Kopf- oder Nackenschmerzen sowie Zahnschäden zu analysieren und ursächlich zu behandeln. Durch moderne Diagnosemethoden und einen ganzheitlichen Behandlungsansatz schaffen wir die Grundlage für Ihre langfristige orale Gesundheit.",
    image: "/images/Leistungen_Details/funktionsdiagnostik.png",
    sections: [
      {
        title: "Relevanz der Funktionsdiagnostik",
        content: [
          "**Früherkennung**: Identifikation funktioneller Störungen, bevor sie zu chronischen Beschwerden führen.",
          "**Individuelle Behandlungsplanung**: Maßgeschneiderte Therapie auf Basis präziser Diagnosedaten.",
          "**Ganzheitlicher Ansatz**: Betrachtung des Zusammenspiels von Zähnen, Kiefergelenken, Muskeln und Nerven.",
        ],
        type: "list",
      },
      {
        title: "Ablauf einer Funktionsdiagnostik",
        content: [
          "**Anamnese**: Erfassung individueller Symptome und Beschwerdeverlauf in einem persönlichen Gespräch.",
          "**Klinische Untersuchung**: Prüfung von Kieferbewegungen, Gelenkfunktionen und Kaumuskulatur.",
          "**Instrumentelle Analyse**: Einsatz moderner Geräte wie z. B. Achsiographie zur präzisen Bewegungsanalyse.",
          "**Auswertung und Behandlungsplanung**: Erstellung eines individuell angepassten Therapiekonzepts basierend auf den erhobenen Daten.",
        ],
        type: "steps",
      },
      {
        title: "Mögliche Behandlungsoptionen",
        content: [
          "**Schienentherapie**: Einsatz individuell gefertigter Aufbissschienen zur Entlastung des Kiefers.",
          "**Physiotherapie**: Unterstützung der Muskelentspannung und Förderung der Beweglichkeit des Kiefergelenks.",
        ],
        type: "list",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Funktionsdiagnostik",
      procedureType: "http://schema.org/DiagnosticProcedure",
      description:
        "Diagnostik zur Analyse von Kiefergelenks-, Muskel- und Funktionsstörungen im Kausystem mit individueller Therapieplanung.",
      followup:
        "Individuelle Weiterbehandlung wie Schienentherapie oder Physiotherapie möglich; regelmäßige Verlaufskontrolle empfohlen.",
    },
  },
  zahnersatz: {
    subtitle: "Vollkeramischer Zahnersatz",
    title: "Ästhetik trifft Funktionalität",
    intro:
      "Vollkeramischer Zahnersatz bietet eine besonders ästhetische und biokompatible Lösung zur Wiederherstellung beschädigter oder fehlender Zähne. Kronen, Brücken, Inlays und Onlays aus Keramik überzeugen durch ihr natürliches Aussehen, ihre Langlebigkeit und den Verzicht auf Metall. Die hochmoderne Zahntechnik ermöglicht ein Ergebnis, das sich kaum von natürlichen Zähnen unterscheiden lässt.",
    image: "/images/Leistungen_Details/Vollkeramischerzahnersatz.png",
    sections: [
      {
        title: "Vorteile von vollkeramischem Zahnersatz",
        content: [
          "**Natürliches Aussehen**: Farbgebung und Lichtdurchlässigkeit ähneln der natürlichen Zahnsubstanz.",
          "**Biokompatibilität**: Keramik ist sehr gut verträglich und löst kaum allergische Reaktionen aus.",
          "**Langlebigkeit und Stabilität**: Moderne Keramiken sind extrem belastbar und haltbar.",
          "**Gewebefreundlichkeit**: Fördert gesundes Zahnfleisch und reduziert Irritationen.",
        ],
        type: "list",
      },
      {
        title: "Anwendungsbereiche",
        content: [
          "**Kronen**: Schutz und Wiederaufbau stark beschädigter Zähne.",
          "**Brücken**: Ersatz fehlender Zähne mit hoher Ästhetik.",
          "**Inlays und Onlays**: Maßgeschneiderte Versorgung bei mittelgroßen bis großen Defekten.",
        ],
        type: "list",
      },
      {
        title: "Der Behandlungsablauf",
        content: [
          "**Beratung und Planung**: Individuelle Analyse Ihrer Wünsche und Anforderungen.",
          "**Vorbereitung des Zahnes**: Minimalinvasives Abschleifen zur Aufnahme des Zahnersatzes.",
          "**Abdrucknahme**: Präziser digitaler oder klassischer Abdruck für die exakte Passform.",
          "**Anfertigung des Zahnersatzes**: Maßanfertigung im zahntechnischen Labor in höchster Qualität.",
          "**Einsetzen und Anpassung**: Sorgfältige Eingliederung und individuelle Justierung für optimalen Komfort.",
        ],
        type: "steps",
      },
      {
        title: "Zielgruppe",
        content:
          "Vollkeramischer Zahnersatz eignet sich für alle, die besonderen Wert auf Ästhetik und eine metallfreie Lösung legen. Ob bei sichtbaren Frontzähnen oder belasteten Seitenzähnen – Vollkeramik erfüllt höchste Ansprüche in Funktion und Aussehen.",
        type: "paragraph",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Vollkeramischer Zahnersatz",
      procedureType: "http://schema.org/RestorativeProcedure",
      description:
        "Ästhetischer Zahnersatz aus reiner Keramik – ideal für natürlich wirkende, stabile und biokompatible Kronen, Brücken oder Inlays.",
      followup:
        "Regelmäßige Kontrolle zur Überprüfung von Sitz und Funktion sowie gute Mundhygiene empfohlen.",
    },
  },
  implantologie: {
    subtitle: "Implantologie",
    title: "Moderne Lösungen für fehlende Zähne",
    intro:
      "Die Implantologie bietet eine moderne, langfristige Lösung zum Ersatz fehlender Zähne. Zahnimplantate sind künstliche Zahnwurzeln, die fest im Kieferknochen verankert werden und als stabile Basis für Kronen, Brücken oder Prothesen dienen. Sie ermöglichen ein natürliches Kaugefühl, sprechen für sich in puncto Ästhetik und sorgen für den Erhalt des Kieferknochens.",
    image: "/images/Leistungen_Details/implantologie.png",
    sections: [
      {
        title: "Vorteile von Zahnimplantaten",
        content: [
          "**Natürliches Aussehen und Gefühl**: Implantate imitieren Form und Funktion echter Zähne.",
          "**Funktionalität**: Sicheres Kauen, Sprechen und Lächeln – ganz ohne Einschränkungen.",
          "**Knochenerhaltung**: Stimulierung des Kieferknochens verhindert dessen Abbau.",
          "**Langlebigkeit**: Bei guter Pflege halten Implantate oft ein Leben lang.",
        ],
        type: "list",
      },
      {
        title: "Behandlungsablauf",
        content: [
          "**Erstberatung**: Umfassende Untersuchung und Besprechung Ihrer individuellen Bedürfnisse und gesundheitlichen Voraussetzungen.",
          "**Behandlungsplanung**: Präzise Planung mit moderner Bildgebung wie digitaler Volumentomographie (DVT).",
          "**Chirurgische Einsetzung**: Schonender, minimalinvasiver Eingriff unter Lokalanästhesie.",
          "**Einheilphase**: Osseointegration – das Implantat verwächst fest mit dem Kieferknochen.",
          "**Prothetische Versorgung**: Nach Einheilung erfolgt die Befestigung des finalen Zahnersatzes (z. B. Krone oder Brücke).",
        ],
        type: "steps",
      },
      {
        title: "Zielgruppe",
        content:
          "Zahnimplantate sind ideal für Patient:innen mit einem oder mehreren fehlenden Zähnen, die eine feste, ästhetische und langlebige Lösung suchen. Voraussetzung ist ein stabiler Kieferknochen und ein guter allgemeiner Gesundheitszustand. In vielen Fällen ist auch ein Knochenaufbau möglich, falls das Kiefervolumen nicht ausreicht.",
        type: "paragraph",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Implantologie",
      procedureType: "http://schema.org/SurgicalProcedure",
      description:
        "Einsatz künstlicher Zahnwurzeln zur dauerhaften Versorgung mit Zahnersatz – funktional, ästhetisch und stabil.",
      followup:
        "Regelmäßige Kontrollen und gute Mundhygiene sichern den langfristigen Erfolg von Implantaten.",
    },
  },
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const serviceIndex = services.findIndex((service) => service.id === id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentService = services[serviceIndex];

  // Safely access content with a fallback for services that don't have dedicated content yet
  const content = serviceContents[id as keyof typeof serviceContents] || {
    subtitle: currentService?.title || "",
    title: "Details zur Behandlung",
    intro:
      currentService?.description ||
      "Detaillierte Informationen zu dieser Behandlung werden in Kürze verfügbar sein.",
    image: currentService?.imageSrc || "/placeholder.svg",
    sections: [],
    schema: {},
  };

  if (!currentService) {
    return (
      <div className="flex flex-col min-h-screen">
        <SEO
          title="Service nicht gefunden | ABDENT Zahnarztpraxis"
          description="Die gesuchte zahnärztliche Leistung existiert nicht oder wurde entfernt."
          canonicalUrl={`/service/${id}`}
        />
        <Header />
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Service nicht gefunden</h1>
            <p className="mt-4">
              Diese Leistung existiert nicht oder wurde entfernt.
            </p>
            <Link
              to="/"
              className="mt-8 inline-block text-abdent-600 hover:underline"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const prevIndex = serviceIndex > 0 ? serviceIndex - 1 : services.length - 1;
  const nextIndex = serviceIndex < services.length - 1 ? serviceIndex + 1 : 0;

  const prevService = services[prevIndex];
  const nextService = services[nextIndex];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={`${currentService.title} | ABDEN Zahnarztpraxis Lage`}
        description={currentService.description}
        canonicalUrl={`/service/${id}`}
        schema={content.schema}
      />

      <Header />
      <main className="flex-grow bg-white">
        {/* Full-width image section above content */}
        <div className="w-full relative">
          <img
            src={content.image}
            alt={currentService.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        <div className="pt-12 pb-16 bg-abdent-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base sm:text-lg text-abdent-600">{content.subtitle}</h3>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 h-auto"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu size={16} className="hidden sm:inline" />
                  <Menu size={14} className="sm:hidden" />
                  <span>Alle Leistungen</span>
                </Button>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 sm:mb-6">
                {content.title}
              </h1>
              <p className="text-dark-light text-base sm:text-lg leading-relaxed">
                {content.intro}
              </p>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">
              {content.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-dark">
                    {section.title}
                  </h2>

                  {section.type === "list" && (
                    <ul className="space-y-2 sm:space-y-3">
                      {(section.content as string[]).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-abden-500 mr-2">•</span>
                          <span
                            className="text-sm sm:text-base"
                            dangerouslySetInnerHTML={{
                              __html: item.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.type === "steps" && (
                    <ol className="space-y-2 sm:space-y-3 list-decimal pl-4 sm:pl-5">
                      {(section.content as string[]).map((item, i) => (
                        <li key={i} className="pl-1 sm:pl-2">
                          <span
                            className="text-sm sm:text-base"
                            dangerouslySetInnerHTML={{
                              __html: item.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.type === "paragraph" && (
                    <p
                      className="text-dark-light text-sm sm:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: section.content
                          .toString()
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-between items-center pt-6 sm:pt-8 border-t border-gray-200 mt-8 sm:mt-12">
                <Button
                  variant="outline"
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 h-auto"
                  onClick={() => navigate(`/service/${prevService.id}`)}
                >
                  <ChevronLeft size={16} className="hidden sm:inline" />
                  <ChevronLeft size={14} className="sm:hidden" />
                  <span>Vorherige</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 h-auto"
                  onClick={() => navigate(`/service/${nextService.id}`)}
                >
                  <span>Nächste</span>
                  <ChevronRight size={16} className="hidden sm:inline" />
                  <ChevronRight size={14} className="sm:hidden" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ServicesSidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        currentServiceId={id}
      />
    </div>
  );
};

export default ServiceDetail;
