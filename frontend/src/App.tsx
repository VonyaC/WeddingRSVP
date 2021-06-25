import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import  { Home, RSVP, Invited, WeddingInfo, GuestList }  from './screens/screens';
import { Navigation } from './components/Navigation/Navigation';
import { AddGuest } from './screens/AddGuest';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Switch> 
            <Route path='/wedding-info' component={WeddingInfo} />
            <Route path='/rsvp' component={RSVP}/>
            <Route path='/invited/:code'> <Invited /></Route>
            <Route path='/guest-list'> <GuestList /></Route>
            <Route path='/add-guest'> <AddGuest /></Route>
            <Route exact path='/' component={Home}/>
            <Redirect to='/not-found' /> 
            <Route path='/not-found' />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
