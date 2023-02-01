import styled from "styled-components";
import { keyframes } from "styled-components";

const delayTime = "0.3s";
export const Section = styled.section`
  margin: 0 auto;
  @media (max-width: 900px) {
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    width: 45%;
  }
`;
export const H2 = styled.h2`
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const Img = styled.div`
  background-image: url(${(props) => props.imgSrc && props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-transform: none;
  margin-bottom: 5px;
  min-width: 200px;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #1b1b1b;
  padding: 15px 10px;
  line-height: 1.375;
  border-radius: 3px;
  margin-bottom: 29px;
  font-size: inherit;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid #1b1b1b;
  padding: 15px 10px;
  line-height: 1.375;
  border-radius: 3px;
  margin-bottom: 0;
  min-height: 150px;
  font-size: inherit;
  max-width: 100%;
`;

const loading = keyframes`
 0% {
    transform:rotate(0deg);
}

 100% {
  transform:rotate(360deg);
}
`;

export const Button = styled.button`
  border: none;
  margin-top: 30px;
  background-color: #fd0505;
  display: flex;
  width: fit-content;
  height: 60px;
  font-size: 28px;
  font-weight: 600;
  color: white;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .material-icons {
    transform: translatex(100%);
    transition: ${delayTime} ease-in-out;
    transition-delay: 0.3s;
    opacity: 0;
    position: absolute;
    right: 10px;
  }
  span:first-child {
    transition: ${delayTime} ease-in-out;
    transition-delay: 0.3s;
  }
  &:hover {
    span:first-child {
      transform: translatex(-10px);
    }
    .material-icons {
      transform: translatex(0px);
      opacity: 1;
    }
  }
  > img {
    max-height: 40px;
    animation: ${loading} 1s infinite linear;
  }
`;

export const Error = styled.p`
  color: red;
`;
