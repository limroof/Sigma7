import {
  Section,
  Banner,
  SectionTwo,
  H2,
  Paragraph,
  Image,
} from './styles/presentation.js'
import Img from '../../public/img/pres-sec2.webp'
import React from 'react'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal.js'
import { useMediaQuery } from 'react-responsive'
export default function Presentation(props) {
  const isMobileReveal = useMediaQuery({ query: `(max-width: 700px)` })
  useEffect(() => {
    document.title = props.title + " - Sigma7 Société d'éclairage publique"
    document.querySelector('.fadein') &&
      document.querySelector('.fadein').classList.add('onPagechange')
    window.addEventListener('scroll', () => reveal())
  }, [])

  return (
    <Section className='fadein'>
      <Banner></Banner>
      <SectionTwo
        className={!isMobileReveal ? 'main-mx-w reveal' : 'main-mx-w'}
      >
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
        <Image>
          <img src={Img} />
        </Image>
      </SectionTwo>
    </Section>
  )
}
