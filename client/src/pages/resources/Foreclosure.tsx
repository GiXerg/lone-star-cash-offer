/*
 * Foreclosure Resource Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home as HomeIcon, Phone, ArrowLeft, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Foreclosure() {
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
            Facing Foreclosure?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Don't panic. There's a way out. We can help you avoid foreclosure and move forward.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-card py-12">
        <div className="container">
          <img
            src="/images/urgent-related.jpg"
            alt="Facing Foreclosure"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <Card className="p-8 md:p-12 border-2 bg-destructive/5">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-4">
                    Foreclosure Can Be Stopped
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Facing foreclosure can be one of the most stressful experiences a homeowner can go through. The uncertainty, the pressure from lenders, and the fear of losing your home can feel overwhelming. But there is a way out — and it doesn't have to involve foreclosure.
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                How We Can Help
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Lone Star Cash Offer</strong> specializes in helping homeowners avoid foreclosure by purchasing homes quickly for cash. We can often close in as little as three weeks, giving you the time you need to move forward without the foreclosure on your record.
                </p>
                <p>
                  When you sell to us, you can:
                </p>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3 flex items-start gap-2">
                    <span className="text-primary font-bold text-2xl">✓</span>
                    <span>Stop the Foreclosure Process</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We buy your home for cash, allowing you to pay off your lender and stop foreclosure proceedings immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3 flex items-start gap-2">
                    <span className="text-primary font-bold text-2xl">✓</span>
                    <span>Avoid Damage to Your Credit</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A foreclosure can devastate your credit score for years. Selling to us avoids this damage.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3 flex items-start gap-2">
                    <span className="text-primary font-bold text-2xl">✓</span>
                    <span>Get Cash to Start Fresh</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your equity, you may receive cash to help you move forward and rebuild.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3 flex items-start gap-2">
                    <span className="text-primary font-bold text-2xl">✓</span>
                    <span>Close on Your Timeline</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with your foreclosure timeline to close before the lender's deadline.
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                Why Act Now?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The longer you wait, the fewer options you have. Foreclosure timelines are strict, and once the process reaches certain stages, your options become limited. The sooner you contact us, the more we can help.
                </p>
                <p>
                  We've helped many homeowners avoid foreclosure by purchasing their homes quickly for cash. We understand the urgency and the stress you're under, and we're here to provide a real solution.
                </p>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-display text-3xl text-foreground mb-6">
                What to Do Right Now
              </h3>
              <ol className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">1</span>
                  <div>
                    <strong className="text-foreground">Contact us immediately</strong>
                    <p>The sooner we know about your situation, the sooner we can help.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">2</span>
                  <div>
                    <strong className="text-foreground">Schedule a free consultation</strong>
                    <p>We'll discuss your options and timeline with no pressure.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">3</span>
                  <div>
                    <strong className="text-foreground">Get a cash offer</strong>
                    <p>We'll make a fair offer that can help you avoid foreclosure.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">4</span>
                  <div>
                    <strong className="text-foreground">Close quickly</strong>
                    <p>We can close in as little as 21-30 days, before foreclosure proceeds.</p>
                  </div>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Don't Wait. Act Today.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Foreclosure timelines are strict. Contact us now for a free consultation and learn how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-medium text-lg px-8">
                Get Help Now
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
