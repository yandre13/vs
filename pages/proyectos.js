import {useRouter} from 'next/router'
import {AnimateSharedLayout, AnimatePresence, motion} from 'framer-motion'

import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import ListPortfolio from 'components/List/ListPortfolio'
import Item from 'components/List/Item'
import useLoaded from 'hooks/useLoaded'
import ButtonWsp from 'components/ButtonWsp'
import SEO from 'components/SEO'

const metadata = {
	title: 'Proyectos de Arquitectura en Lima y Perú - Visualiza.pe',
	description: 'Explora nuestros proyectos arquitectónicos en Lima y Perú. Especialistas en arquitectura en Lima, diseño arquitectónico y visualización 3D.',
	open_graph: {
		url: 'https://www.visualiza.pe/proyectos',
		image: '/img/home_2.webp',
	},
}

export default function Home() {
	const {
		query: {projectId},
	} = useRouter()
	const loaded = useLoaded()
	return (
		<AnimateSharedLayout type="crossfade">
			<SEO config={metadata} />
			<motion.main
				initial={{opacity: 0}}
				animate={{opacity: loaded ? 1 : 0}}
				transition={{duration: 0.8}}
				className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4"
			>
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					<Grid loaded={loaded} />
					<div className="flex flex-wrap">
						<ListPortfolio />
						<AnimatePresence>
							{projectId && <Item id={projectId} key="item" />}
						</AnimatePresence>
					</div>
				</div>
				<ButtonWsp />
			</motion.main>
		</AnimateSharedLayout>
	)
}
