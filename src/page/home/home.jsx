import React from "react";
import { Container } from "./styles/home.js";
import SectionOne from "./components/sectionOne.jsx";
import SectionTwo from "./components/sectionTwo.jsx";
import SectionThree from "./components/sectionThree.jsx";
import SectionFour from "./components/sectionFour.jsx";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <Container>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  );
}
