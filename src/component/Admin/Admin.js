import React from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
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

const Admin = (props) => {
  const { classes } = props;
  return (
    <>
      <List className={classes.root}>
        {props.products.map((product, i) => (
          <ListProduct
            title={product.title}
            price={product.price}
            description={product.description}
            key={i}
          />
          )
        )}
      </List>
      <Fab className={classes.fab} color="primary">
        <AddIcon/>
      </Fab>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Admin));