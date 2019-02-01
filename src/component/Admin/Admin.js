import React from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
});

const Admin = (props) => {
  const { classes } = props;
  return (
    <List className={classes.root}>
      {props.products.map((product, i) => (
          <ListItem alignItems="flex-start" key={i} divider>
            <ListItemText
              primary={product.title}
              secondary={
                <>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                    {`${product.price}$ `}
                  </Typography>
                  {product.description}
                </>
              }
            />
            <Button variant="contained" color="primary">
              Удалить
            </Button>
          </ListItem>
        )
      )}
    </List>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Admin));