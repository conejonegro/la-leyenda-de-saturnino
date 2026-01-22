"use client";

import { CalendarDays, Shield, Clapperboard, Timer, Users, Award } from "lucide-react";

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
    "Ana Nieto",
    "Armando Seañez",
    "Chezzaro Bolaños Ledezma"
  ];


  const facts = [
    { icon: <CalendarDays className="h-4 w-4" />, label: "Fecha de estreno", value: "Abril 2025" },
    { icon: <Shield className="h-4 w-4" />,        label: "Clasificación",    value: "B15" },
    { icon: <Clapperboard className="h-4 w-4" />,  label: "Género",           value: "Fantasía / Surrealismo" },
    { icon: <Timer className="h-4 w-4" />,         label: "Duración",         value: "20 minutos" },
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
             
            </div>

            {/* Material transmedia */}
          
          </div>

          {/* Columna derecha: campaña */}
         
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

/* ---------- Helpers ---------- */
function formatMoney(n) {
  try {
    return n.toLocaleString("es-MX");
  } catch {
    return String(n);
  }
}
