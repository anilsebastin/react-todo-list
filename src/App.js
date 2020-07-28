import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./components/Todolist";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <Todolist />
        </div>
      </div>
    </div>
  );
}

export default App;
