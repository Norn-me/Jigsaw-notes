import React from "react";

/** Carousel — horizontal slide viewer with arrows and dot indicators. slides=[ReactNode]. */
export function Carousel({
  slides = [], defaultIndex = 0, autoPlay = false, interval = 4000,
  showArrows = true, showIndicators = true, radius = "lg", className = "", style = {},
}) {
  const [idx, setIdx] = React.useState(defaultIndex);
  const n = slides.length;
  const go = (i) => setIdx((i + n) % n);
  React.useEffect(() => {
    if (!autoPlay || n < 2) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % n), interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, n]);
  const rad = { none: "0", sm: "var(--radius-small)", md: "var(--radius-medium)", lg: "var(--radius-large)" }[radius];

  const Arrow = ({ dir, children }) => (
    <button onClick={() => go(idx + dir)} style={{
      position: "absolute", top: "50%", [dir < 0 ? "left" : "right"]: 10, transform: "translateY(-50%)",
      width: 36, height: 36, borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 3,
      background: "color-mix(in srgb, var(--color-content1) 80%, transparent)", backdropFilter: "blur(6px)",
      color: "var(--color-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center",
      boxShadow: "var(--shadow-medium)",
    }}>{children}</button>
  );

  return (
    <div className={`jn-carousel ${className}`} style={{ position: "relative", overflow: "hidden", borderRadius: rad, ...style }}>
      <div style={{ display: "flex", transform: `translateX(-${idx * 100}%)`, transition: "transform var(--dur-slow) var(--ease-out)" }}>
        {slides.map((s, i) => <div key={i} style={{ flex: "0 0 100%", minWidth: 0 }}>{s}</div>)}
      </div>
      {showArrows && n > 1 && (<>
        <Arrow dir={-1}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg></Arrow>
        <Arrow dir={1}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></Arrow>
      </>)}
      {showIndicators && n > 1 && (
        <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 3 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{ width: i === idx ? 22 : 8, height: 8, borderRadius: "var(--radius-full)", border: "none", cursor: "pointer",
              background: i === idx ? "var(--color-primary)" : "color-mix(in srgb, var(--color-foreground) 40%, transparent)", transition: "width var(--dur-base)" }} />
          ))}
        </div>
      )}
    </div>
  );
}
