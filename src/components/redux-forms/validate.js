export const required = value => (value || typeof value === 'number' ? undefined : 'Requerido')

const maxLength = max => value => value && value.length > max ? `Máximo ${max} letras` : undefined
export const maxLength60 = maxLength(60)
export const maxLength30 = maxLength(30)
export const maxLength15 = maxLength(15)
export const maxLength5 = maxLength(5)

const minLength = min => value => value && value.length < min ? `Mínimo ${min} letras` : undefined
export const minLength3 = minLength(3)
export const minLength5 = minLength(5)

export const number = value =>
  value && isNaN(Number(value)) ? 'Debe ser un número' : undefined

export const isPhone = value =>
  value && value.length >= 10 && value.length <= 15? undefined: 'El teléfono no es correcto'

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Correo inválido'
    : undefined