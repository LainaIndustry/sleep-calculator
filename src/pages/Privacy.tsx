import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-night-sky relative">
      <SEO
        title="Legal Information — Sleep Calculator"
        description="Privacy Policy, Terms, Disclaimer, and Cookie Policy for Sleep Calculator."
        path="/privacy"
      />
      <StarBackground />
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Legal Information</h1>
          
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Link to="/privacy-policy">
              <Card className="bg-sleep-card border-border hover:border-primary transition-all p-6 h-full">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Privacy Policy</h2>
                <p className="text-muted-foreground">Learn how we collect, use, and protect your personal information</p>
              </Card>
            </Link>
            
            <Link to="/terms">
              <Card className="bg-sleep-card border-border hover:border-primary transition-all p-6 h-full">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Terms of Service</h2>
                <p className="text-muted-foreground">Our terms and conditions for using the Sleep Calculator</p>
              </Card>
            </Link>
            
            <Link to="/disclaimer">
              <Card className="bg-sleep-card border-border hover:border-primary transition-all p-6 h-full">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Disclaimer</h2>
                <p className="text-muted-foreground">Important information about our service limitations</p>
              </Card>
            </Link>
            
            <Link to="/cookie-policy">
              <Card className="bg-sleep-card border-border hover:border-primary transition-all p-6 h-full">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Cookie Policy</h2>
                <p className="text-muted-foreground">How we use cookies to improve your experience</p>
              </Card>
            </Link>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default Privacy;
