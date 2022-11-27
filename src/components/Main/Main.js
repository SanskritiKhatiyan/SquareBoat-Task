import React, { useState } from "react";
import "./Login.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Main = () => {
  <>
    <div class="upper">
      <div class="heading">
        <p class="title">
          <Typography
            sx={{
              color: "white",
              fontSize: "3vh",
              paddingTop: "1vh",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            My
          </Typography>
          <Typography
            sx={{
              color: "#43AFFF",
              fontSize: "3vh",
              paddingTop: "1vh",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Jobs
          </Typography>
        </p>
        <button class="login"> Login</button>
      </div>
    </div>

    <div class="lower">
      <Paper
        sx={{
          position: "absolute",
          left: "30%",
          top: "22%",
          width: "35vw",
          height: "50vh",
          borderRadius: "20px",
          boxShadow: "0px 30px 36px #557DA526",
        }}
      >
        <Box
          sx={{
            margin: "2vw",
          }}
        >
          <Typography sx={{ fontWeight: "bolder" }} variant="h6" gutterBottom>
            Login
          </Typography>
        </Box>
      </Paper>
    </div>
  </>;
};

export default Main;
