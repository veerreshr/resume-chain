import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useStore } from "../store";
import BasicDetailsSection from "../resumesections/BasicDetailsSection";
import EducationSection from "../resumesections/EducationSection";
import WorkSection from "./../resumesections/WorkSection";
import ProjectsSection from "./../resumesections/ProjectsSection";
import SkillsSection from "../resumesections/SkillsSection";
import AwardsSection from "../resumesections/AwardsSection";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const currentTab = useStore((state) => state.currentTab);
  const setCurrentTab = useStore((state) => state.setCurrentTab);

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        selectionFollowsFocus
        value={currentTab}
        onChange={handleChange}
        aria-label="Resume Section Tabs"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: "150px" }}
      >
        <Tab label="Basic Details" {...a11yProps(0)} />
        <Tab label="Education" {...a11yProps(1)} />
        <Tab label="Work" {...a11yProps(2)} />
        <Tab label="Projects" {...a11yProps(3)} />
        <Tab label="Skills" {...a11yProps(4)} />
        <Tab label="Awards" {...a11yProps(5)} />
        <Tab label="Publications" {...a11yProps(6)} />
        <Tab label="Certificates" {...a11yProps(7)} />
        <Tab label="Volunteer" {...a11yProps(8)} />
        <Tab label="Languages" {...a11yProps(9)} />
        <Tab label="Interests" {...a11yProps(10)} />
      </Tabs>
      <TabPanel value={currentTab} index={0}>
        <BasicDetailsSection />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <EducationSection />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <WorkSection />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <ProjectsSection />
      </TabPanel>
      <TabPanel value={currentTab} index={4}>
        <SkillsSection />
      </TabPanel>
      <TabPanel value={currentTab} index={5}>
        <AwardsSection />
      </TabPanel>
      <TabPanel value={currentTab} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={currentTab} index={7}>
        Item Eight
      </TabPanel>
      <TabPanel value={currentTab} index={8}>
        Item nine
      </TabPanel>
      <TabPanel value={currentTab} index={9}>
        Item Ten
      </TabPanel>
      <TabPanel value={currentTab} index={10}>
        Item 11
      </TabPanel>
    </Box>
  );
}
