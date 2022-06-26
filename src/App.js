
import React from 'react';
import './App.css';
import Menu from "./Menu"
import Favorite from "./Favorite"

function App() {
  return (
    <div className="App">
            <Menu something="whatever" />
            <hr />
            <Favorite />
    </div>
  );
}

export default App;
