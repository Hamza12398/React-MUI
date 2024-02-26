import "./App.css";
// import MaterUi from "./MaterUi";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          background: "#22577A",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TodoList />
      </div>
    </>
  );
}

export default App;
