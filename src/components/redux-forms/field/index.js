import React from 'react';
import CloseIcon from "../../../assets/images/close-icon.svg";

export const renderField = ({ input, placeholder, label, styleInput, type, classInput, toastError, imgError, meta: { touched, error } }) => (
  <div className={`field ${classInput} ${error && touched && 'field--error'}`}>
  { label && <label className={`mt-2 label ${error && touched && 'label--error'}`}>{label}</label> }
    <input style={ styleInput } className={`input ${error && touched && 'input--error shake'}`} required {...input} placeholder={placeholder} type={type} />    
    {touched && error && imgError !== false && <img src={CloseIcon} alt="close" className="close-error shake"/>}
    {touched && error && toastError !== false && <span className="message-error">{error}</span>}
  </div>
)

export const renderSelect = ({ input, placeholder, items, styleInput, toastError, imgError, keyOption, textOption, meta: { touched, error } }) => (
  <div className={`field ${error && touched && 'field--error'}`}>
    <select style={ styleInput } className={`input ${error && touched && 'input--error shake'}`} required {...input} placeholder={placeholder}>
      <option value="" disabled>{placeholder}</option>
      {
        items && items.map((item, i) => 
          <option key={i} value={(keyOption)? item[keyOption]: item}>{ textOption? item[textOption]: item }</option>
        )
      }
    </select>
    {touched && error && imgError !== false && <img src={CloseIcon} alt="close" className="close-error shake"/>}
    {touched && error && toastError !== false && <span className="message-error">{error}</span>}
  </div>
)
  