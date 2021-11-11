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
    <Box sx={{ width: 375, position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ><BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to='/' value='/' />
        <BottomNavigationAction label="History" icon={<RestoreIcon />} component={Link} to='/history' value='/history'/>
        <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} component={Link} to='/notifications' value='/notifications' />
        <BottomNavigationAction label="Account" icon={<PersonOutlineIcon />} component={Link} to='/account' value='/account'/>
        
      
      </BottomNavigation>
      
    </Box>

    
    </div>

  );
}

export default BottomNav
