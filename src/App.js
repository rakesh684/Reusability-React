
import React from 'react';
import './App.css';
import Menu from "./Menu"
import Favorite from "./Favorite"
import Example from "./Example"
// import Toggler from './Toggler';
import Family from './Family'
import useToggler from './useToggler';
function App() {
  const [on,toggle]=useToggler()
  return (
    <div className="App">
            
                  <Menu on={on} toggle={toggle}/>
              
            
            <hr />
            <Favorite />
            <Example name={
              function(isDaytime){
                   return (
                    <h1>{ isDaytime? " Good time":"Bad time"},Rakesh</h1>
                   )}
              }
             />
             <Family />
    </div>
  );
}

export default App;


