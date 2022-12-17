import React from 'react';

export interface MenuProps {
  children?: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: child.props['data-active']
          ? 'flex-1 group py-4 px-4 space-x-2 whitespace-nowrap text-center rounded-full cursor-pointer bg-primary text-white text-md shadow-md'
          : 'flex-1 group py-4 px-4 space-x-2 whitespace-nowrap text-center bg-white rounded-full cursor-pointer hover:bg-primary hover:text-white hover:shadow-md text-secondary text-md text',
        'data-active': child.props['data-active'],
      }  as any);
    }
    return child;
  });

  return (
    <div className="inline-flex flex-col bg-white py-2 px-2 space-y-2">
      {childrenWithProps}
    </div>
  );
}

export interface MenuItemProps {
  children?: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function MenuItem({ children, ...props }: MenuItemProps) {
  const Icon = React.cloneElement(children, {
    className: props['data-active']
      ? 'fill-current text-white w-6 h-6'
      : 'fill-current text-secondary w-6 h-6 group-hover:text-white',
  });
  return <div {...props}>{Icon}</div>;
}

export default Menu;
