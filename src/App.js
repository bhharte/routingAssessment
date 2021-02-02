import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import ErrorPage from './components/error/ErrorPage';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route
      exact
      path='/'
      render={(props) => <Welcome {...props} name="Brock"/>} />
      <Route path="/clock" component={Clock} /> 
      <Route path="/contact" component={Contact} />
      <Route path="/welcome/:name" component={Welcome} />
      <Route component= {ErrorPage} />

      </Switch>
      
    </div>

  )
}


  


export default App;
