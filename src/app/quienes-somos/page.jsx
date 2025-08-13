// app/quienes-somos/page.jsx
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

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
          <p className="uppercase tracking-widest text-xs text-neutral-400 mb-3">
            La Leyenda de Saturnino
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Somos un <span className="underline decoration-white/30">estudio de grabación</span>
            <br className="hidden md:block" /> en Chihuahua.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Trabajamos desde el norte de México para descentralizar la producción cinematográfica.
            Nuestro enfoque está en la obra: el guion, el sonido, la imagen y el ritmo.
            Las biografías del equipo viven en la página de
            <Link className="ml-1 underline decoration-white/30 hover:decoration-white" href="/equipo">Equipo</Link>.
          </p>
        </div>
      </section>


      {/* CAPACIDADES */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Qué hacemos</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
              Dirección y guion
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
              Grabación y edición
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
              Diseño y producción sonora
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
              Música original
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
              Postproducción (edición y conformado)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
              Coordinación y logística de producción
            </li>
          </ul>
        </div>
      </section>

      {/* CRÉDITOS PRINCIPALES (teaser hacia /equipo) */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Créditos principales</h2>
          <Link
            href="/equipo"
            className="text-sm underline decoration-white/30 hover:decoration-white"
          >
            Ver biografías completas
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-neutral-400">Dirección y Guion</p>
            <h3 className="mt-1 font-medium">Hernán Rocha</h3>
            <p className="mt-1 text-sm text-neutral-300">Director · Guionista · Editor · Músico</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-neutral-400">Producción</p>
            <h3 className="mt-1 font-medium">Rodrigo Martínez Alanís</h3>
            <p className="mt-1 text-sm text-neutral-300">Productor</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-neutral-400">Dirección Creativa</p>
            <h3 className="mt-1 font-medium">Alfredo Gómez</h3>
            <p className="mt-1 text-sm text-neutral-300">Productor · Director Creativo (Clivus)</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-neutral-400">Co-guion y Producción</p>
            <h3 className="mt-1 font-medium">Francisco Piñón (Paco Jean)</h3>
            <p className="mt-1 text-sm text-neutral-300">Co-guionista · Coordinador de Producción</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800 bg-black/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-neutral-800 p-8 text-white md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">¿Quieres colaborar o agendar? </h3>
              <p className="mt-1 text-sm text-neutral-300">Escríbenos para revisarlo juntos.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:hola@laleyendadesaturnino.mx"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:shadow"
              >
                Contacto
              </a>
              <Link
                href="/equipo"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
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
