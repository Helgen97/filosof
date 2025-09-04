/**
 * Container component for rendering a carousel of barbers.
 * @module BarberScreenContent
 */
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Barber from "../barber";
import { BARBERS } from "../../../constants/constants";

/**
 * Renders a Swiper carousel of barber profiles based on the provided language.
 * @returns {JSX.Element} The barber screen content component.
 */
const BarberScreenContent = () => (
  <div className="barber_screen-content" aria-label="Barbers carousel">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      direction="horizontal"
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        743: { slidesPerView: 2, spaceBetween: 10 },
        1279: { slidesPerView: 3, spaceBetween: 10 },
      }}
    >
      {BARBERS.map((barber) => (
        <SwiperSlide key={barber.id}>
          <Barber barberContent={barber} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default memo(BarberScreenContent);
