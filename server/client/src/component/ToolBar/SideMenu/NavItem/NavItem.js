import React from 'react';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './NavItem.css';

const NavItem = (props) => {
  const path = window.location.pathname.slice(1);

  return (
    <Link to={`/${props.title}`} className={classes.Link}>
      <MenuItem onClick={props.clicked} selected={path === props.title ? true : false}>
        {props.title}
      </MenuItem>
    </Link>
  )
};

export default NavItem;