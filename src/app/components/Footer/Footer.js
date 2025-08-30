"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ExternalLink, Film } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "/quienes-somos", label: "Quiénes Somos" },
    { href: "/trailer", label: "Trailer" },
    { href: "/equipo", label: "Equipo" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <footer className="text-white">
      {/* Borde superior brillante como el del navbar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />

      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src="/assets/logo-saturnino.png"
                    alt="La Leyenda de Saturnino"
                    fill
                    className="object-contain"
                    sizes="48px"
                    priority
                  />
                </div>
                <div>
                  <p className="font-semibold tracking-wide">La Leyenda de Saturnino</p>
                  <p className="text-xs text-white/60 leading-3">Una película de fe y destino</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Dirigida por</h3>
                <p className="text-white/70">Hernán Rocha</p>
              </div>

             
            </div>

            {/* Enlaces rápidos (coherentes con el nav) */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explorar</h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" /> leyendadesaturnino@gmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" /> h.rocha3@gmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" /> pacojean0411@gmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" /> 811 4866 339
                </li>
              </ul>
            </div>

            {/* Llamado a la acción / Apoyo */}
            <div className="md:text-right">
              <h3 className="text-lg font-semibold mb-4">Apóyanos</h3>
              <KickstarterCTA fullWidth />
              <p className="text-white/60 text-sm mt-3">
                Tu apoyo impulsa la postproducción y distribución del film.
              </p>
            </div>
          </div>

          {/* Línea divisoria y legal */}
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © 2025 La Leyenda de Saturnino. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="#aviso-privacidad" className="hover:text-white transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="#terminos" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Subcomponentes coherentes con el Nav ---------- */

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative inline-block px-0.5 py-1 text-white/85 hover:text-white transition-colors"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function KickstarterCTA({ fullWidth, onClick }) {
  return (
    <Link
      href="https://kickstarter.com/projects/leyenda-saturnino/la-leyenda-de-chihuahua"
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
      {/* efecto shine */}
      <span className="pointer-events-none absolute inset-0 rounded-xl [mask-image:linear-gradient(90deg,transparent,white,transparent)]">
        <span className="absolute -left-full top-0 h-full w-1/3 bg-white/30 blur-sm animate-[shine_2.8s_ease-in-out_infinite]" />
      </span>
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(0); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </Link>
  );
}
