import React from 'react';
import { PlusSolid } from '../images';

export interface IngredientProps {
  children?: React.ReactNode;
}

export function Ingredient({ children }: IngredientProps) {
  return <div className="grid grid-cols-6 gap-4 w-max">{children}</div>;
}

export interface IngredientItemProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function IngredientItem({ children, ...props }: IngredientItemProps) {
  const Icon = React.cloneElement(children[0], {
    className: 'fill-current text-primary group-hover:text-white w-6 h-6',
  });
  const Text = React.cloneElement(children[1], {
    className: 'text-primary group-hover:text-white',
  });
  return (
    <div
      {...props}
      className="flex flex-col group py-4 px-10 whitespace-nowrap bg-white hover:text-white text-center hover:bg-primary overflow-hidden rounded-xl cursor-pointer hover:shadow-md text-secondary text-md text items-center space-y-2 w-28"
    >
      {Icon}
      {Text}
      <span className="p-2 rounded-full bg-primary group-hover:bg-white">
        <PlusSolid className="fill-current text-white group-hover:text-primary w-3 h-3" />
      </span>
    </div>
  );
}

export default Ingredient;
