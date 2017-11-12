import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Game from './game';
import Splash from './splash';
import Reset from './reset';

const App = ({store}) => (
  <Switch>
    <Route path="/game" component={Game} />
    <Route path="/win" component={Reset} />
    <Route path="/lose" component={Reset} />
    <Route path="/" component={Splash} />
  </Switch>
);

export default App;
