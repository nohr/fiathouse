import React from "react";
import styles from "./Contact.module.scss";
import { copy } from "@/data";
import Title from "../Title/Title";
import Form from "./Form";
import Footer from "./Footer";

function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <Title
        light={`${copy.contact.title.split(" ")[0]} ${
          copy.contact.title.split(" ")[1]
        } `}
        bold={copy.contact.title.split(" ")[2]}
        element="h2"
      />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
