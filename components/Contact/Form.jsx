"use client";

import { copy } from "@/data";
import React, { useState } from "react";
import Input from "./Input";
import UTM from "@/components/Contact/UTM";
import { motion } from "framer-motion";

function Form() {
  const [attemptSubmit, setAttemptSubmit] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  function onSubmit(e) {
    e.preventDefault();
    setAttemptSubmit(true);

    (async () => {
      if (attemptSubmit === true) return;

      let fd = new FormData();

      fd.append("formdata_name", e.target.name.value);
      fd.append("formdata_email", e.target.email.value);
      fd.append(`formdata_phone`, e.target.phone.value);
      fd.append(`formdata_comments`, e.target.comments.value);
      fd.append(`formdata_source`, e.target.source.value);
      fd.append(`formdata_medium`, e.target.medium.value);
      fd.append(`formdata_keywords`, e.target.keywords.value);

      await fetch(copy.contact.api, {
        method: "POST",
        body: fd,
      })
        .then((res) => {
          if (res.ok) {
            res.text().then((response) => {
              if (response === "Success") {
                setSuccess("Thank you for your inquiry.");
                setAttemptSubmit(false);
                e.target.reset();
              } else {
                setError(response);
                setAttemptSubmit(false);
              }
            });
          } else {
            setError(`${error} Please try again.`);
          }
        })
        .catch((err) => {
          setError(`${err.message} Please try again.`);
          setAttemptSubmit(false);
        });
    })();
  }

  return (
    <form onSubmit={onSubmit}>
      <Input name="name" label="Full Name*" direction="left" delay={0.7} />
      <Input name="email" label="Email*" direction="right" delay={0.4} />
      <Input name="phone" label="Phone*" direction="left" delay={0.6} />
      <Input
        name="comments"
        label="Comments"
        direction="right"
        delay={0.2}
        required={false}
      />
      <UTM />
      <div>
        <motion.button
          initial={{ opacity: 0, transition: { duration: 0.1 } }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.1 }}
          disabled={attemptSubmit}
          type="submit"
        >
          {attemptSubmit ? "Sending..." : "Submit"}
        </motion.button>
        <motion.p
          initial={{
            opacity: 0,
            y: 24,
            transition: { duration: 0.1, delay: 0 },
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.5, delay: 1 },
          }}
        >
          {copy.contact.buttonCaption}
        </motion.p>
      </div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
}

export default Form;
