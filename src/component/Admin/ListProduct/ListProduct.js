import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';



const styles = {
  inline: {
    display: 'inline',
  }
};

function ListProduct(props) {
  const { classes } = props;
  return (
    <ListItem alignItems="flex-start" divider>
      <ListItemText
        primary={props.title}
        secondary={
          <>
            <Typography component="span" className={classes.inline} color="textPrimary">
              {`${props.price}$ `}
            </Typography>
            {props.description}
          </>
        }
      />
      <Button variant="contained" color="primary">
        Удалить
      </Button>
    </ListItem>
  );
}

ListProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListProduct);