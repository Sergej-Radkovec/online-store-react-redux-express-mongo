import React, {Component} from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import ListProduct from './ListProduct/ListProduct';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  fab: {
    position: 'absolute',
    top: theme.spacing.unit * 10,
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

class Admin extends Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render () {
    const { classes } = this.props;
    return (
      <>
        <List className={classes.root}>
          {this.props.products.map((product, i) => (
              <ListProduct
                title={product.title}
                price={product.price}
                description={product.description}
                key={i}
                id={i}
              />
            )
          )}
        </List>
        <Fab onClick={this.handleOpen} className={classes.fab} color="primary">
          <AddIcon/>
        </Fab>
        <Modal open={this.state.modalOpen} onClose={this.handleClose}>
          <div>Модалка</div>
        </Modal>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    products: state.catalog.products
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Admin));