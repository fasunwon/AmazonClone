import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import React, { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51JlGwWJmJLf2KP0FCWcDLO08MrPV6laAJX78YVj1PG88enOJqiU3IvcZIduWGmAKDlUYoH5I2SqZt3PSsIFZLOOU001Yx5SSkl');


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    //will only run once the app component loads
    auth.onAuthStateChanged(authUser =>{
      //console.log('the user is', authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
            </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe = {promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
