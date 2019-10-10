import React, { Component } from "react"
import { APIKEY } from '../APIKEY/APIKEY.js'
import {Link} from 'react-router-dom';
class Actors extends Component{
   constructor(props){
      super(props);
      this.state = {
          actorsList:[],
          loading: true,
          showItems: 3
      }

   }
   async componentDidMount()
   {
      const url = `https://api.themoviedb.org/3/movie/${this.props.movieid}/credits?api_key=${APIKEY}`
      const response = await fetch(url)
      const data = await response.json();
      this.setState(() =>{
         return{
            actorsList: data.cast,
            loading: false
         }
        
      }
      )
    } 
    render(){

        let arr = []
        for (var key in this.state.actorsList) {
          arr.push(this.state.actorsList[key].name);
        }
        const actorsList = arr.slice(0,this.state.showItems).map((actor, index)=>{
            return(
                <div key={index}>
                       <Link key={index} className="btn btn-primary" to={`/actordetails/`+""+this.state.actorsList[index].id+"/"+actor+""+this.state.actorsList[index].profile_path}>
                          {actor}
                       </Link>
                       
                </div>
            )
         });
            console.log(arr)
            console.log(this.state.actorsList)
         return(
            <div>
                {this.state.loading || !this.state.actorsList ?(
                    <div>Fetching actors...</div>
                    ) :(
                        <div><div className="row">{actorsList}</div></div>
                    )}            
            </div>
                
        )
      }
      

}

export default Actors