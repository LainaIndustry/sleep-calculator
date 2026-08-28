import { useEffect, useRef } from "react";

interface TimePickerProps {
  value: { hour: number; minute: number; period: "AM" | "PM" };
  onChange: (value: { hour: number; minute: number; period: "AM" | "PM" }) => void;
}

export const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const periods = ["AM", "PM"];

  const scrollToCenter = (ref: React.RefObject<HTMLDivElement>, index: number) => {
    if (ref.current) {
      const itemHeight = 40;
      ref.current.scrollTop = index * itemHeight - itemHeight;
    }
  };

  useEffect(() => {
    scrollToCenter(hourRef, value.hour - 1);
    scrollToCenter(minuteRef, value.minute);
    scrollToCenter(periodRef, value.period === "AM" ? 0 : 1);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center bg-sleep-card border border-border rounded-xl p-6">
      {/* Hours */}
      <div className="relative h-[120px] overflow-hidden">
        <div
          ref={hourRef}
          className="overflow-y-scroll scrollbar-hide h-full"
          onScroll={(e) => {
            const scrollTop = e.currentTarget.scrollTop;
            const itemHeight = 40;
            const index = Math.round(scrollTop / itemHeight);
            if (hours[index] !== value.hour) {
              onChange({ ...value, hour: hours[index] });
            }
          }}
        >
          <div className="h-[40px]" />
          {hours.map((hour) => (
            <div
              key={hour}
              className={`h-[40px] flex items-center justify-center text-2xl font-semibold transition-all cursor-pointer ${
                value.hour === hour ? "text-foreground scale-110" : "text-muted-foreground scale-90"
              }`}
              onClick={() => {
                onChange({ ...value, hour });
                scrollToCenter(hourRef, hour - 1);
              }}
            >
              {hour}
            </div>
          ))}
          <div className="h-[40px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-sleep-card to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-sleep-card to-transparent" />
          <div className="absolute top-[40px] left-0 right-0 h-[40px] border-y border-border/50" />
        </div>
      </div>

      <span className="text-2xl font-bold text-foreground">:</span>

      {/* Minutes */}
      <div className="relative h-[120px] overflow-hidden">
        <div
          ref={minuteRef}
          className="overflow-y-scroll scrollbar-hide h-full"
          onScroll={(e) => {
            const scrollTop = e.currentTarget.scrollTop;
            const itemHeight = 40;
            const index = Math.round(scrollTop / itemHeight);
            if (minutes[index] !== value.minute) {
              onChange({ ...value, minute: minutes[index] });
            }
          }}
        >
          <div className="h-[40px]" />
          {minutes.map((minute) => (
            <div
              key={minute}
              className={`h-[40px] flex items-center justify-center text-2xl font-semibold transition-all cursor-pointer ${
                value.minute === minute ? "text-foreground scale-110" : "text-muted-foreground scale-90"
              }`}
              onClick={() => {
                onChange({ ...value, minute });
                scrollToCenter(minuteRef, minute);
              }}
            >
              {minute.toString().padStart(2, "0")}
            </div>
          ))}
          <div className="h-[40px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-sleep-card to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-sleep-card to-transparent" />
          <div className="absolute top-[40px] left-0 right-0 h-[40px] border-y border-border/50" />
        </div>
      </div>

      {/* Period */}
      <div className="relative h-[120px] overflow-hidden">
        <div
          ref={periodRef}
          className="overflow-y-scroll scrollbar-hide h-full"
          onScroll={(e) => {
            const scrollTop = e.currentTarget.scrollTop;
            const itemHeight = 40;
            const index = Math.round(scrollTop / itemHeight);
            if (periods[index] !== value.period) {
              onChange({ ...value, period: periods[index] as "AM" | "PM" });
            }
          }}
        >
          <div className="h-[40px]" />
          {periods.map((period) => (
            <div
              key={period}
              className={`h-[40px] flex items-center justify-center text-2xl font-semibold transition-all cursor-pointer ${
                value.period === period ? "text-foreground scale-110" : "text-muted-foreground scale-90"
              }`}
              onClick={() => {
                onChange({ ...value, period: period as "AM" | "PM" });
                scrollToCenter(periodRef, period === "AM" ? 0 : 1);
              }}
            >
              {period}
            </div>
          ))}
          <div className="h-[40px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-sleep-card to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-sleep-card to-transparent" />
          <div className="absolute top-[40px] left-0 right-0 h-[40px] border-y border-border/50" />
        </div>
      </div>
    </div>
  );
};
