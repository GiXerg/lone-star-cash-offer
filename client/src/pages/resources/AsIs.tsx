/*
 * Selling As-Is Resource Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home as HomeIcon, Phone, ArrowLeft, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function AsIs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 texture-overlay">
        <div className="container">
          <Link href="/resources">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Resources</span>
            </a>
          </Link>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Selling Your House As-Is
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            No repairs. No cleaning. No staging. Sell your home exactly as it is, on your timeline.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-card py-12">
        <div className="container">
          <img
            src="/images/repair-related.jpg"
            alt="Selling Your House As-Is"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                What Does Selling As-Is Mean?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Selling a house "as-is" means you're selling it in its current condition — no repairs, no updates, no improvements. For many homeowners, this is the fastest and easiest way to sell, especially when the property needs work or when you don't have the time or money to invest in repairs.
                </p>
                <p>
                  When you sell as-is to <strong className="text-foreground">Lone Star Cash Offer</strong>, you don't need to:
                </p>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">Fix Anything</h3>
                    <p className="text-muted-foreground">Roof damage, foundation issues, outdated systems — we buy it all.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">Update or Remodel</h3>
                    <p className="text-muted-foreground">Outdated kitchens, old bathrooms, worn flooring — no problem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">Clean or Declutter</h3>
                    <p className="text-muted-foreground">Years of accumulation? We don't care. Sell as-is.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">Stage the Home</h3>
                    <p className="text-muted-foreground">No need for expensive staging or professional photos.</p>
                  </div>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                Why Sell As-Is?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                There are many reasons homeowners choose to sell as-is:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>The home needs major repairs you can't afford</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You've inherited a property you don't want to manage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You're relocating and need to sell quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>The property has unpermitted work or additions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You simply don't want the hassle of preparing a home for market</span>
                </li>
              </ul>
            </div>

            <Card className="p-8 md:p-12 border-2">
              <h3 className="font-display text-3xl text-foreground mb-6">
                A Faster, Easier Way to Sell
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When you sell your house as-is to <strong className="text-foreground">Lone Star Cash Offer</strong>, you get:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">→</span>
                  <span className="text-muted-foreground">A fair cash offer</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">→</span>
                  <span className="text-muted-foreground">No repairs or cleaning</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">→</span>
                  <span className="text-muted-foreground">No commissions or hidden fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">→</span>
                  <span className="text-muted-foreground">No waiting for bank approvals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">→</span>
                  <span className="text-muted-foreground">A closing timeline that works for you</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">→</span>
                  <span className="text-muted-foreground">Peace of mind and simplicity</span>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                Skip the Traditional Selling Hassles
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Preparing a home for the market often means:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✗</span>
                  <span>Deep cleaning and decluttering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✗</span>
                  <span>Expensive staging and professional photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✗</span>
                  <span>Repairs and updates you can't afford</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✗</span>
                  <span>Multiple showings and open houses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✗</span>
                  <span>Months of waiting for the right buyer</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Selling as-is eliminates all of that. No prepping. No cleaning. No strangers walking through your home. Just a simple, direct sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Sell As-Is?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a fair cash offer for your home, exactly as it is. No repairs. No hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-medium text-lg px-8">
                Get Your Cash Offer
              </Button>
            </Link>
            <a href="tel:+14697686613">
              <Button size="lg" variant="outline" className="font-medium text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5 mr-2" />
                (469) 768-6613
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
