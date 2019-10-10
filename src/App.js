import React,  { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header"
import Movies from "./components/Movies"
import MovieDetails from "./components/MovieDetails"
import './App.css';
 
class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Movies}/>
          This is suppose to be where the movies
          <Route exact path="/moviedetails/:movieid" name ="routename" component={MovieDetails}/>
        </div>
      </Router>
    )
  }
}

export default App;