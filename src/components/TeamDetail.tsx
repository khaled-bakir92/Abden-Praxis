
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTeamMemberById, teamMembers } from '../data/teamMembers';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Separator } from './ui/separator';

const TeamDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const teamMember = getTeamMemberById(id || '');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Redirect to not found if team member doesn't exist
    if (!teamMember) {
      navigate('/404');
    }
  }, [id, navigate, teamMember]);

  if (!teamMember) {
    return null;
  }

  // Find the index of the current team member
  const currentIndex = teamMembers.findIndex(member => member.id === id);
  
  // Get the previous and next team members (only consider featured members)
  const featuredMembers = teamMembers.filter(member => member.featured);
  const currentFeaturedIndex = featuredMembers.findIndex(member => member.id === id);
  
  const prevMember = currentFeaturedIndex > 0 
    ? featuredMembers[currentFeaturedIndex - 1] 
    : null;
    
  const nextMember = currentFeaturedIndex < featuredMembers.length - 1 
    ? featuredMembers[currentFeaturedIndex + 1] 
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{teamMember.name} | ABDENT Zahnarztpraxis</title>
        <meta name="description" content={`${teamMember.name} - ${teamMember.role} bei ABDENT. Erfahren Sie mehr über den beruflichen Werdegang und die Spezialisierungen.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": teamMember.name,
            "jobTitle": teamMember.role,
            "worksFor": {
              "@type": "Organization",
              "name": "ABDENT Zahnarztpraxis"
            },
            "image": teamMember.image,
            "description": `${teamMember.role} bei ABDENT`
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <div className="pt-24 pb-16 bg-abdent-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-abdent-700 mb-2">{teamMember.role}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">{teamMember.name}</h1>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left column with image */}
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-md w-full">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={teamMember.image} 
                      alt={teamMember.name} 
                      className="w-full h-auto object-cover aspect-[4/5]" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Right column with professional history and specializations */}
              <div className="max-w-xl">
                {teamMember.career && teamMember.career.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-dark mb-6">Beruflicher Werdegang</h2>
                    
                    <Separator className="mb-6" />
                    
                    <div className="space-y-5">
                      {teamMember.career.map((item, index) => (
                        <div key={index} className="flex">
                          <div className="w-28 sm:w-36 mr-4 flex-shrink-0">
                            <p className="font-bold text-abdent-700">{item.year}</p>
                          </div>
                          <div>
                            <p className="text-dark-light">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {teamMember.specialization && teamMember.specialization.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark mb-6">Spezialfachgebiete</h2>
                    
                    <Separator className="mb-6" />
                    
                    <ul className="list-disc pl-5 text-dark-light space-y-2">
                      {teamMember.specialization.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            {/* Previous/Next Navigation */}
            <div className="mt-20 flex justify-between items-center border-t border-gray-200 pt-8">
              {prevMember ? (
                <Link 
                  to={`/team/${prevMember.id}`} 
                  className="flex items-center text-abdent-600 hover:text-abdent-800 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  <span>Vorheriges Teammitglied</span>
                </Link>
              ) : (
                <div className="invisible">Placeholder</div>
              )}
              
              {nextMember ? (
                <Link 
                  to={`/team/${nextMember.id}`} 
                  className="flex items-center text-abdent-600 hover:text-abdent-800 transition-colors"
                >
                  <span>Nächstes Teammitglied</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <div className="invisible">Placeholder</div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamDetail;
