import React, { useEffect } from "react";
import IntroVideo from "./assets/fintech.mp4";
import "./styles/introduction.css"; 
import { Box } from "@mui/joy";
import MemberCard from "./MemberCard"

const MainPage = ({selectedTab}) => {
  if (selectedTab === 0){
    return (
      <div>
        <Introduction />
        <HeaderOverlay />
        <MissionStatement />
      </div>
    );
  };
  if (selectedTab === 1){
    return (
      <div>
        projects
      </div>
      );
  };
  if (selectedTab === 2){
    return (
      <div>
        events
      </div>
      );
  };
  if (selectedTab === 3){
    return (
      <div>
        <MembersCard/>
      </div>
      );
  };
  if (selectedTab === 4){
    return (
      <div>
        Sponsors
      </div>
      );
  };
}

// const LogoIcon = () => {
//   return <img src={logo} alt="Logo" className="logo" />;
// }

const Introduction = () => {
  return (
    <Box className="CenteredMainVideo">
      <Box className="video-container">
        <video width="1500vw" height="auto" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
};

const HeaderOverlay = () => {
  return <Box className="HeaderFont">Welcome to FinTech @ UCI!</Box>;
};

const MissionStatement = () => {
  return (
    <>
      <div className="MissionBox">Mission Statement</div>
      <div className="MissionWords">The purpose of this organization is to provide a space for students interested in financial
technology to discuss topics and apply practical knowledge in areas pertaining to electronic
trading or careers in finance. FinTech at UCI also serves to help engineering students develop
professional networks with established companies and other students.</div>
    </>
  );
};

const MembersCard = () => {
  return <MemberCard/>
}

export default MainPage;
