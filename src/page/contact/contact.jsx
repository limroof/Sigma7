import React, { useState } from "react";
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
import { SubmitForm } from "../../api/submitForm.jsx";
export default function Contact(props) {
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
  const sendMessage = (e) => {
    e.preventDefault();
    SubmitForm(formData);
  };
  return (
    <Section className='main-mx-w fadein'>
      <H2>Formulaire de contact</H2>
      <Div>
        <Form
          onSubmit={(e) => {
            sendMessage(e);
          }}
        >
          <Label htmlFor='name'>Nom</Label>
          <Input
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
              setFormData({ ...formData, Message: e.target.value });
            }}
          ></Textarea>
          <Button>
            <span>Envoyer</span>
            <span className='material-icons material-symbols-outlined'>
              send
            </span>
          </Button>
        </Form>
        <Img imgSrc={image}></Img>
      </Div>
    </Section>
  );
}
