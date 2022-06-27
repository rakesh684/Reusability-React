
import React from 'react';
import './App.css';
import Menu from "./Menu"
import Favorite from "./Favorite"
import Example from "./Example"

function App() {
  return (
    <div className="App">
            <Menu something="whatever" />
            <hr />
            <Favorite />
            <Example />
    </div>
  );
}

export default App;
