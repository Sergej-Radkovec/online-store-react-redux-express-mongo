import React from 'react';
import { connect} from 'react-redux';

const Order = (props) => {
  console.log(props.order);
  return (
    props.order.map((product, i) => <div key={i}>{product.product}</div>)
  )
};

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

export default connect(mapStateToProps)(Order);