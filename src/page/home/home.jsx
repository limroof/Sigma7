import React from 'react'
import { Container } from './styles/home.js'
import SectionOne from './components/sectionOne.jsx'
import SectionTwo from './components/sectionTwo.jsx'
import SectionThree from './components/sectionThree.jsx'
import SectionFour from './components/sectionFour.jsx'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal.js'

export default function Home(props) {
  useEffect(() => {
    console.log('toto')
    document.title = props.title + " - Sigma7 Société d'éclairage publique"
    document.querySelector('.fadein') &&
      document.querySelector('.fadein').classList.add('onPagechange')
    window.addEventListener('scroll', () => reveal())
  }, [])

  return (
    <Container className='fadein'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  )
}
