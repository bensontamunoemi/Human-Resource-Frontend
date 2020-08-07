import React from 'react';
import {Link,Switch,Route} from 'react-router-dom';

import Home from './pages/Home';
import AddLogo from './pages/AddLogo';
import Department from './pages/Department';
import Signin from './auth/Signin';
import Signup from './auth/Signup';


const MainRouter=()=>(
<div id="wrapper">

<Switch>
    <Route exact path="/" component={Home} / >
    <Route exact path="/add-logo" component={AddLogo} / >
    <Route exact path="/department" component={Department} / >
    <Route exact path="/signin" component={Signin} / >
    <Route exact path="/signup" component={Signup} / >
  </Switch>
</div>
)


export default MainRouter
