import React, { useState, useRef } from "react";
import styles from "./AddTaskForm.module.css";
import styled from "styled-components";

// STYLE

const FormWrapper = styled.div`
  width: 100%;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const FormButton = styled.button`
  height: 100%;
  padding: 0.5rem;
  text-transform: uppercase;
`;

// END STYLE

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("");

  const isAdd = task.length > 5 && date;
  const today = new Date().toISOString().slice(0, 10);
  const currentYear = parseFloat(today.slice(0, 4));
  const nextYear = today.replace(currentYear, currentYear + 1);

  const handleNewTask = (e) => {
    e.preventDefault();

    addTask({
      id: Math.random(),
      task: task,
      date: date,
      content: content,
      priority: priority,
      isDone: false,
      isEdit: false,
    });

    setTask("");
    setDate(today);
    setContent("");
    setPriority("");
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>ADD TASK FORM</h3>
      <form onSubmit={handleNewTask} className={styles.form}>
        <FormWrapper>
          <div>
            <TextInput
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="add new task..."
            />
          </div>
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="task content..."
            ></textarea>
          </div>
          <div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              max={nextYear}
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select priority...</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
        </FormWrapper>

        <FormButton disabled={!isAdd} type="submit">
          Add
        </FormButton>
      </form>
    </div>
  );
};

export default AddTaskForm;
