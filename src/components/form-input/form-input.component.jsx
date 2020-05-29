import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherFormProps }) => (
  <div className="group">
    {label ? (
      <label
        className={
          otherFormProps.value.length
            ? 'shrink form-input-label'
            : 'form-input-label'
        }
      >
        {label}
      </label>
    ) : null}
    <input
      className="form-input"
      {...otherFormProps}
      onChange={handleChange}
    ></input>
  </div>
);

export default FormInput;
