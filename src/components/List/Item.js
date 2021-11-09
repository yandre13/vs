import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {data as api} from 'data'
import {useQuery} from 'react-query'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'

import SwiperCore, {
	Pagination,
	Navigation,
	EffectFade,
	Keyboard,
} from 'swiper/core'
import useMedia from 'hooks/useMedia'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFade, Keyboard])

function Item({id}) {
	const {data: project, isLoading} = useQuery(['item', id], () =>
		api.find(p => p.id === Number(id)),
	)

	const [imageName, setImageName] = React.useState('')
	const isMobile = useMedia('(max-width: 767px)')
	const scrollRef = React.useRef(0)
	const [debouncedLoading, setDebouncedLoading] = React.useState(false)
	const linkRef = React.useRef()
	const [isOpen, setIsOpen] = React.useState(false)

	React.useEffect(() => {
		scrollRef.current = window?.scrollY
		if (isMobile) {
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollRef.current}px`
		}
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.overflow = ''
			window.scrollTo(0, scrollRef.current ?? 0)
		}
	}, [isMobile])

	React.useEffect(() => {
		isLoading && setDebouncedLoading(true)
		let timeout = setTimeout(() => {
			!isLoading && setDebouncedLoading(false)
		}, 900)
		return () => clearTimeout(timeout)
	}, [isLoading])

	React.useEffect(() => {
		const goTo = e => e.key === 'Escape' && linkRef.current.click()
		window.addEventListener('keyup', goTo)
		return () => window.removeEventListener('keyup', goTo)
	}, [])

	if (!project) {
		return null
	}
	return (
		<>
			<motion.div
				// initial={{opacity: 0}}
				// animate={{opacity: 1}}
				// exit={{opacity: 0, transition: {duration: 0.15}}}
				// transition={{duration: 0.2, delay: 0.15}}
				style={{pointerEvents: 'auto'}}
				className="overlay"
			>
				<Link href="proyectos" scroll={false}>
					<a ref={linkRef}></a>
				</Link>
			</motion.div>

			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0, transition: {duration: 0.6}}}
				transition={{duration: 1}}
				className="fixed z-20
				w-full inset-0
				md:w-[96%] lg:w-[98%] md:top-[6%] md:bottom-[5%] mx-auto"
			>
				<div className="relative w-full h-full flex flex-wrap">
					{project.id && (
						<>
							<div
								className="w-full h-[45vh] md:h-[46%] lg:h-[46%] md:w-[17%] lg:w-[15%] xl:w-[12%] md:mr-[3%]
								
							flex items-center flex-col md:flex-col md:justify-between bg-black self-end order-2 md:order-1"
							>
								<img
									src={project.carousel.logo}
									alt={project.title}
									className="h-auto w-full max-w-[160px]"
									// layout="fill"
									// width={1920}
									// height={1440}
								/>
								<div
									className="text-right self-end md:self-auto lg:self-end 
								p-8 md:p-8 lg:px-6"
								>
									<h3 className="text-white text-lg md:text-base font-sec">
										{project.title}
									</h3>
									<p className="text-white text-sm md:text-xs font-main mb-3">
										{imageName}
									</p>
									<p className="text-white text-sm md:text-xs font-main leading-tight">
										{project.place}
									</p>
									<p className="text-white text-sm md:text-xs font-main leading-tight">
										{project.date}
									</p>
								</div>
							</div>
							<div className="w-full h-[55vh] md:h-full md:w-[76.5%] lg:w-[77.5%] xl:w-[80.5%] md:mr-[1.5%] lg:mr-[4.5%] lg:h-full bg-white order-1">
								<motion.div
									// animate={{opacity: [0.5, 1]}}
									// exit={{opacity: 0.5, transition: {duration: 0.45}}}
									// transition={{duration: 0.5, delay: 0.25}}
									className="w-full h-full flex justify-center items-center"
								>
									<Swiper
										pagination={{clickable: true}}
										loop={project.carousel.images.length > 1}
										effect={'fade'}
										keyboard={{
											enabled: true,
										}}
										navigation={project.carousel.images.length > 1}
										grabCursor
										onSwiper={() => {
											setImageName(project.carousel.images[0]?.name)
										}}
										className={`transition-opacity duration-300 port_slider ${
											debouncedLoading ? 'opacity-0' : ''
										}`}
										onSlideChange={e => {
											if (project.carousel.images.length > 1) {
												setImageName(
													project.carousel.images[e.activeIndex - 1]?.name ??
														project.carousel.images[0].name,
												)
											}
										}}
									>
										{project.carousel.images.map(({path, name}) => (
											<SwiperSlide key={path}>
												<article className="w-full h-full">
													<div className="flex justify-center vertical-center bg-white">
														<img
															src={path}
															alt={name}
															className="w-full h-full object-cover md:h-auto md:w-auto md:!max-w-[99%]"
															onClick={() => {
																!isOpen ? setIsOpen(path) : setIsOpen(false)
															}}
															// layout="fill"
															// width={1920}
															// height={1440}
														/>
													</div>
												</article>
											</SwiperSlide>
										))}
									</Swiper>
								</motion.div>
							</div>
							{console.log({isOpen})}
							<div
								className="absolute rounded-full w-7 h-7 z-10
							bg-white bg-opacity-60 flex justify-center items-center font-bold top-4 right-4 text-[#222]
							md:w-6 md:h-6 md:rounded-none md:text-xl md:right-auto md:left-4"
							>
								<Link href="proyectos" scroll={false}>
									<a>x</a>
								</Link>
							</div>
						</>
					)}
				</div>
			</motion.div>
			{
				isMobile && <AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0, transition: {duration: 0.3}}}
						transition={{duration: 0.3, delay: 0.15}}
						style={{pointerEvents: 'auto', zIndex: 1000}}
						className="overlay flex items-center !bg-black"
					>
						<div className="absolute flex justify-center items-center font-bold text-xl top-6 right-6 text-white">
							<span onClick={() => setIsOpen(false)}>X</span>
						</div>
						<img src={isOpen} className="w-full h-auto" />
					</motion.div>
				)}
			</AnimatePresence>
			}
		</>
	)
}

export default Item
