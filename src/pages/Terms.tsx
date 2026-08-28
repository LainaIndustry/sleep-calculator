import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-night-sky relative">
      <SEO
        title="Terms of Service — Sleep Calculator"
        description="Terms and conditions for using Sleep Calculator's free sleep tools and content."
        path="/terms"
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
            <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 15, 2024</p>

            <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
                <p>By accessing and using Sleep Calculator, you accept and agree to be bound by the terms and provisions of this agreement.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Use License</h2>
                <p>Permission is granted to temporarily use Sleep Calculator for personal, non-commercial purposes. This license shall automatically terminate if you violate any of these restrictions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Service Description</h2>
                <p>Sleep Calculator provides tools to calculate optimal sleep and wake times based on sleep cycle science. The service is provided "as is" without any warranties.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the service in compliance with all applicable laws</li>
                  <li>Not attempt to interfere with the service's proper functioning</li>
                  <li>Not use the service for any unlawful purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitations</h2>
                <p>Sleep Calculator shall not be liable for any damages arising out of the use or inability to use our service, even if we have been notified of the possibility of such damages.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Modifications</h2>
                <p>We reserve the right to revise these terms at any time without notice. By using this service, you agree to be bound by the current version of these terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
