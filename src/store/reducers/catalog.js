import * as actionTypes from '../actions/actionsTypes';

const initialState = {
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT: {
      const newState = {
        ...state,
        products: [...state.products]
      };
      newState.products.splice(action.product, 1);
      return newState
    }
    default: return state;
  }
};

export default reducer;
