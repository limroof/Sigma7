import React, { useState, useRef } from "react";
import {
  Section,
  Div,
  Form,
  H2,
  Img,
  Label,
  Input,
  Textarea,
  Button,
  Error,
} from "./styles/contact.js";
import image from "../../public/img/contact.png";
import spinner from "../../public/img/spinner_white.png";

import { useEffect } from "react";
import { reveal } from "../../utils/reveal.js";
import { SubmitForm } from "../../api/submitForm.jsx";
/* import ReCAPTCHA from "react-google-recaptcha"; */

export default function Contact(props) {
  /* const captchaRef = useRef(null); */

  useEffect(() => {
    document.title = props.title + " - Sigma7 Société d'éclairage publique";
    document.querySelector(".fadein") &&
      document.querySelector(".fadein").classList.add("onPagechange");
    window.addEventListener("scroll", () => reveal());
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    message: "",
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    SubmitForm(formData, setIsMessageSent, setError, setIsLoading);
  };
  return (
    <Section className='main-mx-w fadein'>
      <H2>Formulaire de contact</H2>
      <Div>
        {!isMessageSent ? (
          <Form
            onSubmit={(e) => {
              sendMessage(e);
            }}
          >
            <Label htmlFor='name'>Nom</Label>
            <Input
              required
              id='name'
              name='name'
              type='text'
              min='5'
              placeholder='Nom complet'
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            ></Input>
            <Label htmlFor='telephone'>Numéro de téléphone</Label>
            <Input
              required
              id='telephone'
              name='telephone'
              type='tel'
              placeholder='Numéro de téléphone'
              onChange={(e) => {
                setFormData({ ...formData, telephone: e.target.value });
              }}
            ></Input>
            <Label htmlFor='email'>E-mail</Label>
            <Input
              required
              id='email'
              name='email'
              type='email'
              min='5'
              placeholder='E-mail'
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            ></Input>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              name='message'
              min='5'
              placeholder='Message'
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            ></Textarea>
            {/*             <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              ref={captchaRef}
            /> */}
            <Button disabled={isLoading && "disabled"}>
              {!isLoading ? (
                <React.Fragment>
                  <span>Envoyer</span>
                  <span className='material-icons material-symbols-outlined'>
                    send
                  </span>
                </React.Fragment>
              ) : (
                <img src={spinner} alt='chargement'></img>
              )}
            </Button>
            {isError && (
              <Error>
                Une erreur inattendue vous empêche d'envoyer le message
              </Error>
            )}
          </Form>
        ) : (
          <div>
            <p>Message envoyé</p>
          </div>
        )}

        <Img imgSrc={image}></Img>
      </Div>
    </Section>
  );
}
