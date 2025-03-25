import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8 mt-10">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG:</h2>
          <p className="mb-6">
            Mohamad Abden Zahnarztpraxis<br />
            Heidensche Straße 22<br />
            32791 Lage
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">Kontakt:</h2>
          <p className="mb-6">
            Telefon: <a href="tel:+4952323076" className="underline">+49 5232 3076</a><br />
            E-Mail: <a href="mailto:praxis@zahnarzt-abden.de" className="underline">praxis@zahnarzt-abden.de</a><br />
            Website: <a href="https://www.zahnarzt-abden.de/" target="_blank" rel="noopener noreferrer" className="underline">www.zahnarzt-abden.de/</a>
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Verantwortlichkeit:</h2>
          <p className="mb-6">
            Inhaltlich Verantwortlicher nach §55 Abs. 2 RStV: Mohamad Abden
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="mb-6">
            Gesetzliche Berufsbezeichnung: Zahnarzt<br />
            Verleihender Staat für die gesetzliche Berufsbezeichnung: Bundesrepublik Deutschland<br />
            Zuständige Aufsichtsbehörde und Kammer: Zahnärztekammer und Kassenzahnärztliche Vereinigung Westfalen Lippe, Auf der Horst 29, 48147 Münster
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">Quellenangaben für die verwendeten Bilder und Grafiken:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Professionelle Zahnreinigung - Foto von The Humble Co. auf Unsplash</li>
            <li>Funktionsdiagnostik - Foto von Jonathan Borba auf Unsplash</li>
            <li>Wurzelbehandlung - Foto von Jonathan Borba auf Unsplash</li>
            <li>Parodontitisbehandlung - Foto von Quang Tri NGUYEN auf Unsplash</li>
            <li>Implantologie - Foto von Peter Kasprzyk auf Unsplash</li>
            <li>Vollkeramischer Zahnersatz - Foto von Elena Mozhvilo auf Unsplash</li>
            <li>Professionelle Füllungen und Inlays - Foto von Cristi Ursea auf Unsplash</li>
            <li>Karriere - Foto von Ozkan Guner auf Unsplash</li>
            <li>Icons Unsere Leistungen - Flaticon</li>
            <li>Kontakt: Telefon - Flaticon</li>
            <li>Kontakt: Standort - Flaticon</li>
            <li>Kontakt: E-Mail - Flaticon</li>
          </ul>
          <p className="mb-6">
            Alle weiteren Fotos und Illustrationen: ©️ Zahnarztpraxis Mohamad Abden
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Haftung für Inhalte:</h2>
          <p className="mb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Urheberrecht:</h2>
          <p className="mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Umsetzung:</h2>
          <p className="mb-6">
            Programmierung, Web & SEO: Khaled Bakir<br />
            Design: <a href="https://www.rominarauch.com/" target="_blank" rel="noopener noreferrer" className="underline">Romina Rauch</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;