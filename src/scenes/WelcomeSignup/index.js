import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { reset } from 'redux-form';
import LoginForm from '../../components/redux-forms/login';
import SignupForm from '../../components/redux-forms/signup';
import { loginAction, signupAction } from '../../services/auth/actions';
import { Button } from 'reactstrap';

import { FaTint } from "react-icons/fa";


class WelcomeSignup extends React.Component {

  state = {  };
  constructor(props){
    super(props);
  }

  changeIsCollapsed = (state) => this.setState({ isCollapsed: state });

  render() {
    const { isCollapsed, email } = this.state;

    if(this.props.auth.reset_form_signup && this.state.isCollapsed !== 'collapsed'){
      this.setState({ isCollapsed: 'collapsed' });
      this.props.reset('signup');
    }
    
    return (
      <div className="p-relative">  
          <h1>SignUP :3</h1>
      </div>
    );
  }

  onSignupPress = (data) => { 
    this.setState({ email: data.correo });
    this.props.signupAction(data); 
  }
};

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
};

const mapDispatchToProps = {
  loginAction,
  signupAction,
  reset
};

WelcomeSignup = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(WelcomeSignup);
  
export default WelcomeSignup;

