import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

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
      <Button onClick={() => props.deleteProduct(props.id)} variant="contained" color="primary">
        Удалить
      </Button>
    </ListItem>
  );
}

ListProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (id) => dispatch(actions.deleteProduct(id))
  }
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(ListProduct));