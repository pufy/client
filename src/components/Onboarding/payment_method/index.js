import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class PaymentMethod extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Metodo de pago</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

PaymentMethod = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentMethod);

export default PaymentMethod;