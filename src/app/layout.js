// app/layout.js (o app/layout.jsx)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "La Leyenda de Saturnino",
  description: "Una película de fe y destino - Dirigida por Hernán Rocha y producida por Paco Jean",
  openGraph: {
    title: "La Leyenda de Saturnino",
    description: "Una película de fe y destino - Dirigida por Hernán Rocha y producida por Paco Jean",
    images: [
      {
        url: "/assets/thumbnail.jpeg",
        width: 1200,
        height: 630,
        alt: "La Leyenda de Saturnino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Leyenda de Saturnino",
    description: "Una película de fe y destino - Dirigida por Hernán Rocha y producida por Paco Jean",
    images: ["/assets/thumbnail.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Todo lo que no sea <head>/<body> va AQUÍ adentro */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
