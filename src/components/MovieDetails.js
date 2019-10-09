import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { APIKEY } from '../APIKEY/APIKEY.js'

class MovieDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieID: this.props.match.params.movieid,
            movieDetails: [],   
            movieGenre:[],
            loading: true                                          
         }
    }


    async componentDidMount()
    {
       const url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=${APIKEY}&language=en-US`
       const response = await fetch(url)
       const data = await response.json();
       this.setState(() =>{
          return{
             movieDetails: data,
            movieGenre: data.genres,
            loading: false
          }
         
       })   
       

    }

    // render(){
    //     let sortedMovies = this.state.moviesList.sort((a, b) => new Date(...b.release_date.split('/').reverse()) - new Date(...a.release_date.split('/').reverse()));
    //     const movies = sortedMovies.slice(0,this.state.showItems).map((movie, index)=>{
    //        return(
    //         <div className="col-md-3 mb-5" key={index}>
    //             <div className="card card-body text-center h-100">
    //                 <img className="w-100 mb-2" key={index} src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="Movie Cover" />
    //                     <h5 className="card-title">{movie.title}</h5>
    //                     <Link className="btn btn-primary" to={`/moviedetails/${movie.id}`}>
    //                     Movie Details <br/>
    //                     <i className="fas fa-chevron-right" />
    //                   </Link>
            
    //             </div> 
    //         </div> 
    //        )
    //     });

    //     return(
    //         <div>
    //             {this.state.loading || !this.state.moviesList ?(
    //                 <div>Fetching movies...</div>
    //                 ) :(
    //                     <div><div className="row">{movies}</div></div>
    //                 )}            
    //         </div>
                
    //     )
    // }

    
    render(){
       
      let arr = []
      for (var key in this.state.movieGenre) {
        arr.push(this.state.movieGenre[key].name);
      } //Converts movieGenre Object into readable array
      let genreList =  arr.map((genre,index)=>{
        return  <i key={index}>{genre}  </i>
      })//Passes array into content

      console.log(this.state.movieDetails)

        let content = (
            <div className="container">
              <div className="row">
              <div className="col-md-3 mb-5" >
              <div className="card card-body text-center h-100">
                  <img className="w-100 mb-2" src={'https://image.tmdb.org/t/p/w500'+this.state.movieDetails.poster_path} alt="Movie Cover" />
              </div> 
          </div> 
                <div className="col-md-8">
                  <h1 className="mb-4">{this.state.movieDetails.title}</h1>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Genre:</strong>{genreList}
                    </li>
                    <li className="list-group-item">
                      <strong>Tagline:</strong> {this.state.movieDetails.tagline || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <strong>Run time:</strong> {this.state.movieDetails.runtime } minutes
                    </li>
                    <li className="list-group-item">
                      <strong>Released:</strong> {this.state.movieDetails.release_date}
                    </li>
  
                    <li className="list-group-item">
                    <strong>Actors:</strong> {" "}
                  </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                  <div className="col-md-12">
                    <h3>About </h3>
                    {this.state.movieDetails.overview}
                    <hr />
                    
                        
                            <Link className="btn btn-primary" to="/">
                               Go Back
                            </Link>
                       
    
                  </div>
                </div>
              </div>
            </div>

           
          );

       return(
            <div>
                {this.state.loading || !this.state.movieDetails ?(
                    <div>Fetching movie details...</div>
                    ) :(
                        <div>{content}</div>
                    )}            
            </div>
                
        )
    }
}

export default MovieDetails