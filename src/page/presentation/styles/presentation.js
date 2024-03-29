import styled from 'styled-components'
import banner from '../../../public/img/pres-banner.webp'
import Img from '../../../public/img/pres-sec2.webp'

export const Section = styled.div``

export const Banner = styled.section`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 900px) {
  }
`

export const SectionTwo = styled.section`
  display: flex;
  justify-content: space-between;

  > div {
    width: 48%;
  }
  ul {
    list-style: disc;
    list-style-position: inside;
    font-size: 20px;
  }
  @media (max-width: 700px) {
    margin-bottom: 80px;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 10px;
    > div {
      width: 100%;
      background-color: #f3f3fff2;
      padding: 10px 20px;
      border-radius: 3px;
    }
  }
`

export const H2 = styled.h2`
  margin-top: 0;
  @media (max-width: 700px) {
    margin-top: 33px;
  }
`
export const Paragraph = styled.div``
export const Image = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  align-selft: stretch;
  width: 100%;
  filter: brightness(0.6);
  transition: filter 0.4s;
  &.active {
    filter: brightness(1);
  }
  @media (max-width: 700px) {
    display: none;
  }
`
