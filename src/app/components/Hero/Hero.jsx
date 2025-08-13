import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/hero-home.png)', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
      <h1 className="text-yellow-500 text-4xl sm:text-6xl font-bold drop-shadow-lg">
       
      </h1>
    </div>
  );
}
