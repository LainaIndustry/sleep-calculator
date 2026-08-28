import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-night relative">
      <SEO
        title="About Sleep Calculator — Our Mission & Editorial Standards"
        description="Sleep Calculator makes the science of sleep accessible with free tools and research-backed guides. Meet the team behind the site."
        path="/about"
      />
      <StarBackground />
      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary italic">Sleep Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We built this site because a good night's sleep changed our lives, and we want to help you find yours.
            </p>
          </header>

          <div className="bg-sleep-card/80 backdrop-blur border border-border rounded-2xl p-8 md:p-12 shadow-elegant mb-10">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
              <h2>Our Mission</h2>
              <p>
                Sleep Calculator was created to make the science of sleep accessible to everyone. Millions of people
                wake up tired every day, not because they slept too little, but because they woke up in the middle of
                a sleep cycle. Our free tools use the 90-minute sleep cycle model to help you plan bedtimes and
                wake-up times that leave you refreshed.
              </p>

              <h2>Who We Are</h2>
              <p>
                We are a small team of writers, designers, and wellness enthusiasts who believe sleep is the most
                undervalued pillar of health. We spend our days reading sleep research, testing tools, and turning
                dense studies into practical guidance you can actually use tonight.
              </p>

              <h2>Our Editorial Standards</h2>
              <p>
                Every article on this site is written from primary sources — peer-reviewed sleep research, guidance
                from organizations like the National Sleep Foundation and the American Academy of Sleep Medicine, and
                lived experience. We do not publish AI-generated filler, we cite our reasoning, and we update posts
                when the science evolves.
              </p>

              <h2>Free, Forever</h2>
              <p>
                Our calculators and articles are and will remain free. We may display ads to keep the lights on, but
                we will never sell your data, gate content behind a paywall, or push products we do not believe in.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Monthly readers", value: "120k+" },
              { icon: BookOpen, label: "In-depth articles", value: "25+" },
              { icon: Award, label: "Years of research", value: "6" },
              { icon: Heart, label: "Reader rating", value: "4.9/5" },
            ].map(({ icon: Icon, label, value }) => (
              <Card key={label} className="bg-sleep-card border-border p-6 text-center">
                <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-2xl font-serif font-bold text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
