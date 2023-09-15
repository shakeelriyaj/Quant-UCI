import './styles/App.css';
import MainPage from './frontpage.js';
import TabsSegmentedControls from './NavBar';
import { useState } from 'react';
import logo from "./assets/logo.png"

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const LogoIcon = () => {
    return <img src={logo} alt="Logo" className="logo" />;
  }
  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <LogoIcon/>
      <TabsSegmentedControls selectedTab={selectedTab} onTabChange={handleTabChange} />
      <MainPage selectedTab={selectedTab} />
    </>
  );
}

export default App;
