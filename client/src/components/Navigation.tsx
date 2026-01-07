/*
 * Navigation Component - Texas Modernism Design
 * - Clean, confident navigation with warm color accents
 * - Mobile-responsive with smooth transitions
 */

import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const resourceLinks = [
    { href: "/resources/inherited", label: "Selling an Inherited House" },
    { href: "/resources/foreclosure", label: "Facing Foreclosure" },
    { href: "/resources/as-is", label: "Selling Your House As-Is" },
    { href: "/resources/cash-buyers", label: "Fast Cash Home Buyers" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <img
                src="/images/logo1.jpg"
                alt="Lone Star Cash Offer Logo"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-display text-lg leading-tight text-foreground">Lone Star</span>
                <span className="text-xs text-muted-foreground font-medium">Cash Offer</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium transition-colors hover:text-primary text-foreground flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {resourceLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+14697686613" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(469) 768-6613</span>
            </a>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Get Cash Offer
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              
              {/* Mobile Resources Dropdown */}
              <div>
                <button 
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors w-full"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {resourceLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <a
                          onClick={() => {
                            setIsOpen(false);
                            setResourcesOpen(false);
                          }}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="tel:+14697686613" className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(469) 768-6613</span>
              </a>
              <Link href="/contact">
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Get Cash Offer
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
