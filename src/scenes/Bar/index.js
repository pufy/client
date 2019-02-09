import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';

import HeaderProfile from '../../components/Ancestria/header-profile';
import { FaCheckCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import ADNBar from '../../assets/images/adn-bar.svg';
import { getProfile, getLanguage } from '../../services/user/actions';


class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {

    return (
      <div className="component-profile">
        <HeaderProfile/>   
      <h1> Catalogos patrocinados por Pufy  :D!</h1>
      
     
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  //getProfile,
  //getLanguage
};

Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default Profile;