
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import css from "./ProjectSwiper.module.css";

type ProjectSwiperProps = {
  screenshots: string[];
  projectName: string;
};

export default function ProjectSwiper({
  screenshots,
  projectName,
}: ProjectSwiperProps) {
  return (
    <div className={css.swiperWrapper}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={screenshots.length > 1}
        slidesPerView={1}
        spaceBetween={0}
      >
        {screenshots.map((src, index) => (
          <SwiperSlide key={src}>
            <img
              className={css.image}
              src={src}
              alt={`${projectName} — скриншот ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
