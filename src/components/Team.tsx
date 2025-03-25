import React from "react";
import TeamCard from "./TeamCard";
import { teamMembers } from "../data/teamMembers";

const Team = () => {
  const featuredMembers = teamMembers.filter((member) => member.featured);
  const regularMembers = teamMembers.filter((member) => !member.featured);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Unser Team
          </h2>
          <p className="text-dark-light max-w-2xl mx-auto">
            Unsere erfahrenen Zahnärzte und Fachkräfte sorgen für Ihre optimale
            zahnmedizinische Versorgung in angenehmer Atmosphäre.
          </p>
        </div>

        {/* Featured team members (larger cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredMembers.map((member) => (
            <TeamCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              featured={true}
            />
          ))}
        </div>

        {/* Regular team members - exactly 4 columns of 200px width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {regularMembers.map((member) => (
            <TeamCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
