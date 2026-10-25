import { works, useReveal, VideoCard, whatsappUrl } from "../shared";

export default function Work() {
  useReveal();
  return (
    <section style={{ position: "relative", padding: "10rem 3rem 7rem", background: "#06030a", minHeight: "100vh", borderBottom: "1px solid rgba(139,92,246,0.1)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 55% at 15% 50%, rgba(120,40,180,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 85% 30%, rgba(80,20,160,0.12) 0%, transparent 65%)" }} />
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        <div className="reveal d1" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>Our Work</div>
            <h1 className="section-heading">
              Projects & Hotels<br />
              <em style={{ color: "#c9a96e" }}>we've worked with</em>
            </h1>
          </div>
          <a href={whatsappUrl("Hi Algros, I'd like to start a website project.")} target="_blank" rel="noreferrer" className="btn-primary">Start Your Project →</a>
        </div>

        {/* Row 1 */}
        <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ height: "540px" }}><VideoCard w={works[0]} featured /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ flex: 1 }}><VideoCard w={works[1]} /></div>
            <div style={{ flex: 1 }}><VideoCard w={works[2]} /></div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="reveal d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ height: "360px" }}><VideoCard w={works[3]} /></div>
          <div style={{ height: "360px" }}><VideoCard w={works[4]} /></div>
          <div style={{ height: "360px" }}><VideoCard w={works[5]} /></div>
        </div>

        {/* Row 3 */}
        <div className="reveal d4" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
          <div style={{ height: "360px" }}><VideoCard w={works[6]} featured /></div>
        </div>

        {/* CTA strip */}
        <div className="reveal d5" style={{ marginTop: "5rem", padding: "3rem", background: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 700, color: "#f0ede8", marginBottom: "0.5rem" }}>Ready to be next?</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "rgba(240,237,232,0.45)" }}>Let's build something you're proud to show the world.</div>
          </div>
          <a href={whatsappUrl("Hi Algros, I'd like to start a website project.")} target="_blank" rel="noreferrer" className="btn-primary">Start a Project →</a>
        </div>
      </div>
    </section>
  );
}
