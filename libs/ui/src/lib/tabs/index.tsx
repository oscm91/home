import React from 'react';

export interface TabsProps {
  children?: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: child.props['data-active'] || child.props['data-selectable']
          ? 'py-2 px-10 space-x-2 whitespace-nowrap text-center rounded-full cursor-pointer bg-grisclaro text-white text-md'
          : 'py-2 px-10 space-x-2 whitespace-nowrap text-center bg-white rounded-full cursor-pointer hover:bg-grisclaro text-primary text-md',
      } as any);
    }
    return child;
  });

  return (
    <div className="grid grid-cols-4 gap-4 bg-white py-1 px-2 space-x-2">{childrenWithProps}</div>
  );
}

export default Tabs;
