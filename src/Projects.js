import "./styles/projects.css";
import graph from "./assets/Graph.png";
import equation from "./assets/CovEq.png";
import { Box } from "@mui/joy";
import React from "react";

const Projects = () => {

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
