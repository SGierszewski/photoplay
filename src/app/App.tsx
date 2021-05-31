import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './Page/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Homescreen from './pages/Homescreen/Homescreen';
import TVShowDetails from './pages/TVShowDetails/TVShowDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/homescreen">
          <Homescreen />
        </Route>
        <Route path="/movie/:name">
          <MovieDetails />
        </Route>
        <Route path="/show/:name">
          <TVShowDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
