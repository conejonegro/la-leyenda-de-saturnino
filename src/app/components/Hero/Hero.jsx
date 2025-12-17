import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Image
          src="/assets/leyenda-nuevo-logo-1.png"
          alt="La Leyenda de Saturnino"
          width={520}
          height={200}
          className="mx-auto w-56 sm:w-96 drop-shadow-md"
          priority
        />
        <p className="mt-6 text-lg text-gray-700">Un cortometraje desde Chihuahua</p>

        <div className="mt-6 flex justify-center gap-3">
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
    </section>
  );
}
