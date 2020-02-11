import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./component/card";

const navmenu =[{menu:'home'},{menu:'services',dropdown:['for entrepreuneusr', 'for student','for hobbyist']},{menu:'contact'}]

function App() {
  return (
    <div className="Apsp">
      <Nav menu={navmenu} />
      
    </div>
  );
}

export default App;
