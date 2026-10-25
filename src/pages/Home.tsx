import { useState, useEffect } from "react";
import { Link } from "react-router";
import heroBg from "../imports/hero_bg.webm";
import saasVideo from "../imports/SaaS_marketing_video_montage_1080p_20260913122654.webm";
import saasVideoMp4 from "../imports/SaaS_marketing_video_montage_1080p_20260913122654.mp4";
import { reviews, works, services, stats, useReveal, ReviewCard, VideoCard, StatCounter, jankiPoster, jmdPoster, tapovanPoster, bakerVideo, Stars, GoogleIcon, whatsappUrl } from "../shared";

/* ── Cycling word ── */
const cyclingWords = [
  { text: "Websites",    color: "#FF7A5A" },
  { text: "SaaS",        color: "#00CFCF" },
  { text: "Startups",    color: "#A8FF78" },
  { text: "Automations", color: "#FF6FD8" },
  { text: "& Much More", color: "#c9a96e" },
];

function CyclingWord() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx(i => (i + 1) % cyclingWords.length); setVisible(true); }, 320);
    }, 2400);
    return () => clearInterval(id);
  }, []);
  const w = cyclingWords[idx];
  return (
    <span style={{ display: "inline-block", color: w.color, transition: "opacity 0.32s ease, transform 0.32s ease", opacity: visible ? 1 : 0, transform: visible ? "rotateX(0deg)" : "rotateX(-25deg)", transformOrigin: "center top" }}>
      {w.text}
    </span>
  );
}

/* ── Mini review cycler for preview section ── */
const proofReviews = [
  { initials: "N",  accent: "#3B82F6", name: "Northstar",           category: "Startup",        text: "It looks premium and has helped us get more customer interest. Professional and responsive team." },
  { initials: "TK", accent: "#F97316", name: "The Terrace Kitchen", category: "Restaurant",     text: "Simple, beautiful and exactly what we needed. Customers often tell us how good it looks." },
  { initials: "CF", accent: "#10B981", name: "Core Fitness",        category: "Fitness Studio", text: "Our new website looks so professional. We've seen more enquiries and trial bookings since launch." },
  { initials: "FT", accent: "#A78BFA", name: "Frame Theory",        category: "Photography",    text: "Our portfolio looks amazing now. Clean design, smooth animations and great attention to detail." },
  { initials: "HR", accent: "#EC4899", name: "The Hair Room",       category: "Salon",          text: "The booking system they built is super easy. Clients can see services and book appointments online." },
];

