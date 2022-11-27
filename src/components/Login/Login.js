import React, { useState } from "react";
import "./Login.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorInfo, setErrorInfo] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();

  const direct_login = () => {
    navigate("/login");
  };

  const handleMail = (event) => {
    // if (validator.isEmail(event.target.value)) {
    setMail(event.target.value);
    // setEmailError(false);
    // } else {
    //   setEmailError(true);
    // }
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const clickHandle = async () => {
    const response = await fetch(
      "https://jobs-api.squareboat.info/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password: pass,
        }),
      }
    );

    let data = await response.json();
    console.log(data.code);
    if (data.code === 401) {
      setErrorInfo(true);
    } else {
      localStorage.setItem("Token", data.data.token);
      localStorage.setItem("Name", data.data.name);

      const TokenCheck = localStorage.getItem("Token");
      if (TokenCheck != "undefined") {
        navigate("/jobs");
      }
    }

    console.log(errorInfo);
  };

  return (
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
          <button class="login" onClick={direct_login}>
            {" "}
            Login
          </button>
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

            <Typography variant="subtitle1" gutterBottom>
              Email Address
            </Typography>
            <TextField
              type="email"
              value={mail}
              sx={{ width: "30vw" }}
              placeholder="Enter your mail"
              variant="outlined"
              onChange={handleMail}
            />
            {emailError ? (
              <Typography
                variant="subtitle1"
                sx={{ color: "red", marginBottom: "1vh" }}
                gutterBottom
              >
                Please enter a valid email address.
              </Typography>
            ) : (
              <></>
            )}
            <Typography
              variant="subtitle1"
              sx={{ marginTop: "2vh" }}
              gutterBottom
            >
              Password
            </Typography>
            <TextField
              value={pass}
              sx={{ width: "30vw" }}
              placeholder="Enter your password"
              variant="outlined"
              type="password"
              onChange={handlePass}
            />

            {errorInfo ? (
              <Typography
                sx={{ marginBottom: "2vh" }}
                variant="subtitle1"
                color="red"
                gutterBottom
              >
                Incorrect email address password.
              </Typography>
            ) : (
              <></>
            )}

            <Button
              sx={{
                marginTop: "2vh",
                position: "relative",
                left: "33%",
                width: "10vw",
                height: "6vh",
                background: " #43AFFF",
              }}
              variant="contained"
              disableElevation
              onClick={clickHandle}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default Login;
