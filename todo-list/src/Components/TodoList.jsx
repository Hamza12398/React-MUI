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
import Grid from "@mui/material/Grid";
import Todo from "./Todo";

export default function TodoList() {
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
            <Todo />
            <Todo />
            <Todo />
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
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
