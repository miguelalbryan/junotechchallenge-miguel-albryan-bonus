import React, { Component } from "react"
import '../styling/Movies.css';
import MovieCard from './MovieCard.js';
class Movies extends Component{
   constructor(props){
      super(props);

   }
    render(){
       return(
         <div> <MovieCard /> </div>
       )
      }

}

export default Movies