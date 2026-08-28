import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-night-sky relative">
      <SEO
        title="Disclaimer — Sleep Calculator"
        description="Sleep Calculator is an educational tool and not a substitute for professional medical advice."
        path="/disclaimer"
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
            <h1 className="text-3xl font-bold text-foreground mb-6">Disclaimer</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 15, 2024</p>

            <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Medical Disclaimer</h2>
                <p className="text-foreground font-semibold">Sleep Calculator is not a medical device and should not be used as a substitute for professional medical advice, diagnosis, or treatment.</p>
                <p>The calculations and recommendations provided by our service are based on general sleep science principles and may not be suitable for everyone. Individual sleep needs vary significantly based on age, health conditions, lifestyle, and other factors.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">No Professional Advice</h2>
                <p>The information provided through Sleep Calculator is for educational and informational purposes only. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding sleep disorders or medical conditions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Accuracy of Information</h2>
                <p>While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the sleep calculations or content provided.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Individual Results May Vary</h2>
                <p>Sleep patterns are highly individual. The optimal sleep schedule suggested by our calculator may not work for everyone. Factors such as:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Age and developmental stage</li>
                  <li>Physical and mental health conditions</li>
                  <li>Medications and substances</li>
                  <li>Work schedules and lifestyle</li>
                  <li>Environmental factors</li>
                </ul>
                <p>can significantly impact your actual sleep needs and patterns.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">When to Seek Help</h2>
                <p>If you experience persistent sleep problems, excessive daytime sleepiness, loud snoring, breathing pauses during sleep, or other concerning symptoms, consult a healthcare professional or sleep specialist immediately.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p>Sleep Calculator and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this service or reliance on the information provided.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
