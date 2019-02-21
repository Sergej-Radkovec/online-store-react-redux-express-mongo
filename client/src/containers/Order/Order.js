import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListProduct from '../../component/ListProduct/ListProduct';
import * as actions from "../../store/actions";

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
  inline: {
    display: 'inline',
  },
  link: {
    textDecoration: 'none'
  }
});

function Order(props) {
  const { classes } = props;
  console.log(props.order);
  let price = 0;
  return (
    <List className={classes.root}>
      {props.order.map((product, i) => {
        price += product.price;
        return <ListProduct
            title={product.title}
            price={product.price}
            key={i}
            delete={() => props.deleteProductOrder(i)}
          />
        }
      )}
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="ИТОГО:"
          secondary={
            <Typography component="span" className={classes.inline} color="textPrimary">
              {price}$
            </Typography>
          }
        />
        <Link to="/Checkout" className={classes.link}>
          <Button variant="contained" color="secondary">
            К Заказу
          </Button>
        </Link>
      </ListItem>
    </List>
  )
}

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProductOrder: (id) => dispatch(actions.deleteProductOrder(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Order));