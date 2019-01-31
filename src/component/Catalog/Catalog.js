import React from 'react';

import CardProduct from '../CardProduct/CardProduct';
import classes from './Catalog.css'

const Catalog = (props) => {
  return (
    <div className={classes.Catalog}>
      {props.products.map((product) => (
        <CardProduct
          title={product.title}
          price={product.price}
          descr={product.description}
          variants={product.variants}
        />)
      )}
    </div>
  )
}

export default Catalog;