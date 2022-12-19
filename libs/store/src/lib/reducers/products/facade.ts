/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  saveProduct,
  setName,
  addMass,
  removeMass,
  addIngredient,
  removeIngredient,

  nextStep,
  setStep,
} from './actions';

export default () => {
  const products = useSelector((state) => state['products']);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  console.log({
    products
  });
  


  const { wizard, schema } = products;

  console.log({
    wizard,
    schema
  });
  
  
  const stepName = params?.step || schema[0].name;
  const stepNumber = schema.find((stepSchema => stepSchema.name === stepName)).index;
  

  return {
    removeIngredient: (name) => {
      dispatch(removeIngredient(name) as any);
    },
    addIngredient: (name) => {
      dispatch(addIngredient(name) as any);
    },
    removeMass: (name) => {
      dispatch(removeMass(name) as any);
    },
    addMass: (name) => {
      dispatch(addMass(name) as any);
    },
    setName: (name) => {
      dispatch(setName(name) as any);
    },
    saveProduct: () => {
      dispatch(saveProduct() as any);
    },


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
