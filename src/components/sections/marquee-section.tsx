export function MarqueeSection() {
  const items = [
    "Full-stack engineering",
    "AI agent deployment",
    "Security automation",
    "Conversational AI",
    "Cloud architecture",
    "Tech leadership",
  ];

  return (
    <div className="marquee reveal">
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {i > 0 && i % 1 === 0 && <span className="dot" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
