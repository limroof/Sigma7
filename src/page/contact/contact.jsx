import React from "react";
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
} from "./styles/contact.js";
import image from "../../public/img/contact.png";
import { useEffect } from "react";
import { reveal } from "../../utils/reveal.js";
export default function Contact(props) {
  useEffect(() => {
    document.title = props.title + " - Sigma7 Société d'éclairage publique";
    document.querySelector(".fadein") &&
      document.querySelector(".fadein").classList.add("onPagechange");
    window.addEventListener("scroll", () => reveal());
  }, []);
  return (
    <Section className='main-mx-w fadein'>
      <H2>Formulaire de contact</H2>
      <Div>
        <Form>
          <Label htmlFor='name'>Nom</Label>
          <Input
            id='name'
            type='text'
            min='5'
            placeholder='Nom complet'
          ></Input>
          <Label htmlFor='telephone'>Numéro de téléphone</Label>
          <Input
            id='telephone'
            type='tel'
            placeholder='Numéro de téléphone'
          ></Input>
          <Label htmlFor='email'>E-mail</Label>
          <Input id='email' type='email' min='5' placeholder='E-mail'></Input>
          <Label htmlFor='message'>Message</Label>
          <Textarea id='message' min='5' placeholder='Message'></Textarea>
          <Button>
            <span>Envoyer</span>
            <span className='material-icons material-symbols-outlined'>
              {" "}
              send{" "}
            </span>
          </Button>
        </Form>
        <Img imgSrc={image}></Img>
      </Div>
    </Section>
  );
}
