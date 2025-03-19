import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import Image from 'next/image'

import modelado3D from '../public/img/servicios/MODELADO_3D.webp'
import drone from '../public/img/servicios/VISTAS_AEREAS_DRONE.webp'
import visual1 from '../public/img/carrusel_servicios/DORM-PRINC-ETEN-_2_.webp'
import visual2 from '../public/img/carrusel_servicios/ACERCAMIENTO.webp'
import visual3 from '../public/img/carrusel_servicios/R6000-FINAL.webp'
import visual4 from '../public/img/carrusel_servicios/SALA-COMEDOR_PUMACAHUA-_3_.webp'
import visual5 from '../public/img/carrusel_servicios/SALA-DE-ESPERA-_2_.webp'
import plano1 from '../public/img/carrusel_servicios/CHECOR PORTA DPTO-102.jpg'
import plano2 from '../public/img/carrusel_servicios/CHECOR PORTA PISO 01.jpg'
import plano3 from '../public/img/carrusel_servicios/MONTE ALEGRE DPTO 501 P2.webp'
import plano4 from '../public/img/carrusel_servicios/IMN HENDERSON JACINTO DE LARA DPTO 201.webp'
import plano5 from '../public/img/carrusel_servicios/IMN HENDERSON JACINTO DE LARA DPTO 502 P3.webp'
import plano6 from '../public/img/carrusel_servicios/MONTE ALEGRE DPTO 102.webp'
import fachada1 from '../public/img/carrusel_servicios/ALJOVIN DIURNA.webp'
import fachada2 from '../public/img/carrusel_servicios/ALJOVIN NOCTURNA.webp'
import fachada3 from '../public/img/carrusel_servicios/FACHADA.webp'
import fachada4 from '../public/img/carrusel_servicios/FLORA 21.webp'
import fachada5 from '../public/img/carrusel_servicios/INCLÁN 21(1).webp'
import fachada6 from '../public/img/carrusel_servicios/INCLÁN 21.webp'
import interiorismore1 from '../public/img/carrusel_servicios/interiorismo_residencial/DORM PRINC ETEN (2) (1).webp'
import interiorismore2 from '../public/img/carrusel_servicios/interiorismo_residencial/DORM SEC (1).webp'
import interiorismore3 from '../public/img/carrusel_servicios/interiorismo_residencial/ESTAR_JUEGOS (1).webp'
import interiorismore4 from '../public/img/carrusel_servicios/interiorismo_residencial/HOME OFFICE .webp'
import interiorismore5 from '../public/img/carrusel_servicios/interiorismo_residencial/SALA (11).webp'
import interiorismore6 from '../public/img/carrusel_servicios/interiorismo_residencial/SALA COMEDOR (7).webp'
import interiorismore7 from '../public/img/carrusel_servicios/interiorismo_residencial/SALA COMEDOR .webp'
import interiorismore8 from '../public/img/carrusel_servicios/interiorismo_residencial/SALA GOURMET.webp'
import interiorismore9 from '../public/img/carrusel_servicios/interiorismo_residencial/SUM (2).webp'
import interiorismore10 from '../public/img/carrusel_servicios/interiorismo_residencial/TERRAZA (3).webp'

