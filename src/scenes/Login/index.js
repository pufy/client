import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import MapLoginIcon from "../../assets/images/map-login.svg";
import pufy from "../../assets/images/pufy.png";

import { reset } from 'redux-form';
import LoginForm from '../../components/redux-forms/login';
import SignupForm from '../../components/redux-forms/signup';
import { loginAction, signupAction } from '../../services/auth/actions';
import { Button } from 'reactstrap';

import { FaTint } from "react-icons/fa";


class Login extends React.Component {

  state = { isCollapsed: 'collapsed', email: undefined };
  //collapsed - expand - fulled
  constructor(props) {
    super(props);
  }

  changeIsCollapsed = (state) => this.setState({ isCollapsed: state });

  render() {
    const { history } = this.props;
    return (
      <div className="container login">
        <div className="login-header my-5">
          <img src={pufy} />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 login-info pr-5">
            <h2>Atrae nuevos clientes, sé un espacio <strong>Pufy</strong></h2>
            <img className="my-5" src={MapLoginIcon} alt="map-icon" />
            <p>Los espacios <strong>Pufy</strong> aparecen cuando las personas buscan tu cafe, bar o pub . Mi Pufy te permite crear y actualizar tu Perfil comercial fácilmente para que puedas destacarte y atraer a clientes.</p>
          </div>
          <div className="col-12 col-lg-6 login-actions vert-align">
            <div className="login-actions-contain">
              <Button className="btn-fb-blue" type="submit" outline color="secondary" onClick={() => { this.changeIsCollapsed('mobil-expand') }}>
                INGRESA CON FACEBOOK</Button>
              <button className="btn-forgot-pasword" onClick={() => history.push("/signup")}>¿NO TIENES UNA CUENTA?</button>
              <LoginForm />
            </div>
          </div>
        </div>
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

