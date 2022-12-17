/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import {
  saveProduct,
  setName,
  addMass,
  removeMass,
  addIngredient,
  removeIngredient,
} from './actions';

export default () => {
  const products = useSelector((state) => state['products']);
  const dispatch = useDispatch();

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
  };
};
