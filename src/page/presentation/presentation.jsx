import {
  Section,
  Banner,
  SectionTwo,
  H2,
  Paragraph,
  Image,
} from "./styles/presentation.js";
import React from "react";
import { useEffect } from "react";

export default function Presentation(props) {
  useEffect(() => {
    document.title = props.title;
    document.querySelector(".fadein") &&
      document.querySelector(".fadein").classList.add("onPagechange");
  }, []);

  return (
    <Section className='fadein'>
      <Banner></Banner>
      <SectionTwo className='main-mx-w'>
        <Paragraph>
          <H2>Presentation</H2>
          <p>
            Espace Génie est une société spécialisée dans le domaine de
            l’installation et travaux d’électricité générale, maintenance,
            éclairage industriel de bâtiment et public et travaux divers.
          </p>
          <ul>
            <li>Travaux d’éclairage public</li>
            <li>Entretien de l’éclairage public</li>
            <li>Diagnostic</li>
            <li>Réparation et renouvellement</li>
            <li>
              Construction Génie Civil des postes de Transformations MT/BT
            </li>
            <li>Electrification des lotissements</li>
            <li>Desserte téléphonique des lotissements</li>
            <li>Electricité industrielle</li>
          </ul>
        </Paragraph>
        <Image></Image>
      </SectionTwo>
    </Section>
  );
}
