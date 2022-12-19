/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import FormWizard from './formWizard';

export default {
  component: () => {},
  title: 'Form Wizard',
};

const useformWizard = () => {
  const [data, setData] = useState(null);  
  return {
    getData: () => {setData({
      wizard: {
        step: 0
      },
      schema: [
        {
          index: 0,
          sectionTitle: 'Paso 1',
          formSchema: {
            name: {
              type: 'text',
              label: 'Nombre',
              required: true,
            },
            lastname: {
              type: 'text',
              label: 'Apellidos',
              required: true,
            }
          }
        },
        {
          index: 1,
          sectionTitle: 'Paso 2',
          formSchema: {
            email: {
              type: "email",
              label: "Correo",
              required: true
            }
          }
        },
        {
          index: 2,
          sectionTitle: 'Paso 3',
          formSchema: {
          }
        }
      ]
    })},
    sendForm: () => {/**/},
    getStep: () => data ? data.wizard.step : null,
    schema: data ? data.schema : null,
    isFirstStep: data ? data.wizard.step === data.schema[0].index : false,
    isLastStep: data ? data.wizard.step === data.schema[data.schema.length - 1].index : false,
    nextStep: () => {
      setData({
        ...data,
        wizard: {
          ...data.wizard,
          step: data.wizard.step + 1 <= (data.schema.length - 1) ? data.wizard.step + 1 : data.wizard.step
        }
      })
    },
    getCurrentStepSchema: () => {
      return data ? data.schema[data.wizard.step] : null;
    }
  };
}

export const formWizard = () => {  
  const facade = useformWizard();
  return (
    <FormWizard facade={facade} />
  );
};
