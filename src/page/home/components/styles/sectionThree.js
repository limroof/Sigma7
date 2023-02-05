import styled from "styled-components";

export const Section = styled.section`
  overflow: hidden;
  padding-bottom: 7px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;
export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;

export const Columns = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Item = styled.li`
  text-align: center;
  flex: 0 0 32%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: stretch;
  background-color: white;
`;
export const SliderItem = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  align-self: stretch;
  padding-bottom: 20px;
  text-align: center;
`;
export const H4 = styled.h4`
  padding: 0 10px;
`;
export const Paragraph = styled.p`
  padding: 0 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
`;
