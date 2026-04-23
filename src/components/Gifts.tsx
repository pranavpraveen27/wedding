import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Ornament from "./Ornament";
import qr from "@/assets/upi-qr.jpg";

const UPI_ID = "9596930117@mbkns";

const Gifts = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="gifts" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center reveal">
          <p className="font-small-caps text-xs text-primary mb-4">Shagun</p>
          <h2 className="font-display italic text-4xl md:text-6xl text-foreground mb-6">
            With Love & Blessings
          </h2>
          <Ornament />

          <p className="mt-10 font-display italic text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-xl mx-auto">
            "Your presence is the greatest gift to us..."
          </p>
        </div>

        <div className="mt-16 reveal">
          <div className="relative bg-card/80 backdrop-blur-sm p-10 md:p-14 gold-border rounded-sm text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <span className="font-small-caps text-[10px] text-primary">Shagun via UPI</span>
            </div>

            <div className="inline-block p-3 bg-background border border-primary/30 rounded-sm shadow-soft">
              <img
                src={qr}
                alt="UPI QR code"
                loading="lazy"
                width={260}
                height={260}
                className="w-56 h-56 md:w-64 md:h-64 object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="font-small-caps text-[10px] text-muted-foreground mb-2">UPI ID</p>
              <button
                onClick={handleCopy}
                className="group inline-flex items-center gap-3 font-display text-lg md:text-xl text-foreground hover:text-primary transition-colors"
              >
                <span>{UPI_ID}</span>
                <span className="text-primary">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </span>
              </button>
              <p className="mt-2 font-body text-xs text-muted-foreground">
                {copied ? "Copied to clipboard" : "Tap to copy"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
