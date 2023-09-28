import { Box } from "@mui/joy";
import React from "react";
import Apply from "./Apply";
import Events from "./Events";
import MemberCard from "./MemberCard";
import Projects from "./Projects";
import IntroVideo from "./assets/fintech.mp4";
import "./styles/introduction.css";

const MainPage = ({ selectedTab }) => {
  if (selectedTab === 0) {
    return (
      <div>
        <Introduction />
        {/* <HeaderOverlay /> */}
        <MissionStatement />
      </div>
    );
  }
  if (selectedTab === 1) {
    return <Projects />;
  }
  if (selectedTab === 2) {
    return <Events />;
  }
  if (selectedTab === 3) {
    return (
      <div>
        <MembersCard />
      </div>
    );
  }
  if (selectedTab === 4) {
    return (
      <div>
        <Apply />
      </div>
    );
  }
};

const Introduction = () => {
  return (
    <Box className="CenteredMainVideo">
      <Box className="video-container">
        <Box className="HeaderFont">Welcome to Quant@UCI!</Box>
        <video width="1500vw" height="auto" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
};

const MissionStatement = () => {
  return (
    <>
      <div className="MissionBox">Mission Statement</div>
      <div className="MissionWords">
        The purpose of this organization is to provide a space for students
        interested in financial technology to discuss topics and apply practical
        knowledge in areas pertaining to electronic trading or careers in
        finance. Quant at UCI also serves to help engineering students develop
        professional networks with established companies and other students.
      </div>
    </>
  );
};

const MembersCard = () => {
  return <MemberCard />;
};

export default MainPage;
