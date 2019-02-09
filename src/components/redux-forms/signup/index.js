import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap';
import { required, email, maxLength30, maxLength60, maxLength15, minLength3, minLength5, isPhone } from '../validate';
import { renderField } from '../field';
import { renderSelect} from '../field';
import { FaTint, FaSpinner } from "react-icons/fa";

const genders = [{ id: 'M', name: 'Masculino'}, { id: 'F', name: 'Femenino' }]

let SignupForm = props => {
  const { handleSubmit, error, countrys, auth } = props;

  return (
    <div className="component-form-signup">
      <div className="content-form">
          <form onSubmit={handleSubmit}>
            <Field type="text" name="nombres" placeholder="Nombres" component={renderField} validate={[required, maxLength60, minLength5]} toastError={false}/>
            <Field type="text" name="apellidos" placeholder="Apellidos" component={renderField} validate={[required, maxLength60, minLength3]} toastError={false}/>

            <Field name="fk_nacionalidad" placeholder="País" items={ countrys } keyOption="id" textOption="nombre" styleInput={ {width: '245px'}} component={renderSelect} validate={[required]} toastError={false}/>
            <Field name="genero" placeholder="Genero" items={ genders } keyOption="id" textOption="name" styleInput={ {width: '245px'}} component={renderSelect} validate={[required]} toastError={false}/>

            <Field type="text" name="celular" placeholder="Teléfono Celular" component={renderField} validate={[required, isPhone]} toastError={false}/>

            <Field type="email" name="correo" placeholder="Correo electrónico" component={renderField} validate={[required, email, maxLength30, minLength5]} toastError={false}/>

            <Field type="password" id="contrasena" name="contrasena" placeholder="Contraseña" component={renderField} validate={[required, maxLength15, minLength5]} toastError={false}/>
            <Field type="password" name="confirm_password" placeholder="Confirmar Contraseña" component={renderField} validate={[required, maxLength15, minLength5]} toastError={false}/>
            
            <Field type="date" label="Fecha de nacimiento" name="fecha_nacimiento" placeholder="Fecha de Nacimiento" styleInput={ {width: '245px'}} component={renderField} validate={[required]} toastError={false}/>

            <div className="form-check my-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" validate={[required]} required/>
              <label className="form-check-label" htmlFor="defaultCheck1">
              He leído y acepto los <strong>Términos de servicio</strong> y la <strong>Declaración de privacidad.</strong>
              </label>
            </div>

            {error && <span className="message-error">{error}</span>}
            
            <Button className="mt-3" type="submit" outline color="secondary">
            { auth.loading && <FaSpinner className="rotate-center ml-2"/> }
            { !auth.loading && <FaTint/> } 
              Crear cuenta
            </Button>
          </form>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      countrys: state.country.countrys,
      auth: state.auth
  }
};

SignupForm = connect(
  mapStateToProps,
  null
)(SignupForm);

export default reduxForm({
  form: 'signup'
})(SignupForm)