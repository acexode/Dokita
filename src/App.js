import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import Doctor from './pages/doctor/doctor';
import { Route,Switch } from 'react-router-dom';
import Practitioners from './pages/practitioners/practitioners';
import Register from './pages/register/register';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/practitioners" component={Practitioners} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/register" component={Register} />

       </Switch>
    </div>
  );
}

export default App;
