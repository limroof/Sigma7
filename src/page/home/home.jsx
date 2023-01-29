import React from "react";
import { Container } from "./styles/home.js";
import SectionOne from "./components/sectionOne.jsx";
import SectionTwo from "./components/sectionTwo.jsx";
import SectionThree from "./components/sectionThree.jsx";
import SectionFour from "./components/sectionFour.jsx";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    document.title = props.title + " - Sigma7 Société d'éclairage publique";
    document.querySelector(".fadein") &&
      document.querySelector(".fadein").classList.add("onPagechange");
  }, []);

  return (
    <Container className='fadein fadein'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  );
}
