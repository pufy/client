import React from 'react'
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import pub from '../../assets/images/pub.svg'
import ex1 from '../../assets/images/example1.jpg'
import ex2 from '../../assets/images/example2.jpeg'
import ex3 from '../../assets/images/example3.jpg'

const InfoPlace = props => {
  return (
    <div className="component-info-place">
      <div className="info-place-data">
        <img src={pub} height="75" alt="country" />
        <div className="info-place-data-info">
          <h3>Vasito</h3>
          <span></span>
          <p>Cafetería - Calle 34a #28-93</p>
          <p>Abierto de 02pm a 03am - J V S D</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <img src={ex1} height="100" alt="ex1" />
        <img src={ex2} height="100" alt="ex2" />
        <img src={ex3} height="100" alt="ex3" />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(
  mapStateToProps, null
)(InfoPlace)