import React from 'react';
import { PlusSolid } from '../images';

export interface MassProps {
  children?: React.ReactNode;
}

export function Mass({ children }: MassProps) {
  return (
    <div className="flex flex-row gap-4 overflow-scroll p-2">{children}</div>
  );
}

export interface MassItemProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function MassItem({ children, ...props }: MassItemProps) {
  const Icon = React.cloneElement(children[0], {
    className: 'fill-current text-white w-6 h-6',
  });
  const Text = React.cloneElement(children[1], {
    className: 'text-primary group-hover:text-white',
  });
  return (
    <div
      {...props}
      className="relative flex flex-col items-center mt-8 pt-8 pb-4 px-10 space-y-2 text-center whitespace-nowrap bg-white rounded-xl cursor-pointer hover:shadow-md text-secondary text-md"
    >
      <span className="p-6 rounded-full bg-primary absolute -top-1/3">
        {Icon}
      </span>
      <div className="flex items-center space-x-2 pt-4 text-left">
        {Text}
        <span className="p-2 rounded-full bg-primary">
          <PlusSolid className="w-3 h-3 text-white fill-current" />
        </span>
      </div>
    </div>
  );
}

export default Mass;
