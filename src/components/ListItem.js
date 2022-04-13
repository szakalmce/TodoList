import React, { useState } from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ task, doneTask, editTask, removeTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");

  return (
    <>
      {task.isEdit ? null : (
        <button onClick={() => doneTask(task.id)}>
          {task.isDone ? "undone" : "done"}
        </button>
      )}
      {task.isEdit ? (
        <input
          type="text"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
      ) : (
        <li
          style={{ textDecoration: task.isDone ? "line-through" : null }}
          className={styles.item}
        >
          {task.task}
        </li>
      )}
      {task.isDone ? null : (
        <button
          onClick={() => editTask(task.id, newTaskValue, setNewTaskValue)}
          className={styles.editButton}
        >
          {task.isEdit ? "save" : "edit"}
        </button>
      )}
      <button onClick={() => removeTask(task.id)}>Remove item</button>
    </>
  );
};

export default ListItem;
