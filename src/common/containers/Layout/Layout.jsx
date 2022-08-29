import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../../components/application/AppBar';
import { Main } from '../../components/application/Main';
import SideDrawer from '../../components/application/SideDrawer/SideDrawer';

const Layout = (props) => {
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open= {open} handleDrawerOpen={handleDrawerOpen}/>
      <SideDrawer open={open} handleDrawerClose = {handleDrawerClose} pages={props.pages}/>
      <Main open={open}>    
       {props.outlet}
      </Main>
    </Box>
  );
}

export default Layout;
