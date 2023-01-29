import styled from "styled-components";
import img from "../../../../public/img/HomeSectionFour.png";

export const Section = styled.section`
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  padding: 80px 10px;
  margin-bottom: 100px;
`;
export const H2 = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 80px;
  @media (max-width: 1400px) {
    font-size: 32px;
  }
`;

export const Columns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 1%;
`;

export const Item = styled.div`
  flex: 0 0 32%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h2 {
    padding: 10px 20px;
    margin-bottom: 0;
    color: white;
    font-size: 28px;
  }
  > h2:first-child {
    background: #d9d9d9;
    color: #1b1b1b;
  }
  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`;
