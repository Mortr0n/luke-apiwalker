import './App.css';
import React, {useState} from 'react';
import {Router} from '@reach/router';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';

function App() {
  return (
    <div className="App">
      <Router>

        <Form path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <Films path="/films/:id" />
        <Species path="/species/:id" />
        <Vehicles path="/vehicles/:id" />
        <Starships path="/starships/:id" />

      </Router>
    </div>
  );
}

export default App;
