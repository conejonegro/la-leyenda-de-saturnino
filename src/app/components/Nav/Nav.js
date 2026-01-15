"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
    { href: "/#trailer", label: "Trailer" },
    { href: "/#quienes-somos", label: "Quiénes Somos" }, 
    { href: "/#equipo", label: "Equipo" }, 
    { href: "/#contacto", label: "Contacto" }, 
  ];

  return (
    <div className=" w-full z-50">
  <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />

  <nav
    className={
      "backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/60 text-gray-900 transition-shadow" +
      (scrolled ? " shadow-sm" : "")
    }
  >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-gray-200">
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
                <span className="font-semibold tracking-wide text-gray-900">La Leyenda de Saturnino</span>
                <div className="text-xs text-gray-600 leading-3">Una película de fe y destino</div>
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

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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
              className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
                <div className="flex flex-col gap-3">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg px-3 py-2 text-base text-gray-800 hover:bg-gray-50"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}

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
      className="group relative px-1.5 py-2 text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
