import React from 'react';
import './App.css';
import Card from '../Card';
import Navbar from '../Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <div className="main-category">
          Deployment
        </div>
        <div className="sub-category">
          Launching
        </div>
        <div className="row">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;