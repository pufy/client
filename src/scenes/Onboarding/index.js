import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';

import { FaCheckCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


class Onboarding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {

    return (
      <div className="component-profile">
      <h1> Onboarding patrocinados por Pufy  :D!</h1>
      
     
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

Onboarding = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Onboarding);

export default Onboarding;