import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  margin-bottom: 140px;

  > div {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 13px;
    > div {
      flex: 1 1 23%;
      > img {
        width: 100%;
      }
    }
  }
  @media (max-width: 900px) {
    margin-bottom: 80px;
    > div > div {
      flex: auto;
      width: 100%;
    }
    .swiper-wrapper > div {
      width: 100% !important;
      justify-content: center;
    }
  }
`;
export const H2 = styled.h2``;
export const P = styled.p`
  a {
    color: #fd0505;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Img = styled.div`
  background-image: url(${(props) => props.imgSrc && props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 25%;
  height: 400px;
  min-width: 300px;
  @media (max-width: 900px) {
    background-position: center center;
    width: 100%;
    min-height: 500px;
  }
`;
