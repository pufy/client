import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { reset } from 'redux-form';
import LoginForm from '../../components/redux-forms/login';
import SignupForm from '../../components/redux-forms/signup';
import { loginAction, signupAction } from '../../services/auth/actions';
import { Button } from 'reactstrap';

import { FaTint } from "react-icons/fa";


class Login extends React.Component {

  state = { isCollapsed: 'collapsed', email: undefined };
  //collapsed - expand - fulled
  constructor(props){
    super(props);
  }

  changeIsCollapsed = (state) => this.setState({ isCollapsed: state });

  render() {
    
    
    return (
      <div>
        <h1>Login (*-*).l.</h1>
      </div>
   );
  }

  onLoginPress = (credentials) => this.props.loginAction(credentials.email, credentials.password) 

  
};

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
};

const mapDispatchToProps = {
};

Login = connect(
//  mapStateToProps,
//  mapDispatchToProps,
  )(Login);
  
export default Login;

