import React from 'react';
import FormBuilder from '../formbuilder/formBuilder';

export interface FormWizardProps {
  facade: any;
}

export function FormWizard({ facade }: FormWizardProps) {
  const stepSchema = facade.getCurrentStepSchema();
  const formData = facade.getData() || {};

  if (!stepSchema) {
    return null;
  }

  return (
    <>
      <h2 className="bg-clip-text text-transparent bg-primary text-4xl font-bold border-b border-grisclaro">
        {stepSchema.sectionTitle}
      </h2>
      <br />
      <FormBuilder formSchema={stepSchema.formSchema} formData={formData}>
        {({ isValid, values }) => {
          console.log({ isValid, values });
          return (
            <>
              {facade.isFirstStep ? (
                <button
                  disabled={!isValid}
                  onClick={() => {
                    facade.nextStep(values);
                  }}
                  className={`py-2 px-14 mt-4 font-bold text-white rounded-full bg-primary hover:opacity-20 ${
                    isValid ? '' : 'opacity-20'
                  }`}
                >
                  Vender
                </button>
              ) : null}
              {!facade.isLastStep && !facade.isFirstStep ? (
                <button
                  disabled={!isValid}
                  type="submit"
                  onClick={() => {
                    facade.nextStep(values);
                  }}
                  className={`py-2 px-14 mt-4 font-bold text-white rounded-full bg-primary hover:opacity-20 ${
                    isValid ? '' : 'opacity-20'
                  }`}
                >
                  Guardar
                </button>
              ) : null}
              {facade.isLastStep ? (
                <button
                  disabled={!isValid}
                  type="submit"
                  onClick={() => {
                    facade.sendForm(values);
                  }}
                  className={`py-2 px-14 mt-4 font-bold text-white rounded-full bg-primary hover:opacity-20 ${
                    isValid ? '' : 'opacity-20'
                  }`}
                >
                  Enviar
                </button>
              ) : null}
            </>
          );
        }}
      </FormBuilder>
    </>
  );
}

export default FormWizard;
