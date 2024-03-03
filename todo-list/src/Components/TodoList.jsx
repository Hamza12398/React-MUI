import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Todo from "./Todo";

import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../Contexts/TodosContext";

import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedInputType, setDisplayedInputType] = useState("all");


  // ! FILTTER TODOS LIST
  const completedTodo = todos.filter((t) => {
    return t.isCompleted;
  });
  const uncompletedTodo = todos.filter((t) => {
    return !t.isCompleted;
  });
  function changeDisplayedType(e) {
    setDisplayedInputType(e.target.value);
  }

  let todoToBe = todos; 

  if (displayedInputType === "achieved") {
    todoToBe = completedTodo;
  } else if (displayedInputType === "unfinished") {
    todoToBe = uncompletedTodo;
  }
  // ! END FILTTER TODOS LIST
  const todoList = todoToBe.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });


  


  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storageTodos);
  }, []);

  function haNdleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    let local = [...todos, newTodo];
    setTodos(local);
    localStorage.setItem("todos", JSON.stringify(local));
    setTitleInput("");
  }

  return (
    <>
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h2">TODO LIST</Typography>
            <Divider sx={{ my: 2 }} />

            {/* FILTER BUTTON */}
            <ToggleButtonGroup
              value={displayedInputType}
              exclusive
              onChange={changeDisplayedType}
              aria-label="Platform"
            >
              <ToggleButton value="all">ALL</ToggleButton>
              <ToggleButton value="achieved">Achieved</ToggleButton>
              <ToggleButton value="unfinished">Unfinished</ToggleButton>
            </ToggleButtonGroup>
            {/*  -----------FILTER BUTTON----------- */}

            {/* COMPONENTS */}
            {todoList}
            {/* COMPONENTS */}

            {/* INPUT + ADD BUTTON */}
            <Grid container>
              <Grid
                xs={8}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              ></Grid>
              <Grid
                xs={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              ></Grid>
            </Grid>
            {/* ---------INPUT + ADD BUTTON------- */}

            {/* FIELD AND BUTTON */}
            <Grid container sx={{ marginTop: "20px" }}>
              <Grid
                xs={8}
                display="flex"
                justifyContent="space-around"
                alignContent="center"
              >
                <TextField
                  id="outlined-basic"
                  label="Title Of ToDo"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  value={titleInput}
                  onChange={(e) => {
                    setTitleInput(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                xs={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  sx={{ width: "100%", height: "100%" }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => {
                    haNdleAddClick();
                  }}
                >
                  Add New
                </Button>
              </Grid>
            </Grid>
            {/* -------FIELD AND BUTTON------ */}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
