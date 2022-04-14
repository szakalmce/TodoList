import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date("April 14, 2022").toLocaleDateString();

  return (
    <footer className={styles.footer}>
      <p>v. 1.0.2</p>
      <p>Release date: {date}</p>
    </footer>
  );
};

export default Footer;
