import * as React from 'react';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';

import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';


function MenuItem(props) {

  return (
    <div width="300">
      <Toolbar/>
      <Divider />
      <List>
        <ListItem button component={Link} to="/info" >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/" >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/population" >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="人口" />
        </ListItem>
        <ListItem button component={Link} to="/working" >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="労働" />
        </ListItem>
        <ListItem button component={Link} to="/working" >
          <ListItemIcon>
            <CurrencyYenIcon />
          </ListItemIcon>
          <ListItemText primary="経済" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

export default MenuItem;
