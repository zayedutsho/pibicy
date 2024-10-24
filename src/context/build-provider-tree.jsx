import React, { Fragment, ReactNode } from "react";

const buildProviderTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <Fragment>{children}</Fragment>;
  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return function CustomComponent({ children }) {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

export default buildProviderTree;
