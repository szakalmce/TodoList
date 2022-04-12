import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ task }) => {
  return <li className={styles.item}>{task}</li>;
};

export default ListItem;
