import { Box } from "@mui/material";
import React from "react";
import Jobinner from "./Jobinner";
import "./Jobcard.css";

const Jobcard = ({ jobsData }) => {
  return (
    <div>
      {jobsData.map((job, index) => {
        return (
          <div class="job_card">
            <Jobinner
              // key={index}
              title={job.title}
              desc={job.description}
              location={job.location}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Jobcard;
