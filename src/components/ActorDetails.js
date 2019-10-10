import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { APIKEY } from '../APIKEY/APIKEY.js'

class ActorDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            actorID: this.props.match.params.actorid,   //Receives 3 parameters from Link
            actorName: this.props.match.params.actorname,
            profPath: this.props.match.params.profpath,
            actorDetails: [],   
            loading: true                                          
         }
    }

    async componentDidMount()
    {
       const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${this.state.actorID}`
       const response = await fetch(url)
       const data = await response.json();
       this.setState(() =>{
          return{
            actorDetails: data.results,
            loading: false,
            showItems: 3
          }
         
       })   
      
       
    }
  
    
    render(){
       
      const movies = this.state.actorDetails.slice(0,this.state.showItems).map((movie, index)=>{
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
        //Shows

      });

        let content = (
          <div className="container">
          <div className="row">
          <div className="col-md-3 mb-5" >
          <h1 className="mb-4">{this.state.actorName}</h1>
          <div className="card card-body text-center ">
              <img className="w-100 mb-2" src={'https://image.tmdb.org/t/p/original/'+this.state.profPath} alt="Movie Cover" />
          </div> 
          </div> 
          </div>
          <div className="row">
            <div className="card card-body bg-dark my-5 text-light">
              <div className="col-md-12">
                <h3>Other Moves They Starred In </h3>
                <div className="row">{movies}</div>
                <hr />
                
                    
                        <Link className="btn btn-primary" to="/">
                           Go Back To Top Movies
                        </Link>
                   

              </div>
            </div>
          </div>
        </div>

           
          );

       return(
            <div>
                {this.state.loading || !this.state.actorDetails ?(
                    <div>Fetching actor details...</div>
                    ) :(
                        <div>{content}</div>
                    )}            
            </div>
                
        )
    }
}

export default ActorDetails