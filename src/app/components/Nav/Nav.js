"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ExternalLink, Film } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
   /* { href: "/quienes-somos", label: "Quiénes Somos" }, */
    { href: "/trailer", label: "Trailer" },
   /* { href: "/equipo", label: "Equipo" },
    { href: "/contacto", label: "Contacto" }, */
  ];

  return (
    <div className=" w-full z-50">
  <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />

  <nav
    className={
      "backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/80 text-white transition-shadow" +
      (scrolled ? " shadow-[0_8px_30px_rgba(0,0,0,0.3)]" : "")
    }
  >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/assets/logo-saturnino.png"
                  alt="La Leyenda de Saturnino"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold tracking-wide">La Leyenda de Saturnino</span>
                <div className="text-xs text-white/60 leading-3">Una película de fe y destino</div>
              </div>
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href}>
                  {l.label}
                </NavLink>
              ))}
            </div>

            {/* CTA desktop */}
            <div className="hidden md:flex">
              <KickstarterCTA />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-expanded={open}
              aria-label="Abrir menú"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
                <div className="flex flex-col gap-3">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg px-3 py-2 text-base hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <KickstarterCTA fullWidth onClick={() => setOpen(false)} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative px-1.5 py-2 text-sm tracking-wide text-white/90 hover:text-white transition-colors"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function KickstarterCTA({ fullWidth, onClick }) {
  return (
    <Link
      href="https://kickstarter.com/projects/leyenda-saturnino/la-leyenda-de-saturnino-el-profeta-de-chihuahua/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={[
        "relative inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40",
        "bg-gradient-to-b from-amber-500 to-amber-600 text-black font-semibold",
        "shadow-[0_8px_20px_rgba(255,193,7,0.25)] hover:shadow-[0_10px_28px_rgba(255,193,7,0.35)]",
        "px-4 py-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
        fullWidth ? "w-full" : "",
      ].join(" ")}
    >
      <Film className="h-4 w-4" />
      <span>Apóyanos en Kickstarter</span>
      <ExternalLink className="h-4 w-4" />
      <span className="pointer-events-none absolute inset-0 rounded-xl [mask-image:linear-gradient(90deg,transparent,white,transparent)]">
        <span className="absolute -left-full top-0 h-full w-1/3 bg-white/30 blur-sm animate-[shine_2.8s_ease-in-out_infinite]" />
      </span>
    </Link>
  );
}
