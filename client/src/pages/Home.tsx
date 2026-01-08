/*
 * Home Page - Texas Modernism Design
 * - Bold hero with diagonal sections
 * - 3-step process with large numbers
 * - Warm, confident presentation
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 texture-overlay">
        <div className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-medium text-sm">Cash Offers. Zero Hassle.</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
                A Faster, Easier Way to Sell Your Home
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Skip repairs, cleaning, showings, and long waiting periods. We buy houses <strong>as-is</strong>, for cash, on your timeline. No commission. No hidden fees. No surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8">
                    Get Your Cash Offer
                  </Button>
                </Link>
                <a href="tel:+14697686613">
                  <Button size="lg" variant="outline" className="font-medium text-lg px-8 border-2">
                    <Phone className="w-5 h-5 mr-2" />
                    (469) 768-6613
                  </Button>
                </a>
              </div>
            </div>
            <img
              src="/images/home-hero.jpg"
              alt="Lone Star Cash Offer - We Buy Houses for Cash"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Fair Cash Offers</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide transparent, competitive cash offers based on your property's true value and market conditions.
              </p>
            </Card>
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Close on Your Timeline</h3>
              <p className="text-muted-foreground leading-relaxed">
                Need to close in 3 weeks? Or prefer more time? You choose the closing date that works best for you.
              </p>
            </Card>
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">No Repairs Needed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sell your house exactly as it is. No cleaning, no repairs, no staging. We handle everything.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5 diagonal-top texture-overlay">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Our Proven 3-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From first contact to closing, we make selling your home simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-2xl mb-6 shadow-lg">
                  <span className="font-accent text-5xl text-primary-foreground">1</span>
                </div>
                <h3 className="font-display text-2xl mb-4">Schedule a Free Consultation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll start with a no-pressure, no-obligation visit to learn about your property and answer your questions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent rounded-2xl mb-6 shadow-lg">
                  <span className="font-accent text-5xl text-accent-foreground">2</span>
                </div>
                <h3 className="font-display text-2xl mb-4">Receive a Fair Cash Offer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After a quick walkthrough, we'll present a straightforward cash offer — no repairs, no staging, no waiting.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-2xl mb-6 shadow-lg">
                  <span className="font-accent text-5xl text-primary-foreground">3</span>
                </div>
                <h3 className="font-display text-2xl mb-4">Close on Your Timeline</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We can close in as little as <strong>three weeks</strong>, or later if you need more time. You choose what works best.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="font-medium text-lg px-8 border-2">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Why Homeowners Trust Us
              </h2>
              <div className="space-y-4">
                {[
                  "No commissions or agent fees",
                  "No repairs or cleaning required",
                  "No hidden charges or last-minute surprises",
                  "We cover typical closing costs",
                  "Flexible closing dates — fast or on your schedule"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                We believe in honesty, communication, and treating every homeowner with respect. From the first conversation to the closing table, our team walks with you through every step.
              </p>
            </div>
            <img
              src="/images/trust-us.jpg"
              alt="Lone Star Cash Offer - We Buy Houses for Cash"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Sell Your House the Easy Way?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get your fair cash offer today. No obligation, no pressure — just honest answers and a simple path forward.
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
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
