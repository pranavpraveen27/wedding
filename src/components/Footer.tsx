import Ornament from "./Ornament";

const Footer = () => (
  <footer className="py-16 border-t border-border bg-background">
    <div className="container text-center">
      <Ornament />
      <p className="font-script text-4xl md:text-5xl text-gold mt-8">Aarav &amp; Priya</p>
      <p className="font-small-caps text-[10px] text-muted-foreground mt-3">
        14 · 02 · 2026  ·  Jaipur
      </p>
      <p className="font-body text-xs text-muted-foreground mt-8">
        Made with love · Shubh Vivah
      </p>
    </div>
  </footer>
);

export default Footer;
