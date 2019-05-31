import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import history from './common/history';

import HomePage from "./pages/home/HomePage";
import CartItems from "./pages/cart/CartItems";
import LoginPage from "./pages/AuthPage/LoginPage";

// class App extends Component {



//     render() {
//         return (
//             <div>
//                 <HomePage/>
//             </div>
//         );
//     }
// }

const App = () => (
        <Router history={history}>
          <Switch>
            <Redirect from="/" exact to="/home" />
            <Route path="/home" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/mycart" exact component={CartItems} />
            {/* <LayoutContainer path="/home" component={HomePage} /> */}
          </Switch>
        </Router>
  );

export default App;
