import React from 'react'
import { connect } from 'react-redux';
import { FaUsers, FaPlusCircle, FaUserAstronaut } from "react-icons/fa";
import logoPufy from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';

const Header = props => {
  const { history } = props;
  return (
    <header>
      <div className="container container-header">
        <div className="content-logo flex-grow-1">
          <img src={logoPufy} />
        </div>
        <Link to="/profile">
          <div className="profile-name vert-align">
            <FaUserAstronaut />
            <p>Sebastian Rojas</p>
          </div>
        </Link>
      </div>
    </header>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(
  mapStateToProps, null
)(Header)