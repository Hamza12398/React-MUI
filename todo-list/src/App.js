import "./App.css";
// import MaterUi from "./MaterUi";
import TodoList from "./Components/TodoList";
import { TodosContext } from "./Contexts/TodosContext";
import { useState } from "react";


import { v4 as uuidv4 } from "uuid";

const initialTodos = [
  {
    id: uuidv4(),
    title: "Learn TypeScript",
    details: "Learn TypeScript in 2Hours",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Learn Next.Js",
    details: "Learn Next.js in 2Weeks",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Learn SSG",
    details: "Learn SSG in 2Hours",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <div
        className="App"
        style={{
          background: "#1D5B79",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          direction: "ltr",
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
        {/* <Test /> */}
      </div>
    </>
  );
}


export default App;
