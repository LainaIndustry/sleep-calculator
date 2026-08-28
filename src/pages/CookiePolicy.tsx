import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-night-sky relative">
      <SEO
        title="Cookie Policy — Sleep Calculator"
        description="How Sleep Calculator uses cookies and similar technologies to improve your experience."
        path="/cookie-policy"
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
            <h1 className="text-3xl font-bold text-foreground mb-6">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 15, 2024</p>

            <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">What Are Cookies</h2>
                <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Cookies</h2>
                <p>Sleep Calculator uses cookies and similar technologies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly, including storing your sleep time preferences locally</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Session Cookies</h3>
                    <p>Temporary cookies that expire when you close your browser. These help maintain your session while using our calculator.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Persistent Cookies</h3>
                    <p>Remain on your device for a set period. These remember your preferences for future visits.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Local Storage</h3>
                    <p>We use browser local storage to save your sleep time inputs and preferences. This data never leaves your device.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Cookies</h2>
                <p>We may use third-party services like Google Analytics that set their own cookies to help us analyze website traffic and improve our service. These third parties have their own privacy policies.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h2>
                <p>You can control and manage cookies in various ways:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Most browsers allow you to refuse or accept cookies</li>
                  <li>You can delete cookies already stored on your device</li>
                  <li>You can set your browser to notify you when cookies are being sent</li>
                </ul>
                <p className="mt-3">Note that disabling cookies may affect the functionality of our service.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h2>
                <p>To manage cookies in your browser:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Updates to This Policy</h2>
                <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
                <p>If you have questions about our use of cookies, please contact us at privacy@sleepcalculator.com</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
