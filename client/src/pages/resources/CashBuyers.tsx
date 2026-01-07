/*
 * Cash Buyers Resource Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Phone, ArrowLeft, Zap } from "lucide-react";
import { Link } from "wouter";

export default function CashBuyers() {
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
            Fast Cash Home Buyers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We buy houses for cash. No financing delays. No bank approvals. Just fast, reliable cash offers.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-card py-12">
        <div className="container">
          <img
            src="/images/cash-related.jpg"
            alt="Fast Cash Home Buyers"
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
                Why Choose Cash Home Buyers?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  When we buy houses, we pay <strong className="text-foreground">cash</strong> — and that brings major benefits to homeowners who need a quick, reliable sale. The biggest advantage? <strong className="text-foreground">Speed</strong>. Cash sales don't require mortgage approvals, inspections, or long waiting periods.
                </p>
                <p>
                  With us, you can close in as little as <strong className="text-foreground">21–30 days</strong>, without the stress of traditional financing delays.
                </p>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-display text-3xl text-foreground mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                The Cash Buyer Advantage
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display text-xl text-foreground mb-3">Fast Closings</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Close in as little as 21–30 days. No waiting for bank approvals or loan processing.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground mb-3">100% Cash Offers</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We pay cash, so there's no financing contingency or risk of the deal falling through.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground mb-3">Flexible Timelines</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Need to close in 3 weeks? Or prefer more time? We work with your schedule.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground mb-3">No Financing Delays</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional buyers often back out when financing falls through. We won't.
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                We Buy Houses As-Is
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As cash home buyers, we help you save time, money, and energy. You won't need to:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Repair anything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Update or remodel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Clean or declutter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Stage the home</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Deal with picky buyers</span>
                </li>
              </ul>
            </div>

            <Card className="p-8 md:p-12 border-2">
              <h3 className="font-display text-3xl text-foreground mb-6">
                Cash Home Buyers You Can Trust
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're a team of professional home buyers who understand the urgency of selling quickly. That's why we offer:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-2">Fast Closings</h4>
                    <p className="text-muted-foreground">Close in 21–30 days, not months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-2">100% Cash Offers</h4>
                    <p className="text-muted-foreground">No financing contingencies or surprises</p>
                  </div>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                What We Buy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We buy houses, condos, townhomes, duplexes, multi-family properties, and even some commercial buildings. Many buyers say "we buy houses," but not all of them buy with <strong className="text-foreground">cash</strong>. Cash buyers like us are often more reliable than buyers who depend on bank financing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Homeowners across Texas trust us because we make the process simple, honest, and fast.
              </p>
            </div>

            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-display text-3xl text-foreground mb-6">
                We Buy Homes in Any Condition
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">Outdated or damaged</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">Structurally or cosmetically "ugly"</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">Facing foreclosure</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">Inherited or probate</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">In need of major repairs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">Vacant or tenant-occupied</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-muted-foreground">Part of a divorce or relocation</span>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                How We Buy Houses for Cash
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-primary font-bold text-2xl flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-2">Contact Lone Star Cash Offer</h4>
                    <p className="text-muted-foreground">Call us or submit our quick online form with basic information about your home.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-bold text-2xl flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-2">Schedule a Visit</h4>
                    <p className="text-muted-foreground">A local specialist will reach out — often the same day — to schedule a walkthrough.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-bold text-2xl flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-2">Get a Fair Cash Offer</h4>
                    <p className="text-muted-foreground">We'll evaluate the property, explain the process, answer your questions, and give you a free, no-obligation cash offer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary font-bold text-2xl flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-2">Close Fast</h4>
                    <p className="text-muted-foreground">If you accept, we'll schedule a closing — often within 21–30 days — and pay you cash.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Get Cash for Your House
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            With years of experience buying homes for cash, Lone Star Cash Offer is ready to help you out of a tough situation fast.
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
