import { useEffect, useRef } from "react";

// Replace these once your AdSense account is approved.
export const ADSENSE_CLIENT = "ca-pub-0000000000000000";

type AdSlotProps = {
  slot: string;
  format?: string;
  layout?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Google AdSense ad unit.
 *
 * Setup:
 *  1. Replace ADSENSE_CLIENT above with your real publisher ID (ca-pub-...).
 *  2. Update the AdSense <script> src in index.html with the same ID.
 *  3. Update public/ads.txt with your publisher ID.
 *  4. Create ad units in the AdSense dashboard and pass their slot IDs to this component.
 */
export const AdSlot = ({
  slot,
  format = "auto",
  layout,
  responsive = true,
  className = "",
  style,
}: AdSlotProps) => {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // @ts-expect-error injected by AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* AdSense not loaded yet — will retry on next mount */
    }
  }, []);

  return (
    <div className={`ad-container my-8 flex justify-center ${className}`}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 100, ...style }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};
