import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/help">
          <p>Help</p>
        </Route>
        <Route path="/">
          <p>Home</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
