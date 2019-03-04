import React from 'react'
import { connect } from 'react-redux';
import { FaUsers, FaPlusCircle, FaUserAstronaut } from "react-icons/fa";
import logoPufy from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';


const Stats = props => {
  const { history } = props;
  return (
    <h1> Stadistisc wors</h1>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(
  mapStateToProps, null
)(Stats)