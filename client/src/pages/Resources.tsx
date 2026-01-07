/*
 * Resources Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home as HomeIcon, DollarSign, FileText, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 texture-overlay">
        <div className="container text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Helpful information for homeowners facing different selling situations
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg">Inherited House</h3>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg">Facing Foreclosure</h3>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg">Sell As-Is</h3>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg">Cash Buyers</h3>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="inherited" id="inherited" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h2 className="font-display text-2xl md:text-3xl">Selling an Inherited House</h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                  <p>
                    Inheriting a home can be a meaningful and emotional experience — but managing an inherited property can also feel overwhelming. The good news is that you can sell your inherited house quickly and stress-free with <strong className="text-foreground">Lone Star Cash Offer</strong>.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">Did You Recently Inherit a House?</h3>
                  <p>
                    Receiving a home from a loved one often comes with mixed emotions. While the property may hold sentimental value, it also brings new responsibilities, decisions, and sometimes unexpected challenges. You may be unsure whether to keep the home, rent it out, or sell it — especially if you live far away or don't have the time to manage it.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">What Are the Tax Implications?</h3>
                  <p>
                    In most cases, you won't owe taxes immediately when you inherit a home. Taxes typically come into play only when you decide to sell the property. When you sell an inherited house, you may owe capital gains tax, which is based on the stepped-up cost basis.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">Why Sell to Us?</h3>
                  <p>
                    Selling the home can relieve you of financial and emotional responsibilities. When you sell to <strong className="text-foreground">Lone Star Cash Offer</strong>, you can skip the repairs, cleaning, and uncertainty that come with traditional listings. We buy homes as-is and can close on your timeline.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="foreclosure" id="foreclosure" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h2 className="font-display text-2xl md:text-3xl">Facing Foreclosure</h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                  <p>
                    Facing foreclosure can be one of the most stressful experiences a homeowner can go through. The uncertainty, the pressure from lenders, and the fear of losing your home can feel overwhelming. But there is a way out — and it doesn't have to involve foreclosure.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">How We Can Help</h3>
                  <p>
                    <strong className="text-foreground">Lone Star Cash Offer</strong> specializes in helping homeowners avoid foreclosure by purchasing homes quickly for cash. We can often close in as little as three weeks, giving you the time you need to move forward without the foreclosure on your record.
                  </p>
                  <p>
                    When you sell to us, you can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Stop the foreclosure process</li>
                    <li>Avoid damage to your credit score</li>
                    <li>Get cash to start fresh</li>
                    <li>Close quickly on your timeline</li>
                  </ul>
                  <p className="pt-4">
                    Don't wait until it's too late. Contact us today for a free, no-obligation consultation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="as-is" id="as-is" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h2 className="font-display text-2xl md:text-3xl">Selling Your House As-Is</h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                  <p>
                    Selling a house "as-is" means you're selling it in its current condition — no repairs, no updates, no improvements. For many homeowners, this is the fastest and easiest way to sell, especially when the property needs work or when you don't have the time or money to invest in repairs.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">Why Sell As-Is?</h3>
                  <p>
                    There are many reasons homeowners choose to sell as-is:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The home needs major repairs you can't afford</li>
                    <li>You've inherited a property you don't want to manage</li>
                    <li>You're relocating and need to sell quickly</li>
                    <li>The property has unpermitted work or additions</li>
                    <li>You simply don't want the hassle of preparing a home for market</li>
                  </ul>
                  <h3 className="font-display text-xl text-foreground pt-4">A Faster, Easier Way to Sell</h3>
                  <p>
                    When you sell your house as-is to <strong className="text-foreground">Lone Star Cash Offer</strong>, you get:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A fair cash offer</li>
                    <li>No repairs or cleaning</li>
                    <li>No commissions or hidden fees</li>
                    <li>No waiting for bank approvals</li>
                    <li>A closing timeline that works for you</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cash-buyers" id="cash-buyers" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h2 className="font-display text-2xl md:text-3xl">Fast Cash Home Buyers</h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                  <p>
                    When we buy houses, we pay <strong className="text-foreground">cash</strong> — and that brings major benefits to homeowners who need a quick, reliable sale. The biggest advantage? <strong className="text-foreground">Speed</strong>. Cash sales don't require mortgage approvals, inspections, or long waiting periods.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">We Buy Houses As-Is</h3>
                  <p>
                    As cash home buyers, we help you save time, money, and energy. You won't need to repair anything, update or remodel, clean or declutter, stage the home, or deal with picky buyers.
                  </p>
                  <h3 className="font-display text-xl text-foreground pt-4">Cash Home Buyers You Can Trust</h3>
                  <p>
                    We're a team of professional home buyers who understand the urgency of selling quickly. That's why we offer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fast closings (as little as 21-30 days)</li>
                    <li>100% cash offers</li>
                    <li>Flexible timelines</li>
                    <li>No financing delays</li>
                  </ul>
                  <p className="pt-4">
                    We buy houses, condos, townhomes, duplexes, multi-family properties, and even some commercial buildings. Homeowners across Texas trust us because we make the process simple, honest, and fast.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're here to help. Contact us today for a free consultation and get answers to all your questions.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-medium text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
