import React, { useState, useEffect, Children } from 'react';

import {
  Form,
  getFormElement,
  configForm
} from '../../index';
import * as Yup from 'yup';

export function FormBuilder ({
  formSchema = {
    name: {
      type: 'text',
      label: 'Name',
      required: true,
    },
    email: {
      type: 'email',
      label: 'Email',
      required: true,
    },
    role: {
      type: 'select',
      label: 'Role',
      required: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
  },
  children
}: {
  formSchema: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string]: any;
  },
  children: any;
}) {
  const [formData, setFormData] = useState({});
  const [validationSchema, setValidationSchema] = useState({}) as any;

  useEffect(() => {
    initForm(formSchema);
  }, [formSchema]);

  const initForm = (formSchema) => {
    const { formData, validationSchema } = configForm(formSchema)
    setFormData(formData);
    setValidationSchema(Yup.object().shape({ ...validationSchema }));
  };

  const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    console.log(values);
    setSubmitting(false);
  };

  const FormNavComp = ({formProps}) => {
    const isValid = validationSchema && validationSchema.isValidSync ? validationSchema.isValidSync(formProps.values) : false
    
    try{
      return children ? children({isValid, values: formProps.values}) : children
    } catch {
      return React.cloneElement(children, {isValid, values: formProps.values});
    }
  }

  return (
    <Form
        enableReinitialize
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {Object.keys(formSchema).map((key, ind) => (
          <div key={key}>{getFormElement(key, formSchema[key])}</div>
        ))}
        <FormNavComp formProps={{}}></FormNavComp>
      </Form>
  );
}

export default FormBuilder;
