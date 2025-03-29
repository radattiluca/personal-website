import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// import styles
import {
  StyledFormContainer,
  StyledInput,
  StyledLabel,
  StyledTextArea,
  StyledInputSubmit,
  StyledTitleForm,
} from "./Form.style";

function Contact({ className, children }) {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sendForm, setSendForm] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert(
            `Grazie ${name}, il tuo messaggio è stato inviato con successo!`
          );
        },
        (error) => {
          alert("Ops si è verificato un errore", error.text);
        }
      );
  };

  return (
    <StyledFormContainer>
      <StyledTitleForm>Compila il modulo per contattarmi</StyledTitleForm>
      <form ref={form} onSubmit={sendEmail}>
        <StyledInput
          aria-label="name"
          type="text"
          name="user_name"
          onChange={handleNameChange}
          placeholder="Nome Completo"
          required
        />

        <StyledInput
          aria-label="email"
          type="email"
          name="user_email"
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />

        <StyledTextArea
          aria-label="message"
          name="message"
          placeholder="Messaggio"
          required
        />
        <StyledInputSubmit type="submit" value="Invia" />
      </form>
    </StyledFormContainer>
  );
}

export default Contact;
