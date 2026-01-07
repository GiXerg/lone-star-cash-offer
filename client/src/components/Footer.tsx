/*
 * Footer Component - Texas Modernism Design
 * - Warm, welcoming footer with essential links and contact info
 */

import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo1.jpg"
                alt="Lone Star Cash Offer Logo"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-display text-lg leading-tight">Lone Star</span>
                <span className="text-xs text-background/70 font-medium">Cash Offer</span>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Fast, fair cash offers for Texas homes. No repairs, no hassle, no hidden fees.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">How It Works</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">Resources</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources#inherited">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">Inherited House</a>
                </Link>
              </li>
              <li>
                <Link href="/resources#foreclosure">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">Facing Foreclosure</a>
                </Link>
              </li>
              <li>
                <Link href="/resources#as-is">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">Sell As-Is</a>
                </Link>
              </li>
              <li>
                <Link href="/resources#cash-buyers">
                  <a className="text-sm text-background/70 hover:text-primary transition-colors">Cash Home Buyers</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14697686613" className="flex items-start gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>(469) 768-6613</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@lonestarcashoffer.com" className="flex items-start gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@lonestarcashoffer.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Serving Dallas & All of Texas</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {currentYear} Lone Star Cash Offer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
