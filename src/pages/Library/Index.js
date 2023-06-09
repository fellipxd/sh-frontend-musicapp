import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NowPlaying from '../Library/NowPlaying'
import './playerStyles.css'
import Album from './album';
import Songs from './Songs';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Library() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="page-wrapper">
      <Box sx={{ width: '100%', color: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', color: "white" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ color: "white" }} textColor="light">
            <Tab label="Songs" {...a11yProps(0)} />
            <Tab label="Album" {...a11yProps(1)} />
            <Tab label="Now Playing" {...a11yProps(2)} />
            <Tab label="Favorite Songs" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Songs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Album />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NowPlaying />
        </TabPanel>
      </Box>
    </div>

  );
}
