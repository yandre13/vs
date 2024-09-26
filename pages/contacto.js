import React from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import Image from 'next/image'
import sofaSVG from '../public/img/sofa.svg'
import {useAppQuery, useAppWidth} from 'context'
import useMedia from 'hooks/useMedia'
import {motion} from 'framer-motion'
import ButtonWsp from 'components/ButtonWsp'
import useLoaded from 'hooks/useLoaded'
import SEO from 'components/SEO'

const metadata = {
	title: 'Contáctanos para Servicios de Arquitecto en Perú - Visualiza.pe',
	description:
		'Comunícate con un arquitecto en Perú para desarrollar y visualizar tu próximo proyecto arquitectónico.',
	open_graph: {
		url: 'https://www.visualiza.pe/contacto',
		image: '/img/contacto.webp',
	},
}

export default function Home() {
	const [width] = useAppWidth()
	const query = useAppQuery()
	const isMobile = useMedia('(max-width: 767px)')
	const loaded = useLoaded()

	const size = React.useMemo(() => {
		if (query === 'xl') {
			return {
				imgWidth: 7,
				textWidth: 4,
			}
		} else if (query === 'lg') {
			return {
				imgWidth: 6,
				textWidth: 7,
			}
		} else if (query === 'md') {
			return {
				imgWidth: 5.5,
				textWidth: 4,
			}
		} else {
			return {
				imgWidth: 6,
				textWidth: 6,
			}
		}
	}, [query])

	return (
		<>
			<SEO config={metadata} />
			<motion.main
				initial={{opacity: 0}}
				animate={{opacity: loaded ? 1 : 0}}
				transition={{duration: 0.8}}
				className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4"
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					<Grid hidden />
					<div
						className={`flex flex-col ${
							isMobile ? 'items-center' : 'flex-row'
						}`}
					>
						{/* Título en la parte superior */}
						<h1
							className={`font-sec ${
								isMobile ? 'text-2xl text-center mb-4' : 'text-3xl'
							} pl-1`}
							style={{
								width: `${width * 24}px`,
								marginTop: `${width * (isMobile ? 1.5 : 1)}px`,
							}}
						>
							Comienza a<br /> Visualizar tu <br />
							Próximo Proyecto.
						</h1>

						{/* Formulario siempre visible */}
						<div
							className={`mt-4 ${isMobile ? 'w-full' : 'w-1/3'} `} // Asegura que el formulario ocupe todo el ancho en móvil
						>
							<form action="/contact" method="POST">
								<div className="mb-4">
									<label className="block text-sm font-sec" htmlFor="name">
										Nombre
									</label>
									<input
										className="w-full p-2 border-2 border-black rounded-full" // Bordes negros de 2px
										type="text"
										id="name"
										name="name"
										required
									/>
								</div>
								<div className="mb-4">
									<label className="block text-sm font-sec" htmlFor="email">
										Email
									</label>
									<input
										className="w-full p-2 border-2 border-black rounded-full" // Bordes negros de 2px
										type="email"
										id="email"
										name="email"
										required
									/>
								</div>
								<div className="mb-4">
									<label className="block text-sm font-sec" htmlFor="service">
										Servicio
									</label>
									<select
										className="w-full p-2 border-2 border-black rounded-full" // Bordes negros de 2px
										id="service"
										name="service"
										required
									>
										<option value="">Selecciona un servicio</option>
										<option value="Renders 3D">Renders 3D</option>
										<option value="Recorridos Virtuales 360">
											Recorridos Virtuales 360
										</option>
										<option value="Vistas Aéreas con Drones">
											Vistas Aéreas con Drones
										</option>
										<option value="Fotogrametría y Levantamientos Topográficos">
											Fotogrametría y Levantamientos Topográficos
										</option>
										<option value="Diseño de Fachadas e Interiorismo">
											Diseño de Fachadas e Interiorismo
										</option>
										<option value="Marketing Inmobiliario">
											Marketing Inmobiliario
										</option>
									</select>
								</div>
								<div className="mb-4">
									<label className="block text-sm font-sec" htmlFor="message">
										Mensaje
									</label>
									<textarea
										className="w-full p-2 border-2 border-black rounded-md" // Bordes negros de 2px
										id="message"
										name="message"
										rows="4"
										required
									></textarea>
								</div>
								<button
									className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-yellow-300" // Fondo negro y hover gris oscuro
									type="submit"
								>
									Enviar
								</button>
							</form>
						</div>
					</div>

					{/* Imagen SVG solo en escritorio */}
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
	)
}
