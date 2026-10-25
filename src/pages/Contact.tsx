import { useState } from "react";
import { useReveal, whatsappUrl } from "../shared";

const info = [
  { label: "Email",         val: "algrosco@gmail.com", link: "mailto:algrosco@gmail.com", external: false },
  { label: "WhatsApp",      val: "+91 93504 32714",    link: "https://wa.me/919350432714", external: true },
  { label: "Instagram",     val: "@algrosco",          link: "https://www.instagram.com/algrosco/", external: true },
  { label: "Response Time", val: "Within 24 hours",    link: null, external: false },
  { label: "Location",      val: "Remote · Worldwide", link: null, external: false },
  { label: "New Projects",  val: "Now Accepting",      link: null, external: false },
];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: "", business: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/algrosco@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: `New Algros enquiry from ${form.name}`,
          _template: "table",
          _replyto: form.email,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSent(true);
      setForm({ name: "", business: "", email: "", budget: "", message: "" });
    } catch {
      setError("We couldn't send your message. Please try again or contact us directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#f0ede8", fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", fontWeight: 300,
    padding: "0.9rem 1.1rem", outline: "none", transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#050505", minHeight: "100vh", paddingTop: "88px" }}>

      {/* Hero */}
      <section style={{ padding: "6rem 3rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal d1">
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>Let's Work Together</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.8rem,5vw,5rem)", fontWeight: 900, lineHeight: 1.05, color: "#f0ede8", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Ready to stand<br />
            <em style={{ color: "#c9a96e" }}>out online?</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(240,237,232,0.45)", lineHeight: 1.85, maxWidth: "480px" }}>
            Tell us about your project. We'll get back to you within 24 hours with a clear plan of action.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ padding: "0 3rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5rem", alignItems: "start" }}>

          {/* Form */}
          <div className="reveal d1">
            {sent ? (
              <div style={{ padding: "3rem", background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#c9a96e", marginBottom: "0.75rem" }}>Message received.</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", color: "rgba(240,237,232,0.5)", lineHeight: 1.7 }}>
                  Thank you for reaching out. We'll be in touch within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={submit} aria-busy={submitting} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", display: "block", marginBottom: "0.5rem" }}>Your Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="John Smith" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(201,169,110,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", display: "block", marginBottom: "0.5rem" }}>Business Name</label>
                    <input name="business" value={form.business} onChange={handle} placeholder="Your Company" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(201,169,110,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", display: "block", marginBottom: "0.5rem" }}>Email Address *</label>
                  <input name="email" type="email" required value={form.email} onChange={handle} placeholder="hello@yourbusiness.com" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(201,169,110,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>

                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", display: "block", marginBottom: "0.5rem" }}>Project Budget</label>
                  <select name="budget" value={form.budget} onChange={handle} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} onFocus={e => (e.target.style.borderColor = "rgba(201,169,110,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}>
                    <option value="" style={{ background: "#111" }}>Select a range</option>
                    <option value="under-25k" style={{ background: "#111" }}>Under ₹25,000</option>
                    <option value="25k-75k" style={{ background: "#111" }}>₹25,000 – ₹75,000</option>
                    <option value="75k-150k" style={{ background: "#111" }}>₹75,000 – ₹1,50,000</option>
                    <option value="150k+" style={{ background: "#111" }}>₹1,50,000+</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.38)", display: "block", marginBottom: "0.5rem" }}>Tell Us About Your Project *</label>
                  <textarea name="message" required value={form.message} onChange={handle} placeholder="What are you building? What's the goal? What do you need?" rows={5} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }} onFocus={e => (e.target.style.borderColor = "rgba(201,169,110,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>

                {error && (
                  <div role="alert" style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#e08b8b", lineHeight: 1.6 }}>
                    {error}{" "}
                    <a href="https://wa.me/919350432714" target="_blank" rel="noreferrer" style={{ color: "#c9a96e" }}>Message us on WhatsApp.</a>
                  </div>
                )}

                <button type="submit" disabled={submitting} className="btn-primary" style={{ alignSelf: "flex-start", fontSize: "0.72rem", padding: "1.05rem 2.5rem", border: "none", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.65 : 1 }}>
                  {submitting ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="reveal d2" style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingTop: "0.5rem" }}>
            {info.map(item => (
              <div key={item.label} style={{ paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "0.5rem" }}>{item.label}</div>
                {item.link
                  ? <a href={item.link} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", fontWeight: 300, color: "#f0ede8", textDecoration: "none" }}>{item.val}</a>
                  : <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(240,237,232,0.55)" }}>{item.val}</div>
                }
              </div>
            ))}

            {/* Custom preview callout */}
            <div style={{ padding: "1.5rem", background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.18)" }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "0.75rem" }}>Not sure yet?</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", fontWeight: 600, color: "#f0ede8", marginBottom: "0.5rem" }}>Start with a Custom Website Preview</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "rgba(240,237,232,0.45)", lineHeight: 1.7, marginBottom: "1rem" }}>
                See your homepage designed first for just ₹1,499 — fully credited when you proceed.
              </div>
              <a href={whatsappUrl("Hi Algros, I'd like to get a custom website preview for ₹1,499.")} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.75rem 1.5rem" }}>Get a Preview →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
