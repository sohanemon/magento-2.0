import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function MySwiper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={52}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {data.map((el, i) => (
          <SwiperSlide key={i} className='group'>
            <img
              className='cursor-grab active:cursor-grabbing  w-full h-48 object-cover border-8 border-pink-600'
              src={el.img}
              alt='slider'
            />
            <button className='absolute group-hover:block hidden delay-30 text-white hover:bg-gray-700 transition-all duration-300  py-2 px-3 !font-medium bg-pink-500'>
              Buy Now
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
