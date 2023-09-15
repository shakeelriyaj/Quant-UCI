import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { useEffect, useState } from 'react';

const TabsSegmentedControls = ({ selectedTab, onTabChange }) => {

  const handleTabChange = (event, newValue) => {
    onTabChange(newValue);
  };

  useEffect(() => {
    console.log("selected", selectedTab);
  }, [selectedTab]);

  return (
    <Tabs
      aria-label="tabs"
      defaultValue={0}
      sx={{ bgcolor: 'transparent' }}
      onChange={handleTabChange}
    >
      <TabList
        disableUnderline
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
          bgcolor: 'transparent',
          marginTop: '2rem',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'transparent',
          },
        }}
      >
 
        <Tab disableIndicator>Home</Tab>
        <Tab disableIndicator>Projects</Tab>
        <Tab disableIndicator>Events</Tab>
        <Tab disableIndicator>Members</Tab>
        <Tab disableIndicator>Sponsors</Tab>
      </TabList>
    </Tabs>
  );
}

export default TabsSegmentedControls;