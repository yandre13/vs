// pages/proyectos.jsx
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import Navbar from 'components/Navbar'
import Item from 'components/List/Item'
import ListPortfolio from 'components/List/ListPortfolio'
import useLoaded from 'hooks/useLoaded'
import ButtonWsp from 'components/ButtonWsp'
import SEO from 'components/SEO'

// datos locales (o desde tu lib)
import { data as allProjects } from 'data'

// dinámicos con placeholder
const Grid = dynamic(() => import('components/Grid'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded" />,
})
const AnimateSharedLayout = dynamic(
  () => import('framer-motion').then(mod => mod.AnimateSharedLayout),
  { ssr: false }
)
const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
)

export async function getStaticProps() {
  // aquí podrías llamar a tu CMS/API en vez de un import
  const projects = allProjects
  return {
    props: { projects },
    // revalidate: 60, // si quieres ISR cada 60 segundos
  }
}

const metadata = {
  title: 'Proyectos de Arquitectura en Lima y Perú - Visualiza.pe',
  description:
    'Explora nuestros proyectos arquitectónicos en Lima y Perú. Especialistas en arquitectura en Lima, diseño arquitectónico y visualización 3D.',
  open_graph: {
    url: 'https://www.visualiza.pe/proyectos',
    image: '/img/home_2.webp',
  },
}

export default function Proyectos({ projects }) {
  const {
    query: { projectId },
  } = useRouter()
  const loaded = useLoaded()

  return (
    <AnimateSharedLayout type="crossfade">
      <SEO config={metadata} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4 md:ml-[0.3%] lg:ml-[0.2%] xl:ml-[15%]"
      >
        <Navbar />

        <div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
          <Grid loaded={loaded} />

          <div className="flex flex-wrap">
            {/* le pasamos la lista pre-renderizada */}
            <ListPortfolio projects={projects} />
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
