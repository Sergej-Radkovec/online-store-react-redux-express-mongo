import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavItem from './NavItem/NavItem';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class SideMenu extends React.Component {
  state = {
    items: ['Catalog', 'Admin'],
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <IconButton className={classes.menuButton}
          color="inherit"
          aria-owns={anchorEl ? 'side-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.state.items.map((item) => <NavItem title={item} clicked={this.handleClose} key={item}/>)}
          <MenuItem onClick={() => {
            this.props.logout();
            this.handleClose()
          }}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SideMenu));
