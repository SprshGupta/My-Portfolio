import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-12 left-0 right-0 z-50 flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? "top-6" : "top-12"}`}>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="nav-pill"
      >
        <div className="flex items-center gap-1">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="px-8 py-4 text-[10px] font-black tracking-[0.4em] hover:text-zinc-300 transition-colors uppercase"
          >
            SPARSH<span className="text-zinc-200">.</span>
          </a>
          
          <div className="h-6 w-px bg-zinc-100 mx-3"></div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-50 transition-all text-zinc-400 hover:text-black"
            >
              {item.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] bg-black text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 ml-2"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
