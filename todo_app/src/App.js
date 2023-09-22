import "./App.css";
import { useState, useRef } from "react";
import TodoList from "./Components/TodoList";
import Todo from "./Components/Todo";
import Title from "./Components/Title";
import InputForm from "./Components/InputForm";

function App() {
  //  状態を管理する
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList}/>
      <TodoList  taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
