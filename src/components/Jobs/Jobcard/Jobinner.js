import { Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import location_icon from "../../../assests/Icon material-location-on.svg";
import { Box } from "@mui/system";

const Jobinner = ({ title, location, desc }) => {
  return (
    <>
      <Paper
        sx={{
          width: "18vw",
          height: "20vh",
          padding: "1vh",
          boxSizing: "border-box",
          boxShadow: "0px 3px 6px #557DA526",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            // border: "1px solid green",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            // border: "1px solid purple",
            height: "8vh",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // position: "relative",
          }}
          variant="subtitle1"
        >
          {" "}
          {desc}{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            // border: "1px solid red",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", height: " 5vh" }}>
            <img src={location_icon} />
            <Typography
              sx={{
                margin: "1%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "6vw",
              }}
            >
              {location}
            </Typography>
          </Box>
          <Typography
            sx={{
              width: "12vw",
              height: "4vh",
              background: " #43AFFF33",
              cursor: "pointer",
              borderRadius: "5px",
              color: "black",
              paddingTop: "1vh",
              paddingLeft: "0.5vw",
            }}
            variant="contained"
            disableElevation
          >
            View Applications
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Jobinner;
