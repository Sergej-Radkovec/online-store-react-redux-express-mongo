import React, { Component } from 'react';

import Catalog from './component/Catalog/Catalog';


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
      <div className="App">
        <Catalog products={this.state.products}/>
      </div>
    );
  }
}

export default App;
