import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51IFfVdATM72ldvN0QdRpbGe3KgLWY1wNL71q3Um3go0URq6jnL71j5Gm7ZLKhn3GdlztmHO4zua5hpU8PE2o5RAo00pmQylft1");
//This key from stripe.com


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //will only run once when the app component load...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if(authUser){
        //the user just logged in or the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    // BEM
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//npx create-react-app {Folder want to build the app}
//npm i (material-UI)
//Some install from the firebase
//npm i firebase
//npm i -g firebase-tools

//firebase login
//firebase init  -> hosting -> choose firebase project -> y until Github N
//npm run build
//firebase deploy


//npm i -s react-flip-move//

//npm i react-router-dom
//npm i react-currency-format (for money)

// npm i @stripe/stripe-js
// npm i @stripe/react-stripe-js

//npm i axios

//In Index.js of FUNCTIONS
// npm i express
// npm i cors
// npm i stripe
// firebase emulators:start

// firebase deploy --only functions // deploy functions