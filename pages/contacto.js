import React from 'react';
import Grid from 'components/Grid';
import Navbar from 'components/Navbar';
import Image from 'next/image';
import sofaSVG from '../public/img/contacto.webp';
import { useAppQuery, useAppWidth } from 'context';
import useMedia from 'hooks/useMedia';
import { motion } from 'framer-motion';
import ButtonWsp from 'components/ButtonWsp';
import useLoaded from 'hooks/useLoaded';
import SEO from 'components/SEO';

const metadata = {
  title: 'Contáctanos para Servicios de Arquitecto en Perú - Visualiza.pe',
  description:
    'Comunícate con un arquitecto en Perú para desarrollar y visualizar tu próximo proyecto arquitectónico.',
  open_graph: {
    url: 'https://www.visualiza.pe/contacto',
    image: '/img/contacto.webp',
  },
};

export default function Home() {
  const [width] = useAppWidth();
  const query = useAppQuery();
  const isMobile = useMedia('(max-width: 767px)');
  const loaded = useLoaded();

  const size = React.useMemo(() => {
    if (query === 'xl') {
      return {
        imgWidth: 7,
        textWidth: 4,
      };
    } else if (query === 'lg') {
      return {
        imgWidth: 6,
        textWidth: 7,
      };
    } else if (query === 'md') {
      return {
        imgWidth: 5.5,
        textWidth: 4,
      };
    } else {
      return {
        imgWidth: 6,
        textWidth: 6,
      };
    }
  }, [query]);

  return (
    <>
      <SEO config={metadata} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap my-3 mx-0 md:my-4 md:ml-0 md:mr-4" // Cambié mx-3 a mx-0 para evitar márgenes
      >
        <Navbar />
        <div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
          <Grid hidden />
          <div className={`flex flex-col ${isMobile ? 'items-center' : 'flex-row'}`}>
            <h1
              className={`font-sec ${isMobile ? 'text-2xl text-center mb-4' : 'md:text-2xl lg:text-3xl'} pl-1`}
              
              style={{
                width: '100%',
                marginTop: `${width * (isMobile ? 1.5: 0.6)}px`,
                marginLeft: `${width * (isMobile ? 0 : 0.7)}px`,
              }}
            >
              Comienza a Visualizar tu<br></br>
              Próximo Proyecto
            </h1>

            {/* Formulario incrustado */}
            <div className={`mt-4 ${isMobile ? 'w-full' : 'w-1/3'}`} >
              <iframe
                aria-label='Contacto Página Web'
                frameBorder="0"
                style={{ height: "800px", width: "100%", border: "none" }} // Altura a 800px y ancho completo
                src='https://forms.zohopublic.com/digitalizala/form/ContactoVisualiza/formperma/KVySmLfDTieWktj6EWyqsHZdKfMmVhB9b-YojiPhn-c'
              ></iframe>
            </div>
            

            {/* Imagen del sofá, visible solo en escritorio */}
            {!isMobile && (
              <div className="absolute top-0 right-0 w-1/2  md:h-[61%] lg:h-[62%] xl:h-[62%]"
              style={{
                marginTop: `${width * (isMobile ? 1.5: 0.6)}px`,
              }}
              >
                <Image
                  src={sofaSVG}
                  alt="Silla en fondo amarillo"
                  layout="fill"
                  className="scale-10"
                />
              </div>
            )}
          </div>
        </div>
        <ButtonWsp />
      </motion.main>
    </>
  );
}
