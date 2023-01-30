import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Section, H2, P, Img } from "./styles/gallerie.js";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import Navigation from "swiper/modules/navigation/navigation";
import "swiper/swiper.min.css";
import { reveal } from "../../utils/reveal.js";
export default function Gallerie(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  useEffect(() => {
    document.title = props.title + " - Sigma7 Société d'éclairage publique";
    document.querySelector(".fadein") &&
      document.querySelector(".fadein").classList.add("onPagechange");
  }, 1000);

  const [listImage, setImage] = useState([]);

  useEffect(() => {
    function importAll(r) {
      return r.keys().map(r);
    }

    setImage(
      importAll(
        require.context(
          "../../public/img/gallerie",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    );
    window.addEventListener("scroll", () => reveal());
  }, []);

  return (
    <Section className='main-mx-w fadein'>
      <H2>Les réalisations de la société Espace Génie</H2>
      <P>
        Notre société, Espace Génie, intervient pour vos constructions neuves
        dans le domaine de l’électricité courant fort/courant faible ainsi que
        pour la rénovation électrique de bâtiments. Notre activité s’étend sur
        tout le térritoire Marocain.
        <br />
        <Link to='/contact'> contactez-nous</Link>.
      </P>
      <div>
        {!isMobile ? (
          listImage.map((item, index) => {
            return <Img key={`${index}im`} imgSrc={item}></Img>;
          })
        ) : (
          <Swiper
            /*           onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)} */
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation]}
            className='mySwiper'
          >
            {listImage.map((item, index) => {
              return (
                <SwiperSlide>
                  <Img key={`${index} img`} imgSrc={item}></Img>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </Section>
  );
}
