import React from "react";
import { useAuth, AuthContext } from "../../context/auth";

export const List = () => {
  return <div>List Users</div>;
};

export const Change = () => {
  const { setAuthTokens, authTokens } = useAuth();

  function test() {
    setAuthTokens({ name: 'Xpto'});
    console.log(authTokens.name);
  }

  return (
    <AuthContext.Provider>
      <div>Change</div>
      <button onClick={() => test()}>Click</button>
    </AuthContext.Provider>
  );
};