function MiniReviewCycle() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(i => (i + 1) % proofReviews.length); setFading(false); }, 350);
    }, 3200);
    return () => clearInterval(t);
  }, []);
  const r = proofReviews[idx];
  return (
    <div>
      <div style={{ transition: "opacity 0.35s ease, transform 0.35s ease", opacity: fading ? 0 : 1, transform: fading ? "translateY(6px)" : "translateY(0)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem 1.1rem", background: "rgba(255,255,255,0.025)", borderLeft: `2px solid ${r.accent}60` }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `${r.accent}18`, border: `1px solid ${r.accent}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", fontWeight: 700, color: r.accent }}>{r.initials}</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(s => <svg key={s} width="9" height="9" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <div style={{ display: "flex", gap: "4px" }}>
                {proofReviews.map((pr, i) => (
                  <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? "14px" : "5px", height: "5px", borderRadius: "999px", background: i === idx ? pr.accent : "rgba(255,255,255,0.15)", transition: "all 0.3s ease", cursor: "pointer" }} />
                ))}
              </div>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(240,237,232,0.55)", lineHeight: 1.6, margin: "0 0 0.2rem" }}>"{r.text}"</p>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "rgba(240,237,232,0.28)", letterSpacing: "0.06em" }}>{r.name} · {r.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Preview card stack ── */
const previewCards = [
  { type: "video" as const, src: bakerVideo,   label: "The Crumb Studio", category: "Bakery",       accent: "#F59E0B" },
  { type: "img"   as const, src: jankiPoster,  label: "Janki Homestay",   category: "Hospitality",  accent: "#c9a96e" },
  { type: "img"   as const, src: jmdPoster,    label: "JMD Residency",    category: "Real Estate",  accent: "#60a5fa" },
];

function PreviewStack() {
  const [active, setActive] = useState(0);
  const cycle = () => setActive(i => (i + 1) % previewCards.length);
  return (
    <div style={{ position: "relative", height: "380px", cursor: "pointer" }} onClick={cycle}>
      {previewCards.map((card, i) => {
        const offset = (i - active + previewCards.length) % previewCards.length;
        const isActive = offset === 0;
        const isMid = offset === 1;
        return (
          <div key={i} style={{
            position: "absolute", inset: 0,
            border: isActive ? `1px solid ${card.accent}55` : "1px solid rgba(255,255,255,0.07)",
            overflow: "hidden",
            boxShadow: isActive ? `0 0 40px ${card.accent}18, 0 20px 60px rgba(0,0,0,0.7)` : "0 8px 30px rgba(0,0,0,0.45)",
            transform: isActive ? "translateY(0) scale(1) rotate(0deg)" : isMid ? "translateY(22px) scale(0.93) rotate(-2deg)" : "translateY(40px) scale(0.86) rotate(3deg)",
            zIndex: isActive ? 3 : isMid ? 2 : 1,
            transition: "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.4s ease",
            transformOrigin: "bottom center",
          }}>
            <div style={{ height: "3px", background: isActive ? card.accent : "rgba(255,255,255,0.06)" }} />
            <div style={{ position: "relative", height: "calc(100% - 3px)", background: "#000" }}>
              {card.type === "video"
                ? <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}><source src={card.src} type="video/mp4" /></video>
                : <img src={card.src} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              }
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(5,5,5,0.92) 100%)" }} />
              <div style={{ position: "absolute", bottom: "1.1rem", left: "1.1rem", right: "1.1rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, color: "#f0ede8", lineHeight: 1.2 }}>{card.label}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", marginTop: "0.2rem" }}>{card.category}</div>
                </div>
                {isActive && <div style={{ background: card.accent, borderRadius: "999px", padding: "0.3rem 0.75rem" }}><span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", fontWeight: 700, color: "#050505" }}>TAP →</span></div>}
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", bottom: "-1.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.45rem", zIndex: 4 }}>
        {previewCards.map((_, i) => (
          <div key={i} onClick={e => { e.stopPropagation(); setActive(i); }} style={{ width: i === active ? "18px" : "6px", height: "6px", borderRadius: "999px", background: i === active ? previewCards[active].accent : "rgba(255,255,255,0.18)", transition: "all 0.35s ease", cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "680px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "88px", background: "linear-gradient(135deg, #18130d, #050505 70%)" }}>
        <video src={heroBg} poster={tapovanPoster} autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.58 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(5,5,5,0.38) 0%, rgba(5,5,5,0.02) 45%, rgba(5,5,5,0.58) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.48) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem", maxWidth: "920px", width: "100%" }}>
          <h1 className="hero-display" style={{ marginBottom: "1.25rem" }}>
            <span className="hero-line-1" style={{ display: "block" }}>We Build</span>
            <span className="hero-line-2" style={{ display: "block", minHeight: "1.08em" }}><CyclingWord /></span>
            <span className="hero-line-3" style={{ display: "block" }}>That Convert.</span>
          </h1>
          <p className="hero-sub" style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(0.88rem,1.5vw,1.05rem)", fontWeight: 300, color: "rgba(240,237,232,0.52)", maxWidth: "440px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
            Premium digital experiences for ambitious businesses and startups — strategy, design, and development under one roof.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/work" className="btn-primary">View Our Work →</Link>
            <a href={whatsappUrl("Hi Algros, I'd like to discuss a website project.")} target="_blank" rel="noreferrer" className="btn-ghost">Start a Project</a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ padding: "7rem 0", position: "relative", background: "#0a0203", borderTop: "1px solid rgba(220,50,50,0.18)", borderBottom: "1px solid rgba(220,50,50,0.1)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 60% at 8% 40%, rgba(200,20,20,0.2) 0%, transparent 70%), radial-gradient(ellipse 45% 50% at 92% 55%, rgba(180,10,10,0.16) 0%, transparent 70%)" }} />
        <div className="reveal d1" style={{ padding: "0 3rem", maxWidth: "1280px", margin: "0 auto 3.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Client Reviews</div>
              <h2 className="section-heading">Trusted by businesses<br /><em style={{ color: "#c9a96e" }}>across every industry</em></h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.22)", padding: "1rem 1.5rem" }}>
              <GoogleIcon />
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#111", lineHeight: 1 }}>5.0</div>
                <Stars count={5} color="#F59E0B" />
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#999", marginTop: "0.2rem", letterSpacing: "0.06em" }}>Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", position: "relative", zIndex: 1 }}>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div style={{ display: "flex", gap: "1.25rem", width: "max-content", animation: "marquee 40s linear infinite" }}>
              {[...reviews.slice(0,6), ...reviews.slice(0,6)].map((r,i) => <ReviewCard key={i} r={r} />)}
            </div>
          </div>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div style={{ display: "flex", gap: "1.25rem", width: "max-content", animation: "marquee 40s linear infinite reverse" }}>
              {[...reviews.slice(6), ...reviews.slice(6)].map((r,i) => <ReviewCard key={i} r={r} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM WEBSITE PREVIEW ── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#020810", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}>
          <source src={saasVideo} type="video/webm" />
          <source src={saasVideoMp4} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "rgba(2,8,16,0.68)" }} />

        <div style={{ background: "#c9a96e", padding: "0.65rem 0", overflow: "hidden" }}>
          <div className="marquee-track">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#050505", padding: "0 2.5rem" }}>
                Custom Website Preview · Only ₹1,499 · 48 Hours ·
              </span>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "5rem 3rem 3.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", position: "relative", zIndex: 1 }}>
          <div className="reveal d1">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", background: "rgba(201,169,110,0.09)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: "999px", padding: "0.32rem 0.9rem", marginBottom: "1.5rem" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c9a96e", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e" }}>Custom Website Preview</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,3.2vw,3rem)", fontWeight: 900, lineHeight: 1.1, color: "#f0ede8", marginBottom: "0.85rem" }}>
              See Your Business<br /><em style={{ color: "#c9a96e" }}>At Its Best Online.</em>
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.8, maxWidth: "400px", marginBottom: "1.75rem" }}>
              A custom homepage designed around your real business — delivered in 48 hours, before you commit to the full website.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
              {["Built specifically for your business","Your logo, photos & content used","Premium desktop + mobile design","Delivered within 48 hours"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "linear-gradient(135deg,#c9a96e,#e8cc99)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.83rem", color: "rgba(240,237,232,0.65)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.1rem", flexWrap: "wrap" }}>
              <a href={whatsappUrl("Hi Algros, I'd like to get a custom website preview for ₹1,499.")} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "0.7rem", padding: "1rem 2rem" }}>Get My Custom Preview →</a>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.15rem" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(240,237,232,0.3)" }}>₹</span>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#f0ede8", lineHeight: 1 }}>1,499</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "rgba(240,237,232,0.28)", marginLeft: "0.25rem" }}>one-time</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "#c9a96e" }}>₹1,499 <strong>fully credited</strong> toward your website when you proceed</span>
            </div>
            <MiniReviewCycle />
          </div>
          <div className="reveal d2" style={{ padding: "0 0 2.5rem" }}>
            <PreviewStack />
          </div>
        </div>

        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 3rem 5rem", position: "relative", zIndex: 1 }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem" }}>
            <div className="section-label reveal d1" style={{ marginBottom: "1.75rem" }}>Common Questions</div>
            <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem 4rem" }}>
              {[
                { q: "What exactly do I receive?", a: "A fully designed homepage built around your business — your branding, photos, copy and layout. Not a template. A real, custom design." },
                { q: "Can I request changes?", a: "Yes — you get one round of revisions included. We want you to love what you see before moving forward." },
                { q: "What happens after 48 hours?", a: "We deliver your preview. You review it and decide whether to proceed with the full website — no pressure either way." },
                { q: "What happens to my ₹1,499?", a: "Fully credited toward your website if you proceed. You're investing it early, not losing it." },
              ].map((item, i) => (
                <div key={i} style={{ paddingBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#f0ede8", marginBottom: "0.5rem" }}>{item.q}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "rgba(240,237,232,0.42)", lineHeight: 1.7 }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "7rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "4rem", marginBottom: "4rem", alignItems: "end" }}>
          <div className="reveal d1">
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>What We Do</div>
            <h2 className="section-heading">Full-service digital<br /><em style={{ color: "#c9a96e" }}>excellence</em></h2>
          </div>
          <p className="reveal d2" style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.85 }}>
            From initial concept to launch and beyond, we handle every facet of your digital presence. Our integrated approach ensures seamless execution and results that speak for themselves.
          </p>
        </div>
        <div>
          {services.map((s, i) => (
            <div key={s.num} className={`service-row reveal d${Math.min(i+1,5)}`} style={{ display: "grid", gridTemplateColumns: "64px 1fr 1.4fr 28px", gap: "2rem", alignItems: "center", padding: "2rem 0.5rem" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", color: "#c9a96e" }}>{s.num}</span>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 500, color: "#f0ede8", margin: 0 }}>{s.title}</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "rgba(240,237,232,0.42)", lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              <span className="service-arrow">→</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ position: "relative", padding: "7rem 3rem", background: "#06030a", borderTop: "1px solid rgba(139,92,246,0.12)", borderBottom: "1px solid rgba(99,60,180,0.08)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 55% at 15% 50%, rgba(120,40,180,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 85% 30%, rgba(80,20,160,0.12) 0%, transparent 65%)" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div className="reveal d1" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.75rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "1.25rem" }}>Our Work</div>
              <h2 className="section-heading">Projects & Hotels<br /><em style={{ color: "#c9a96e" }}>we've worked with</em></h2>
            </div>
            <Link to="/work" className="btn-ghost">All Projects →</Link>
          </div>
          <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ height: "520px" }}><VideoCard w={works[0]} featured /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ flex: 1 }}><VideoCard w={works[1]} /></div>
              <div style={{ flex: 1 }}><VideoCard w={works[2]} /></div>
            </div>
          </div>
          <div className="reveal d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <div style={{ height: "340px" }}><VideoCard w={works[3]} /></div>
            <div style={{ height: "340px" }}><VideoCard w={works[4]} /></div>
            <div style={{ height: "340px" }}><VideoCard w={works[5]} /></div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div className="reveal d1">
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>About the Studio</div>
            <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>We don't just build websites.<br /><em style={{ color: "#c9a96e" }}>We build market position.</em></h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.9, marginBottom: "2rem" }}>
              We are a boutique digital agency obsessed with craft. Every pixel, every line of code, every interaction is designed with one goal — to make your brand the most credible and desirable option in your market.
            </p>
            <a href={whatsappUrl("Hi Algros, I'd like to work with you on a website project.")} target="_blank" rel="noreferrer" className="btn-primary">Work With Us →</a>
          </div>
          <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ borderTop: i >= 2 ? "1px solid rgba(255,255,255,0.06)" : undefined, borderLeft: i % 2 === 1 ? "1px solid rgba(255,255,255,0.06)" : undefined }}>
                <StatCounter num={s.num} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "8rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal d1" style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>Let's Work Together</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2.5rem" }}>
            <h2 className="section-heading" style={{ fontSize: "clamp(2rem,4.5vw,4.2rem)" }}>Ready to stand<br /><em style={{ color: "#c9a96e" }}>out online?</em></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "flex-start" }}>
              <a href="mailto:algrosco@gmail.com" className="contact-link">algrosco@gmail.com <span style={{ color: "#c9a96e", fontSize: "0.8em" }}>↗</span></a>
              <div style={{ display: "flex", gap: "1.25rem" }}>
                <a href="https://wa.me/919350432714" target="_blank" rel="noreferrer" className="nav-link">WhatsApp</a>
                <a href="https://www.instagram.com/algrosco/" target="_blank" rel="noreferrer" className="nav-link">Instagram</a>
              </div>
              <a href={whatsappUrl("Hi Algros, I'd like to start a website project.")} target="_blank" rel="noreferrer" className="btn-primary">Start a Project →</a>
            </div>
          </div>
        </div>
        <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2.5rem" }}>
          {[{ label: "Location", val: "Remote · Worldwide" }, { label: "Response Time", val: "Within 24 hours" }, { label: "New Projects", val: "Now Accepting" }].map(item => (
            <div key={item.label}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "0.5rem" }}>{item.label}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(240,237,232,0.58)" }}>{item.val}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
