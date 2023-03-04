import React, { useState } from 'react';
import './article.css';
import inserteImagen from '../../../../assets/mascotaCierzoCabeza.png'
import cierzoPet from '../../../../assets/mascotaCierzoEntera.png'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Article = () => {

  const textoParrafoOculto = "\n\nLas distintas secciones deportivas de la Asociación ofrecen actividades donde gays, lesbianas, bisexuales, transexuales y simpatizantes del colectivo LGTB+ puedan desarrollar una actividad deportiva en un ambiente de respeto y total libertad.\n\nTodas las personas que configuran esta Asociación son importantes. La implicación voluntaria de cada uno de los socios en la propuesta, desarrollo y organización de las actividades hacen posible el día a día deportivo del club.\n\nLa Asociación se creó en base al voleibol, ya que los fundadores tienen larga experiencia en dicho deporte (entrenadores, jugadores, colaboración activa con la Federación Aragonesa de Voleibol); con el tiempo la asociación ha ido ampliando sus secciones y actualmente cuenta con nuevas secciones: baloncesto (equipo masculino liga social bronce), natación, tenis, pádel, patinaje y ciclismo.\n\nCualquier propuesta encaminada a abrir una nueva sección deportiva será muy bienvenida, no dudes en compartirlo con nosotros en info@cierzolgtb.org.\n\nSi quieres colaborar con nosotros, no tienes más que decirlo estamos abiertos a propuestas y sobre todo a la participación.";
  const textoParrafo1Articulo1 = "\n\n¿Piensas que en el deporte todas las personas somos iguales? ¿Crees que todo está hecho en la lucha por la igualdad del colectivo LGTBI+?\n\nLos Juegos LGTBI+ de Zaragoza, son un evento deportivo, abierto a todo el mundo con una visión inclusiva.\n\nLa Asociación Deportiva Cierzo proLGTB+ organiza, de nuevo, los esperadísimos XV Juegos LGTBI de Zaragoza, que organizará los días 21, 22 y 23 de Abril, en colaboración con el área de Familias e Igualdad del Gobierno de Aragón, las concejalías de Igualdad, Deportes y Vicepresidencia del Ayuntamiento de Zaragoza. Visibilizamos.\n\nForma parte de los juegos y reivindica con nosotros  los derechos del colectivo LGTBI+ desde la práctica deportiva.\n\nLos Juegos están organizados por La Asociación Deportiva Cierzo proLGTB+, en colaboración con el área de Familias e Igualdad del Gobierno de Aragón, las concejalías de Igualdad, Deportes y Vicepresidencia del Ayuntamiento de Zaragoza. Visibilizamos y reivindicamos los derechos del colectivo LGTBI+ desde la práctica deportiva.\n\nEn esta edición, los Juegos de la AD Cierzo incluirán:\n"
  const textoParrafo2Articulo1 = "\n\nDa igual que nivel tengas, lo importante es participar y contribuir al avance de nuestro colectivo. La participación puede ser en forma deportiva, jugando en los diferentes deportes convocados o en forma de voluntariado, ayudándonos a llevar a cabo la organización y desarrollo de dichos juegos.\n\nAdemás de las competiciones, en Juegos de AD Cierzo, se organizan diversos eventos, como visitas turísticas, una cena y una fiesta para los participantes, colaboradores, simpatizantes o todas aquellas personas que quieran conocer la Asociación.\n\nParticipa en los juegos en forma deportiva, en alguno de los torneos convocados o en forma de voluntariado, ayudándonos a llevar a cabo la organización y desarrollo del evento.\n\nAdemás de las competiciones, en Juegos de AD Cierzo, se organizan diversos eventos, como visitas turísticas, una cena y una fiesta para los participantes, colaboradores, simpatizantes o todas aquellas personas que quieran conocer la Asociación.\n\nPara más información, no dudéis en contactar con nosotros a través de nuestra dirección de correo electrónico juegoscierzo@cierzolgtb.org\n\n¡¡Anímate y participa!!\n\n¡¡Ah!! El periodo de inscripción será del 10 de enero 2023 al 8 de abril 2023."
  const textoParrafoArticulo2 = "\n\nLa Asociación Deportiva Cierzo proLGTB+ es un Club Deportivo Elemental cuyos objetivos son la participación deportiva y conseguir la plena integración de los deportistas LGTB en nuestra comunidad."
  const [mostrarMas, setMostrarMas] = useState(false);

  function toggleMostrarMas() {
    setMostrarMas(!mostrarMas);
  }

  return (
    <div className='cierzo-games_container'>
      <div className='cierzo-games_article'>
        <h1 className='cierzo-games_title'>
          Juegos de AD Cierzo
        </h1>
        <div className='cierzo-games_article_content'>
          <div className='cierzo-games_article_subcontent'>
            <p className='cierzo-games_paragraph'>
              {textoParrafo1Articulo1.split('\n').map((texto, indice) => (
                <React.Fragment key={indice}>
                  {texto}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className='cierzo-games_paragraph_list'>
              <ul>
                <li>Voleibol mixto</li>
                <li>Voleibol femenino</li>
                <li>Voley playa mixto</li>
                <li>Futbol Sala femenino</li>
                <li>Baloncesto Mixto</li>

              </ul>
            </p>
            <p className='cierzo-games_paragraph'>
              {textoParrafo2Articulo1.split('\n').map((texto, indice) => (
                <React.Fragment key={indice}>
                  {texto}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <img src={cierzoPet} className='cierzo-games_img_pet' />
        </div>
      </div>
      <div className='cierzo-games_article'>
        <h1 className='cierzo-games_title'>
          Quiénes somos
        </h1>
        <div className='cierzo-games_article_content'>
          <img src={inserteImagen} className='cierzo-games_img' />
          <div className='cierzo-games_article_subcontent'>
            <p className='cierzo-games_paragraph'>
              {textoParrafoArticulo2.split('\n').map((texto, indice) => (
                <React.Fragment key={indice}>
                  {texto}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className='cierzo-games_paragraph'>
              {mostrarMas
                ? textoParrafoOculto.split('\n').map((texto, indice) => (
                  <React.Fragment key={indice}>
                    {texto}
                    <br />
                  </React.Fragment>
                ))
                : ''}
            </p>
            <div className='cierzo-games_btn_container'>
              <button onClick={toggleMostrarMas} className='cierzo-games_btn'>
                {mostrarMas ? 'Leer menos ' : 'Leer más '}
                {mostrarMas ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article