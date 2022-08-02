import React from 'react';
import './css/App.css'
import Main from './pages'
import Login from './pages/login'
import Header from './components/Header'
import {Switch, Route} from 'react-router-dom'
import ChoosePlan from './pages/ChoosePlan'


function App() {
  return (
   <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/login' component={Login} />
    <Route path='/choose-plan' component={ChoosePlan} />
   </Switch>
  )
}

export default App;
