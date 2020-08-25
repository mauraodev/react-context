import React, { useState } from "react";
import "./App.css";
import { List, Change } from "./compents/User";
import { AuthContext } from "./context/auth";

function App() {
  const [authTokens, setAuthTokens] = useState({
    name: 'Mauro'
  });

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: '122' }}>
      <div>
        <p>list</p>
        <Change />
        <List />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
