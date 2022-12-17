import React from 'react';
import { Filter, FilterProps } from './index';

export default {
  component: Filter,
  title: 'Filter',
};

export const filter = (props) => {
  return (
    <div className="flex">
      <Filter {...props}>
        <div className="flex flex-col py-4">
          <span className="text-primary flex whitespace-nowrap items-center space-x-3">
            <input type="checkbox" /> <label>Cobro con datafono</label>
          </span>
          <span className="text-primary flex whitespace-nowrap items-center space-x-3">
            <input type="checkbox" /> <label>Cobro con link de pagos</label>
          </span>
          <span className="text-primary flex whitespace-nowrap items-center space-x-3">
            <input type="checkbox" /> <label>Ver todos</label>
          </span>
          <span className="text-center w-full">
            <button className="mt-4 px-14 py-2 bg-rojo hover:opacity-20 rounded-full font-bold text-white">
              Aplicar
            </button>
          </span>
        </div>
      </Filter>
    </div>
  );
};

filter.args = {
  onClick: () => {},
  open: false,
};
