import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
const delayTime = "0.6s";

export const BurgerButton = styled.div`
  display: none;
  @media (max-width: 690px) {
    display: block;
  }
  span {
    font-size: 30px;
  }
  cursor: pointer;
`;

const openDrawer = keyframes`
 0% {
    transform: translatex(100%);
}

 100% {
    transform: translatex(0%);
}
`;
const afterOpenDrawer = keyframes`
 0% {
    opacity: 0;
}

 100% {
    opacity: 1;
}
`;
export const UlMobile = styled.ul`
  display: none;
  margin-top: 0;
  animation : ${openDrawer} 0.5s ease-out forwards;
  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f3f3ff;
    width: 100%;
    height: 100vh;
    padding: 30px 10px;
    z-index: 1;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 15px;
    > span {
      font-size: 30px;
      transition: transform: 0.4s;
      &:active{
        transform: scale(0.96);
      }
    }
    >img{
        opacity:0;
        animation : ${afterOpenDrawer} 0.5s ease-out forwards;
        animation-delay: 0.5s;
    }
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
  margin-top: 10px;
  > span {
    position: relative;
    z-index: 2;
  }
  background-color: #fd0505;
  display: block;
  width: fit-content;
  font-size: 20px;
  font-weight: 600;
  color: white;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  border: none;
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
