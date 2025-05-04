import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import Image from 'next/image'

import  modelado3D from '../public/img/servicios/MODELADO_3D.webp'
import drone from '../public/img/servicios/VISTAS_AEREAS_DRONE.webp'
const visual1 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DORM-PRINC-ETEN-_2__odgk5q'
const visual2 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/ACERCAMIENTO_i945ys'
// const visual3 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/IMAGEN_ryhz4y'
import visual3 from '../public/img/carrusel_servicios/IMAGEN.jpg'
const visual4 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SALA-COMEDOR_PUMACAHUA-_3__tdvah4'
const visual5 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SALA-DE-ESPERA-_2__hucvji'
const plano1 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/PORTA_domyq3'
const plano2 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/PORTA2_h4rkif'
const plano3 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/JACINTO_DE_LARA_ivmy6e'
const plano4 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/MONTE_ALEGRE_apenea'
const fachada1 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/INCL%C3%81N_21_1_sktyzk'
const fachada2 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/FACHADA_xxy6tr'
const fachada3 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/INCL%C3%81N_21_pdamed'
const fachada4 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/ALJOVIN_DIURNA_aoujbx'
const fachada5 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/FLORA_21_qzavti'
const fachada6 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/ALJOVIN_NOCTURNA_td1vkj'
const interiorismore1 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DORM_PRINC_ETEN_2_1_i5cah4'
const interiorismore2 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DORM_SEC_1_udhhbq'
const interiorismore3 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/ESTAR_JUEGOS_1_hhpjqt'
const interiorismore4 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/HOME_OFFICE_du10wj'
const interiorismore5 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SALA_11_uxbz84'
const interiorismore6 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SALA_COMEDOR_7_fftypf'
const interiorismore7 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SALA_COMEDOR_zbncr3'
const interiorismore8 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SALA_GOURMET_ekliio'
const interiorismore9 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/SUM_2_onxwd3'
const interiorismore10 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/TERRAZA_3_cqck4h'
const interiorismoco1 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_5_yfsic6'
const interiorismoco2 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/D5_Image_56_20230223_073630_nijab7'
const interiorismoco3 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_8_f4cwsq'
const interiorismoco4 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_16_x4sgv9'
const interiorismoco5 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/D5_Image_62_20230223_071154_vcsxvm'
const interiorismoco6 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/D5_Image_58_20230223_072833_1_aqpbbw'
const interiorismoco7 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_9_1_vs8fb3'
const interiorismoco8 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_12_1_nlqdxw'
const interiorismoco9 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_1_11_n2fyy2'
const interiorismoco10 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/D5_Image_67_20230223_065405_g0aseo'
const interiorismoco11 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_6_rsffbc'
const interiorismoco12 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/D5_Image_57_20230223_073231_xxjznd'
const interiorismoco13 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_11_9_cxqkfn'
const interiorismoco14 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_10_15_tczn2a'
const interiorismoco15 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/D5_Image_71_20230223_063908_iqqxkx'
const interiorismoco16 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_13_13_voizst'
const interiorismoco17 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_16_3_mr3gbl'
const interiorismoco18 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/Escena_3_1_2_qazyrc'
const fotografia1 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC01172-HDR_u6dkj5'
const fotografia3 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC03850-HDR_egqzkw'
const fotografia4 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC01139-HDR_uye5if'
const fotografia5 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC03760-HDR_io6gov'
const fotografia6 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC03658-HDR_whdfgj'
const fotografia7 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC03733-HDR_cf6gfr'
const fotografia8 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC03589-HDR_ytkg00'
const fotografia9 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC03885-HDR_oshq1q'
const fotografia10 = 'https://res.cloudinary.com/dofrlsnep/image/upload/f_auto,q_auto/DSC01121-HDR_q7vvqu'


