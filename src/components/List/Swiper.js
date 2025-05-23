import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination,
  Navigation,
  EffectFade,
  Keyboard,
  Autoplay,
} from 'swiper/core'

// estilos de Swiper…
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade, Keyboard])

export default function ProjectCarousel({
  project,
  debouncedLoading = false,
  onInit = () => {},
  onSlideChange = () => {},
  onImageClick = () => {},

}) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={project.carousel.images.length > 1}
      effect="fade"
      keyboard={{ enabled: true }}
      navigation={project.carousel.images.length > 1}
      grabCursor
      onSwiper={onInit}
      onSlideChange={onSlideChange}
      className={`transition-opacity duration-300 port_slider ${
        debouncedLoading ? 'opacity-0' : ''
      }`}
    >
      {project.carousel.images.map(({ path, name }) => (
            <SwiperSlide key={path}>
                <article className="w-full h-full">
                    <div className="flex justify-center vertical-center bg-white">
                        <img
                            src={path}
                            alt={name}
                            className="w-full h-full object-cover md:h-auto md:w-auto md:!max-w-[99%]"
                            onClick={() => onImageClick(path)}
                        // layout="fill"
                        // width={1920}
                        // height={1440}
                        />
                    </div>
                </article>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}


{/* <Swiper */}
    //     // autoplay={{
    //     // 	delay: 3000, // 3 segundos entre cada slide
    //     // 	disableOnInteraction: true, 
    //     // }}
    //     pagination={{ clickable: true }}
    //     loop={project.carousel.images.length > 1}
    //     effect={'fade'}
    //     keyboard={{
    //         enabled: true,
    //     }}
    //     navigation={project.carousel.images.length > 1}
    //     grabCursor
    //     onSwiper={() => {
    //         setImageName(project.carousel.images[0]?.name)
    //     }}
    //     className={`transition-opacity duration-300 port_slider ${debouncedLoading ? 'opacity-0' : ''
    //         }`}
    //     onSlideChange={e => {
    //         if (project.carousel.images.length > 1) {
    //             setImageName(
    //                 project.carousel.images[e.activeIndex - 1]?.name ??
    //                 project.carousel.images[0].name,
    //             )
    //         }
    //     }}
    // >
        
   