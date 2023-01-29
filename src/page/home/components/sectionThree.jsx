import React from "react";
import {
  Section,
  H2,
  Columns,
  Item,
  SliderItem,
  H4,
  Paragraph,
  Img,
} from "./styles/sectionThree.js";
import item1 from "../../../public/img/HomePage-item1.png";
import item2 from "../../../public/img/HomePage-item2.png";
import item3 from "../../../public/img/HomePage-item3.png";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import Navigation from "swiper/modules/navigation/navigation";
import "swiper/swiper.min.css";

export default function SectionOne() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  const isMobileTwo = useMediaQuery({ query: `(max-width: 480px)` });

  return (
    <Section className='main-mx-w reveal'>
      <H2>Services</H2>
      {!isMobile ? (
        <Columns>
          <Item>
            <Img src={item1} alt=''></Img>
            <H4>High current. Low current electrical work</H4>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              porro perferendis quibusdam, doloribus nostrum quos sequi possimus
            </Paragraph>
          </Item>
          <Item>
            <Img src={item2} alt=''></Img>
            <H4>Electromechanics</H4>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              porro perferendis quibusdam, doloribus nostrum quos sequi possimus
            </Paragraph>
          </Item>
          <Item>
            <Img src={item3} alt=''></Img>
            <H4>Electrification of Housing Estates</H4>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              porro perferendis quibusdam, doloribus nostrum quos sequi possimus
            </Paragraph>
          </Item>
        </Columns>
      ) : (
        <Swiper
          /*           onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)} */
          spaceBetween={10}
          slidesPerView={isMobileTwo ? 1 : 2}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <SliderItem>
              <Img src={item1} alt=''></Img>
              <H4>High current. Low current electrical work</H4>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur porro perferendis quibusdam, doloribus nostrum quos
                sequi possimus
              </Paragraph>
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src={item2} alt=''></Img>
              <H4>Electromechanics</H4>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur porro perferendis quibusdam, doloribus nostrum quos
                sequi possimus
              </Paragraph>
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src={item3} alt=''></Img>
              <H4>Electrification of Housing Estates</H4>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur porro perferendis quibusdam, doloribus nostrum quos
                sequi possimus
              </Paragraph>
            </SliderItem>
          </SwiperSlide>
        </Swiper>
      )}
    </Section>
  );
}
