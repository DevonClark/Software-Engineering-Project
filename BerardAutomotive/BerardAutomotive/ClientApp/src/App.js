import React, { useEffect, useState, Button } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'react-tabs/style/react-tabs.css';
import { MainRoutes } from './main-routes.js'
import LoginPage from './login-page-things/login-page'
import 'semantic-ui-css/semantic.min.css'
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';
import './Header.css'
import './Footer.css'
import './App.css';


function App() {


  return (
    <>
      <div>
        <Router >
          <Route path="/home">
            <MainRoutes />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;