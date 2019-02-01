import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SideMenu from '../SideMenu/SideMenu'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const ToolBar = (props) => {
  const { classes } = props;

  const path = window.location.pathname;

  const pageTitle = path !== '/' ? path.slice(1) : 'Catalog';

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu/>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {pageTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);