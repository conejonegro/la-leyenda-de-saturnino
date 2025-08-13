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
