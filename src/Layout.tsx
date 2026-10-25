import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router";
import { logo, whatsappUrl } from "./shared";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = [
    { label: "Home",     to: "/" },
    { label: "Work",     to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About",    to: "/about" },
    { label: "Contact",  to: "/contact" },
  ];

  return (
    <div style={{ background: "#050505", color: "#f0ede8", overflowX: "hidden" }}>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "1rem 3rem" : "1.6rem 3rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        background: scrolled ? "rgba(5,5,5,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
      }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Algros" style={{
            height: scrolled ? "32px" : "40px", width: "auto",
            transition: "height 0.4s", filter: "invert(1) brightness(10)",
          }} />
        </NavLink>

        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} style={({ isActive }) => ({
              fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: isActive ? "#c9a96e" : "rgba(240,237,232,0.55)",
              textDecoration: "none", transition: "color 0.3s",
              borderBottom: isActive ? "1px solid #c9a96e" : "1px solid transparent",
              paddingBottom: "2px",
            })}>
              {item.label}
            </NavLink>
          ))}
          <a href={whatsappUrl("Hi Algros, I'd like to discuss a website project.")} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "0.65rem 1.5rem", fontSize: "0.65rem", border: "none", cursor: "pointer" }}>
            Start a Project →
          </a>
        </div>
      </nav>

      <Outlet />

      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2rem 3rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem",
      }}>
        <img src={logo} alt="Algros" style={{ height: "28px", filter: "invert(1) brightness(10) opacity(0.28)" }} />
        <div style={{ display: "flex", gap: "2.25rem" }}>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} className="nav-link">{item.label}</NavLink>
          ))}
          <a href="https://wa.me/919350432714" target="_blank" rel="noreferrer" className="nav-link">WhatsApp</a>
          <a href="https://www.instagram.com/algrosco/" target="_blank" rel="noreferrer" className="nav-link">Instagram</a>
        </div>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: "rgba(240,237,232,0.2)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Algros. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
