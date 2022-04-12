import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (props) => {
    setTasks([...tasks, props]);
  };

  return (
    <div className="container">
      <Header tasks={tasks} />
      <AddTaskForm addTask={addTask} />
      <TasksList tasks={tasks} setTasks={setTasks} />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
