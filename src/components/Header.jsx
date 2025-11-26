import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 150);
      const sections = ["home", "about", "portfolio", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll saat drawer terbuka + close dengan Escape
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = open ? "hidden" : prev || "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev || "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleMenuClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  const items = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary">
        <div className="navbar-brand">Nusantara</div>

        {/* Desktop links */}
        <ul className="navbar-links">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={it.href}
                onClick={() => handleMenuClick(it.id)}
                className={activeSection === it.id ? "is-active" : ""}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="navbar-drawer"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Overlay + Drawer (Mobile only) */}
      <div
        className={`navbar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <div
        id="navbar-drawer"
        className={`navbar-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={it.href}
                onClick={() => handleMenuClick(it.id)}
                className={activeSection === it.id ? "is-active" : ""}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;