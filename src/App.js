
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import React from 'react';
import Head from './components/Head';
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';
import UpdateProducts from './pages/UpdateProducts';
import GamesStore from './pages/GamesStore';
import GamesProfile from './pages/GamesProfile';





class App extends React.Component {

  render() {
    return (

      <Router>
        <Head />
        <Switch>
          <Route path="/game-profile/:gameNumber" component={GamesProfile} />
          <Route path="/update-products/:gameNumber" component={UpdateProducts} />
          < Route path="/create-product">
            <CreateProducts />
          </Route>
          < Route path="/admin-product">
            <Products />
          </Route>
          <Route path="/game-store">
            <GamesStore/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>


    )
  }

}

export default App;