const visualizacion3d = [
	{
	  original: visual1.src,
	  thumbnail: visual1.src,
	},
	{
	  original: visual2.src,
	  thumbnail: visual2.src,
	},
	{
	  original: visual3.src,
	  thumbnail: visual3.src,
	},
	{
	  original: visual4.src,
	  thumbnail: visual4.src,
	},
	{
	  original: visual5.src,
	  thumbnail: visual5.src,
	}
  ];
  const planosdeventa = [
	{
	  original: plano1.src,
	  thumbnail: plano1.src,
	},
	{
	  original: plano2.src,
	  thumbnail: plano2.src,
	},
	{
	  original: plano3.src,
	  thumbnail: plano3.src,
	},
	{
	  original: plano4.src,
	  thumbnail: plano4.src,
	},
	{
	  original: plano5.src,
	  thumbnail: plano5.src,
	},
	{
		original: plano6.src,
		thumbnail: plano6.src,
	  }
  ];
  const fachadas = [
	{
	  original: fachada1.src,
	  thumbnail: fachada1.src,
	},
	{
	  original: fachada2.src,
	  thumbnail: fachada2.src,
	},
	{
	  original: fachada3.src,
	  thumbnail: fachada3.src,
	},
	{
	  original: fachada4.src,
	  thumbnail: fachada4.src,
	},
	{
	  original: fachada5.src,
	  thumbnail: fachada5.src,
	},
	{
		original: fachada6.src,
		thumbnail: fachada6.src,
	  }
  ];
  const interiorismore = [
	{
	  original: interiorismore1.src,
	  thumbnail: interiorismore1.src,
	},
	{
	  original: interiorismore2.src,
	  thumbnail: interiorismore2.src,
	},
	{
	  original: interiorismore3.src,
	  thumbnail: interiorismore3.src,
	},
	{
	  original: interiorismore4.src,
	  thumbnail: interiorismore4.src,
	},
	{
	  original: interiorismore5.src,
	  thumbnail: interiorismore5.src,
	},
	{
		original: interiorismore6.src,
		thumbnail: interiorismore6.src,
	  },
	  {
		original: interiorismore7.src,
		thumbnail: interiorismore7.src,
	  },
	  {
		original: interiorismore8.src,
		thumbnail: interiorismore8.src,
	  },
	  {
		original: interiorismore9.src,
		thumbnail: interiorismore9.src,
	  },
	  {
		original: interiorismore10.src,
		thumbnail: interiorismore10.src,
	  }
  ];
import { useAppQuery, useAppWidth } from 'context'

import useMedia from 'hooks/useMedia'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import useLoaded from 'hooks/useLoaded'
import ButtonWsp from 'components/ButtonWsp'
import SEO from 'components/SEO'

const metadata = {
	title: 'Servicios de Renders 3D y Render de Arquitectura en Lima y Perú - Visualiza.pe',
	description:
		'Especialistas en renders 3D y render de arquitectura para proyectos en Lima y Perú. Ofrecemos soluciones arquitectónicas con visualizaciones precisas y realistas.',
	open_graph: {
		url: 'https://www.visualiza.pe/servicios',
		image: '/img/servicios/VISUALIZACION_ARQUITECTONICA.webp',
	},
}


