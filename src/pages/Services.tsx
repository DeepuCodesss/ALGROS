import { useState } from "react";
import { Link } from "react-router";
import { useReveal, whatsappUrl } from "../shared";

const serviceCards = [
  {
    num: "01", title: "Brand & Identity",
    accent: "#FF7A5A", glow: "rgba(255,122,90,0.18)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    desc: "Visual identities that communicate authority — logos, colour systems, typography and brand languages built to last a decade.",
    tags: ["Logo Design", "Brand System", "Typography", "Colour Strategy"],
    stat: "120+ brands built",
  },
  {
    num: "02", title: "Premium Web Design",
    accent: "#00CFCF", glow: "rgba(0,207,207,0.15)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    desc: "High-conversion, visually arresting websites engineered for businesses and startups that refuse to blend in.",
    tags: ["Landing Pages", "Multi-page Sites", "SaaS Websites", "eCommerce"],
    stat: "94% client satisfaction",
  },
  {
    num: "03", title: "Web Development",
    accent: "#A8FF78", glow: "rgba(168,255,120,0.15)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    desc: "Performant, scalable builds with pixel-perfect execution. Clean code, fast load times, cross-device tested before handover.",
    tags: ["React / Next.js", "CMS Integration", "API & Backend", "Performance"],
    stat: "100% on-time delivery",
  },
  {
    num: "04", title: "UX Strategy",
    accent: "#FF6FD8", glow: "rgba(255,111,216,0.15)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    desc: "User experience architecture that reduces friction, builds trust, and turns visitors into loyal customers.",
    tags: ["User Research", "Information Architecture", "Wireframing", "Testing"],
    stat: "3× avg. conversion lift",
  },
  {
    num: "05", title: "Motion & Interaction",
    accent: "#c9a96e", glow: "rgba(201,169,110,0.18)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    desc: "Purposeful animation and micro-interactions that elevate the experience from functional to genuinely unforgettable.",
    tags: ["Micro-animations", "Page Transitions", "Scroll Effects", "Lottie / SVG"],
    stat: "48h preview turnaround",
  },
];

const process = [
  { num: "01", title: "Discovery",  color: "#FF7A5A", desc: "Deep dive into your business, goals and competition. Strategy before design — always." },
  { num: "02", title: "Strategy",   color: "#00CFCF", desc: "Map out architecture, user journeys and conversion goals before a pixel is placed." },
  { num: "03", title: "Design",     color: "#A8FF78", desc: "High-fidelity designs crafted in precise detail — every state and interaction considered." },
  { num: "04", title: "Build",      color: "#FF6FD8", desc: "Pixel-perfect development, clean code, fast load times, full cross-device testing." },
  { num: "05", title: "Launch",     color: "#c9a96e", desc: "Smooth go-live with deployment support and a handover so you're fully in control." },
];

export default function Services() {
  useReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: "#050505", minHeight: "100vh", paddingTop: "88px" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "6rem 3rem 5rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(255,122,90,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(0,207,207,0.07) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="reveal d1">
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>What We Do</div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.8rem,5vw,5rem)", fontWeight: 900, lineHeight: 1.05, color: "#f0ede8", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
              Full-service digital<br />
              <em style={{ color: "#c9a96e" }}>excellence.</em>
            </h1>
          </div>
          <div className="reveal d2" style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.85, maxWidth: "460px", flex: "1 1 300px" }}>
              From brand identity to live product — we handle every facet of your digital presence with craft and obsessive attention to detail.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {["120+ Projects", "7+ Years", "5.0 ★ Google"].map((tag, i) => (
                <div key={i} style={{ padding: "0.6rem 1.25rem", border: "1px solid rgba(201,169,110,0.2)", background: "rgba(201,169,110,0.05)" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#c9a96e", letterSpacing: "0.06em" }}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section style={{ padding: "2rem 3rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          {serviceCards.map((s, i) => (
            <div
              key={s.num}
              className={`reveal d${Math.min(i+1,5)}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", overflow: "hidden",
                padding: "2.5rem",
                background: hovered === i
                  ? `linear-gradient(135deg, ${s.glow.replace("0.18","0.22").replace("0.15","0.2")} 0%, rgba(255,255,255,0.04) 100%)`
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${hovered === i ? s.accent + "40" : "rgba(255,255,255,0.07)"}`,
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                cursor: "default",
                ...(i === 4 ? { gridColumn: "1 / -1" } : {}),
              }}
            >
              {/* Glow orb */}
              <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`, transition: "opacity 0.4s", opacity: hovered === i ? 1 : 0.4, pointerEvents: "none" }} />

              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
                <div style={{ color: s.accent, transition: "transform 0.35s", transform: hovered === i ? "scale(1.1)" : "scale(1)" }}>
                  {s.icon}
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", color: `${s.accent}80`, textTransform: "uppercase" }}>{s.num}</span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: hovered === i ? "#f0ede8" : "rgba(240,237,232,0.88)", marginBottom: "0.85rem", transition: "color 0.3s" }}>{s.title}</h3>

              {/* Desc */}
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "rgba(240,237,232,0.45)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{s.desc}</p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.08em", color: s.accent, background: `${s.accent}12`, border: `1px solid ${s.accent}25`, borderRadius: "999px", padding: "0.25rem 0.7rem" }}>{tag}</span>
                ))}
              </div>

              {/* Stat */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "20px", height: "1px", background: s.accent }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: `${s.accent}90`, letterSpacing: "0.06em" }}>{s.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ position: "relative", padding: "6rem 3rem", overflow: "hidden", background: "#08080c", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="reveal d1" style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "1.25rem" }}>How We Work</div>
              <h2 className="section-heading">Our process,<br /><em style={{ color: "#c9a96e" }}>start to finish</em></h2>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "rgba(240,237,232,0.38)", maxWidth: "320px", lineHeight: 1.8 }}>
              Every project follows the same rigorous process — no shortcuts, no surprises.
            </p>
          </div>

          <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "0" }}>
            {process.map((step, i) => (
              <div key={step.num} style={{ position: "relative", padding: "2rem 1.5rem 2rem 0", borderLeft: i === 0 ? "none" : `1px solid rgba(255,255,255,0.06)`, paddingLeft: i === 0 ? 0 : "1.5rem" }}>
                {/* Connector dot */}
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: `${step.color}15`, border: `2px solid ${step.color}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", fontWeight: 700, color: step.color }}>{step.num}</span>
                </div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", fontWeight: 600, color: "#f0ede8", marginBottom: "0.6rem" }}>{step.title}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.76rem", fontWeight: 300, color: "rgba(240,237,232,0.38)", lineHeight: 1.75 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "6rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,169,110,0.08) 0%, transparent 65%)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="reveal d1" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "3rem", padding: "3.5rem 3rem", border: "1px solid rgba(201,169,110,0.15)", background: "rgba(201,169,110,0.03)" }}>
            <div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "0.75rem" }}>Ready when you are</div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "#f0ede8", marginBottom: "0.75rem" }}>
                Let's build something<br />worth talking about.
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "rgba(240,237,232,0.42)", lineHeight: 1.7 }}>
                We respond within 24 hours. No fluff, no sales pitch — just a real conversation about your project.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
              <a href={whatsappUrl("Hi Algros, I'd like to discuss your website services.")} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "0.72rem", padding: "1.05rem 2.25rem" }}>Start a Project →</a>
              <Link to="/work" className="btn-ghost" style={{ fontSize: "0.72rem", padding: "1.05rem 2.25rem" }}>View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
