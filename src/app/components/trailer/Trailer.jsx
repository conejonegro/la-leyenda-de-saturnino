"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function FactItem({ icon, label, value }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-2 text-gray-600">
        {icon}
        <span className="text-xs tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-sm sm:text-base font-medium text-gray-900">{value}</div>
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

function TrailerPlayer({ youtubeId, src, poster, autoPlay = false, muted = true }) {
  const isYouTube = !!youtubeId;
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow">
      <div className="aspect-video w-full bg-black/5">
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
            className="h-full w-full bg-black"
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

const FALLBACK_IMAGES = [
  "/assets/galeria/still-1.jpg",
  "/assets/galeria/still-2.png",
  "/assets/galeria/still-3.png",
  "/assets/galeria/still-4.png",
  "/assets/galeria/still-5.png",
  "/assets/galeria/still-6.png",
  "/assets/galeria/still-7.png",
];

function Gallery({ images = FALLBACK_IMAGES }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4">
        {images.map((src, idx) => (
          <motion.button
            key={src + idx}
            type="button"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            onClick={() => setActiveImage({ src, idx })}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white text-left"
            aria-label={`Ver fotograma ${idx + 1} en grande`}
          >
            <Image
              src={src}
              alt={`Fotograma ${idx + 1} de La Leyenda de Saturnino`}
              width={620}
              height={400}
              className="h-36 w-full object-cover sm:h-40 md:h-44 lg:h-52 transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
          </motion.button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative flex w-full max-w-5xl justify-center" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-sm text-white/80 hover:text-white"
            >
              Cerrar
            </button>
            <Image
              src={activeImage.src}
              alt={`Fotograma ${activeImage.idx + 1} de La Leyenda de Saturnino`}
              width={640}
              height={500}
              sizes="(min-width: 1024px) 80vw, 90vw"
              className="max-h-[80vh] w-auto max-w-[90vw] rounded-xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function Trailer() {
  return (
    <main id="trailer" className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
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
        <TrailerPlayer youtubeId="5a3kqcXkDck" autoPlay={false} muted={false} />
        
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight sm:text-2xl">Galería</h2>
        </div>
        <Gallery />
      </section>
    </main>
  );
}
