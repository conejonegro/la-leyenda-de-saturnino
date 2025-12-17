// original: app/contacto/page.jsx
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

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-2xl border border-gray-200 bg-amber-50 p-3">
              <Clapperboard className="h-7 w-7 text-amber-600" />
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-gray-500">
                La Leyenda de Saturnino
              </p>
              <h1 className="mt-1 text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
                Contacto
              </h1>
              <p className="mt-3 max-w-2xl text-gray-700">
                Somos un estudio de grabación y producción audiovisual con sede en
                Chihuahua. Si tienes una colaboración, proyección o cobertura de
                prensa en mente, hablemos.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-60" />
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-1">
          {/* Columna izquierda: Datos de contacto */}
          <div className="space-y-6">
            <Card>
              <CardTitle icon={<Mail className="h-5 w-5" />}>Correo</CardTitle>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>
                  <a className="contact-link text-amber-600 hover:underline" href="mailto:leyendadesaturnino@gmail.com">
                    leyendadesaturnino@gmail.com
                  </a>
                </li>
                <li>
                  <a className="contact-link text-amber-600 hover:underline" href="mailto:h.rocha3@gmail.com">
                    h.rocha3@gmail.com
                  </a>
                </li>
                <li>
                  <a className="contact-link text-amber-600 hover:underline" href="mailto:pacojean0411@gmail.com">
                    pacojean0411@gmail.com
                  </a>
                </li>
              </ul>
            </Card>

            <Card>
              <CardTitle icon={<Phone className="h-5 w-5" />}>Teléfono</CardTitle>
              <p className="mt-3 text-gray-700">
                <a className="contact-link text-amber-600 hover:underline" href="tel:8114866339">811 4866 339</a>
              </p>
            </Card>

            <Card>
              <CardTitle icon={<MapPin className="h-5 w-5" />}>Ubicación</CardTitle>
              <p className="mt-3 text-gray-700">Chihuahua, México</p>
              <div className="mt-4 h-36 w-full rounded-xl border border-gray-200 bg-gray-50" />
              <p className="mt-2 text-xs text-gray-500">Basados en Chihuahua · Viajamos a donde esté la historia.</p>
            </Card>
          </div>

          {/* Columna derecha: Formulario simple (mailto) */}

        </div>
      </section>
    </main>
  );
}

/* --- Componentes UI locales --- */
function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      {children}
    </div>
  );
}

function CardTitle({ icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-amber-600">{icon}</span>
      <h2 className="text-lg font-semibold text-gray-900">{children}</h2>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-gray-600">{label}</span>
      {children}
    </label>
  );
}
