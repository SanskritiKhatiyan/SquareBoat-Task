import React from "react";
import "./Jobs.css";
import HomeIcon from "../../assests/Icon ionic-md-home.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Jobcard from "./Jobcard/Jobcard";
import Pagination from "./Jobcard/Pagination";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Paper } from "@mui/material";
import CloseIcon from "../../assests/Icon metro-cross.svg";

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [jobsData, setJobsData] = useState([]);
  const [user, setUser] = useState("");
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const tokenCheck = localStorage.getItem("Token");
    const userName = localStorage.getItem("Name");

    if (userName !== undefined && userName != null) {
      let userAcc = userName.slice(0, 1);
      setUser(userAcc);
    } else {
      setUser("Login");
    }

    if (tokenCheck !== undefined && tokenCheck != null) {
      navigate("/jobs");
    } else {
      navigate("/login");
    }
    console.log(tokenCheck);

    try {
      (async () => {
        const response = await axios.get(
          "https://jobs-api.squareboat.info/api/v1/recruiters/jobs",
          {
            headers: { Authorization: tokenCheck },
          }
        );

        setJobsData(response.data.data.data);
        console.log(response.data.data.data);
      })();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Name");
    const TokenCheck = localStorage.getItem("Token");
    if (TokenCheck === null) {
      navigate("/");
    }
  };

  const closedalert = () => {
    setOpen(false);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobsData.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);

  return (
    <>
      <div class="j_upper">
        <div class="j_heading">
          <p class="j_title">
            <Typography
              sx={{
                color: "white",
                fontSize: "3vh",
                paddingTop: "1vh",
                fontWeight: "bolder",
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
                fontWeight: "bolder",
                letterSpacing: "1px",
              }}
            >
              Jobs
            </Typography>
          </p>
          <div>
            <button class="j_login"> {user}</button>
            <Select
              sx={{ height: "4vh", width: "2vw" }}
              // labelId="demo-customized-select-label"
              // id="demo-customized-select"
              variant="standard"
            >
              <Button onClick={logoutUser}>logout</Button>
            </Select>
          </div>
        </div>
        <div class="home_icon">
          <img src={HomeIcon} alt="home_icon" />
          <NavLink to="/" class="home_link">
            <Typography sx={{ color: "white", textDecoration: "none" }}>
              Home
            </Typography>
          </NavLink>
        </div>

        {open ? (
          <Paper
            sx={{
              width: "20vw",
              height: "8vh",
              position: "absolute",
              right: "5vw",
              padding: "1vh",
              zIndex: "10",
            }}
            elevation={24}
          >
            <div class="alertBox">
              <Typography variant="h5" sx={{ color: "blue" }}>
                {" "}
                Login
              </Typography>
              <Button onClick={closedalert}>
                {" "}
                <img src={CloseIcon}></img>
              </Button>
            </div>
            <Typography> You have logged in successfully.</Typography>
          </Paper>
        ) : (
          <></>
        )}

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "white",
            // border: "2px solid red",
            width: "auto",
            position: "absolute",
            top: "15vh",
            left: "10vw",
          }}
        >
          Jobs posted by you
        </Typography>
      </div>

      <div class="j_lower"></div>

      <Box
        sx={{
          width: "80vw",
          height: "70vh",
          // border: "2px solid red",
          position: "absolute",
          top: "20vh",
          left: "10vw",
        }}
      >
        <Jobcard jobsData={currentPosts} />
      </Box>
      <Pagination
        totalPosts={jobsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Jobs;
