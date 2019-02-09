import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';

import { FaCheckCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {
    //const { user, languages } = this.props.user;

    return (
      <div className="component-profile">
      <h1> Playlist :D!</h1>
      
     
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

Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);

export default Player;