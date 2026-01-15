import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center text-gray-900">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/galeria/still-3.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/45" aria-hidden="true" />
      <div className="mx-auto max-w-3xl px-6 pt-6 pb-10 text-center">
        <Image
          src="/assets/logo-real-saturnino.png"
          alt="La Leyenda de Saturnino"
          width={1024}
          height={400}
          className="mx-auto w-64 sm:w-[28rem] md:w-[36rem] drop-shadow-md"
          priority
        />
        <div className="mt-8">
          <p className="text-lg text-gray-700">Un cortometraje desde Chihuahua</p>

          <div className="mt-3 flex justify-center gap-3">
            <a
              href="#trailer"
              className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-500 transition"
            >
              Ver trailer
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
