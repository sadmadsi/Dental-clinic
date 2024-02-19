import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Autoplay } from "swiper/modules";

export const SwiperTimeline = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Keyboard, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={"/clinic.png"}
            className="h-full w-full object-cover"
            alt="clinic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/clinic2.png"}
            className="h-full w-full object-cover"
            alt="clinic2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/kid.png"}
            className="h-full w-full object-cover"
            alt="kid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/emoji.png"}
            className="h-full w-full object-cover"
            alt="emoji"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
