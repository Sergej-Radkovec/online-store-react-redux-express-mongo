import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 350
    ,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
});

function CardProduct(props) {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {props.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              ${props.price}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary">
          {props.descr}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <div>
          {props.variants.map(variant => <Chip className={classes.chip} label={variant}/>)}
        </div>
      </div>
      <div className={classes.section3}>
        <Button variant="contained" color="primary" fullWidth>
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

CardProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardProduct);