"use client";

import Link from "next/link";
import { Clapperboard, Users, PenSquare, ExternalLink, Film } from "lucide-react";

export default function Equipo() {
  return (
    <main id="equipo" className="bg-white text-gray-900">
      {/* Borde superior coherente con el Nav/Footer */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <header className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Crew</h1>
          <p className="mt-3 text-gray-600">
            “La Leyenda de Saturnino” es un cortometraje surrealista y fantástico hecho en Chihuahua por un equipo 100% mexicano.
          </p>
        </header>

        {/* Director / Guionista */}
        <section id="director" className="mt-12">
          <SectionHeading icon={<Clapperboard className="h-5 w-5" />} title="Dirección y Guion" />
          <BioCard
            name="Hernán Rocha"
            role="Director · Guionista · Editor · Músico"
            body={
              <>
                <p>
                  Hernán Rocha nació en la Ciudad de México el 15 de marzo de 1990. Estudió Comunicación (especialidad en Producción
                  Audiovisual) y Estudios Humanísticos en el ITESM, además de diplomados en Dirección Cinematográfica, Producción de Audio y
                  Narrativa Visual con maestros como Carlos Carrera y Juan Mora Catlett.
                </p>
                <p className="mt-3">
                  Como guionista, músico, director y editor ha trabajado en documental, videos musicales, comercial y ficción. Destaca su
                  trabajo en el segmento <em>Taxímetro Libre</em> de la ganadora del Cabrito de Plata 2011 <em>Amor del Regio</em>, y el
                  cortometraje <em>Rebeldía</em> (2014), selección oficial del Festival de Cine y Derechos Humanos de Barcelona, entre otros
                  festivales en España, México y Colombia. Como asistente de dirección participó en los largometrajes <em>Pobo’tzu</em> (2021)
                  y <em>Xam-a-Pan</em> (en postproducción).
                </p>
                <p className="mt-3">Actualmente trabaja como editor y desarrolla proyectos futuros.</p>
              </>
            }
          />
        </section>

        {/* Producción */}
        <section id="produccion" className="mt-12">
          <SectionHeading icon={<Users className="h-5 w-5" />} title="Producción" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BioCard
              name="Rodrigo Martínez Alanís"
              role="Productor"
              body={
                <>
                  <p>
                    Productor de cine y audiovisual con base en CDMX. Ciencias de la Comunicación (UNAM, 2004). Ha sido productor, productor
                    ejecutivo y productor en línea en cine, TV y publicidad por más de 15 años. Créditos: <em>El silencio es bienvenido</em> (CCC, 2014, productor en línea y asociado), <em>Verónica</em> (The Visualistas, 2017, productor en línea de 2ª unidad), <em>La Promesa</em> (2018, Leos Films, productor en línea), <em>Po’bo’tzu</em> (2022, PIANO, gerente de producción y productor asociado).
                  </p>
                </>
              }
            />
            <BioCard
              name="Alfredo Gómez"
              role="Productor · Director Creativo (Clivus)"
              body={
                <>
                  <p>
                    Director creativo y realizador de publicidad. Ha dirigido comerciales para Vinkelespacio y diseño, Tacos Orientales de
                    Cuernavaca, el grupo musical Luna Nueva, entre otros. Participante del Ecofilm Festival 2017. Dirección y producción de
                    videos musicales: Millenium User, Festival Fiel mortandad – Exterminio, Exclusivos CH – Aléjate de mí, San Doctor –
                    Mandingo, RMS‑XXI – Fiestatardecer.
                  </p>
                  <p className="mt-3">
                    Diseño y producción sonora para danza: <em>Verde, naranja y flor</em> (Karen Bencomo), <em>Danza en caída libre</em> (Karen
                    Bencomo), <em>Mar de arena</em> (Juan Pablo Delgado).
                  </p>
                </>
              }
            />
          </div>

          {/* Co-guionista / Coordinador */}
        
        </section>

        {/* CREW */}
        <section id="crew" className="mt-12">
          <SectionHeading icon={<Film className="h-5 w-5" />} title="Crew" />
          <CrewGrid
            groups={[
              {
                title: "Producción",
                rows: [
                  ["Alfredo Gómez González", "Productor"],
                  ["Rodrigo Martínez Alanís", "Productor en línea"],
                  ["Francisco Piñón Arellano", "Coordinador de producción"],
                  ["Karen Bencomo", "Asistente de producción"],
                ],
              },
              {
                title: "Dirección",
                rows: [
                  ["Francisco Javier Piñón Arellano", "Guionista"],
                  ["Hernán Rocha", "Guionista / Director"],
                  ["Misael Morales Parra", "1er Asistente de dirección"],
                  ['Eduardo "Tyler" Rocha', "2º Asistente de dirección"],
                ],
              },
              {
                title: "Fotografía",
                rows: [
                  ["Alejandro Villanueva", "Dirección de fotografía"],
                  ["Claudio Grijalva", "Asistente de cámara"],
                  ["Edgardo López", "Gaffer"],
                ],
              },
              {
                title: "Sonido",
                rows: [
                  ["Ariel Baca", "Sonidista"],
                  ["Sergio Cerecedo", "Microfonista"],
                ],
              },
              {
                title: "Arte",
                rows: [
                  ["José Corral", "Director de arte"],
                  ["Enrique De Los Santos Gómez", "Asistente de arte"],
                  ["José Corral", "Diseñador Gráfico"],
                  ["Susana Castillo", "Vestuario / Maquillaje"],
                ],
              },
              {
                title: "Data / Equipo",
                rows: [
                  ["Ruary Vargas Vallejo", "Data Manager"],
                  ["Octavio Gasca", "Equipo móvil e iluminación"],
                  ["Alejandro Villarreal", "Cámara"],
                ],
              },
              {
                title: "FX / VFX",
                rows: [
                  ["Aarón Ximello", "Efectos especiales"],
                  ["Andres Handal Ortiz", "Supervisor de VFX"],
                  ["Lorena Nájera Pacheco", "Supervisora de VFX"],
                ],
              },
            ]}
          />
        </section>

        {/* CAST BIOS */}
        <section id="reparto" className="mt-12">
          <SectionHeading title="Elenco Destacado" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CastCard
              name="Mario Zaragoza"
              body={
                <>
                  <p>
                    Actor de reparto con amplia trayectoria en la industria del cine mexicano. Su carrera se extiende desde 1998 hasta la
                    actualidad. Es conocido por su participación en <em>Man on Fire</em> (2004) y <em>Get the Gringo</em> (2012); además, ha
                    protagonizado películas como <em>Desierto Adentro</em> (2008) y <em>Un Embrujo</em> (1998). Actualmente presenta su obra
                    de teatro <em>FINITUD</em> en distintas sedes del país.
                  </p>
                </>
              }
              imdb="https://www.imdb.com/name/nm0953344/"
            />
            <CastCard
              name="Claudia Santiago"
              body={
                <>
                  <p>
                    Actriz, escritora y directora mexicana; investigadora de la tradición oral y sus manifestaciones rituales. Egresada de la
                    Escuela Nacional de Teatro del INBA y diplomada en Theatre for the People en Madrid. Ha participado en{" "}
                    <em>Nadie sabrá nunca</em>, <em>Guie Xhuba</em>, <em>The Blue Eyes</em>, y en series como “Niñas promedio” (Canal Once) y
                    “El recluso” (Telemundo).
                  </p>
                  <p className="mt-2">Desde 2006 dirige la Compañía Espejo Mutable Teatro.</p>
                </>
              }
              imdb="https://www.imdb.com/name/nm2752237/"
            />
          </div>
        </section>

      </div>
    </main>
  );
}

/** ---------- Subcomponentes ---------- */

function SectionHeading({ title, icon }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {icon ? (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100 text-amber-600">
          {icon}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
    </div>
  );
}

function BioCard({ name, role, body, icon }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-start gap-3">
        {icon ? <div className="mt-1 text-amber-600">{icon}</div> : null}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          {role ? <p className="text-sm text-gray-600">{role}</p> : null}
          <div className="mt-3 text-gray-700 leading-relaxed">{body}</div>
        </div>
      </div>
    </article>
  );
}

function CrewGrid({ groups }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {groups.map((g) => (
        <div key={g.title} className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
          <ul className="mt-3 divide-y divide-gray-100">
            {g.rows.map(([person, role]) => (
              <li key={person + role} className="flex items-center justify-between py-2">
                <span className="text-gray-900">{person}</span>
                <span className="text-sm text-gray-600">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CastCard({ name, body, imdb }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="mt-2 text-gray-700 leading-relaxed">{body}</div>
      {imdb ? (
        <Link
          href={imdb}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center gap-2 text-amber-600 hover:text-amber-500"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="relative">
            Ver en IMDb
            <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>
      ) : null}
    </article>
  );
}
