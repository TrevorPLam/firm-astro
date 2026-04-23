export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  social: {
    twitter?: string;
    linkedin?: string;
  };
}

export const team: TeamMember[] = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "15+ years in digital marketing. Former Head of Growth at Fortune 500 companies. Passionate about leveraging AI to transform marketing strategies.",
    expertise: ["Strategy", "Growth", "AI", "Leadership"],
    social: { twitter: "alexchen", linkedin: "alexchen" },
  },
  {
    name: "Sarah Mitchell",
    role: "Head of SEO",
    bio: "SEO specialist with 10+ years experience. Helped 100+ brands achieve top rankings. Speaker at major marketing conferences.",
    expertise: ["SEO", "Content", "Analytics", "Technical SEO"],
    social: { linkedin: "sarahmitchell" },
  },
  {
    name: "Marcus Johnson",
    role: "Head of Paid Media",
    bio: "Managed $50M+ in ad spend. Expert in multi-channel campaign optimization. Google and Meta certified professional.",
    expertise: ["PPC", "Meta Ads", "Google Ads", "Programmatic"],
    social: { twitter: "marcusj" },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Content",
    bio: "Content strategist and storyteller. Created 1000+ pieces of high-performing content. Former journalist with a passion for brand narratives.",
    expertise: ["Content", "Copywriting", "Video", "Storytelling"],
    social: { linkedin: "emilyrodriguez" },
  },
  {
    name: "David Kim",
    role: "Head of Analytics",
    bio: "Data scientist with background in machine learning. Transforms complex data into actionable marketing insights.",
    expertise: ["Analytics", "Data Science", "BI", "Python"],
    social: { linkedin: "davidkim" },
  },
  {
    name: "Lisa Thompson",
    role: "Head of Email Marketing",
    bio: "Email automation expert. Built campaigns generating $10M+ in revenue. Specialist in lifecycle marketing and segmentation.",
    expertise: ["Email", "Automation", "CRM", "Lifecycle"],
    social: { twitter: "lisathompson" },
  },
  {
    name: "James Wilson",
    role: "Senior SEO Strategist",
    bio: "Technical SEO expert with 8+ years experience. Specializes in enterprise SEO and international markets.",
    expertise: ["Technical SEO", "Enterprise", "International"],
    social: { linkedin: "jameswilson" },
  },
  {
    name: "Rachel Green",
    role: "Creative Director",
    bio: "Award-winning creative professional. Leads visual identity and brand design projects for enterprise clients.",
    expertise: ["Design", "Branding", "Video", "UI/UX"],
    social: { linkedin: "rachelgreen" },
  },
];
