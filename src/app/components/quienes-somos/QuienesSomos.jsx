
import Link from "next/link";

export const metadata = {
  title: "Quiénes Somos | La Leyenda de Saturnino",
  description:
    "Estudio de grabación y producción audiovisual con sede en Chihuahua. Enfocado en la obra; las biografías del crew viven en la página de Equipo.",
  openGraph: {
    title: "Quiénes Somos | La Leyenda de Saturnino",
    description:
      "Estudio de grabación y producción audiovisual con sede en Chihuahua.",
    type: "website",
    locale: "es_MX",
  },
};

export default function QuienesSomos() {
  return (
    <main id="quienes-somos" className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
          <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">
            La Leyenda de Saturnino
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
            Somos un <span className="underline decoration-amber-200">estudio de grabación</span>
            <br className="hidden md:block" /> en Chihuahua.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            Trabajamos desde el norte de México para descentralizar la producción cinematográfica.
            Nuestro enfoque está en la obra: el guion, el sonido, la imagen y el ritmo.
            Las biografías del equipo viven en la página de
            <Link className="ml-1 underline decoration-amber-200 hover:decoration-amber-300 text-gray-800" href="/equipo">Equipo</Link>.
          </p>
        </div>
      </section>


      {/* CAPACIDADES */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Qué hacemos</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800" />
              Dirección y guion
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800" />
              Grabación y edición
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800" />
              Diseño y producción sonora
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800" />
              Música original
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800" />
              Postproducción (edición y conformado)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800" />
              Coordinación y logística de producción
            </li>
          </ul>
        </div>
      </section>


      {/* CTA */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gray-50 p-8 text-gray-900 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">¿Quieres colaborar o agendar? </h3>
              <p className="mt-1 text-sm text-gray-700">Escríbenos para revisarlo juntos.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/#contacto"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow"
              >
                Contacto
              </Link>
              <Link
                href="/#equipo"
                className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                Conocer al equipo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