const visualizacion3d = [
	{
		original: visual1,
		thumbnail: visual1,
	},
	{
		original: visual2,
		thumbnail: visual2,
	},
	{
		original: visual3.src,
		thumbnail: visual3,
	},
	{
		original: visual4,
		thumbnail: visual4,
	},
	{
		original: visual5,
		thumbnail: visual5,
	}
];
const planosdeventa = [
	{
		original: plano1,
		thumbnail: plano1,
	},
	{
		original: plano2,
		thumbnail: plano2,
	},
	{
		original: plano3,
		thumbnail: plano3,
	},
	{
		original: plano4,
		thumbnail: plano4,
	},
	
];
const fachadas = [
	{
		original: fachada1,
		thumbnail: fachada1,
	},
	{
		original: fachada2,
		thumbnail: fachada2,
	},
	{
		original: fachada3,
		thumbnail: fachada3,
	},
	{
		original: fachada4,
		thumbnail: fachada4,
	},
	{
		original: fachada5,
		thumbnail: fachada5,
	},
	{
		original: fachada6,
		thumbnail: fachada6,
	}
];
const interiorismore = [
	{
		original: interiorismore1,
		thumbnail: interiorismore1,
	},
	{
		original: interiorismore2,
		thumbnail: interiorismore2,
	},
	{
		original: interiorismore3,
		thumbnail: interiorismore3,
	},
	{
		original: interiorismore4,
		thumbnail: interiorismore4,
	},
	{
		original: interiorismore5,
		thumbnail: interiorismore5,
	},
	{
		original: interiorismore6,
		thumbnail: interiorismore6,
	},
	{
		original: interiorismore7,
		thumbnail: interiorismore7,
	},
	{
		original: interiorismore8,
		thumbnail: interiorismore8,
	},
	{
		original: interiorismore9,
		thumbnail: interiorismore9,
	},
	{
		original: interiorismore10,
		thumbnail: interiorismore10,
	}
];
const interiorismoco = [
	{
		original: interiorismoco1,
		thumbnail: interiorismoco1,
	},
	{
		original: interiorismoco2,
		thumbnail: interiorismoco2,
	},
	{
		original: interiorismoco3,
		thumbnail: interiorismoco3,
	},
	{
		original: interiorismoco4,
		thumbnail: interiorismoco4,
	},
	{
		original: interiorismoco5,
		thumbnail: interiorismoco5,
	},
	{
		original: interiorismoco6,
		thumbnail: interiorismoco6,
	},
	{
		original: interiorismoco7,
		thumbnail: interiorismoco7,
	},
	{
		original: interiorismoco8,
		thumbnail: interiorismoco8,
	},
	{
		original: interiorismoco9,
		thumbnail: interiorismoco9,
	},
	{
		original: interiorismoco10,
		thumbnail: interiorismoco10,
	},
	{
		original: interiorismoco11,
		thumbnail: interiorismoco11,
	},
	{
		original: interiorismoco12,
		thumbnail: interiorismoco12,
	},
	{
		original: interiorismoco13,
		thumbnail: interiorismoco13,
	},
	{
		original: interiorismoco14,
		thumbnail: interiorismoco14,
	},
	{
		original: interiorismoco15,
		thumbnail: interiorismoco15,
	},
	{
		original: interiorismoco16,
		thumbnail: interiorismoco16,
	},
	{
		original: interiorismoco17,
		thumbnail: interiorismoco17,
	},
	{
		original: interiorismoco18,
		thumbnail: interiorismoco18,
	},
];
const fotografia = [
	{
		original: fotografia1,
		thumbnail: fotografia1,
	},
	
	{
		original: fotografia3,
		thumbnail: fotografia3,
	},
	{
		original: fotografia4,
		thumbnail: fotografia4,
	},
	{
		original: fotografia5,
		thumbnail: fotografia5,
	},
	{
		original: fotografia6,
		thumbnail: fotografia6,
	},
	{
		original: fotografia7,
		thumbnail: fotografia7,
	},
	{
		original: fotografia8,
		thumbnail: fotografia8,
	},
	{
		original: fotografia9,
		thumbnail: fotografia9,
	},
	{
		original: fotografia10,
		thumbnail: fotografia10,
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
const theme = createTheme({
	components: {
	  MuiTab: {
		styleOverrides: {
		  root: {
			fontFamily: 'AtypBLDisplay-Regular',
		  },
		},
	  },
	},
  });

export default function Home() {
	const [activeTab, setActiveTab] = useState('avances');
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
  
	const labels = ['Avances de obra', 'Registro de eventos', 'Videos testimoniales'];
	const srcs = [
	  'https://www.youtube.com/embed/fmyMoNRP9Yc?si=l5O0OzDnn1-I3nY4',
	  'https://www.youtube.com/embed/2-DHiGM8-jg?si=vsAuaOZjHm6AO4fX',
	  'https://www.youtube.com/embed/9EWQCf9KDoQ?si=yrdi_vF25vP0uulO'
	];
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobileTablet = useMedia('(max-width: 1047px)')
	const isText2 = useMedia('(max-width: 580px)')
	const router = useRouter()
	const loaded = useLoaded()
	const [s1, setS1] = React.useState(false)
	const [s2, setS2] = React.useState('S1')
	const mb_query =
	query === '2xl' ? 1.3 : query === 'xl' ? 1.3 : query === 'lg' ? 1.5 : query === 'md' ? 0.9 : 0.9

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

	const isMd = query==='md' || query==='lg' || query==='xl' || query==='2xl';

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
					className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4
					md:ml-[0.3%]   /* empuja a la derecha el ancho del menú en md */
    lg:ml-[0.2%]   /* empuja a la derecha el ancho del menú en lg */
    xl:ml-[15%]   /* empuja a la derecha el ancho del menú en xl */"
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
									marginTop: isMd ? width : 0,
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
									marginLeft: width * size.imgMl,
									marginTop: isMd ? width : 0,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2 "
								>
								Visualización 3D.
								</h2>

							<div
								className="relative custom-height "
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									zIndex: 1,
								}}
							>
								<ImageGallery items={visualizacion3d}
									showBullets={true}
									showThumbnails={false}
									showNav={false}
									showPlayButton={false}
									autoPlay={true}

								/>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : 0,
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
								showThumbnails={false}
								showNav={false}
									showBullets={true}
									showPlayButton={false}
									autoPlay={true}

								/>
							</div>

							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width :0,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Tour virtual 360°.
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
									src="https://kuula.co/share/collection/7Fn4R?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
								></iframe>
							</div>



							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : width*1,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Video recorrido.
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
									src="https://www.youtube.com/embed/rLEeC6tax44?si=x438UKVX5ftb4dd6" 
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
									marginTop: isMd ? width : width,
									marginBottom: 0,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2 mb-4 md:mb-0"
							>
								Video publicitario.
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
									src="https://www.youtube.com/embed/8nWhqfcxT7Q?si=da6rbpARwvQ1OfQl"
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
									marginTop: isMd ? width : width,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Tomas Drone.
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
									src="https://www.youtube.com/embed/HeYl4_sJQMQ?si=DE54_KmbYMPti2wQ"
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
									marginTop: isMd ? width : width,
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
									src="https://www.youtube.com/embed/I8o1hf3QQtk?si=zfdY29DMObh9q7wD"
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
									marginTop: isMd ? width : width,
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
								showThumbnails={false}
								showNav={false}
									showBullets={true}
									showPlayButton={false}
									autoPlay={true}

								/>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : width*0.05,
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
								showThumbnails={false}
								showNav={false}
									showBullets={true}
									showPlayButton={false}
									autoPlay={true}

								/>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : 0,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Interiorismo Corporativo.
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
								<ImageGallery items={interiorismoco}
								showThumbnails={false}
								showNav={false}
									showBullets={true}
									showPlayButton={false}
									autoPlay={true}

								/>
							</div>
							{/*PESTAÑAS */}
							<h2
        style={{
          height: width,
          marginLeft: width * size.imgMl,
          marginTop: isMd ? width : width*0.1,
        }}
        className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
      >
        Servicios Audiovisuales Inmobiliario.
      </h2>
	  <ThemeProvider theme={theme}>

      {/* Pestañas Scrollable con MUI */}
      <Box sx={{ bgcolor: 'background.paper', }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
		  style={{marginLeft: width * size.imgMl,width: width * size.imgWidth,}}
		  TabIndicatorProps={{ style: { display: 'none' } }}

          aria-label="Pestañas de servicios audiovisuales"
        >
          {labels.map((label, index) => (
            <Tab key={index} label={label} 
			sx={{
                textTransform: 'capitalize',
                fontWeight: 'bold',            // Negrita
                fontSize: { xs: '12px', md: '12px', lg: '15px' }, // Tamaño responsive
                '&.Mui-selected': { color: 'black' },
				
              }} 
			  className="text-[45px] md:text-[28px] "
			/>
          ))}
        </Tabs>
      </Box>
	  </ThemeProvider>

      {/* Contenido de cada pestaña */}
      <div
        className="overflow-hidden"
        style={{
          width: width * size.imgWidth,
          height: width * size.imgHeight,
          marginLeft: width * size.imgMl,
        //   borderTop: '1px solid #dedede',
          borderLeft: '1px solid #dedede',
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={srcs[value]}
          title={labels[value]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : width*0.8,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Brochure Comercial.
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
									src="https://www.youtube.com/embed/4rg3v4zQtcY?si=bmxjDTm7oZZedJ_K"
									title="Brochure comercial"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<h2
								style={{
									height: width,
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : width*0.9,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2"
							>
								Fotografia de Arquitectura.
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
								<ImageGallery items={fotografia}
								showThumbnails={false}
								showNav={false}
									showBullets={true}
									showPlayButton={false}
									autoPlay={true}

								/>
							</div>

							<h2
								style={{
									height: isText2 ? width * 2 : width,
									width: isText2 ? width * 6 : 'auto',
									marginLeft: `${width * size.imgMl}px`,
									marginTop: isMd ? width : width*0.1,
								}}
								className="font-sec text-[20px] md:text-[28px] w-full flex items-center pl-1 pt-2 mb-0 md:mb-0"
							>
								Fotogrametría y levantamiento topográfico en&nbsp;drone.
							</h2>
							<div
								className="overflow-hidden custom-height"
								style={{
									width: `${width * size.imgWidth}px`,
									height: `${width * size.imgHeight}px`,
									marginLeft: `${width * size.imgMl}px`,
									marginBottom:`${width * mb_query}px`,
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

							
						</div>
					</div>
					<ButtonWsp />
				</motion.main>
			) : null}
		</>
	)
}
