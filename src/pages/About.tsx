import { stats, reviews, useReveal, StatCounter, ReviewCard, Stars, GoogleIcon, whatsappUrl } from "../shared";

const values = [
  { title: "Craft over speed",      desc: "We'd rather take an extra week and deliver something exceptional than rush and deliver something forgettable." },
  { title: "Strategy first",        desc: "Every design decision we make is rooted in a business goal. Beautiful for beauty's sake doesn't pay your bills." },
  { title: "Long-term thinking",    desc: "We build systems, not pages. Everything we make is designed to grow with your business." },
  { title: "Radical transparency",  desc: "No jargon, no surprise invoices, no vanishing acts. You always know exactly where things stand." },
];

export default function About() {
  useReveal();
  return (
    <div style={{ background: "#050505", minHeight: "100vh", paddingTop: "88px" }}>

      {/* Hero statement */}
      <section style={{ padding: "6rem 3rem 5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal d1">
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>About the Studio</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.8rem,5vw,5rem)", fontWeight: 900, lineHeight: 1.05, color: "#f0ede8", marginBottom: "2rem", letterSpacing: "-0.02em", maxWidth: "820px" }}>
            We don't just build websites.<br />
            <em style={{ color: "#c9a96e" }}>We build market position.</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.9, maxWidth: "560px" }}>
            Algros is a boutique digital studio obsessed with craft. We combine strategy, design, and development to build the kind of online presence that earns trust, attracts the right clients, and actually grows your business.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal d1" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined }}>
                <StatCounter num={s.num} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "6rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div className="reveal d1">
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>Our Story</div>
            <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>Built from the belief that<br /><em style={{ color: "#c9a96e" }}>design changes outcomes</em></h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              We started Algros because we kept seeing the same problem — great businesses being let down by generic, templated websites that looked like every other competitor. We knew that premium design wasn't just an aesthetic choice. It was a competitive advantage.
            </p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(240,237,232,0.48)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Seven years later, we've worked with hospitality groups, startups, SaaS companies, fitness studios and everything in between — helping each one look like the most credible option in their market.
            </p>
            <a href={whatsappUrl("Hi Algros, I'd like to work with you on a website project.")} target="_blank" rel="noreferrer" className="btn-primary">Work With Us →</a>
          </div>

          {/* Values */}
          <div className="reveal d2" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {values.map((v, i) => (
              <div key={i} style={{ paddingLeft: "1.25rem", borderLeft: "2px solid rgba(201,169,110,0.3)" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 600, color: "#f0ede8", marginBottom: "0.4rem" }}>{v.title}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "rgba(240,237,232,0.42)", lineHeight: 1.75 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "5rem 0", background: "#0a0203", borderTop: "1px solid rgba(220,50,50,0.18)", overflow: "hidden" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 60% at 8% 40%, rgba(200,20,20,0.15) 0%, transparent 70%)" }} />
          <div className="reveal d1" style={{ padding: "0 3rem", maxWidth: "1280px", margin: "0 auto 3rem", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
              <div>
                <div className="section-label" style={{ marginBottom: "1rem" }}>What Clients Say</div>
                <h2 className="section-heading">Hear it from the<br /><em style={{ color: "#c9a96e" }}>people we've built for</em></h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.22)", padding: "1rem 1.5rem" }}>
                <GoogleIcon />
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#111", lineHeight: 1 }}>5.0</div>
                  <Stars count={5} color="#F59E0B" />
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#999", marginTop: "0.2rem" }}>Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div style={{ display: "flex", gap: "1.25rem", width: "max-content", animation: "marquee 40s linear infinite" }}>
              {[...reviews, ...reviews].map((r, i) => <ReviewCard key={i} r={r} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 3rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <div className="reveal d1">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, color: "#f0ede8", marginBottom: "1.25rem" }}>
            Like what you see?
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(240,237,232,0.45)", marginBottom: "2.5rem" }}>
            Let's talk about what we can build together.
          </p>
          <a href={whatsappUrl("Hi Algros, I'd like to discuss a website project.")} target="_blank" rel="noreferrer" className="btn-primary">Get in Touch →</a>
        </div>
      </section>
    </div>
  );
}
