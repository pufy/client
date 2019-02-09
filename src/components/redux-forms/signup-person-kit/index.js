import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { renderField, renderSelect } from '../field';
import { required, maxLength60, minLength3 } from '../validate';

const genders = [{ id: 'M', name: 'Masculino'}, { id: 'F', name: 'Femenino' }]

const signupPersonKit = props => {
  const { handleSubmit } = props

  return (
    <form className="row signup-person-kit px-2" onSubmit={handleSubmit}>
        <Field className="col-5 w-50" styleInput={ { width: '80%' } } type="text" name="nombres" placeholder="Nombres" toastError={ false } component={renderField} validate={[required, maxLength60, minLength3]} />
        <Field className="col-5 w-50" styleInput={ { width: '80%' } } type="text" name="apellidos" placeholder="Apellidos" toastError={ false } component={renderField} validate={[required, maxLength60, minLength3]} />
      <div className="select-gender-responsive vert-align">
        <Field className="col-5" name="genero" placeholder="Genero" items={ genders } toastError={ false } imgError={ false } keyOption="id" textOption="name" component={renderSelect} validate={[required]} />
      </div>
      <div className="m-auto">
        <span className="py-2">Fecha de nacimiento</span>
        <Field type="date" name="fecha_nacimiento" imgError={ false } toastError={ false } component={renderField} validate={[required]} />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup-person-kit'
})(signupPersonKit)