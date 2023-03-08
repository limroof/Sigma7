import { Section, Wrapper, H1, Button } from './styles/sectionOne.js'
import React from 'react'
export default function SectionOne() {
  return (
    <Section>
      <Wrapper className='main-mx-w '>
        <H1>Lorem ipsum dolor sit amet </H1>
        <Button to='/contact'>
          <span>Contact us</span>
        </Button>
      </Wrapper>
    </Section>
  )
}
