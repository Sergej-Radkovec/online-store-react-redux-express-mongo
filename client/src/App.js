import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Catalog from './component/Catalog/Catalog';
import Layout from './hoc/Layout/Layout';
import Admin from './component/Admin/Admin';
import Checkout from './component/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path="/order" component={Checkout}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/catalog" render={() => <Catalog products={this.props.products}/>}/>

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
