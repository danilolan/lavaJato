import React from 'react';
import {Switch, Route, Redirect} from 'react-router'

import Home from './components/main/Home'
import AddNew from './components/main/AddNew'
import Table from './components/main/Table'

function Routes(props) {
    return ( 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/addNew' component={AddNew}/>
        <Route path='/table' component={Table}/>
        <Redirect from='*' to='/' />
    </Switch> );
}

export default Routes;