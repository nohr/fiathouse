"use client";

import { copy } from "@/data";
import Image from "next/image";
import React from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/data/constants";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <motion.footer {...fadeInAnimation(1.25)}>
      <address>
        <a title="@fiat.house" href={`tel:${copy.contact.number}`}>{copy.contact.number}</a>
        <motion.a whileHover={{scale:1.2}} href={copy.contact.instagram} target="_blank">
          <BsInstagram />
        </motion.a>
        <p>{copy.contact.address}</p>
      </address>
      <div className={styles.icons}>
        <div>
          <Image
            src="/logos/FIAT_Logo_Footer.svg"
            alt="fiat logo"
            width={25}
            height={25}
          />
          <Image
            src="/logos/UNLMTD_Logo_Footer.svg"
            alt="unlmtd logo"
            width={100}
            height={25}
          />
          <Image
            src="/logos/EHO_Logo_Footer.svg"
            alt="eho logo"
            width={50}
            height={15}
          />
        </div>
        <p>
          {copy.contact.footer} {` `}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
