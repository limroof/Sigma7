import { Section, H2, Paragraph, Img } from "./styles/sectionTwo.js";
import img from "../../../public/img/SectionTwoImg.webp";
import React from "react";

export default function SectionOne() {
  return (
    <Section className='main-mx-w reveal'>
      <div>
        <H2>About Us</H2>
        <Paragraph>
          Lorem ipsum dolor sit amet. Eum cumque quod eum enim quos quo dolore
          libero est natus labore vel quisquam commodi. Sed quia iste in neque
          molestias et minima galisum et assumenda galisum qui dolores itaque.
          Qui deserunt sunt rem tenetur cumque ut voluptas minima et omnis
          reiciendis qui recusandae quaerat. Qui iste Quis hic accusantium
          dolorum est maiores aliquam aut nesciunt atque nam maxime esse qui
          accusantium repellendus.
        </Paragraph>
      </div>
      <Img imgSrc={img}>
        <div></div>
      </Img>
    </Section>
  );
}
