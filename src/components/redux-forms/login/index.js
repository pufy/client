import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import { FaKey } from "react-icons/fa";
import { required, email, maxLength30, maxLength15, minLength3, minLength5 } from '../validate';
import { renderField } from '../field';
import { FaSpinner } from "react-icons/fa";

let LoginForm = props => {
  const { handleSubmit, pristine, submitting, error, auth } = props
  return (
    <div className="component-form-login">
      <div className="content column-sm row">
        <div className="container-add col-12 col-md-6 pr-md-5 d-none d-md-block">
          <img src={"https://s3-alpha-sig.figma.com/img/7f71/2cf9/fad5e3977f9e3e5227b23f8c3fa33f8f?Expires=1549238400&Signature=XgxYOvEdgwMm7qi79wuVG~vKzVvKlcFqo0h1xBVaW7D93c3c62jmJ4u33rP7XrmT0bMAZTj8Pi6sWmI3kzlhjLLg-ektFwZDlB1gp-eJCRepa52TcnHd9yncmQ2uvEwEnYJ~B-mw3v7URwG6PtAto~i0xL94jEcE8unTZuXIxnFsfyBzSKRnoL66fTJGCbeYj0pbn3pYjk1vRBWpSuCmj5azHi4kwn6LLeFlXzKn9gd8B4kapM3SJJ703fzTLwwzsrt0QL65h2DN3AnSRBmqBrmVrOBaIemQwmKZNkChdt3UTdgO2WyrAAuyNwsNcSTUUfZDWB3csPuY68a53j6OMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"} alt="adds"/>
        </div>
        <div className="col-12 col-md-6 pl-md-5">
          <div className="login py-3">
          <p>Bienvenido a <strong>NATIVO</strong></p>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit} className="mt-3">
            <Field styleInput={{margin: '.5rem 0'}} type="email" name="email" placeholder="Correo electrónico" component={renderField} validate={[required, email, maxLength30, minLength5]} />
            <Field styleInput={{margin: '.5rem 0'}} type="password" name="password" placeholder="Contraseña" component={renderField} validate={[required, maxLength15, minLength3]} />
            {error && <span className="message-error">{error}</span>}
            <a href="www.google.com" target="blank" className="d-block lb-forgot-password"> <i>¿Olvidaste tu contraseña?</i></a>
            <Button className="mt-3" type="submit" outline color="secondary" disabled={pristine || submitting}>
            { auth.loading && <FaSpinner className="rotate-center ml-2"/> }
            { !auth.loading && <FaKey/> } 
            Ingresar</Button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

LoginForm = connect(
  mapStateToProps,
  null
)(LoginForm);

export default reduxForm({
  form: 'login'
})(LoginForm)