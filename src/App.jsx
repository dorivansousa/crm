import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/* Páginas */
import Site from './site/site.jsx';
import Login from './app/Login/Login.jsx';
import CreateUser from './app/CreateUser/CreateUser.jsx'
import ResetPassword from './app/ResetPassword/ResetPassword.jsx';
import Home from './app/Home/Home.jsx'
import CreateCostumer from './app/CreateCostumer/CreateCostumer.jsx';

function App(){
    return <BrowserRouter>
              <Route exact path='/' component={Site} />
              <Route exact path='/app' component={Login} />
              <Route exact path='/app/createuser' component={CreateUser} />
              <Route exact path='/app/resetpassword' component={ResetPassword} />
              <Route exact path='/app/home' component={Home} />
              <Route exact path='/app/createcostumer' component={CreateCostumer} />
           </BrowserRouter>
}

export default App;