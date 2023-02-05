import styled from "styled-components";
import { keyframes } from "styled-components";
import banner from "../../../../public/img/banner.jpg";
import { Link } from "react-router-dom";

const delayTime = "0.6s";
export const Section = styled.section`
  height: 85vh;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;

export const Wrapper = styled.div`
width: 100%;
}
`;
export const H1 = styled.h1`
  color: white;
  max-width: 480px;
  margin-top: 100px;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    font-size: 55px;
  }
`;

const hoverEffect = keyframes`
 0% {
    height:80%;
    left: 110%;
    width:100%;
}
 50%{ 
    height: 172%;
    width:50%;
}
 100% {
    height:80%;
    left: -20%;
    width:10%;
}
`;
const afterHoverEffect = keyframes`
 0% {
    background-color: #fd0505;
    width:0%;
    right:100%;
}

 100% {
    background-color: #1919bffc;
    width:100%;
    right:0;
}
`;

export const Button = styled(Link)`
  > span {
    position: relative;
    z-index: 2;
  }
  background-color: #fd0505;
  display: block;
  width: fit-content;
  height: 70px;
  font-size: 28px;
  font-weight: 600;
  color: white;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 10%;
    height: 80%;
    left: 110%;
    transition: left ${delayTime}, height ${delayTime};
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(253, 5, 5, 0.6307773109243697) 100%
    );
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 100%;
    top: 0;
  }
  &:hover {
    &::after {
      animation: ${hoverEffect} ${delayTime} ease-out forwards;
    }

    &::before {
      animation: ${afterHoverEffect} ${delayTime} forwards;
      animation-delay: ${delayTime};
    }
  }
`;
