import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  margin-top: 80px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  display: flex;
  padding: 80px 10px;
  border-top: 1px solid #1b1b1b21;
  @media (max-width: 980px) {
    padding-bottom: 20px 10px;
  }
`;
export const ColumnOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 13px;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    row-gap: 35px;
    > * {
      width: 100% !important;
    }
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-bottom: 30px;
`;
export const StyledLink = styled(Link)`
  width: fit-content;
  &.active {
    color: #fd0505;
  }
  &:hover {
    color: #fd0505;
  }
`;

/* export const ColumnTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  column-gap: 20px;
`; */
export const ColumnTwo = styled.div``;
export const Location = styled.div`
  padding: 20px 0;
  width: fit-content;
  a {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  &:first-child {
    align-items: flex-start;
  }
`;
export const Iframe = styled.iframe`
  border: none;
  height: 250px;
  flex-grow: 0.6;
  margin: auto;
`;
