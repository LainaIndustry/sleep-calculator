import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll get back to you within 48 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-night relative">
      <SEO
        title="Contact — Sleep Calculator"
        description="Questions, feedback, or corrections? Get in touch with the Sleep Calculator team. We read every message."
        path="/contact"
      />
      <StarBackground />
      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Get in <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Questions, feedback, or corrections on an article? We read every message.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", detail: "hello@sleepcalculator.app" },
                { icon: MessageCircle, title: "Response time", detail: "Within 48 hours" },
                { icon: MapPin, title: "Based in", detail: "Remote, worldwide" },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="bg-sleep-card border border-border rounded-xl p-6">
                  <Icon className="h-6 w-6 text-primary mb-3" />
                  <div className="text-sm text-muted-foreground">{title}</div>
                  <div className="text-foreground font-medium mt-1">{detail}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-2 bg-sleep-card border border-border rounded-2xl p-8 shadow-elegant space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-background/50 border-border"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-background/50 border-border"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-background/50 border-border"
                  placeholder="How can we help?"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
