import React from "react";

// IMAGES
import aboutImg from "@/assets/img/estral-img.png";
// STYLES
import "./About.css";
import Carousel from "@/components/Carousel/Carousel";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-image-container">
          <img className="about-image" src={aboutImg} alt="Estral" />
        </div>

        <article className="about">
          <h1>Somos</h1>
          <p className="about-p">
            ¡Somos Estral, un equipo de esports que entiende que para alcanzar
            metas excepcionales, es vital saber jugar en equipo!
          </p>
          <p className="about-p">
            Nuestro origen se remonta a México en el año 2019, cuando nos
            fundamos con la ambición de impulsar y desarrollar la escena
            competitiva en nuestra región. Nos apasiona ser reconocidos como ese
            club competitivo, siempre ansiosos por ir más allá y comprometidos a
            tener a los mejores jugadores, tanto dentro como fuera de las
            partidas, ya que ellos son el corazón y el alma de Estral.
          </p>
          <p className="about-p">
            Aspiramos a crear una familia unida por la pasión hacia los
            videojuegos. Esta familia no solo incluye a nuestros jugadores y
            creadores de contenido, sino también a todo nuestro equipo y la
            comunidad que juntos construiremos. Nos comprometemos a acompañar el
            crecimiento de nuestros jugadores, entrenadores, analistas, managers
            y streamers, proporcionándoles las herramientas necesarias para que
            puedan desarrollarse plenamente y mostrar su potencial al mundo
            entero.
          </p>
          <p className="about-p">
            En Estral, no solo jugamos para ganar, sino que también nos
            esforzamos por ser una comunidad vibrante y solidaria, donde cada
            miembro contribuye al éxito colectivo. Juntos, trabajamos hacia un
            objetivo común: alcanzar nuevas alturas en los esports, dejando una
            huella duradera en la historia de los videojuegos en México y más
            allá.
          </p>
          <p className="about-p">
            ¡Únete a nosotros en este emocionante viaje mientras llevamos la
            pasión por los esports a nuevos horizontes!
          </p>
        </article>
        <div className="sponsor-container">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default About;
