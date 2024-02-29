import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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

export default function TodoList() {
  // ! STATES
  const [todos, setTodos] = useState(initialTodos);
  const [titleInput, setTitleInput] = useState("");
  // ! END STATES

  function handleCheckClick(todoId) {
    const updateTodos = todos.map((t) => {
      if (t.id === todoId) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodos);
  }
  const todoList = todos.map((t) => {
    return <Todo key={t.id} todo={t} handleCheck={handleCheckClick} />;
  });

  function haNdleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
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
              // value={alignment}
              exclusive
              // onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="web">ALL</ToggleButton>
              <ToggleButton value="android">Achieved</ToggleButton>
              <ToggleButton value="ios">Unfinished</ToggleButton>
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
