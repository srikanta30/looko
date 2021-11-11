import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { Link } from "react-router-dom";



function BottomNav() {
    const pathname = window.location.pathname;
    const [value, setValue] = React.useState(pathname);

  return (
    <div>
    <Box sx={{ width: 375, position: 'fixed', bottom: 0}} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ><BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to='/' value='/' style={{ color: (pathname === "/") ? '#F5617F' : "#010729"}} />
        <BottomNavigationAction label="History" icon={<RestoreIcon />} component={Link} to='/history' value='/history' style={{ color: (pathname === "/history") ? '#F5617F' : "#010729"}}/>
        <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} component={Link} to='/notifications' value='/notifications' style={{ color: (pathname === "/notifications") ? '#F5617F' : "#010729"}}/>
        <BottomNavigationAction label="Account" icon={<PersonOutlineIcon />} component={Link} to='/account' value='/account' style={{ color: (pathname === "/account") ? '#F5617F' : "#010729"}}/>
        
      
      </BottomNavigation>
      
    </Box>

    
    </div>

  );
}

export default BottomNav
