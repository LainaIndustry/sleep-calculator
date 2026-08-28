import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-night-sky relative">
      <SEO
        title="Privacy Policy — Sleep Calculator"
        description="How Sleep Calculator collects, uses, and protects your personal information."
        path="/privacy-policy"
      />
      <StarBackground />
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/privacy">
            <Button variant="ghost" className="mb-6 text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Legal
            </Button>
          </Link>

          <div className="bg-sleep-card border border-border rounded-lg p-8 md:p-12">
            <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 15, 2024</p>

            <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
                <p>Sleep Calculator ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our sleep calculation tools.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <p>We collect minimal information necessary to provide our services:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Time preferences you input for sleep calculations (stored locally in your browser)</li>
                  <li>Basic usage analytics to improve our service</li>
                  <li>Browser type and device information for optimization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <p>The information we collect is used solely to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate sleep calculations</li>
                  <li>Improve and optimize our service</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Data Storage and Security</h2>
                <p>Your sleep time inputs are stored locally in your browser using localStorage. We do not store this information on our servers. We implement appropriate security measures to protect any data we do collect.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
                <p>We may use third-party analytics services to help us understand how our service is used. These services may collect information sent by your browser but are bound by their own privacy policies.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Clear your locally stored data at any time through your browser settings</li>
                  <li>Opt-out of analytics tracking</li>
                  <li>Request information about data we may have collected</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at privacy@sleepcalculator.com</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
