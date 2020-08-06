import React from "react";
import logo from "./logo.svg";
import "./materialize.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <div>Doit!</div>
        </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
