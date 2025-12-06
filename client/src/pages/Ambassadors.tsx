import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Ambassador {
  name: string;
  role: string;
  state?: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface AmbassadorCategory {
  title: string;
  description?: string;
  members: Ambassador[];
}

const ambassadorCategories: AmbassadorCategory[] = [
  {
    title: "Grand Patron",
    members: [
      {
        name: "His Excellency, Bola Ahmed Tinubu",
        role: "President of the Federal Republic of Nigeria",
        image: "/images/placeholder-user.jpg", // Placeholder
      },
    ],
  },
  {
    title: "National President",
    members: [
      {
        name: "Name Required",
        role: "National President",
        image: "/images/placeholder-user.jpg",
      },
    ],
  },
  {
    title: "Zonal Ambassadors",
    description: "Representing the 6 Geopolitical Zones",
    members: Array(6).fill({
      name: "Name Required",
      role: "Zonal Ambassador",
      image: "/images/placeholder-user.jpg",
    }),
  },
  {
    title: "State Ambassadors",
    description: "Representing the 36 States + FCT",
    members: Array(37).fill({
      name: "Name Required",
      role: "State Ambassador",
      image: "/images/placeholder-user.jpg",
    }),
  },
  {
    title: "Local Government Ambassadors",
    description: "Grassroots leadership across all LGAs",
    members: [], // Large list, maybe just show a summary or a few examples if needed, or empty state
  },
  {
    title: "Ward Ambassadors",
    description: "Community mobilizers in every ward",
    members: [], // Large list
  },
];

export default function Ambassadors() {
  return (
    <div className="bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Ambassadors
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated leaders driving the Renewed Hope Agenda across Nigeria, from the national level down to the grassroots.
          </p>
        </div>

        <div className="space-y-20">
          {ambassadorCategories.map((category, idx) => (
            <section key={idx} className="scroll-mt-24" id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b pb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>

              {category.members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50 group"
                    >
                      <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                        {/* Replace with actual Image component or img tag */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30">
                          <span className="sr-only">Photo of {member.name}</span>
                          {/* Placeholder icon or actual image */}
                          <svg
                            className="w-20 h-20 opacity-20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg truncate" title={member.name}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-1">
                          {member.role}
                        </p>
                        {member.state && (
                          <p className="text-xs text-muted-foreground mb-3">
                            {member.state}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#0077b5] transition-colors"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
                              aria-label="X (Twitter)"
                            >
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                          {member.facebook && (
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                              aria-label="Facebook"
                            >
                              <Facebook className="w-5 h-5" />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#E4405F] transition-colors"
                              aria-label="Instagram"
                            >
                              <Instagram className="w-5 h-5" />
                            </a>
                          )}
                          
                          {!member.linkedin && !member.twitter && !member.facebook && !member.instagram && (
                             <span className="text-xs text-muted-foreground italic">Socials coming soon</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-muted/30 rounded-xl p-8 text-center border border-dashed border-border">
                  <p className="text-muted-foreground">
                    Ambassador list for this category is being updated.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Apply to be a {category.title.replace(/s$/, '')}
                  </Button>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
