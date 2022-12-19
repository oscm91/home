import React, { useLayoutEffect } from 'react';
import FormBuilder from '../formbuilder/formBuilder';

export interface FormWizardProps {
  facade: any;
}

export function FormWizard ({ facade }: FormWizardProps) {
  const stepSchema = facade.getCurrentStepSchema();
  useLayoutEffect(() => {
    if(!stepSchema){
      facade.getData();
    }
  }, [facade, stepSchema]);

  if(!stepSchema){
    return null;
  }

  return (<FormBuilder formSchema={stepSchema.formSchema}>
      {({isValid, values}) => {
        console.log({isValid, values});
        
        return <>
          {facade.isFirstStep ? <button disabled={!isValid} onClick={() => {
            facade.nextStep(values);
          }}>Vender</button> : null}
          {!facade.isLastStep && !facade.isFirstStep ? <button disabled={!isValid} type='submit' onClick={() => {
            facade.nextStep(values);
          }}>Guardar</button> : null}
          {facade.isLastStep ? <button disabled={!isValid} type='submit' onClick={() => {
            facade.sendForm(values);
          }}>Enviar</button> : null}
        </>
      }}
    </FormBuilder>);
}

export default FormWizard;
