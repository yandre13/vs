import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import fetch from 'node-fetch'

import Navbar from 'components/Navbar'
const Item = dynamic(
  () => import('components/List/Item'),
  { 
    ssr: false,            
    loading: () => null,   
  }
)
const ListPortfolio = dynamic(
  () => import('components/List/ListPortfolio'),
  {
    ssr: false,               
    loading: () => (
      <div className="flex flex-wrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-1/4 h-48 bg-gray-200 animate-pulse rounded m-2"
          />
        ))}
      </div>
    ),
  }
)
import useLoaded from 'hooks/useLoaded'
import ButtonWsp from 'components/ButtonWsp'
import SEO from 'components/SEO'
import { data as allProjects } from 'data'

async function getBlurDataURL(cloudUrl) {
  const smallUrl = cloudUrl.replace(
    '/upload/',
    '/upload/w_10,h_10,c_scale/'
  )
  const res = await fetch(smallUrl)
  const arrayBuffer = await res.arrayBuffer()
  const base64 = Buffer.from(arrayBuffer).toString('base64')
  return `data:image/jpeg;base64,${base64}`
}

export async function getStaticProps() {
  const projects = await Promise.all(
    allProjects.map(async (p) => ({
      ...p,
      blurDataURL: await getBlurDataURL(p.image),
    }))
  )

  return {
    props: { projects },
  }
}

const Grid = dynamic(() => import('components/Grid'), {
  loading: () => (
    <div className="h-64 bg-gray-200 animate-pulse rounded" />
  ),
})
const AnimateSharedLayout = dynamic(
  () =>
    import('framer-motion').then((mod) => mod.AnimateSharedLayout),
  { ssr: false }
)
const AnimatePresence = dynamic(
  () =>
    import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
)

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
