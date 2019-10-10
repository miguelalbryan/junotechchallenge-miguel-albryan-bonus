import React,  { Component } from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
          <Route  path="/" component={Movies}/>
          This is suppose to be where the movies
          <Route  path="/moviedetails/:movieid" component={MovieDetails}/>
        
      </Router>
      </div>
    )
  }
}

export default App;