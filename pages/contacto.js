import React from 'react';
import Grid from 'components/Grid';
import Navbar from 'components/Navbar';
import Image from 'next/image';
import sofaSVG from '../public/img/sofa.svg';
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
				className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4"
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					<Grid hidden />
					<div className={`flex flex-col ${isMobile ? 'items-center' : 'flex-row'}`}>
						<h1
							className={`font-sec ${isMobile ? 'text-2xl text-center mb-4' : 'text-3xl'} pl-1`}
							style={{
								width: `${width * 24}px`,
								marginTop: `${width * (isMobile ? 1.5 : 1)}px`,
							}}
						>
							Comienza a<br /> Visualizar tu <br />
							Próximo Proyecto.
						</h1>

						{/* Formulario incrustado */}
						<div className={` ${isMobile ? 'w-full' : 'w-1/3'}`}>
							<iframe
								aria-label='Contacto Página Web'
								frameBorder="0"
								style={{ height: "800px", width: "100%", border: "none" }} // Cambié la altura a 800px
								src='https://forms.zohopublic.com/visualiza/form/ContactoPaginaWeb/formperma/mn_4Lw0wSRSK6cpD-SzVf0SoaXtR-D1kRN-PMwf6r8Q'
							></iframe>

						</div>
					</div>

					{!isMobile && (
						<div className="absolute top-0 right-0 w-1/2 h-1/2">
							<Image
								src={sofaSVG}
								alt="Sofá y lámpara"
								layout="responsive"
								className="scale-125"
							/>
						</div>
					)}
				</div>
				<ButtonWsp />
			</motion.main>
		</>
	);
}
