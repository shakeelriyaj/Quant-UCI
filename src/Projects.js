import "./styles/projects.css";
import graph from "./assets/Graph.png";
import equation from "./assets/CovEq.png";
import { Box } from "@mui/joy";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Projects = () => {
    const [timer, setTimer] = useState(0);
    const [apiGo, setApiGo] = useState(false);
    const [AAdata, setAAData] = useState(null); // State to store the API data
    const [Cdata, setCData] = useState(null); // State to store the API data

    const checkTime = () => {
        const currentDate = new Date();
        const startTime = new Date();
        startTime.setHours(6, 30, 0); // Set the start time to 6:30 AM
        const endTime = new Date();
        endTime.setHours(13, 0, 0); // Set the end time to 1:00 PM
      
        if (currentDate >= startTime && currentDate <= endTime) {
            setApiGo(!apiGo)
            console.log(apiGo)
        } else {
        }
      };

    const fetchData = () => {
      // Fetch data for AA
      axios
        .get("https://api.twelvedata.com/time_series?apikey=e4e57fcf63f941b694fda658873d3445&interval=1min&symbol=AA")
        .then((response) => {
            const aaResponse = response.data.values[0].close;
            setAAData(aaResponse)
        })
        .catch((error) => {
          console.error("Error fetching AA data:", error);
        });
  
      // Fetch data for C
      axios
        .get("https://api.twelvedata.com/time_series?apikey=e4e57fcf63f941b694fda658873d3445&interval=1min&symbol=C")
        .then((response) => {
            const CResponse = response.data.values[0].close;
            setCData(CResponse)
        })
        .catch((error) => {
          console.error("Error fetching C data:", error);
        });
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      fetchData();

      // Clean up timer and interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };

    }, []);
  
    useEffect(() => {
      // Check if timer has reached 60 seconds (1 minute)
      if (timer === 60 & apiGo) {
        console.log(apiGo)
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
        <div>
            <div className="AAstockTicker"> Alcoa Corp current price: {AAdata}$ </div>
            <br/>
            <div className="CstockTicker">Citi Bank current price: {Cdata}$ </div>
        </div>
        {checkTime()}
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
            marginBottom:"40px"
          }}
          alt="graph"
          src={graph}
        />
      </div>
    </div>
  );
}

export default Projects;
