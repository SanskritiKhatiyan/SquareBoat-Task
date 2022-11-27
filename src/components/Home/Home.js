import { Button, Box, Typography, Paper } from "@mui/material";
import React from "react";
import WorkImg from "../../assests/Screenshot 2020-09-21 at 2.06.52 PM.png";
import img1 from "../../assests/goldline.png";
import img2 from "../../assests/ideaa.png";
import img3 from "../../assests/kanba.png";
import img4 from "../../assests/lighting.png";
import img5 from "../../assests/kanba.png";
import img6 from "../../assests/liva.png";
import img7 from "../../assests/solaytic.png";
import img8 from "../../assests/velocity-9.png";
import img9 from "../../assests/ztos.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const direct_jobs = () => {
    navigate("/jobs");
  };
  const direct_login = () => {
    navigate("/login");
  };

  return (
    <>
      <div class="upper_home">
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

      <Box sx={{ position: "absolute", top: "18vh", left: "15vw" }}>
        <Typography sx={{ color: "white" }} variant="h2">
          Welcome to{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
            }}
          >
            My
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#43AFFF",
            }}
          >
            Jobs
          </Typography>
        </Box>

        <Button
          sx={{
            marginTop: "2vh",
            background: "#43AFFF",
            border: "1px solid #43AFFF",
            color: "white",
            height: "6vh",
            width: "8vw",
          }}
          onClick={direct_jobs}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ position: "absolute", top: "9vh", right: "10vw" }}>
        <img src={WorkImg}></img>
      </Box>

      <div class="lower_home">
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            left: "15vw",
            top: "70vh",
            color: "#303F60",
            fontWeight: "bold",
          }}
        >
          Why Us
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: "75vh",
            left: "15vw",
            display: "flex",
            justifyContent: "space-between",
            width: "70vw",
          }}
        >
          <Paper
            sx={{
              height: "26vh",
              width: "20vw",
              boxSizing: "border-box",
              padding: "2vh",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                width: "10vw",
                marginBottom: "3vh",
                color: "#43afff",
                fontWeight: "bold",
              }}
              variant="h5"
            >
              {" "}
              Get More Visibilty
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </Paper>
          <Paper
            sx={{
              height: "26vh",
              width: "20vw",
              boxSizing: "border-box",
              padding: "2vh",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                width: "10vw",
                marginBottom: "3vh",
                color: "#43afff",
                fontWeight: "bold",
              }}
              variant="h5"
            >
              {" "}
              Organize your Candidates
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </Paper>
          <Paper
            sx={{
              height: "26vh",
              width: "20vw",
              boxSizing: "border-box",
              padding: "2vh",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                width: "10vw",
                marginBottom: "3vh",
                color: "#43afff",
                fontWeight: "bold",
              }}
              variant="h5"
            >
              {" "}
              Verify their Abilities
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </Paper>
        </Box>

        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            left: "15vw",
            top: "110vh",
            color: "#303F60",
            fontWeight: "bold",
          }}
        >
          Companies who trust Us
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: "70vw",
            top: "115vh",
            left: "15vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={img1}></img>
          <img src={img2}></img>
          <img src={img3}></img>
          <img src={img4}></img>
          <img src={img5}></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "70vw",
            top: "125vh",
            left: "15vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img src={img6}></img>
          <img src={img7}></img>
          <img src={img8}></img>
          <img src={img9}></img>
        </Box>
      </div>
    </>
  );
};

export default Home;
