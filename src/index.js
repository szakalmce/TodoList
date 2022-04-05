import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/todoContext";

const container = document.getElementById("root");
const rootContainer = createRoot(container);
rootContainer.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
