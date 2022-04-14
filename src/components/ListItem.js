import React, { useState } from "react";

import styled from "styled-components";

import {
  FaTrashAlt,
  FaCheckCircle,
  FaRegCheckCircle,
  FaPen,
  FaSave,
} from "react-icons/fa";

const ListItems = styled.li`
  min-height: 3rem;
  display: flex;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
`;

const ListCheck = styled.div`
  background-color: ${(props) => (props.done ? "green" : "#eee")};
  flex-basis: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 3rem;
  color: ${(props) => (props.done ? "#fff" : "#000")};
`;

const ListText = styled.div`
  flex-basis: 70%;
  padding: 0.5rem;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const TaskName = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const TaskNameEdit = styled.input`
  padding: 0.2rem;
`;

const TaskContent = styled.p`
  font-style: italic;
`;

const TaskContentEdit = styled.textarea``;

const ListActions = styled.div`
  display: flex;
  justify-content: center;

  flex: 1;
`;
const ListEdit = styled.div`
  width: 50%;
  background-color: violet;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ListPriorEdit = styled.select``;

const ListTrash = styled.div`
  width: 50%;
  background-color: red;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ListDetails = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
`;
const ListPrior = styled.div`
  flex: 1;
  text-align: center;
  border-right: 1px solid red;
`;
const ListDate = styled.div`
  flex: 1;
  text-align: center;
`;

const ListItem = ({ task, doneTask, editTask, removeTask }) => {
  const [newTaskValue, setNewTaskValue] = useState({
    title: "Title",
    content: "Content",
    date: "2022-10-04",
    priority: "2",
  });

  return (
    <>
      {/* {task.isEdit ? null : (
        <>
          <>
            {task.isDone ? (
              <FaCheckCircle onClick={() => doneTask(task.id)} />
            ) : (
              <FaRegCheckCircle onClick={() => doneTask(task.id)} />
            )}
          </>
        </>
      )}
      {task.isEdit ? (
        <input
          type="text"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
      ) : (
        <>
          <li
            style={{ textDecoration: task.isDone ? "line-through" : null }}
            className={styles.item}
          >
            {task.task}
          </li>
          <p>{task.date}</p>
        </>
      )}
      <div>
        {task.isDone ? null : (
          <>
            <button
              onClick={() => editTask(task.id, newTaskValue, setNewTaskValue)}
              className={styles.editButton}
            >
              {task.isEdit ? <FaSave /> : <FaPen />}
            </button>
          </>
        )}
        <FaTrashAlt
          className={styles.trashButton}
          onClick={() => removeTask(task.id)}
        />
      </div> */}
      <ListItems>
        <ListCheck done={task.isDone} onClick={() => doneTask(task.id)}>
          {task.isDone ? <FaCheckCircle /> : <FaRegCheckCircle />}
        </ListCheck>

        {task.isEdit ? (
          <ListText>
            <TaskNameEdit
              onChange={(e) =>
                setNewTaskValue({
                  ...newTaskValue,
                  title: e.target.value,
                })
              }
              value={newTaskValue.title}
            />
            <TaskContentEdit
              onChange={(e) =>
                setNewTaskValue({
                  ...newTaskValue,
                  content: e.target.value,
                })
              }
              value={newTaskValue.content}
            />
            <ListPriorEdit
              onChange={(e) =>
                setNewTaskValue({
                  ...newTaskValue,
                  priority: e.target.value,
                })
              }
              value={newTaskValue.priority}
            >
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </ListPriorEdit>
          </ListText>
        ) : (
          <ListText>
            <TaskName>{task.task}</TaskName>
            <TaskContent>{task.content}</TaskContent>
            <ListDetails>
              <ListPrior>{task.priority}</ListPrior>
              <ListDate>{task.date}</ListDate>
            </ListDetails>
          </ListText>
        )}

        <ListActions>
          <ListEdit
            onClick={() => editTask(task.id, newTaskValue, setNewTaskValue)}
          >
            {task.isEdit ? <FaSave /> : <FaPen />}
          </ListEdit>

          <ListTrash onClick={() => removeTask(task.id)}>
            <FaTrashAlt />
          </ListTrash>
        </ListActions>
      </ListItems>
    </>
  );
};

export default ListItem;
