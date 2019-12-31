import React from 'react';
import './App.css';
import Home from './components/Home';
import Standings from './components/Standings';
import Stats from './components/Stats';
import Teams from './components/Teams'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        {<Redirect to="/home"/>}
      </Route>
      <Route path="/home" component={Home}/>
      <Route path="/standings" component={Standings}/>
      <Route path="/stats" component={Stats}/>
      <Route path="/teams" component={Teams}/>
    </BrowserRouter>
  );
}

export default App;
