import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Moon, Coffee, Clock, Brain, Sun, Battery } from "lucide-react";

const tools = [
  {
    id: "sleep-calculator",
    title: "Sleep Cycle Calculator",
    description: "Calculate optimal bedtime and wake-up times based on 90-minute sleep cycles",
    icon: Moon,
    link: "/",
  },
  {
    id: "nap-calculator",
    title: "Power Nap Calculator",
    description: "Find the perfect nap duration to boost energy without grogginess",
    icon: Coffee,
    link: "/tools/nap-calculator",
  },
  {
    id: "sleep-debt",
    title: "Sleep Debt Calculator",
    description: "Track accumulated sleep deficit and create a recovery plan",
    icon: Clock,
    link: "/tools/sleep-debt",
  },
  {
    id: "chronotype",
    title: "Chronotype Quiz",
    description: "Discover if you're a morning lark or night owl and optimize your schedule",
    icon: Sun,
    link: "/tools/chronotype",
  },
  {
    id: "sleep-efficiency",
    title: "Sleep Efficiency Tracker",
    description: "Calculate how efficiently you're sleeping each night",
    icon: Brain,
    link: "/tools/sleep-efficiency",
  },
  {
    id: "caffeine-calculator",
    title: "Caffeine Cutoff Calculator",
    description: "Find out when to stop consuming caffeine for better sleep",
    icon: Battery,
    link: "/tools/caffeine-calculator",
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-night-sky relative">
      <SEO
        title="Free Sleep Tools — Nap, Chronotype & Caffeine Calculators"
        description="Free sleep tools: nap calculator, sleep debt tracker, chronotype quiz, caffeine cutoff, and more to optimize your rest."
        path="/tools"
      />
      <StarBackground />
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sleep <span className="text-primary">Tools</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Free tools to optimize your sleep and improve your rest quality
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.id} to={tool.link}>
                <Card className="bg-sleep-card border-border hover:border-primary transition-all duration-300 p-6 h-full hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {tool.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
