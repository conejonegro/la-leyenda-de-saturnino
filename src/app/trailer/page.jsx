"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ------------------------------------------------------------
// Reusable UI atoms (coherentes con tu estilo) – Javascript puro
// ------------------------------------------------------------
function FactItem({ icon, label, value }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-center gap-2 text-white/70">
        {icon}
        <span className="text-xs tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-sm sm:text-base font-medium">{value}</div>
      <span className="mt-3 block h-[2px] w-0 bg-amber-400/90 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-sm">
      {children}
    </span>
  );
}

// ------------------------------------------------------------
// Trailer Player (YouTube o MP4)
// ------------------------------------------------------------
function TrailerPlayer({ youtubeId, src, poster, autoPlay = false, muted = true }) {
  const isYouTube = !!youtubeId;
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <div className="aspect-video w-full">
        {isYouTube ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}`}
            title="Trailer – La Leyenda de Saturnino"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            className="h-full w-full"
            poster={poster}
            controls
            autoPlay={autoPlay}
            muted={muted}
            playsInline
          >
            {src && <source src={src} type="video/mp4" />}
            Tu navegador no soporta video HTML5.
          </video>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Galería
// ------------------------------------------------------------
const FALLBACK_IMAGES = [
  "/assets/galeria/galeria-1.png",
  "/assets/galeria/galeria-2.png",
  "/assets/galeria/galeria-3.png"
];

function Gallery({ images = FALLBACK_IMAGES }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4">
      {images.map((src, idx) => (
        <motion.div
          key={src + idx}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.35, delay: idx * 0.03 }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
        >
          <Image
            src={src}
            alt={`Fotograma ${idx + 1} de La Leyenda de Saturnino`}
            width={1200}
            height={800}
            className="h-36 w-full object-cover sm:h-40 md:h-44 lg:h-52 transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}

// ------------------------------------------------------------
// Página de Trailer
// ------------------------------------------------------------
export default function TrailerPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <section className="mb-10 flex flex-col items-start gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            La Leyenda de Saturnino — Trailer
          </motion.h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Una mirada cruda a la búsqueda de sentido, el vértigo del libre albedrío y la autodestrucción humana, contada desde Chihuahua.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Pill>Trailer oficial</Pill>
          <Pill>Equipo 100% mexicano</Pill>
        </div>
      </section>

      <section className="mb-12">
        <TrailerPlayer youtubeId="OfZrLVyDPqY" autoPlay={false} muted={false} />
      {/*}  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <FactItem icon={<span>🎬</span>} label="Duración" value="1:57" />
          <FactItem icon={<span>📍</span>} label="Origen" value="Chihuahua, MX" />
          <FactItem icon={<span>🗓️</span>} label="Año" value="2025" />
          <FactItem icon={<span>🏆</span>} label="Selección" value="Festival TBD" />
        </div> */}
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
         {/* <h2 className="text-xl font-medium tracking-tight sm:text-2xl">Galería</h2> */}
         
        </div>
     { /*  <Gallery />*/ }
      </section>
    </main>
  );
}
