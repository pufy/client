import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Profile extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Perfil</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default Profile;