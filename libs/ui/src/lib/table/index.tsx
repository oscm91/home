import React from 'react';

export interface TableProps {
  children?: React.ReactNode;
  title: string;
}

export interface HeadProps {
  children?: React.ReactNode;
}

export function Head({ children }: HeadProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className:
          'flex py-2 px-5 font-light font-medium text-left text-grisoscuro border-b border-grisclaro',
      }  as any);
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}

export interface RowProps {
  children?: React.ReactNode;
  index?: number;
}

export function Row({ children, index }: RowProps) {
  const childrenWithProps = React.Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      return (
        <div className="flex flex-col border-b border-b-grisclaro">
          {React.cloneElement(child, {
            className: `flex flex-col py-4 px-5 h-full font-light font-medium text-left text-grisoscuro ${
              index % 2 === 0 && i === 0 ? 'border-l-4 border-azul' : ''
            } ${
              index % 2 === 1 && i === 0 ? 'border-l-4 border-grisclaro' : ''
            }`,
          }  as any)}
        </div>
      );
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}

export function Table({ children, title }: TableProps) {
  return (
    <div className="flex flex-col shadow-md rounded-b-lg rounded-t-xl bg-white overflow-hidden">
      <span className="flex font-light rounded-t-xl text-white justify-between px-5 py-2 bg-primary overflow-hidden">
        {title}
      </span>
      <div className="flex overflow-y-auto">
        <div className="grid grid-cols-5 gap-0">{children}</div>
      </div>
    </div>
  );
}

export default Table;
