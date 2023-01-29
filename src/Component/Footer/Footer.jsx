import {
  FooterContainer,
  ColumnOne,
  Location,
  Img,
  LinksWrapper,
  StyledLink,
  Line,
  Iframe,
} from "./styles/footer.js";
import { useLocation } from "react-router-dom";
import logo from "../../public/img/logo.png";
import phoneIcon from "../../public/img/phone-icon.svg";
import emailIcon from "../../public/img/email-icon.svg";
import addressIcon from "../../public/img/address-icon.svg";
import React from "react";

import navItems from "../../utils/navItems.json";
export default function Footer() {
  const { pathname } = useLocation();
  return (
    <FooterContainer>
      <ColumnOne className='main-mx-w'>
        <LinksWrapper>
          <Img
            src={logo}
            alt='Logo sigma7 Societé de construction éléctrique'
          ></Img>
          {navItems.map((item, index) => {
            return (
              <StyledLink
                to={item.link}
                className={pathname === item.link && "active"}
                key={item.id}
                onClick={(e) => {
                  /* setActiveLink(e.target); */
                }}
              >
                {item.title}
              </StyledLink>
            );
          })}
        </LinksWrapper>
        <Iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.581087778574!2d-5.805582664272595!3d35.780178110343726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f4b7c6fc123%3A0xb0b07abe7c96cd49!2sR%C3%A9sidence%20Jouba!5e1!3m2!1sfr!2sca!4v1674798149721!5m2!1sfr!2sca'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          title='adresse'
        ></Iframe>
        <Location>
          <div>
            <Line>
              <img src={addressIcon} alt='Adresse de la société Sigma7'></img>
              <p className='no-m'>
                Rue Tchaivoski, Résidence Juba B.
                <br />
                4ème étage. N° 128.
                <br />
                Tanger
                <br />
              </p>
            </Line>

            <Line>
              <img src={emailIcon} alt='Courriel de la société Sigma7'></img>
              <p>
                <a href='mailto:email@gmail.com'>email@gmail.com</a>
              </p>
            </Line>
            <Line>
              <img
                src={phoneIcon}
                alt='Numéro de téléphone de la société Sigma7'
              ></img>
              <p>
                <a href='tel:0999999999'>0999999999</a>
              </p>
            </Line>
          </div>
        </Location>
      </ColumnOne>
      {/*  <ColumnTwo></ColumnTwo> */}
    </FooterContainer>
  );
}
