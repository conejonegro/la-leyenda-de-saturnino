"use client";

import Link from "next/link";
import { CalendarDays, Shield, Clapperboard, Timer, Users, Award, ExternalLink, Film } from "lucide-react";

export default function FilmIntro() {
  // Datos base
  const goal = 200000;
  const raised = 100000; // “casi” 100k: ajusta si quieres mostrar exacto
  const progress = Math.min(100, Math.round((raised / goal) * 100));

  const castMain = [
    "Mario Zaragoza",
    "Claudia Santiago",
    "Gerardo Castañeda",
    "Mauricio Torres",
  ];
  const castAlso = ['Ana Nieto', 'Armando Seañez', 'Octavio "Chez" Bolaños'];

  const facts = [
    { icon: <CalendarDays className="h-4 w-4" />, label: "Fecha de estreno", value: "Abril 2025" },
    { icon: <Shield className="h-4 w-4" />,        label: "Clasificación",    value: "B15" },
    { icon: <Clapperboard className="h-4 w-4" />,  label: "Género",           value: "Fantasía / Surrealismo" },
    { icon: <Timer className="h-4 w-4" />,         label: "Duración",         value: "15 minutos" },
    { icon: <Users className="h-4 w-4" />,         label: "Dirigida por",     value: "Hernán Rocha" },
    { icon: <Users className="h-4 w-4" />,         label: "Producción",       value: "Alfredo Gómez" },
  ];

  return (
    <section className="bg-white text-gray-900">
      {/* Borde superior ámbar, coherente con el Nav/Footer */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            La Leyenda de Saturnino
          </h2>
          <p className="mt-2 text-gray-600">
            Un cortometraje surrealista y fantástico, orgullosamente filmado en Chihuahua.
          </p>
        </div>

        {/* Grid principal */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Columna izquierda: ficha + sinopsis */}
          <div className="lg:col-span-2">
            {/* Ficha técnica */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {facts.map((f) => (
                <FactItem key={f.label} icon={f.icon} label={f.label} value={f.value} />
              ))}
            </div>

            {/* Sinopsis */}
            <div className="mt-10 space-y-5 text-gray-700 leading-relaxed">
              <p>
                Esta obra explora la búsqueda de sentido, la autodestrucción humana y el riesgo inherente al libre albedrío,
                presentando una visión única sobre la condición humana.
              </p>
              <p>
                Impulsado por un talentoso equipo 100% mexicano, este proyecto busca descentralizar las producciones cinematográficas,
                narrando una historia desde la perspectiva chihuahuense.
              </p>
           
            </div>

            {/* Reparto */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Reparto</h3>
              <div className="flex flex-wrap gap-2">
                {castMain.map((name) => (
                  <Pill key={name}>{name}</Pill>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                También actúan: {castAlso.join(", ")}.
              </p>
            </div>

            {/* Material transmedia */}
          
          </div>

          {/* Columna derecha: campaña */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-2 text-amber-700">
                <Award className="h-5 w-5" />
                <p className="text-sm text-amber-700">
                  Ganador del estímulo <span className="font-medium">Eká</span> del Gobierno del Estado de Chihuahua
                </p>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900">Ayúdanos a culminar la postproducción</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Meta: ${formatMoney(goal)} MXN · Recaudado: ~${formatMoney(raised)} MXN
                </p>

                {/* Barra de progreso */}
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-2 bg-amber-400 rounded-full transition-[width] duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-gray-600">{progress}% de la meta</div>
                </div>

                <p className="mt-4 text-sm text-gray-600">
                  Quedan menos de 4 semanas para alcanzar la meta en Kickstarter (plataforma con máximo de 60 días;
                  si no se llega, se regresan las aportaciones).
                </p>

                <div className="mt-5">
                  <KickstarterCTA fullWidth />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponentes ---------- */

function FactItem({ icon, label, value }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-2 text-gray-600">
        {icon}
        <span className="text-xs tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-sm sm:text-base font-medium text-gray-900">{value}</div>
      {/* subrayado ámbar coherente */}
      <span className="mt-3 block h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
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
        "inline-flex items-center justify-center gap-2 rounded-lg border border-amber-500/50",
        "bg-amber-500 hover:bg-amber-600 text-black font-medium",
        "px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
        fullWidth ? "w-full" : "",
      ].join(" ")}
    >
      <Film className="h-4 w-4" />
      <span>Apóyanos en Kickstarter</span>
      <ExternalLink className="h-4 w-4" />
    </Link>
  );
}

/* ---------- Helpers ---------- */
function formatMoney(n) {
  try {
    return n.toLocaleString("es-MX");
  } catch {
    return String(n);
  }
}
