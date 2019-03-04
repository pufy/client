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
      <form onSubmit={handleSubmit} className="mt-3">
        <Field styleInput={{ borderRadius: '100px', marginBottom: '1rem' }} type="email" name="email" placeholder="Correo electrónico" component={renderField} validate={[required, email, maxLength30, minLength5]} />
        <Field styleInput={{ borderRadius: '100px', marginBottom: '1rem' }} type="password" name="password" placeholder="Contraseña" component={renderField} validate={[required, maxLength15, minLength3]} />
        {error && <span className="message-error">{error}</span>}
        {/* <a href="www.google.com" target="blank" className="d-block lb-forgot-password"> <i>¿Olvidaste tu contraseña?</i></a> */}
        <Button className="mt-3" type="submit" outline color="secondary" disabled={pristine || submitting}>
          {auth.loading && <FaSpinner className="rotate-center ml-2" />}
          {!auth.loading && <FaKey />}
          Ingresar</Button>
      </form>
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