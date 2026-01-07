/*
 * Inherited House Resource Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home as HomeIcon, Phone, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function InheritedHouse() {
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
            Selling an Inherited House
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Inheriting a home can be emotional and overwhelming. We help make the selling process simple and stress-free.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-card py-12">
        <div className="container">
          <img
            src="/images/inheritance-related.jpg"
            alt="Selling an Inherited House"
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
                Did You Recently Inherit a House?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Receiving a home from a loved one often comes with mixed emotions. While the property may hold sentimental value, it also brings new responsibilities, decisions, and sometimes unexpected challenges. You may be unsure whether to keep the home, rent it out, or sell it — especially if you live far away or don't have the time to manage it.
                </p>
                <p>
                  Many people who inherit a house aren't sure what steps to take next. Understanding your options — including taxes, selling methods, and the condition of the property — can help you make the best decision for your situation. If selling feels like the right choice, <strong className="text-foreground">Lone Star Cash Offer</strong> is here to make the process simple.
                </p>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-display text-3xl text-foreground mb-6">
                What Are the Tax Implications of Inheriting a House?
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In most cases, you won't owe taxes immediately when you inherit a home. Taxes typically come into play only when you decide to sell the property.
                </p>
                <p>
                  When you sell an inherited house, you may owe <strong className="text-foreground">capital gains tax</strong>, which is based on something called the <strong className="text-foreground">stepped-up cost basis</strong>. This means the value of the home is "reset" to its fair market value at the time you inherited it — so you only pay tax on the increase in value <em>after</em> you received it.
                </p>
                <p>
                  Depending on your state, you may also need to consider inheritance tax. Only a handful of states impose this tax, and the rules vary, so it's helpful to understand your local requirements before selling.
                </p>
              </div>
            </Card>

            <div>
              <h3 className="font-display text-3xl text-foreground mb-6">
                What If You Want to Sell the Property?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                If keeping the inherited home isn't the right choice, selling can be a smart and practical option — especially if:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You live out of state</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>The home needs repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You don't want to manage tenants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You're sharing the property with siblings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You want to avoid ongoing taxes, utilities, and maintenance</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Selling the home can relieve you of financial and emotional responsibilities. And when you sell to <strong className="text-foreground">Lone Star Cash Offer</strong>, you can skip the repairs, cleaning, and uncertainty that come with traditional listings.
              </p>
            </div>

            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-accent/5 to-primary/5">
              <h3 className="font-display text-3xl text-foreground mb-6">
                Why Choose Lone Star Cash Offer?
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We understand that inheriting a property comes with unique challenges. We buy inherited homes quickly for cash, allowing you to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Avoid the hassle of repairs and cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Close quickly on your timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Get a fair cash offer with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Resolve shared ownership issues with siblings</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to Sell Your Inherited House?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us help you move forward. Get a free, no-obligation cash offer today.
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
