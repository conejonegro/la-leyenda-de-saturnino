import Hero from './components/Hero/Hero';
import FilmIntro from './components/Intro/Intro'; 
import Trailer from './components/trailer/Trailer';
import Equipo from './components/equipo/Equipo';
import QuienesSomos from './components/quienes-somos/QuienesSomos';
import Contacto from './components/contacto/Contacto';


export default function Home() {
  return (
    <>

    <Hero />
    <FilmIntro />
    <Trailer />
    <Equipo />
    <QuienesSomos />
    <Contacto />


    </>
  );
}
