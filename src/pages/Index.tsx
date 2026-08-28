import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TimePicker } from "@/components/TimePicker";
import { SleepResults } from "@/components/SleepResults";
import { MoonIcon } from "@/components/MoonIcon";
import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Moon, Brain, Heart, Zap, Clock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AdSlot } from "@/components/AdSlot";
import { SEO } from "@/components/SEO";

const Index = () => {
  const [wakeTime, setWakeTime] = useState({ hour: 6, minute: 30, period: "AM" as "AM" | "PM" });
  const [showResults, setShowResults] = useState(false);
  const [mode, setMode] = useState<"bedtime" | "wakeup">("bedtime");
  const [sleepTimes, setSleepTimes] = useState<string[]>([]);

  const calculateSleepCycles = (
    targetTime: { hour: number; minute: number; period: "AM" | "PM" },
    reverse = false,
  ) => {
    let targetHour = targetTime.hour;
    if (targetTime.period === "PM" && targetTime.hour !== 12) targetHour += 12;
    else if (targetTime.period === "AM" && targetTime.hour === 12) targetHour = 0;

    const targetMinutes = targetHour * 60 + targetTime.minute;
    const cycles = reverse ? [1, 2, 3, 4, 5, 6] : [6, 5, 4, 3, 2, 1];
    const fallAsleepTime = 15;
    const cycleLength = 90;

    return cycles.map((cycle) => {
      let sleepMinutes = reverse
        ? targetMinutes + cycle * cycleLength + fallAsleepTime
        : targetMinutes - cycle * cycleLength - fallAsleepTime;
      while (sleepMinutes < 0) sleepMinutes += 24 * 60;
      while (sleepMinutes >= 24 * 60) sleepMinutes -= 24 * 60;
      const hours = Math.floor(sleepMinutes / 60);
      const minutes = sleepMinutes % 60;
      const period = hours >= 12 ? "PM" : "AM";
      const displayHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
      return `${displayHour}:${minutes.toString().padStart(2, "0")} ${period}`;
    });
  };

  const handleCalculateBedtime = () => {
    setSleepTimes(calculateSleepCycles(wakeTime, false));
    setMode("bedtime");
    setShowResults(true);
  };

  const handleCalculateWakeup = () => {
    const now = new Date();
    const currentTime = {
      hour: now.getHours() > 12 ? now.getHours() - 12 : now.getHours() === 0 ? 12 : now.getHours(),
      minute: now.getMinutes(),
      period: (now.getHours() >= 12 ? "PM" : "AM") as "AM" | "PM",
    };
    setSleepTimes(calculateSleepCycles(currentTime, true));
    setMode("wakeup");
    setShowResults(true);
  };

  const benefits = [
    { icon: Brain, title: "Sharper focus", body: "Waking at the end of a cycle skips the grogginess and gives you a clearer morning brain." },
    { icon: Heart, title: "Better mood", body: "Consistent, complete sleep cycles are linked to lower stress and more emotional stability." },
    { icon: Zap, title: "More energy", body: "Aligning bedtime with your natural rhythm means less caffeine, more real energy." },
    { icon: Shield, title: "Long-term health", body: "Quality sleep supports immunity, metabolism, and cardiovascular health for years to come." },
  ];

  const faqs = [
    { q: "How accurate is the sleep calculator?", a: "Very accurate for typical adult sleepers. It uses the well-established 90-minute sleep cycle model and adds 15 minutes for the average time it takes to fall asleep. Individual cycles can vary from 70 to 120 minutes, so use it as a strong starting point rather than a stopwatch." },
    { q: "Why does the calculator show six different times?", a: "Each time represents the end of a complete sleep cycle. More cycles means more rest — six cycles is nine hours, four is six hours. Pick the time that fits your schedule and how tired you are." },
    { q: "Is waking mid-cycle really that bad?", a: "It is not dangerous, but it is why alarms feel so brutal some mornings. Waking during deep sleep triggers sleep inertia — heavy grogginess that can last 30 minutes. Waking at the end of a cycle sidesteps that entirely." },
    { q: "How many sleep cycles do I need?", a: "Most adults do best with five or six complete cycles (7.5 to 9 hours). Four cycles (6 hours) is a survival minimum, not a target. Teenagers and children need more." },
    { q: "Does this work for shift workers?", a: "The cycle math is the same, but shift work fights your circadian rhythm in ways no calculator can fix. See our guide on sleep for night-shift workers for a full strategy." },
  ];

  return (
    <div className="min-h-screen bg-gradient-night relative overflow-hidden">
      <SEO
        title="Sleep Calculator — Best Bedtime & Wake Up Time"
        description="Free sleep calculator using 90-minute cycles. Find the ideal bedtime or wake-up time and wake up refreshed, not groggy."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <StarBackground />
      <Navigation />

      <main className="relative z-10">

        {/* HERO */}
        <section className="container mx-auto px-4 pt-16 pb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MoonIcon />
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Sleep, made simple</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-[1.05] text-balance">
              Wake up <span className="italic text-primary">refreshed</span>,<br /> not wrecked.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A free sleep calculator built on the science of 90-minute sleep cycles. Find the bedtime — or wake-up time — that leaves you actually rested.
            </p>
          </div>

          {!showResults ? (
            <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-sleep-card/70 backdrop-blur border border-border rounded-2xl p-6 md:p-8 shadow-elegant">
                <h2 className="text-lg text-center text-foreground mb-6 font-medium">
                  What time do you want to wake up?
                </h2>
                <TimePicker value={wakeTime} onChange={setWakeTime} />
              </div>

              <Button
                onClick={handleCalculateBedtime}
                className="w-full bg-gradient-accent text-primary-foreground hover:opacity-90 text-lg py-7 rounded-2xl font-semibold shadow-glow"
              >
                Calculate my bedtime
                <Moon className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-center pt-2">
                <p className="text-muted-foreground text-sm mb-3">Or, if you want to go to bed right now…</p>
                <Button
                  onClick={handleCalculateWakeup}
                  variant="outline"
                  className="bg-transparent border-border hover:bg-secondary text-foreground font-medium py-5 px-8 rounded-xl"
                >
                  Calculate wake-up time
                </Button>
              </div>
            </div>
          ) : (
            <SleepResults times={sleepTimes} mode={mode} onBack={() => setShowResults(false)} />
          )}
        </section>

        {/* AD — after hero */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AdSlot slot="1111111111" />
          </div>
        </section>

        {/* BENEFITS */}
        <section className="container mx-auto px-4 py-20 border-t border-border/40">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why it matters</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 text-balance">
              A better night rewrites the next day
            </h2>
            <p className="text-muted-foreground text-lg">
              Aligning your sleep to your body's natural rhythm changes almost everything about how you feel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {benefits.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="bg-sleep-card border-border p-7 hover:border-primary/50 transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* SCIENCE */}
        <section className="container mx-auto px-4 py-20 border-t border-border/40">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The science</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Sleep runs in 90-minute waves
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Every night, your brain moves through four distinct stages of sleep — light, deeper light, deep, and REM. One full loop takes about 90 minutes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wake up at the end of a loop and you feel clear. Wake up in the middle and you feel like you were hit by a truck. This calculator simply lines your alarm up with the end of a cycle.
              </p>
              <Link to="/blog/1">
                <Button variant="outline" className="border-border">
                  Read the full explainer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { stage: "Stage 1", label: "Light sleep", desc: "Drifting off, easily woken" },
                { stage: "Stage 2", label: "Light sleep", desc: "Memory consolidation begins" },
                { stage: "Stage 3", label: "Deep sleep", desc: "Physical repair, immune work" },
                { stage: "REM", label: "Dream sleep", desc: "Emotional and cognitive processing" },
              ].map((s, i) => (
                <div key={s.stage} className="flex gap-4 items-start bg-sleep-card border border-border rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-serif font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary">{s.stage}</div>
                    <div className="font-serif font-semibold text-foreground">{s.label}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AD — between science and FAQ */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <AdSlot slot="2222222222" />
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-20 border-t border-border/40">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Common questions</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
                Answered honestly
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-sleep-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-foreground font-serif font-semibold text-lg hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto bg-gradient-accent rounded-3xl p-10 md:p-16 text-center shadow-glow">
            <Clock className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4 text-balance">
              Explore more sleep tools
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Power nap calculator, chronotype quiz, caffeine cutoff, and more — all free.
            </p>
            <Link to="/tools">
              <Button size="lg" className="bg-night-sky text-foreground hover:bg-night-sky-deep px-8">
                Browse all tools <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
