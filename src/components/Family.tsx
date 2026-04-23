// src/components/Family.tsx
import Ornament from "./Ornament";

const familyMembers = [
  {
    name: "Hari Kishore Pandit",
    role: "Indian Army",
    icon: "🪖",
  },
  {
    name: "Surendra Pandit",
    role: "Indian Army",
    icon: "🪖",
  },
  {
    name: "Dipu Kumar",
    role: "Indian Navy",
    icon: "⚓",
  },
  {
    name: "Nitesh Kumar",
    role: "B.Tech",
    icon: "⚓",
  },
  {
    name: "Prince Kumar",
    role: "Bihar Police",
    icon: "👮",
  },
  {
    name: "Banti Kumar",
    role: "UPSC",
    icon: "👨🏻‍🎓",
  },
  {
    name: "Uday Kumar",
    role: "Mobile Engineer",
    icon: "📱",
  },
  {
    name: "Surendra Pandit",
    role : "Dentist",
    icon : "🦷"
  }
];

const Family = () => {
  return (
    <section id="family" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="font-small-caps text-xs text-primary mb-4">With Blessings</p>
          <h2 className="font-display italic text-4xl md:text-6xl text-foreground mb-6">
            Family & Relatives
          </h2>
          <Ornament />
          <p className="mt-6 font-body text-muted-foreground max-w-xl mx-auto">
            Honored by the service and dedication of our family members who protect and serve our nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {familyMembers.map((member, i) => (
            <div
              key={member.name}
              className="reveal group text-center bg-card/70 backdrop-blur-sm border border-border p-6 hover:border-primary/60 transition-all duration-500 hover:shadow-gold hover:scale-105"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {member.icon}
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {member.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Family;