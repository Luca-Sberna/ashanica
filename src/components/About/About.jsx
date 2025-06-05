import React from "react";
import styles from "./About.module.css";
import Header from "../Header/Header";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />

      <h1>Informazioni su di noi</h1>
      {/* Contenuto about */}
    </div>
  );
};

export default About;
