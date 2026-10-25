import { useState, useEffect, useRef } from "react";
import logo from "./imports/logo-removebg-preview.png";
import jmdPoster from "./imports/JMD-RESIDENCY_HeroSection.png";
import jankiPoster from "./imports/Janki_homestay_Herosection.png";
import tapovanPoster from "./imports/Tapovan_Herosection.png";
import jmdVideo from "./imports/JMD_Residency.webm";
import jankiVideo from "./imports/JANKI_HOMESTAY.webm";
import tapovanVideo from "./imports/Tapovan_Rise_hotel.webm";
import pushkarVideo from "./imports/Pushkar_Pulse_hotel.webm";
import citrineVideo from "./imports/CITRINE.webm";
import sanjeevaniVideo from "./imports/Sanjeevani_Pet_clinic.webm";
import bakerVideo from "./imports/Baker_modernizing_business_for_s__20260913121915_gwr_video_mvp.mp4";

export { logo, jankiPoster, jmdPoster, tapovanPoster, bakerVideo };

export const whatsappUrl = (message: string) =>
  `https://wa.me/919350432714?text=${encodeURIComponent(message)}`;

/* ── Data ── */
export const reviews = [
  { name: "Brew & Co.",            time: "2 months ago", category: "Café",             stars: 5, starColor: "#F59E0B", initials: "B",   accent: "#F59E0B", text: "Algros made our website look premium and easy to use. Customers now find our menu, location and offers without any confusion. It has really improved our online presence." },
  { name: "Studio 27",             time: "3 months ago", category: "Clothing Brand",   stars: 5, starColor: "#8B5CF6", initials: "S27", accent: "#8B5CF6", text: "We wanted a clean and minimal website for our clothing brand and Algros delivered exactly that. The website feels like our brand and our sales have improved since the launch." },
  { name: "The Hair Room",         time: "1 month ago",  category: "Salon",            stars: 5, starColor: "#EC4899", initials: "HR",  accent: "#EC4899", text: "The booking system they built for us is super easy to use. Now clients can see our services, prices and book appointments online. Very happy with the results." },
  { name: "Core Fitness",          time: "4 months ago", category: "Fitness Studio",   stars: 5, starColor: "#10B981", initials: "CF",  accent: "#10B981", text: "Our new website looks so professional and finally shows what our gym is really about. We've seen more enquiries and trial bookings since it went live." },
  { name: "The Terrace Kitchen",   time: "2 months ago", category: "Restaurant",       stars: 5, starColor: "#F97316", initials: "TK",  accent: "#F97316", text: "Simple, beautiful and exactly what we needed. The website is easy to navigate and our customers often tell us how good it looks. Great experience working with Algros!" },
  { name: "Northstar",             time: "5 months ago", category: "Startup",          stars: 5, starColor: "#3B82F6", initials: "N",   accent: "#3B82F6", text: "They took our rough idea and turned it into a website that clearly explains what we do. It looks premium and has helped us get more customer interest." },
  { name: "Frame Theory",          time: "3 months ago", category: "Photography",      stars: 5, starColor: "#A78BFA", initials: "FT",  accent: "#A78BFA", text: "Our portfolio looks amazing now. The website finally lets our work speak for itself. Clean design, smooth animations and great attention to detail." },
  { name: "Urban Keys",            time: "2 months ago", category: "Real Estate",      stars: 5, starColor: "#14B8A6", initials: "UK",  accent: "#14B8A6", text: "The website feels much more trustworthy now. People get a clear idea of what we offer before even contacting us. It has definitely helped us get more serious leads." },
  { name: "Crumb & Co.",           time: "1 month ago",  category: "Bakery",           stars: 5, starColor: "#F59E0B", initials: "CC",  accent: "#F59E0B", text: "Everything feels easier now — updating our menu, showing new products and sharing offers. The website looks great and has made a real difference for our bakery." },
  { name: "Flowdesk",              time: "4 months ago", category: "SaaS",             stars: 5, starColor: "#6366F1", initials: "F",   accent: "#6366F1", text: "Algros didn't just make our product look better. They helped us simplify how we explain it. The new website has made it easier for customers to understand our platform." },
  { name: "Maison Mira",           time: "3 months ago", category: "Boutique",         stars: 5, starColor: "#F472B6", initials: "MM",  accent: "#F472B6", text: "We wanted a website that felt different from every other store. This one actually feels like us. Elegant, clean and easy to shop from. Really happy with the outcome." },
  { name: "Northpoint Consulting", time: "2 months ago", category: "Consulting",       stars: 5, starColor: "#22D3EE", initials: "NC",  accent: "#22D3EE", text: "The biggest change was how seriously people started taking us online. The website feels polished without being overdone. Great communication throughout the process." },
];

export const services = [
  { num: "01", title: "Brand & Identity",     desc: "Visual identities that communicate authority — logos, systems, and brand languages built to last." },
  { num: "02", title: "Premium Web Design",   desc: "High-conversion, visually arresting websites engineered for businesses and startups that refuse to blend in." },
  { num: "03", title: "Web Development",      desc: "Performant, scalable builds with pixel-perfect execution from concept to production." },
  { num: "04", title: "UX Strategy",          desc: "User experience architecture that reduces friction, builds trust, and turns visitors into loyal customers." },
  { num: "05", title: "Motion & Interaction", desc: "Purposeful animation and micro-interactions that elevate the experience from functional to unforgettable." },
];

