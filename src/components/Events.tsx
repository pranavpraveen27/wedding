import Ornament from "./Ornament";
import { MapPin } from "lucide-react";

const events = [
  {
    name: "Haldi & Matkor",
    tagline: "The ceremony of golden blessings",
    date: "29 April, 2026",
    day: "Wednesday",
    time: "10:00 AM onwards",
    venue: "Vill: Sasna kishunpur",
    mapUrl: "https://maps.google.com/?q=sasna kishunpur",
    icon: "🌼",
  },
  {
    name: "Tilak",
    tagline: "The sacred blessing ceremony",
    date: "28 April, 2026",
    day: "Tuesday",
    time: "12:00 PM onwards",
    venue: "Family Residence Vill: Sasna kishunpur",
    mapUrl: "https://maps.google.com/?q=sasna kishunpur",
    icon: "🌿",
  },
  {
    name: "Barat & Wedding",
    tagline: "The sacred union of two souls",
    date: "30 April, 2026",
    day: "Thursday",
    time: "5:00 PM onwards",
    venue: "Khedhwa,Basantpur",
    mapUrl: "https://maps.google.com/?q=khedhwa",
    icon: "🔥",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="font-small-caps text-xs text-primary mb-4">Celebrations</p>
          <h2 className="font-display italic text-4xl md:text-6xl text-foreground mb-6">
            Wedding Events
          </h2>
          <Ornament />
          <p className="mt-6 font-body text-muted-foreground max-w-xl mx-auto">
            Four days of tradition, laughter and love — we would be honoured to have you
            celebrate every moment with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {events.map((e, i) => (
            <article
              key={e.name}
              className="reveal group relative bg-card/70 backdrop-blur-sm border border-border p-8 md:p-10 hover:border-primary/60 transition-all duration-500 hover:shadow-gold"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl" aria-hidden>{e.icon}</span>
                <span className="font-small-caps text-[10px] text-primary">Event {i + 1}</span>
              </div>

              <h3 className="font-display italic text-3xl md:text-4xl text-foreground mb-2">
                {e.name}
              </h3>
              <p className="font-display text-sm text-muted-foreground italic mb-6">
                {e.tagline}
              </p>

              <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent mb-6" />

              <dl className="space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="font-small-caps text-[10px] text-primary w-16 pt-1">Date</dt>
                  <dd className="font-body text-foreground/80">{e.date}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-small-caps text-[10px] text-primary w-16 pt-1">Day</dt>
                  <dd className="font-body text-foreground/80">{e.day}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-small-caps text-[10px] text-primary w-16 pt-1">Time</dt>
                  <dd className="font-body text-foreground/80">{e.time}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-small-caps text-[10px] text-primary w-16 pt-1">Venue</dt>
                  <dd className="font-body text-foreground/80">{e.venue}</dd>
                </div>
              </dl>

              <a
                href={e.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 font-small-caps text-[10px] text-primary hover:text-accent transition-colors"
              >
                <MapPin size={14} /> View Map
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
