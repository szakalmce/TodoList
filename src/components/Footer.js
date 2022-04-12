import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date("April 12, 2022").toLocaleDateString();

  return (
    <footer className={styles.footer}>
      <p>Release date: {date}</p>
    </footer>
  );
};

export default Footer;
