
export interface Career {
  year: string;
  event: string;
}

export interface TeamMemberDetail {
  id: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
  career?: Career[];
  specialization?: string[];
}

// Our team members data
export const teamMembers: TeamMemberDetail[] = [
  {
    id: "mohamad-abden",
    name: "MED. DENT. MOHAMAD ABDEN",
    role: "Praxisleitung",
    image: "/images/team/1.png",
    featured: true,
    career: [
      { year: "2007 - 2012", event: "Studium der Zahnmedizin an der Universität Aleppo" },
      { year: "2012", event: "Staatsexamen" },
      { year: "2020 - 2021", event: "Angestellter Zahnarzt in der Praxis Hennig Löw " },
      { year: "2021", event: "Deutsche Approbation" },
      { year: "2022- 2023", event: "Angestellter Zahnarzt in der Praxis Dr. Mannsour" },
      { year: "2024", event: "Übernahme der Praxis von der Zahnärztin Ulrike Schaarschmidt" }
    ],
    specialization: ["Ästhetische Zahnheilkunde", "Zahnersatz"]
  },
  {
    id: "ulrike-schaarschmidt",
    name: "DR. MED. DENT. ULRIKE SCHAARSCHMIDT",
    role: "Implantologie",
    image: "/images/team/2.png",
    featured: true,
    career: [
      { year: "1988 - 1993", event: "Studium der Zahnmedizin an der Universität Leipzig" },
      { year: "1993 - 1998", event: "Angestellte Zahnärztin in der Praxis Dr. Plöger in Detmold" },
      { year: "1997", event: "Promotion an der Universität Göttingen" },
      { year: "1998", event: "Übernahme der Praxis und Gründung" },
      { year: "2001", event: "Schwerpunkt Implantologie" }
    ],
    specialization: ["Implantologie"]
  },
  {
    id: "johannes",
    name: "JOHANNES KRAUSE",
    role: "Zahntechniker",
    image: "/images/team/3.png",
    featured: false
  },
  {
    id: "olga",
    name: "OLGA SEWRJUKOW",
    role: "ZMFA, Verwaltung,Assistenz, Prophylaxe",
    image: "/images/team/4.png",
    featured: false
  },
  {
    id: "julia",
    name: "JULIA KRÖKER",
    role: "ZMFA, Verwaltung,Assistenz, Prophylaxe",
    image: "/images/team/6.png",
    featured: false
  },
  {
    id: "rasha",
    name: "RASHA ALMOHAMMAD",
    role: "Praktikantin",
    image: "/images/team/7.png",
    featured: false
  }
];

export const getTeamMemberById = (id: string): TeamMemberDetail | undefined => {
  return teamMembers.find(member => member.id === id);
};
