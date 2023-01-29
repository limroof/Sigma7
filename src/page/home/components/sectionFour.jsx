import { Section, H2, Columns, Item } from "./styles/sectionFour.js";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import Navigation from "swiper/modules/navigation/navigation";
import "swiper/swiper.min.css";

export default function SectionOne() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  return (
    <Section>
      <H2>Nos partenaires</H2>
      {!isMobile ? (
        <Columns className='main-mx-w reveal'>
          <Item>
            <H2>Logo Partenaire</H2>
            <H2>Nom Compagnie</H2>
          </Item>
          <Item>
            <H2>Logo Partenaire</H2>
            <H2>Nom Compagnie</H2>
          </Item>
          <Item>
            <H2>Logo Partenaire</H2>
            <H2>Nom Compagnie</H2>
          </Item>
        </Columns>
      ) : (
        <Swiper
          /*           onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)} */
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Item>
              <H2>Logo Partenaire</H2>
              <H2>Nom Compagnie</H2>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <H2>Logo Partenaire</H2>
              <H2>Nom Compagnie</H2>
            </Item>
          </SwiperSlide>
          <SwiperSlide>
            <Item>
              <H2>Logo Partenaire</H2>
              <H2>Nom Compagnie</H2>
            </Item>
          </SwiperSlide>
        </Swiper>
      )}
    </Section>
  );
}
