import React, {Component} from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListProduct from './ListProduct/ListProduct';
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
  fab: {
    position: 'absolute',
    top: theme.spacing.unit * 10,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textField: {
    width: '100%'
  },
});

class Admin extends Component {
  state = {
    modalOpen: false,
    form: {
      title: '',
      price: '',
      description: ''
    }
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({
      modalOpen: false,
      form: {
        title: '',
        price: '',
        description: ''
      }
    })
  };

  handleChange = name => event => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: event.target.value
      }
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state.form);
    this.setState({
      modalOpen: false,
      form: {
        title: '',
        price: '',
        description: ''
      }
    })
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
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5">
              Добавте новый продукт
            </Typography>
            <form onSubmit={this.submitHandler}>
              <TextField
                required
                id="title"
                label="Title"
                className={classes.textField}
                value={this.state.form.title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <TextField
                required
                id="price"
                label="Price, $"
                value={this.state.form.price}
                onChange={this.handleChange('price')}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="description"
                label="Description"
                multiline
                rows="3"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={this.state.description}
                onChange={this.handleChange('description')}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Добавить
              </Button>
            </form>
          </Paper>
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

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product) => dispatch(actions.addProduct(product))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Admin));