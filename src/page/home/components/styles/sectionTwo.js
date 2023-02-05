import styled from "styled-components";
import img from "../../../../public/img/SectionTwoImg.jpg";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  column-gap: 20px;
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
  > div {
    width: 54%;
    padding-right: 5%;
    padding-top: 5%;
  }

  @media (max-width: 900px) {
    background-image: url(${img});
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
`;
export const H2 = styled.h2``;
export const Paragraph = styled.p``;
export const Img = styled.div`
  border: 5px solid red;
  position: relative;
  min-height: 400px;
  width: 44%;

  > div {
    background-image: url(${(props) => props.imgSrc && props.imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 40px;
    top: 40px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
