import "./styles/projects.css";
import graph from "./assets/Graph.png";
import equation from "./assets/CovEq.png";
import { Box } from "@mui/joy";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Projects = () => {
    const [timer, setTimer] = useState(0);

    const fetchData = () => {
      // Fetch data for AA
      axios
        .get("https://api.twelvedata.com/time_series?apikey=e4e57fcf63f941b694fda658873d3445&interval=1min&symbol=AA")
        .then((response) => {
          console.log("AA Data:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching AA data:", error);
        });
  
      // Fetch data for C
      axios
        .get("https://api.twelvedata.com/time_series?apikey=e4e57fcf63f941b694fda658873d3445&interval=1min&symbol=C")
        .then((response) => {
          console.log("C Data:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching C data:", error);
        });
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
  
      // Clean up timer and interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    useEffect(() => {
      // Check if timer has reached 60 seconds (1 minute)
      if (timer === 60) {
        // Reset timer
        setTimer(0);
  
        // Fetch data when the timer reaches 1 minute
        fetchData();
      }
    }, [timer]);
  
  return (
    <div className="templateContainer">
    <div className="mainHeader">Pairs Trading using Statistical Arbitrage</div>
    <div className="explanationPara">Our club is creating a pairs trading project that utilizes 2 highly correlated stocks and a strategy that leverages rapid selling and buying of these 2 stocks. 
    The main languages of choice are Python and C++, which allow for readability among platforms and rapid compiling and executing time.
    This project aims to bring trading experience and developer knowledge to our members, while promoting a commonly used strategy in the quantititave finance world.</div>
      <div className="imageContainer">
        <Box
          component="img"
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            width: '500px',
            marginBottom: '3vw'
          }}
          alt="eq"
          src={equation}
        />
        <div className="correlationFont">Graph Between Stocks AA (Alcoa) and C (Citi)</div>
        <Box
          component="img"
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            width: '500px',
          }}
          alt="graph"
          src={graph}
        />
      </div>
    </div>
  );
}

export default Projects;
