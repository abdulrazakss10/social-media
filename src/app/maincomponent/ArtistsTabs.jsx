"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Artistsprofile.css";
const artists = [
  {
    name: "Thomas Edward",
    username: "@thewildwithyou",
    profilePic:
      "/artists/artistprofie/pexels-anastasia-shuraeva-4406721/pexels-anastasia-shuraeva-4406721.png",
    background:
      "/artists/pexels-ekaterina-12203460/pexels-ekaterina-12203460.png",
  },
  {
    name: "Emilie Jones",
    username: "@thewildwithyou",
    profilePic:
      "/artists/artistprofie/pexels-antoni-shkraba-4442005/pexels-antoni-shkraba-4442005.png",
    background:
      "/artists/pexels-genaro-servín-763210/pexels-genaro-servín-763210.png",
  },
  {
    name: "Chris Doe",
    username: "@thewildwithyou",
    profilePic:
      "/artists/artistprofie/pexels-andrea-piacquadio-3771118/pexels-andrea-piacquadio-3771118.png",
    background:
      "/artists/pexels-fiona-art-5022849/pexels-fiona-art-5022849.png",
  },
  {
    name: "Jessica Williams",
    username: "@thewildwithyou",
    profilePic:
      "/artists/artistprofie/pexels-antoni-shkraba-4442102/pexels-antoni-shkraba-4442102.png",
    background: "/artists/pexels-pixabay-164455/pexels-pixabay-164455.png",
  },
];

const photographers = [
  {
    name: "Emilie Jones",
    username: "@thewildwithyou",
    profilePic:
      "/artists/artistprofie/pexels-antoni-shkraba-4442005/pexels-antoni-shkraba-4442005.png",
    background:
      "/artists/pexels-genaro-servín-763210/pexels-genaro-servín-763210.png",
  },
  {
    name: "Jessica Williams",
    username: "@thewildwithyou",
    profilePic:
      "/artists/artistprofie/pexels-antoni-shkraba-4442102/pexels-antoni-shkraba-4442102.png",
    background: "/artists/pexels-pixabay-164455/pexels-pixabay-164455.png",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tabsfont"
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Artistsprofile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderProfiles = (profiles) =>
    profiles.map((profile, index) => (
      <div key={index} className="profile-card">
        <img src={profile.background} alt="artwork" className="profile-bg" />
        <div className="profile-info">
          <div className="profile-pic-container">
            <img
              src={profile.profilePic}
              alt="profile"
              className="profile-pic"
            />
            <div className="status-dot"></div>
          </div>
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.username}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="proileTabs">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Artists" {...a11yProps(0)} />
            <Tab label="Photographers" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="profile-list">{renderProfiles(artists)}</div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="profile-list">{renderProfiles(photographers)}</div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
