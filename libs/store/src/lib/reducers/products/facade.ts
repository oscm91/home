/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  nextStep,
  setStep,
} from './actions';

export default () => {
  const products = useSelector((state) => state['products']);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { wizard, schema = [] } = products;

  const stepName = params?.step || schema[0].name;
  const stepNumber = schema && schema.length ? schema.find((stepSchema => stepSchema.name === stepName))?.index : 0;
  

  return {
    getState: () => products,
    getData: () => wizard.values,
    sendForm: (values) => {
      dispatch(nextStep(values, stepNumber) as any);
      alert("La información enviada es " + JSON.stringify(values, null, 4));
    },
    setStep: (newStepNumber) => {
      dispatch(setStep(newStepNumber) as any);
      navigate(`/${schema[newStepNumber].name}`)
    },
    getStep: () => stepNumber,
    schema: schema,
    isFirstStep: stepNumber === schema[0].index,
    isLastStep: stepNumber === schema.length - 1,
    nextStep: (values: {[key: string]: any}) => {
      const newStepNumber = stepNumber + 1 <= (schema.length - 1) ? stepNumber + 1 : stepNumber;
      dispatch(nextStep(values, newStepNumber) as any);
      navigate(`/${schema[newStepNumber].name}`)
    },
    getCurrentStepSchema: () => {
      return schema ? schema[stepNumber] : schema[0];
    }
  };
};
