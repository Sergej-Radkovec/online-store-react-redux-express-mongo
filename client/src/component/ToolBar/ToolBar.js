import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideMenu from './SideMenu/SideMenu';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';

const styles = theme => ({
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
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
  cartIcon: {
    color: 'white'
  }
});

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
          <Link to="/Order">
            <Badge badgeContent={props.products.length} color="secondary" classes={{ badge: classes.badge }}>
              <ShoppingCartIcon className={classes.cartIcon}/>
            </Badge>
          </Link>
          <Button color="inherit">Sign in with Google</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    products: state.order
  };
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ToolBar)));