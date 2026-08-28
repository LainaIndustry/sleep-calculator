import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface SleepResultsProps {
  times: string[];
  mode: "bedtime" | "wakeup";
  onBack: () => void;
}

export const SleepResults = ({ times, mode, onBack }: SleepResultsProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-sleep-card border border-border rounded-xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {mode === "bedtime" ? "Bedtime" : "Wake-up time"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {mode === "bedtime"
            ? "The average human takes 15 minutes to fall asleep."
            : "If you go to sleep right now, you should try to wake up at one of the following times:"}
        </p>
        <p className="text-foreground mb-6">
          {mode === "bedtime"
            ? "To wake up refreshed, you need to go to sleep at one of the following times:"
            : "If you wake up at one of these times, you'll rise in between 90-minute sleep cycles."}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {times.map((time, index) => (
            <div
              key={index}
              className="bg-background/50 border border-border rounded-lg p-4 text-center hover:bg-primary/10 transition-colors"
            >
              <div className="text-2xl font-bold text-foreground">{time}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {mode === "bedtime" ? `${6 - index} cycles` : `${index + 1} cycles`}
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 text-sm">
          A good night's sleep consists of 5-6 complete sleep cycles.
        </p>
      </div>
      <Button
        onClick={onBack}
        variant="outline"
        className="w-full bg-transparent border-border hover:bg-secondary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Go back
      </Button>
    </div>
  );
};
