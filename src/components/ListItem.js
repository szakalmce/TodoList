import React, { useState } from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ task, tasks, setTasks }) => {
  const handleDone = (id) => {
    const newList = tasks.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTasks(newList);
    console.log(tasks);
  };

  return (
    <>
      <button onClick={() => handleDone(task.id)}>
        {task.isDone ? "undone" : "done"}
      </button>
      <li
        style={{ textDecoration: task.isDone ? "line-through" : null }}
        className={styles.item}
      >
        {task.task}
      </li>
    </>
  );
};

export default ListItem;
