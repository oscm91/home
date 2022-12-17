import React from 'react';
import { Order, OrderProps, OrderItem } from './index';
import { PizzaSliceSolid } from '../images';

export default {
  component: Order,
  title: 'Order',
};

export const order = () => {
  const props: OrderProps = {};

  return (
    <div className="flex bg-backcontent p-4">
      <Order {...props}>
        <OrderItem
          onClick={() => {
            console.log('ingredient 1');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 2');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 3');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 4');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 5');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 6');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 7');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 8');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 9');
          }}
        >
          <PizzaSliceSolid />
          <p>
            Base Pizza Italiana{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
      </Order>
    </div>
  );
};
