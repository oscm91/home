import React from 'react';
import { Order, OrderProps, OrderItem } from './index';
import { HomeSolid } from '../images';

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
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 2');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 3');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 4');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 5');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 6');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 7');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 8');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
        <OrderItem
          onClick={() => {
            console.log('ingredient 9');
          }}
        >
          <HomeSolid />
          <p>
            Baño{' '}
            <span className="text-secondary block text-xs">x 1</span>
          </p>
        </OrderItem>
      </Order>
    </div>
  );
};
