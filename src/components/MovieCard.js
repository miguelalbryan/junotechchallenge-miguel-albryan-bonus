import React, { Component } from 'react';
import { APIKEY } from '../APIKEY/APIKEY.js'
import {Link} from 'react-router-dom';
export default class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            moviesList: [],
            currentDate: (new Date()).toISOString().split('T')[0],  //Checks formatted date to show movies released to date.
            currentYear: new Date().getFullYear(),                  //Checks year to show movies released to year. (fetching movies based on these terms)
            showItems: 10                                           //Shows the number of items in array.
         }
    }

    async componentDidMount()
    {
       const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=${this.state.currentDate}&year=${this.state.currentYear}`
       //ALTERNATIVE URL       //const url ="https://api.themoviedb.org/3/discover/movie?api_key=b23973b6d0c875fd3d2020e8ede9d291&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=2019-10-08&year=2019"
       const response = await fetch(url)
       const data = await response.json();
       this.setState(() =>{
          return{
             moviesList: data.results,
             loading: false
          }
       })
    
    }

    render(){
        let sortedMovies = this.state.moviesList.sort((a, b) => new Date(...b.release_date.split('/').reverse()) - new Date(...a.release_date.split('/').reverse()));
        const movies = sortedMovies.slice(0,this.state.showItems).map((movie, index)=>{
           return(
            <div key={index} className="col-md-3 mb-5">
                <div className="card card-body text-center h-100">
                    <img className="w-100 mb-2" key={index} src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="Movie Cover" />
                        <h5 className="card-title">{movie.title}</h5>
                        <Link className="btn btn-primary" to={`/moviedetails/`+movie.id}>
                         Movie Details <br/>
                        <i className="fas fa-chevron-right" />
                      </Link>
            
                </div> 
            </div> 
           )
        });

        return(
            <div>
                {this.state.loading || !this.state.moviesList ?(
                    <div>Fetching movies...</div>
                    ) :(
                        <div><div className="row">{movies}</div></div>
                    )}            
            </div>
                
        )
    }

}
