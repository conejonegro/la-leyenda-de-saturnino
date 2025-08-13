// next.config.mjs — formato ESM (para evitar "module is not defined in ES module scope")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permite cargar imágenes remotas desde Unsplash (y puedes agregar más dominios si los usas)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Ejemplos opcionales:
      // { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/**' }, // thumbnails de YouTube
      // { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;