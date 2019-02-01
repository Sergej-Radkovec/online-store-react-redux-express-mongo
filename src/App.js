import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Catalog from './component/Catalog/Catalog';
import Layout from './hoc/Layout/Layout';


class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Layout>
          <Catalog products={this.props.products}/>
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
