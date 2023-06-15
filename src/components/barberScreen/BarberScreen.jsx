import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import BARBERS from "../../constants/barbers";
import { useIntl } from "react-intl";

const BarberScreen = ({ lang }) => {
  const { formatMessage } = useIntl();

  return (
    <section id="barbers" className="barber_screen">
      <h2 className="screen-title">{formatMessage({id:"our_barbers"})}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        direction="horizontal"
        loop
        navigation
        pagination
        autoplay
      >
        {BARBERS.map((barber) => {
          return (
            <SwiperSlide key={barber.photo}>
              <div className="barber">
                <div className="barber-photo-container">
                  <img
                    className="barber-photo"
                    src={barber.photo}
                    alt={barber.barberName}
                  />
                </div>
                <div className="barber-description">
                  {lang === "ukr" ? (
                    <p className="barber-name">{barber.barberName}</p>
                  ) : (
                    <p className="barber-name">{barber.barberNameEN}</p>
                  )}
                  <p className="barber-position">
                    {formatMessage({ id: barber.barberPositionINTL_ID })}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default BarberScreen;
