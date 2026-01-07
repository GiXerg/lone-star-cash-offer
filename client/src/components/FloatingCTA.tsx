/*
 * Floating CTA Component - Texas Modernism Design
 * - Fixed widget on the right side of the page
 * - "Get Your Cash Offer" call-to-action
 */

import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 bottom-6 z-40 md:right-6 md:bottom-8">
      <div className="bg-background border-2 border-primary rounded-2xl shadow-2xl p-6 max-w-xs animate-in fade-in slide-in-from-right-4 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pr-6">
          <h3 className="font-display text-lg text-foreground mb-2">
            Ready to Sell?
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Get a fair cash offer for your home today.
          </p>

          <div className="space-y-3">
            <Link href="/contact">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Get Cash Offer
              </Button>
            </Link>
            <a href="tel:+14697686613">
              <Button
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/5"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
