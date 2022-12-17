import React from 'react';
import { Card, CardProps } from './index';

export default {
  component: Card,
  title: 'Card',
};

export const card = (props) => {
  return (
    <Card {...props}>
      <h4 className="bg-clip-text text-transparent bg-primary text-4xl font-bold">
        $1'560.000
      </h4>
      <p className="text-primary text-xs">Septiembre 21</p>
    </Card>
  );
};

card.args = {
  title: 'Total de ventas de septiembre',
};
