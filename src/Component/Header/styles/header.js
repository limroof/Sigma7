import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #f3f3ff;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  line-height: 1.5;
  padding: 20px 0;
`;

export const Img = styled.img`
  max-width: 149px;
  height: auto;
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 40px;
  @media (max-width: 690px) {
    display: none;
  }
`;

export const Li = styled.li`
  font-size: 20px;

  @media (max-width: 690px) {
    padding: 10px 10px;
    &:hover {
      background-color: #9e9e9e1a;
    }
    &:hover a {
      padding-left: 10px;
      width: 100%;
      display: block;
    }
  }
`;

export const StyledLink = styled(Link)`
  &.active {
    color: #fd0505;
  }
  &:hover {
    color: #fd0505;
  }
`;
