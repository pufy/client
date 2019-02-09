import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class BusinessProfile extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Perfil de Negocio</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

BusinessProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BusinessProfile);

export default BusinessProfile;