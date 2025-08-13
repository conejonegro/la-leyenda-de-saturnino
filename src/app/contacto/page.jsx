// app/contacto/page.jsx
import { Mail, Phone, MapPin, Clapperboard, Send } from "lucide-react";

export const metadata = {
  title: "Contacto | La Leyenda de Saturnino",
  description:
    "Contáctanos — Estudio de grabación y producción audiovisual en Chihuahua, México.",
  openGraph: {
    title: "Contacto | La Leyenda de Saturnino",
    description:
      "Escríbenos para colaboraciones, proyecciones y prensa. Estudio en Chihuahua.",
    type: "website",
    locale: "es_MX",
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
              <Clapperboard className="h-7 w-7 text-[var(--color-amber-300)]" />
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-neutral-400">
                La Leyenda de Saturnino
              </p>
              <h1 className="mt-1 text-4xl md:text-6xl font-semibold leading-tight">
                Contacto
              </h1>
              <p className="mt-3 max-w-2xl text-neutral-300">
                Somos un estudio de grabación y producción audiovisual con sede en
                Chihuahua. Si tienes una colaboración, proyección o cobertura de
                prensa en mente, hablemos.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-amber-300)] to-transparent opacity-60" />
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-1">
          {/* Columna izquierda: Datos de contacto */}
          <div className="space-y-6">
            <Card>
              <CardTitle icon={<Mail className="h-5 w-5" />}>Correo</CardTitle>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>
                  <a className="contact-link" href="mailto:leyendadesaturnino@gmail.com">
                    leyendadesaturnino@gmail.com
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="mailto:h.rocha3@gmail.com">
                    h.rocha3@gmail.com
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="mailto:pacojean0411@gmail.com">
                    pacojean0411@gmail.com
                  </a>
                </li>
              </ul>
            </Card>

            <Card>
              <CardTitle icon={<Phone className="h-5 w-5" />}>Teléfono</CardTitle>
              <p className="mt-3 text-neutral-300">
                <a className="contact-link" href="tel:8114866339">811 4866 339</a>
              </p>
            </Card>

            <Card>
              <CardTitle icon={<MapPin className="h-5 w-5" />}>Ubicación</CardTitle>
              <p className="mt-3 text-neutral-300">Chihuahua, México</p>
              <div className="mt-4 h-36 w-full rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black" />
              <p className="mt-2 text-xs text-neutral-500">Basados en Chihuahua · Viajamos a donde esté la historia.</p>
            </Card>
          </div>

          {/* Columna derecha: Formulario simple (mailto) */}
        
        </div>
      </section>


      {/* Estilos auxiliares */}
    
    </main>
  );
}

/* --- Componentes UI locales --- */
function Card({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
      {children}
    </div>
  );
}

function CardTitle({ icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[var(--color-amber-300)]">{icon}</span>
      <h2 className="text-lg font-semibold">{children}</h2>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-neutral-300">{label}</span>
      {children}
    </label>
  );
}
