import './ResponsiveDrawer.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import ResponsiveDrawerListItem from './ResponsiveDrawerListItem';
import Footer from '../components/Footer'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawerNav = () => {
    setMobileOpen(false);
  }

  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List>
          <ResponsiveDrawerListItem
            to="/info"
            onClick={closeDrawerNav}
            icon={<InfoIcon />}
            text="About"
          />
        </List>
        <Divider />
        <List>
        <ResponsiveDrawerListItem
            to="/"
            onClick={closeDrawerNav}
            icon={<HomeIcon />}
            text="Home"
          />    
        <ResponsiveDrawerListItem
            to="/population"
            onClick={closeDrawerNav}
            icon={<PeopleIcon />}
            text="人口"
          />    
        <ResponsiveDrawerListItem
            to="/working"
            onClick={closeDrawerNav}
            icon={<WorkIcon />}
            text="労働"
          />    
        <ResponsiveDrawerListItem
            to="/"
            onClick={closeDrawerNav}
            icon={<CurrencyYenIcon />}
            text="経済"
          />    
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline enableColorScheme/>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            千葉県オープンデータ
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        overflow-y='scroll'
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <main className="content">
          {props.children}
        </main>
        <Footer />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
