// FormElements.jsx
import * as Yup from 'yup';

import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    useField} from 'formik';
import React, { Children } from 'react';

export function Form(props) {
    return (
        <Formik
            {...props}
        >
          {
            (formProps) => {
             return  <FormikForm className="needs-validation" noValidate={true}>
                {Children.map(props.children, child =>
                {
                  return React.cloneElement(child, { formProps });
                }
              )
            }
            </FormikForm>
          }
          }
        </Formik>)
}

export function TextField(props) {
    const { name, label, placeholder, ...rest } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function NumberField(props) {
    const { name, label, placeholder, ...rest } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                type="number"
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function SelectField(props) {
    const { name, label, options } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                as="select"
                id={name}
                name={name}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function SubmitButton(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
    )
}

export function CheckboxField(props) {
    const { name, label } = props;
    const [field, meta] = useField({ name, type: "checkbox" });
    return (
      <>
        <label className="form-check-label" htmlFor={name}>
          <input className="form-check-input" {...field} {...props} />
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="error" style={{ color: "red" }}>
            {meta.error}
          </div>
        ) : null}
      </>
    );
  }

  export function ImageField(props) {
    const { name, label, accept } = props;
    const [field, meta, helpers] = useField(name);
  
    const handleChange = (event) => {
      const selectedFile = event.currentTarget.files[0];
      helpers.setValue(selectedFile);
    };
  
    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type="file"
          name={name}
          id={name}
          accept={accept}
          onChange={handleChange}
          {...field}
        />
        {meta.touched && meta.error ? (
          <div className="error" style={{ color: "red" }}>
            {meta.error}
          </div>
        ) : null}
      </>
    );
  }

export const getFormElement = (elementName, elementSchema) => {
    const props = {
      name: elementName,
      label: elementSchema.label,
      options: elementSchema.options,
    };

    if (elementSchema.type === 'text' || elementSchema.type === 'email' || elementSchema.type === 'address') {
      return <TextField {...props} />;
    }

    if (elementSchema.type === 'number') {
        return <NumberField {...props} />;
    }

    if (elementSchema.type === 'checkbox') {
        return <CheckboxField {...props} />;
    }

    if (elementSchema.type === 'select') {
      return <SelectField {...props} />;
    }

    if (elementSchema.type === 'image') {
        return <ImageField {...props} />;
      }
  };

  export const configForm = (formSchema) => {
    const _formData = {};
    const _validationSchema = {};

    for (const key of Object.keys(formSchema)) {
      _formData[key] = '';

      if (formSchema[key].type === 'text') {
        _validationSchema[key] = Yup.string();
      } else if (formSchema[key].type === 'email') {
        _validationSchema[key] = Yup.string().email();
      } else if (formSchema[key].type === 'select') {
        _validationSchema[key] = Yup.string().oneOf(
          formSchema[key].options.map((o) => o.value)
        );
      } else if (formSchema[key].type === 'address') {
        _validationSchema[key] = Yup.string();
      } else if (formSchema[key].type === 'number') {
        _validationSchema[key] = Yup.number();
      } else if (formSchema[key].type === 'checkbox') {
        _validationSchema[key] = Yup.boolean();
      } else if (formSchema[key].type === 'image') {
        _validationSchema[key] = Yup.string();
      }

      if (formSchema[key].required) {
        _validationSchema[key] = _validationSchema[key].required('Required');
      }
    }

    return {
        formData: _formData,
        validationSchema: _validationSchema
    }
  };