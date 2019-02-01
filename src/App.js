import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Catalog from './component/Catalog/Catalog';
import Toolbar from './component/ToolBar/ToolBar';


class App extends Component {
  state = {
    products: [
      {
        title: 'Доска',
        price: 4.65,
        description: 'Доска половая 1 сорт',
        variants: ['дуб', 'сосна', 'ель']
      },
      {
        title: 'Ламинат',
        price: 5.8,
        description: 'Ламинат водостойкий из натурального дерева',
        variants: ['темный', 'светлый']
      },
      {
        title: 'Доска',
        price: 4.65,
        description: 'Доска половая 1 сорт',
        variants: ['дуб', 'сосна', 'ель']
      },
      {
        title: 'Ламинат',
        price: 5.8,
        description: 'Ламинат водостойкий из натурального дерева',
        variants: ['темный', 'светлый']
      },
      {
        title: 'Доска',
        price: 4.65,
        description: 'Доска половая 1 сорт',
        variants: ['дуб', 'сосна', 'ель']
      },
      {
        title: 'Ламинат',
        price: 5.8,
        description: 'Ламинат водостойкий из натурального дерева',
        variants: ['темный', 'светлый']
      },
      {
        title: 'Доска',
        price: 4.65,
        description: 'Доска половая 1 сорт',
        variants: ['дуб', 'сосна', 'ель']
      },
      {
        title: 'Ламинат',
        price: 5.8,
        description: 'Ламинат водостойкий из натурального дерева',
        variants: ['темный', 'светлый']
      },
    ]
  }

  render() {
    return (
      <>
        <CssBaseline />
        <Toolbar/>
        <Catalog products={this.state.products}/>
      </>
    );
  }
}

export default App;