export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobileTablet = useMedia('(max-width: 1047px)')
	const isText2 = useMedia('(max-width: 580px)')
	const router = useRouter()
	const loaded = useLoaded()
	const [s1, setS1] = React.useState(false)
	const [s2, setS2] = React.useState('S1')

	const size = React.useMemo(() => {
		if (query === 'xl') {
			return { imgWidth: 23, imgHeight: 13, imgMl: 3 }
		} else if (query === 'lg') {
			return { imgWidth: 18, imgHeight: 10, imgMl: 2 }
		} else if (query === 'md') {
			return { imgWidth: 13, imgHeight: 7, imgMl: 1 }
		} else {
			return { imgWidth: 6, imgHeight: 4, imgMl: 1 }
		}
	}, [query])

	React.useEffect(() => {
		let timeout
		timeout = setTimeout(() => {
			setS1(!s1)
		}, 4000)
		return () => clearTimeout(timeout)
	}, [s1])

	React.useEffect(() => {
		let timeout
		timeout = setTimeout(() => {
			if (s2 === 'S1') {
				setS2('S2')
			} else if (s2 === 'S2') {
				setS2('S3')
			} else if (s2 === 'S3') {
				setS2('S4')
			} else {
				setS2('S1')
			}
		}, 3000)
		return () => clearTimeout(timeout)
	}, [s1])

	return (
		<>
			<SEO config={metadata} />
			{router.isReady ? (
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: loaded ? 1 : 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4"
				>
					<Navbar />
					<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
						<Grid loaded={loaded} />
						<div className="flex flex-wrap">
							{/* imgs */}
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Modelado 3D.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
									borderTop: '1px solid #dedede',
									borderLeft: '1px solid #dedede',
								}}
							>
								<Image
									src={modelado3D}
									alt="Modelado 3D de arquitectura para proyectos en Lima, Perú"
									placeholder="blur"
									className="object-cover"
								/>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Visualización 3D.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								 <ImageGallery items={visualizacion3d} 
								 showBullets={true}
								 showPlayButton={false}
								 autoPlay={true}

								 />
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Planos de Venta.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								 <ImageGallery items={planosdeventa} 
								 showBullets={true}
								 showPlayButton={false}
								 autoPlay={true}

								 />
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Tour virtual 360.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									className="ku-embed"
									frameBorder="0"
									allowFullScreen
									allow="xr-spatial-tracking; gyroscope; accelerometer"
									scrolling="no"
									style={{ width: '100%', height: '100%' }}
									src="https://storage.net-fs.com/hosting/6849337/16/"
								></iframe>
							</div>

							

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Recorridos virtuales.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/LthDz0yyUsE?rel=0"
									title="Recorridos virtuales"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Marketing inmobiliario.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/watch?v=8nWhqfcxT7Q"
									title="Marketing inmobiliario"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Vistas aéreas - drone.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/watch?v=8nWhqfcxT7Q"
									title="Vistas aereas"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Videotracking.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/watch?v=8nWhqfcxT7Q"
									title="Videotracking"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Diseño Integral de Fachadas.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								 <ImageGallery items={fachadas} 
								 showBullets={true}
								 showPlayButton={false}
								 autoPlay={true}

								 />
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Interiorismo Residencial.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								 <ImageGallery items={interiorismore} 
								 showBullets={true}
								 showPlayButton={false}
								 autoPlay={true}

								 />
							</div>
							
							{/* <h2
								style={{
									height: isText2 ? width * 2 : width,
									width: isText2 ? width * 6 : 'auto',
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Fotogrametría y levantamiento topográfico en&nbsp;drone.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
									backgroundColor: '#333',
								}}
							>
								<AnimatePresence>
									{s1 ? (
										<motion.img
											key={'/img/servicios/S1.webp'}
											src={'/img/servicios/S1.webp'}
											initial={{ opacity: 0.7 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0.8, transition: { duration: 0.8 } }}
											transition={{ duration: 0.8, delay: 0.6 }}
											alt="Fotogrametría y levantamiento topográfico en drone 1"
											className="w-full h-full object-cover"
										/>
									) : (
										<motion.img
											key={'/img/servicios/S2.webp'}
											src={'/img/servicios/S2.webp'}
											initial={{ opacity: 0.7 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0.8, transition: { duration: 0.8 } }}
											transition={{ duration: 0.8, delay: 0.6 }}
											alt="Fotogrametría y levantamiento topográfico en Lima realizado con drone"
											className="w-full h-full object-cover"
										/>
									)}
								</AnimatePresence>
							</div>

							<h2
								style={{
									height: isText2 ? width * 2 : width,
									width: isText2 ? width * 6 : 'auto',
									marginLeft: `${width * size.imgMl}px`,
									marginTop: width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Diseño integral de fachadas e&nbsp;interiorismo.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
									marginBottom: `${width * (isMobileTablet ? 1 : 2)}px`,
									backgroundColor: '#eee',
								}}
							>
								<AnimatePresence>
									{s2 === 'S1' ? (
										<motion.img
											key={'/img/servicios/Z1.webp'}
											src={'/img/servicios/Z1.webp'}
											initial={{ opacity: 0.7 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0.8, transition: { duration: 0.8 } }}
											transition={{ duration: 0.8, delay: 0.8 }}
											alt="Diseño integral de fachadas e interiorismo en Lima, Perú"
											className="w-full h-full object-cover"
										/>
									) : s2 === 'S2' ? (
										<motion.img
											key={'/img/servicios/Z2.webp'}
											src={'/img/servicios/Z2.webp'}
											initial={{ opacity: 0.7 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0.8, transition: { duration: 0.8 } }}
											transition={{ duration: 0.8, delay: 0.8 }}
											alt="Diseño integral de fachadas e interiorismo en Lima, Perú"
											className="w-full h-full object-cover"
										/>
									) : s2 === 'S3' ? (
										<motion.img
											key={'/img/servicios/Z3.webp'}
											src={'/img/servicios/Z3.webp'}
											initial={{ opacity: 0.7 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0.8, transition: { duration: 0.8 } }}
											transition={{ duration: 0.8, delay: 0.8 }}
											alt="Diseño integral de fachadas e interiorismo en Lima, Perú"
											className="w-full h-full object-cover"
										/>
									) : (
										<motion.img
											key={'/img/servicios/Z4.webp'}
											src={'/img/servicios/Z4.webp'}
											initial={{ opacity: 0.7 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0.8, transition: { duration: 0.8 } }}
											transition={{ duration: 0.8, delay: 0.8 }}
											alt="Diseño integral de fachadas e interiorismo en Lima, Perú"
											className="w-full h-full object-cover"
										/>
									)}
								</AnimatePresence>
							</div> */}
						</div>
					</div>
					<ButtonWsp />
				</motion.main>
			) : null}
		</>
	)
}
