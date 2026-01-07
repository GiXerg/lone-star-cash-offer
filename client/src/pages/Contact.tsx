/*
 * Contact Page - Texas Modernism Design
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 texture-overlay">
        <div className="container text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready for your free consultation? Get in touch today and take the first step toward a stress-free home sale.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 md:p-10 border-2">
              <h2 className="font-display text-3xl mb-6">Get Your Free Cash Offer</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base mb-2 block">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                    placeholder="(469) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-base mb-2 block">Property Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="h-12"
                    placeholder="123 Main St, Dallas, TX 75201"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base mb-2 block">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your property and situation..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg">
                  Submit Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by Lone Star Cash Offer regarding your property.
                </p>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Your fast, hassle-free home sale starts right here. When you submit the form, one of our local property specialists will reach out to you directly.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Call Us Today</h3>
                      <a href="tel:+14697686613" className="text-lg text-primary hover:underline">
                        (469) 768-6613
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Saturday: 8am - 7pm
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Email Us</h3>
                      <a href="mailto:info@lonestarcashoffer.com" className="text-lg text-primary hover:underline break-all">
                        info@lonestarcashoffer.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Service Area</h3>
                      <p className="text-lg text-foreground">
                        Dallas & All of Texas
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We buy homes throughout the state
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Fast Response</h3>
                      <p className="text-lg text-foreground">
                        Same-Day Callbacks
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Most inquiries answered within hours
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground diagonal-top">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Prefer to Talk?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Give us a call right now. We're ready to answer your questions and provide a free, no-obligation consultation.
          </p>
          <a href="tel:+14697686613">
            <Button size="lg" variant="secondary" className="font-medium text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call (469) 768-6613
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
