import heroImg from "@/assets/hero-couple.jpg";
import Countdown from "./Countdown";
import Ornament from "./Ornament";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Decorative corner borders */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-primary/20 rounded-sm" />

      {/* Floating Ganesh SVG */}
      <div className="absolute top-20 right-10 md:top-32 md:right-20 z-10 animate-float">
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 md:w-20 md:h-20 opacity-60"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 10px hsl(var(--primary-glow) / 0.3))',
            animation: 'glow 4s ease-in-out infinite alternate'
          }}
        >
          <circle cx="50" cy="35" r="18" />
          <path d="M50 53 Q45 65 40 70 Q38 75 45 78 Q52 80 55 72" />
          <path d="M35 45 Q20 45 15 55" />
          <path d="M65 45 Q80 45 85 55" />
          <circle cx="45" cy="30" r="2" fill="hsl(var(--primary))" />
          <circle cx="55" cy="30" r="2" fill="hsl(var(--primary))" />
          <path d="M50 35 L50 42" />
          <path d="M30 60 Q50 75 70 60" />
        </svg>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center relative">
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-in">
          <p className="font-small-caps text-xs text-primary mb-6">We are getting married</p>

          <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground">
            Dr. Abhay Kumar Pandit
            <span className="block font-script not-italic text-gold text-4xl md:text-5xl lg:text-6xl my-2">
              &amp;
            </span>
            Rimpa Kumari
          </h1>

          <div className="my-8 divider-ornament">
            <span className="font-small-caps text-xs text-primary">Save the Date</span>
          </div>

          <p className="font-display text-2xl md:text-3xl text-foreground/90 mb-3">
            30<sup className="text-base">th</sup> April, 2026
          </p>

          {/* Personal Details */}
          <div className="font-body text-sm text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed mb-6">
            <div className="mb-4">
              <p className="font-semibold text-foreground mb-1">Dr. Abhay Kumar Pandit</p>
              <p>S/o Shri Birendra Pandit</p>
              <p>Village: Gaundra Pipra, Bind Tola</p>
              <p>P.S: Narkatiaganj, District: West Champaran (Bihar)</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-foreground mb-1">Rimpa Kumari</p>
              <p>D/o Rajkumari Devi & Sudama Sah</p>
              <p>Village: Matar, Kanchanpur</p>
              <p>P.S: Sikta, District: West Champaran (Bihar)</p>
            </div>
          </div>

          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed italic">
            Together with their families, request the honor of your presence at the celebration of our union — a beginning of forever, blessed by tradition and love.
          </p>
        </div>

        <div className="order-1 md:order-2 relative animate-scale-in">
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-gold">
            <img
              src={heroImg}
              alt="Dr. Abhay Kumar Pandit and Rimpa Kumari in traditional Indian wedding attire"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
          </div>
          <div className="absolute -inset-4 border border-primary/20 rounded-sm -z-10" />
        </div>
      </div>

      {/* Countdown */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container">
          <Ornament className="mb-6" />
          <Countdown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
