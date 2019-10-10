import React,  { Component } from 'react';
import{HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header"
import Movies from "./components/Movies"
import MovieDetails from "./components/MovieDetails"
import './App.css';
 
class App extends Component {
  render(){
    return(
      <div>
      <Router>
          <Route component={Header}/>
          <Route exact path="/" component={Movies}/> 
          <Route exact path="/moviedetails/:movieid" component={MovieDetails}/>
        
      </Router>
      </div>
    )
  }
}

export default App;