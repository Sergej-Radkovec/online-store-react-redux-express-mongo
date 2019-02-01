import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Catalog from './component/Catalog/Catalog';
import Layout from './hoc/Layout/Layout';
import Admin from './component/Admin/Admin'


class App extends Component {
  render() {

    return (
      <>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/catalog" render={() => <Catalog products={this.props.products}/>}/>
            <Redirect to="/catalog" />
          </Switch>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(App);
