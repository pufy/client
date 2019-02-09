import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class PaymentPlan extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Plan de pago</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

PaymentPlan = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentPlan);

export default PaymentPlan;