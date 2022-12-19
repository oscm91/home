import React from 'react';
import { CloseImage } from '../images';

export interface OrderProps {
  children?: React.ReactNode;
}

export function Order({ children }: OrderProps) {
  return (
    <div className="flex flex-col gap-4 overflow-scroll py-2 bg-white">
      {children}
    </div>
  );
}

export interface OrderItemProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function OrderItem({ children, ...props }: OrderItemProps) {
  const Icon = React.cloneElement(children[0], {
    className: 'fill-current text-white w-6 h-6',
  });
  const Text = React.cloneElement(children[1], {
    className: 'text-primary group-hover:text-white',
  });
  const Price = children[2] || '';
  return (
    <div
      {...props}
      className="relative flex flex-row items-center px-10 space-x-2 text-center whitespace-nowrap rounded-xl cursor-pointer text-secondary text-md w-full"
    >
      <span className="p-6 rounded-lg bg-secondary">{Icon}</span>
      <div>
      <div className="flex items-center text-left">{Text}</div>
      <div className="flex items-center whitespace-nowrap text-left">
        <span className="text-secondary block text-xs"> {Price}</span>
      </div>
      </div>
    </div>
  );
}

export default Order;
