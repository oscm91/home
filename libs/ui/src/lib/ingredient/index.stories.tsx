import React from 'react';
import { Ingredient, IngredientProps, IngredientItem } from './index';
import { PepperHotSolid, PlusSolid } from '../images';

export default {
  component: Ingredient,
  title: 'Ingredient',
};

export const ingredient = (props) => {
  return (
    <div className="flex bg-backcontent p-4">
      <Ingredient {...props}>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 1');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 2');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 3');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 4');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 5');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 6');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 7');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 8');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
        <IngredientItem
          onClick={() => {
            console.log('ingredient 9');
          }}
        >
          <PepperHotSolid />
          <p>Pizza</p>
        </IngredientItem>
      </Ingredient>
    </div>
  );
};

ingredient.args = {};
