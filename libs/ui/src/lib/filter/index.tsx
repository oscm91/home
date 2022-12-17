import React from 'react';
import { SoundMixImage } from '../images';
import { CloseImage } from '../images';

export interface FilterProps {
  children?: React.ReactNode;
  onClick?: (value: boolean) => void;
  open: boolean;
}

export function Filter({ children, onClick, open }: FilterProps) {
  return (
    <div
      className={`flex relative w-full bg-white ${
        open ? 'rounded-t-lg' : 'rounded-lg'
      } shadow`}
    >
      <div className="relative min-w-full">
        <span
          className="flex relative justify-center py-2 px-6"
          onClick={() => onClick(!open)}
        >
          <button className="text-primary" onClick={() => onClick(!open)}>
            Modulo de venta
          </button>
          <span className="absolute top-0 right-0 p-2">
            {open ? (
              <CloseImage width="20px" />
            ) : (
              <SoundMixImage width="20px" />
            )}
          </span>
        </span>
        {open ? (
          <div className="flex absolute top-full z-10 flex-col px-6 w-full bg-white rounded-b-lg shadow">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Filter;
