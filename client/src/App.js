import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Catalog from './containers/Catalog/Catalog';
import Layout from './hoc/Layout/Layout';
import Admin from './containers/Admin/Admin';
import Order from './containers/Order/Order';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path="/order" component={Order}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/catalog" render={() => <Catalog products={this.props.products}/>}/>
            <Redirect to="/Catalog" />
          </Switch>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.catalog.products
  };
};

export default withRouter(connect(mapStateToProps)(App));
