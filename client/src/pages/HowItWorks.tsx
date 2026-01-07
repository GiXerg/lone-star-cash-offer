/*
 * How It Works Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ClipboardCheck, Home as HomeIcon, Phone, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 texture-overlay">
        <div className="container text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We buy homes fast — any condition, anywhere in Texas. Here's exactly what to expect when you work with Lone Star Cash Offer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <h2 className="font-display text-4xl text-foreground mb-6 text-center">
            We Buy Homes Fast — Any Condition, Anywhere in Texas
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="leading-relaxed mb-4">
              <strong className="text-foreground">Lone Star Cash Offer</strong> makes selling your house simple, fast, and stress-free. We're proud to be a trusted home buyer serving communities across Texas. Whether your property needs repairs, is inherited, or you're just ready for a change — we're here to help.
            </p>
            <p className="leading-relaxed">
              Since day one, we've focused on <strong className="text-foreground">real people, real solutions</strong>, and <strong className="text-foreground">real results</strong>. Our team lives and works right here in Texas, and we treat every homeowner with honesty and respect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5 diagonal-top texture-overlay">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16 text-center">
            Our Simple 3-Step Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="p-8 md:p-12 border-2">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="font-accent text-4xl text-primary-foreground">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl mb-4">Schedule a Free Consultation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We'll visit your property, answer your questions, and explain the process — no pressure, no obligation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-12 border-2">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="font-accent text-4xl text-accent-foreground">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl mb-4">Get a Fair Cash Offer</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    After a quick walkthrough, we'll make a straightforward cash offer. No repairs, no cleaning, no showings.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-12 border-2">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="font-accent text-4xl text-primary-foreground">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl mb-4">Close on Your Timeline</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We can close in as little as <strong>three weeks</strong>, or later if you need more time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                How We Make You a Fair Cash Offer
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To determine a fair offer for your property, we look at local market trends, recent neighborhood sales, and the unique features of your home.
                </p>
                <p>
                  After the walkthrough, we'll explain how our process works. There's <strong className="text-foreground">no pressure and no cost</strong> — you're free to accept, decline, or take time to think it over.
                </p>
              </div>
            </div>
            <img
              src="/images/how-we-make-offers.jpg"
              alt="How We Make Fair Cash Offers"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 diagonal-top texture-overlay">
        <div className="container max-w-4xl">
          <h2 className="font-display text-4xl text-foreground mb-12 text-center">
            What to Expect During Our Visit
          </h2>
          
          <Card className="p-8 md:p-12 border-2">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our no-pressure, no-obligation appointment usually takes about an hour. One of our local home-buying specialists will walk through your property, answer your questions, and explain exactly how our process works.
              </p>
              <p>
                <strong className="text-foreground">There's nothing you need to prepare before we arrive</strong> — no repairs, no cleaning, no touch-ups of any kind.
              </p>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">~1 Hour</h3>
              <p className="text-sm text-muted-foreground">Typical visit duration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">No Prep</h3>
              <p className="text-sm text-muted-foreground">Come as you are</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">No Obligation</h3>
              <p className="text-sm text-muted-foreground">Zero pressure to accept</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule your free consultation today. No obligation, no pressure.
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
