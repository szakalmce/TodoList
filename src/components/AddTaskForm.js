import React, { useState, useRef } from "react";
import styles from "./AddTaskForm.module.css";

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleNewTask = (e) => {
    e.preventDefault();

    addTask({
      id: Math.random(),
      task: task,
      isDone: false,
    });

    setTask("");
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>ADD TASK FORM</h3>
      <form onSubmit={handleNewTask} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="add new task..."
          />
        </div>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
