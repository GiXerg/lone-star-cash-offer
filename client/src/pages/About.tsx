/*
 * About Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Home as HomeIcon, Phone, Users } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 texture-overlay">
        <div className="container text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a local home-buying team dedicated to making the selling process simple, transparent, and stress-free.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Who We Are
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We're a local home-buying team dedicated to making the selling process simple, transparent, and stress-free. Our mission is to give homeowners a faster, easier alternative to the traditional real estate market — one that doesn't involve months of waiting, costly repairs, or the uncertainty of dealing with agents and buyers who may back out at the last minute.
            </p>
            <p>
              Traditional real estate can be slow, unpredictable, and overwhelming, especially when a property needs work or when life circumstances require a quick solution. Maybe you're facing a job relocation, dealing with an inherited home, navigating financial challenges, or simply ready to move on without the hassle. Whatever your situation, we're here to help.
            </p>
            <p>
              Our team lives and works in the same communities we serve, which means we understand local market conditions, neighborhood trends, and the unique challenges homeowners face. We take pride in offering honest guidance, fair cash offers, and a process designed around your needs — not ours.
            </p>
            <p>
              From the first conversation to the closing table, we're committed to treating you with respect, clarity, and care. When you work with us, you're not just selling a house — you're partnering with a team that genuinely wants to make your next step easier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5 diagonal-top texture-overlay">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Honesty</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparent communication and fair offers based on real market value.
              </p>
            </Card>
            <Card className="p-8 text-center border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Respect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every homeowner deserves to be treated with dignity and understanding throughout the process.
              </p>
            </Card>
            <Card className="p-8 text-center border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                When we make a commitment, we follow through. No last-minute surprises or backing out.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/about-us-team.jpg"
              alt="How We Do Things Differently"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                How We Do Things Differently
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At <strong className="text-foreground">Lone Star Cash Offer</strong>, we specialize in buying houses quickly for cash, without the stress or uncertainty of the traditional real estate process. We meet with homeowners face-to-face because we believe you deserve a real person who can walk you through every step with honesty and clarity.
                </p>
                <p>
                  We understand that every property — and every situation — is unique. Whether your home needs a little TLC or a full renovation, we're not bothered by repairs, clutter, or years of deferred maintenance. We buy homes <strong className="text-foreground">as-is</strong>.
                </p>
                <p>
                  We're proud to be part of the communities we serve. Our team is committed to giving back, supporting local neighborhoods, and helping improve the places we call home. For us, it's not just about buying houses — it's about building trust and making a positive impact across Texas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Our Mission
          </h2>
          <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            To provide homeowners with a reliable, stress-free alternative to traditional selling — one that puts your needs, timeline, and peace of mind first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-medium text-lg px-8">
                Work With Us
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