export const works = [
  { title: "Janki Homestay",        category: "Hospitality · Booking · Web",   video: jankiVideo,      poster: jankiPoster   },
  { title: "JMD Residency",         category: "Real Estate · Web Design",      video: jmdVideo,        poster: jmdPoster     },
  { title: "Tapovan Rise",          category: "Hotel · Cottage & Café · Web",  video: tapovanVideo,    poster: tapovanPoster },
  { title: "Pushkar Pulse Hotel",   category: "Hospitality · Branding · Web",  video: pushkarVideo,    poster: ""            },
  { title: "Citrine",               category: "Brand Identity · Web Design",   video: citrineVideo,    poster: ""            },
  { title: "Sanjeevani Pet Clinic", category: "Healthcare · Branding · Web",   video: sanjeevaniVideo, poster: ""            },
  { title: "The Crumb Studio",      category: "Bakery · Brand Identity · Web", video: bakerVideo,      poster: ""            },
] as const;

export const stats = [
  { num: 7,   suffix: "+", label: "Years of craft" },
  { num: 120, suffix: "+", label: "Projects delivered" },
  { num: 94,  suffix: "",  label: "Happy clients" },
  { num: 100, suffix: "%", label: "Client retention" },
];

/* ── Hooks ── */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-fade");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target: number, suffix: string, trigger: boolean) {
  const [val, setVal] = useState("0" + suffix);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start + suffix);
      if (start >= target) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [trigger, target, suffix]);
  return val;
}

/* ── Shared components ── */
export function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div style={{
      display: "inline-flex", flexDirection: "column",
      width: "320px", flexShrink: 0, whiteSpace: "normal",
      background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
      border: `1px solid ${r.accent}22`, borderTop: `2px solid ${r.accent}60`,
      padding: "1.4rem 1.5rem", backdropFilter: "blur(12px)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", borderRadius: "50%", background: `radial-gradient(circle, ${r.accent}10 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: `${r.accent}18`, border: `1.5px solid ${r.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 700, color: r.accent }}>{r.initials}</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#f0ede8", lineHeight: 1.2 }}>{r.name}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "rgba(240,237,232,0.38)", marginTop: "0.1rem" }}>{r.time}</div>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <Stars count={r.stars} color={r.starColor} />
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "rgba(240,237,232,0.62)", lineHeight: 1.75, margin: "0.75rem 0 1rem", flexGrow: 1 }}>{r.text}</p>
      <span style={{ display: "inline-block", alignSelf: "flex-start", background: `${r.accent}14`, border: `1px solid ${r.accent}30`, borderRadius: "999px", padding: "0.2rem 0.7rem", fontFamily: "'Inter',sans-serif", fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: r.accent }}>{r.category}</span>
    </div>
  );
}

export function VideoCard({ w, featured = false }: { w: typeof works[number]; featured?: boolean }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const onEnter = () => { setHovered(true); vidRef.current?.play().catch(() => {}); };
  const onLeave = () => { setHovered(false); if (vidRef.current) { vidRef.current.pause(); vidRef.current.currentTime = 0; } };

  return (
    <div className="work-card" style={{ height: "100%", cursor: "pointer", position: "relative", overflow: "hidden" }}
      onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {w.poster
        ? <img src={w.poster} alt={w.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "opacity 0.4s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)", opacity: hovered ? 0 : 1, transform: hovered ? "scale(1.06)" : "scale(1)" }} />
        : null
      }
      <video ref={vidRef} muted loop playsInline
        autoPlay={!w.poster}
        onCanPlay={e => { if (!w.poster) { (e.target as HTMLVideoElement).pause(); } }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease", opacity: (hovered || !w.poster) ? 1 : 0 }}
      >
        <source src={w.video} type={w.video.endsWith(".mp4") ? "video/mp4" : "video/webm"} />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.2) 50%, transparent 100%)", opacity: hovered ? 1 : 0.6, transition: "opacity 0.4s ease" }} />
      <div style={{ position: "absolute", inset: 0, padding: "1.75rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,237,232,0.5)", marginBottom: "0.4rem" }}>{w.category}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: featured ? "1.5rem" : "1.1rem", fontWeight: 700, color: "#f0ede8", lineHeight: 1.2 }}>{w.title}</div>
        {featured && hovered && (
          <a href={whatsappUrl(`Hi Algros, I'd like to discuss a website like ${w.title}.`)} target="_blank" rel="noreferrer" style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a96e", textDecoration: "none" }}>
            Enquire on WhatsApp →
          </a>
        )}
      </div>
    </div>
  );
}

export function StatCounter({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const val = useCounter(num, suffix, triggered);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); io.disconnect(); } }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ padding: "2.5rem" }}>
      <div className="stat-num">{val}</div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,237,232,0.35)", marginTop: "0.5rem" }}>{label}</div>
    </div>
  );
}
