import React from "react";
import useRouterHook from "../hooks/useRouterHook";

const MyComponent = () => {
  const { isActive, router } = useRouterHook();

  return (
    <div>
      <p>Current Path: {router.pathname}</p>
      <p>{isActive("/home") ? "Home is active" : "Home is not active"}</p>
    </div>
  );
};

export default MyComponent;
