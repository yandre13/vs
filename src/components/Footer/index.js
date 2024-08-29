import React from 'react'
import Logo from '../svgs/Logo'

export default function index() {
	return (
		<footer className="bg-black w-[calc(100%+1.5rem)] md:w-full z-10 absolute -mx-3 md:mx-0">
			<section className="w-[90%] lg:w-[72%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8">
				<div className="pt-10 pb-5 xl:py-10">
					<h3 className="font-sec font-medium text-white mb-3 md:mb-5">
						Conversemos.
					</h3>
					<ul>
						<li className="mb-4 font-main text-sm text-gray-300">
							<a href="mailto:contacto@visualiza.pe">contacto@visualiza.pe</a>
						</li>
						<li className="mb-8 font-main text-sm text-gray-300">
							<a href="tel:+51956453424">+51 956 453 424</a>
						</li>
						<li className="mb-1 font-main text-sm text-gray-300">
							Avenida dos de mayo 1830
						</li>
						<li className="mb-3 font-main text-sm text-gray-300">
						San Isidro 17056, Lima - Perú
						</li>
						<li className="font-main text-sm text-gray-300"><b>Arquitecto en Perú</b> para Proyectos Arquitectónicos
						</li>
					</ul>
				</div>
				<div className="py-5 sm:pt-10 xl:py-10">
					<h3 className="font-sec font-medium text-white mb-3 md:mb-5">
						Servicios.
					</h3>
					<ul>
						<li className="mb-1 font-main text-sm text-gray-300">
							Estudio de Arquitectura en Lima
						</li>
						<li className="mb-1 font-main text-sm text-gray-300">
							Visualización arquitectónica
						</li>
						<li className="mb-1 font-main text-sm text-gray-300">
							Modelado 3D
						</li>
						<li className="mb-1 font-main text-sm text-gray-300">
							Proyectos de Arquitectos
						</li>
						<li className="mb-1 font-main text-sm text-gray-300">
							Recorridos virtuales
						</li>
						<li className="mb-1 font-main text-sm text-gray-300">
							Marketing inmobiliario
						</li>
					</ul>
				</div>
				<div className="py-5 xl:py-10">
					<h3 className="font-sec text-base font-medium text-white mb-3 md:mb-5">
						Descúbrenos.
					</h3>
					<div className="flex">
						<div className="mr-6">
							<a
								href="https://www.instagram.com/visualizastudio/"
								rel="noreferrer noopener"
							>
								<img
									width="20"
									height="20"
									src="/img/icons/ig.png"
									alt="Instagram"
								/>
							</a>
						</div>
						<div className="mr-6">
							<a
								href="https://www.facebook.com/visualizastudio"
								rel="noreferrer noopener"
							>
								<img
									width="20"
									height="20"
									src="/img/icons/fb.png"
									alt="Facebook"
								/>
							</a>
						</div>
						<div className="mr-6">
							<a
								href="https://www.linkedin.com/company/visualizastudio"
								rel="noreferrer noopener"
							>
								<img
									width="20"
									height="20"
									src="/img/icons/in.png"
									alt="LinkedIn"
								/>
							</a>
						</div>
						<div>
							<a
								href="https://www.youtube.com/channel/UCdXiz10RHjdY5pqQRkJAD7Q"
								rel="noreferrer noopener"
							>
								<img
									width="20"
									height="20"
									src="/img/icons/yt.png"
									alt="YouTube"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="py-5 xl:py-10 flex justify-center">
					<div className="self-end">
						<Logo color="white" classname="w-32" />
					</div>
				</div>
			</section>
		</footer>
	)
}
