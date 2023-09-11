import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Barber from "../barber";
import { BARBERS } from "../../../constants/content";

const BarberScreenContent = ({ lang }) => {
  return (
    <div className="barber_screen-content">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        direction="horizontal"
        loop
        navigation
        pagination
        autoplay
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          743: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1439: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {BARBERS.map((barber) => (
          <SwiperSlide key={barber.id}>
            <Barber lang={lang} barberContent={barber} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BarberScreenContent;
