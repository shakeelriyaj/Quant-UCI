import { Box } from "@mui/joy";
import React from "react";
import Apply from "./Apply";
import Events from "./Events";
import MemberCard from "./MemberCard";
import Projects from "./Projects";
import IntroVideo from "./assets/fintechcut.mp4";
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
        <video className="Video" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
};

const MissionStatement = () => {
  return (
    <>
      <div className="AboutBox">About Us!</div>
      <div className="AboutWords">
      Welcome to Quant@UCI, the gateway to unlocking the thrilling world of
      quantitative finance and data analysis. Our club is dedicated to equipping 
      students with the skills, knowledge, and connections needed to break into the 
      competitive quantitative industry. At Quant@UCI, we understand that the quantitative
      industry can be a challenging field to enter. We're here to help students navigate 
      this complex landscape, providing resources, workshops, and networking opportunities 
      to build a strong foundation for success. Whether you're passionate about algorithmic 
      trading, data science, risk management, or financial modeling, we've got you covered.
      </div>
      <div className="MissionBox">Mission Statement</div>
      <div className="MissionWords">
        The purpose of this organization is to provide a space for students
        interested in financial technology to discuss topics and apply practical
        knowledge in areas pertaining to electronic trading or careers in
        finance. Quant@UCI also serves to help engineering students develop
        professional networks with established companies and other students.
      </div>
    </>
  );
};

const MembersCard = () => {
  return <MemberCard />;
};

export default MainPage;
