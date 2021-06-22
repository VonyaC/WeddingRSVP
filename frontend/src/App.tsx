import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import  { Home, RSVP, Invited }  from './screens/screens';
import { WeddingInfo } from './screens/WeddingInfo';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Switch> 
            <Route path='/wedding-info' component={WeddingInfo} />
            <Route path='/rsvp' component={RSVP}/>
            <Route path='/invited/:code'> <Invited /></Route>
            <Route exact path='/' component={Home}/>
            <Redirect to='/not-found' /> 
            <Route path='/not-found' />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
