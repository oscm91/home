import React from 'react';
import { Mass, MassProps, MassItem } from './index';
import { PizzaSliceSolid } from '../images';

export default {
  component: Mass,
  title: 'Mass',
};

export const mass = () => {
  const props: MassProps = {};

  return (
    <div className="flex bg-backcontent p-4">
      <Mass {...props}>
        <MassItem
          onClick={() => {
            console.log('ingredient 1');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 2');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 3');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 4');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 5');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 6');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 7');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 8');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
        <MassItem
          onClick={() => {
            console.log('ingredient 9');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">$ 7.4</span>
          </p>
        </MassItem>
      </Mass>
    </div>
  );
};
