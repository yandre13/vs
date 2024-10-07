import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Menu from '../svgs/Menu'
import Logo from '../svgs/Logo'
import { motion } from 'framer-motion'
import useMedia from 'hooks/useMedia'

const variants = {
	visible: {
		y: 0,
		height: 'auto',
		transition: { ease: 'easeInOut', duration: 0.5 },
	},
	hidden: { y: -360, height: 0, transition: { ease: 'easeOut', duration: 0.4 } },
}

function Navbar() {
	const router = useRouter()
	const isMobile = useMedia('(max-width: 767px)')
	const [open, setOpen] = React.useState(false)
	return (
		<header
			className="sticky top-0 z-10 mb-3 md:mb-0 flex flex-wrap w-full
        md:w-[15%] md:h-[100vh] md:justify-center
        lg:w-[13%] xl:w-[11%] 
        md:relative md:top-auto md:z-auto
		bg-white  p-4 
		"
		>
			<div
				className={cn(
					!isMobile && 'fixed',
					'w-full md:w-auto flex md:flex-col flex-wrap',
				)}
			>
				<div
					className={cn('w-full order-1 md:order-first flex justify-between', {
						'mt-3': open && isMobile,
					})}
				>
					<h2 className="font-semibold text-xl md:mt-1 xl:mt-2 md:mb-8 ">
						<Link href="/" legacyBehavior>
							<a>
								<Logo
									color="black"
									classname="w-[106px] md:w-[96px] lg:w-[106px] 2xl:w-[116px]"
								/>
							</a>
						</Link>
					</h2>
					<div className={cn({
						hidden: !isMobile,
					})}>
						<Link href="/brochure.pdf" download legacyBehavior>
							<a className="flex items-center bg-[#FDD704] py-1 px-2 sm:py-2 sm:px-4 md:py-1 md:px-2 hover:bg-[#FFD700] transition duration-300 shadow-lg mr-2 sm:mr-5 max-w-xs sm:max-w-sm md:max-w-xs">
								<div className="font-sec text-sm text-center text-black sm:text-sm md:text-xs">
									Descargar Brochure
								</div>
							</a>
						</Link>
					</div>
					<span
						className={cn('flex items-center z-10 cursor-pointer', {
							hidden: !isMobile,
						})}
						onClick={() => setOpen(!open)}
					>

						<Menu />
						{!open ? <span>Menú</span> : <span>Cerrar</span>}
					</span>
				</div>
				<motion.nav
					variants={variants}
					animate={open ? 'visible' : 'hidden'}
					initial="hidden"
					className={cn(
						'-mt-4 -ml-3 -mr-3 w-[calc(100%+1.5rem)] bg-black md:w-[96px] lg:w-[106px] 2xl:w-[116px] md:bg-transparent md:m-0',
						'md:clear-trs',
					)}
				>
					<ul
						className={cn(
							'py-7 block text-center text-gray-400',
							'md:py-0 md:text-left md:text-black',
						)}
					>
						<li className="py-3 md:py-[3px]">
							<Link href="proyectos" legacyBehavior>
								<a
									className={cn('font-sec font-semibold text-sm', {
										'text-white': router.pathname === '/proyectos' && isMobile,
									})}
									onClick={() => router.push('/proyectos')}
								>
									Proyectos
								</a>
							</Link>
						</li>
						<li className="py-3 md:py-[3px]">
							<Link href="nosotros" legacyBehavior>
								<a
									className={cn('font-sec font-semibold text-sm', {
										'text-white': router.pathname === '/nosotros' && isMobile,
									})}
									onClick={() => router.push('/nosotros')}
								>
									Nosotros
								</a>
							</Link>
						</li>
						<li className="py-3 md:py-[3px]">
							<Link href="servicios" legacyBehavior>
								<a
									className={cn('font-sec font-semibold text-sm', {
										'text-white': router.pathname === '/servicios' && isMobile,
									})}
									onClick={() => router.push('/servicios')}
								>
									Servicios
								</a>
							</Link>
						</li>
						<li className="py-3 md:py-[3px]">
							<Link href="contacto" legacyBehavior>
								<a
									className={cn('font-sec font-semibold text-sm', {
										'text-white': router.pathname === '/contacto' && isMobile,
									})}
									onClick={() => router.push('/contacto')}
								>
									Contacto
								</a>
							</Link>
						</li>
						{!isMobile ? (
							<div className="fixed bottom-5 left-2">
								<Link href="/brochure.pdf" download legacyBehavior>
									<a className="relative flex items-center justify-center bg-[#FDD704] w-[106px] md:w-[96px] lg:w-[106px] 2xl:w-[116px] py-2 px-2 sm:py-2 sm:px-4 md:py-1 md:px-2 hover:bg-[#FFD700] transition duration-300 shadow-lg  ml-2 sm:ml-3 md:ml-3 lg:ml-5 xl:ml-6 2xl:ml-7">
										<div className="text-center text-xs font-sec ">
											Descargar Brochure
										</div>
									</a>
								</Link>
							</div>
						) : (
							<></>
						)}





					</ul>
				</motion.nav>
			</div>
		</header>
	)
}

// Navbar= React.memo(Navbar)
export default Navbar
