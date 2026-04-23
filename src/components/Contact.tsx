// src/components/Contact.tsx
import Ornament from "./Ornament";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container max-w-2xl">
        <div className="text-center reveal">
          <p className="font-small-caps text-xs text-primary mb-4">Get in Touch</p>
          <h2 className="font-display italic text-4xl md:text-6xl text-foreground mb-6">
            Contact & Host
          </h2>
          <Ornament />

          <div className="mt-12 bg-card/70 backdrop-blur-sm border border-border p-8 md:p-10 gold-border rounded-sm">
            <div className="text-center">
              <h3 className="font-display text-2xl text-foreground mb-4">
                Host
              </h3>
              <p className="font-body text-lg text-muted-foreground mb-6">
                Shri Jitendra Pandit
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="font-body text-foreground">9572337065</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="font-body text-foreground">7250936892</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;