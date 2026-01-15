"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "/#quienes-somos", label: "Quiénes Somos" },
    { href: "/#trailer", label: "Trailer" },
    { href: "/#equipo", label: "Equipo" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <footer className="text-gray-900 bg-white">
      {/* Borde superior brillante como el del navbar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gray-200">
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
                  <p className="font-semibold tracking-wide text-gray-900">La Leyenda de Saturnino</p>
                  <p className="text-xs text-gray-600 leading-3">Una película de fe y destino</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Dirigida por</h3>
                <p className="text-gray-700">Hernán Rocha</p>
              </div>

             
            </div>

            {/* Enlaces rápidos (coherentes con el nav) */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Explorar</h3>
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
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Contacto</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Mail className="h-4 w-4 text-amber-600" /> leyendadesaturnino@gmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Mail className="h-4 w-4 text-amber-600" /> h.rocha3@gmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Mail className="h-4 w-4 text-amber-600" /> pacojean0411@gmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Phone className="h-4 w-4 text-amber-600" /> 811 4866 339
                </li>
              </ul>
            </div>

            <div />
          </div>

          {/* Línea divisoria y legal */}
          <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2025 La Leyenda de Saturnino. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="#aviso-privacidad" className="hover:text-gray-900 transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="#terminos" className="hover:text-gray-900 transition-colors">
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
      className="group relative inline-block px-0.5 py-1 text-gray-800 hover:text-gray-900 transition-colors"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
