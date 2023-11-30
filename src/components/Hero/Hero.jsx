import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Andrea</h1>
        <p className={styles.description}>
          Soy una desarrolladora, disenadora y administradora de base de datos 
          con algo de experiencia en el desarrollo web
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
