import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

export const Container = ({ children, styles }: ContainerProps) => {
  return (
    <div style={styles} className="container mx-auto px-12">
      {children}
    </div>
  );
};
