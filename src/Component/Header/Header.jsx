import {
  HeaderContainer,
  Nav,
  Img,
  Ul,
  Li,
  StyledLink,
} from "./styles/header.js";

import { UlMobile, BurgerButton, Button } from "./styles/headerMobile.js";
import { useLocation } from "react-router-dom";
import navItems from "../../utils/navItems.json";
import logo from "../../public/img/logo.png";
import { useState } from "react";
import React from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  isDrawerOpen
    ? document.querySelector("body").classList.add("draweropen")
    : document.querySelector("body").classList.remove("draweropen");
  return (
    <HeaderContainer>
      <Nav className='main-mx-w'>
        <StyledLink to='/'>
          <Img
            src={logo}
            alt='Logo sigma7 Societé de construction éléctrique'
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          ></Img>
        </StyledLink>
        <BurgerButton
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
          }}
        >
          <span className='material-icons material-symbols-outlined'>menu</span>
        </BurgerButton>
        <Ul>
          {navItems.map((item) => {
            return (
              <Li key={item.id}>
                <StyledLink
                  to={item.link}
                  className={pathname === item.link && "active"}
                >
                  {item.title}
                </StyledLink>
              </Li>
            );
          })}
        </Ul>
        {isDrawerOpen && (
          <UlMobile>
            <div>
              <Img
                src={logo}
                alt='Logo sigma7 Societé de construction éléctrique'
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              ></Img>
              <span
                class='material-icons material-symbols-outlined'
                onClick={() => {
                  setIsDrawerOpen(!isDrawerOpen);
                }}
              >
                close
              </span>
            </div>
            {navItems.map((item) => {
              return (
                <Li
                  key={item.id}
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <StyledLink
                    to={item.link}
                    className={pathname === item.link && "active"}
                  >
                    {item.title}
                  </StyledLink>
                </Li>
              );
            })}
            <Button to='/contact'>
              <span>Contact us</span>
            </Button>
          </UlMobile>
        )}
      </Nav>
    </HeaderContainer>
  );
}
