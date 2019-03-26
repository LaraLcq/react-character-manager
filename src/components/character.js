import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

export default class character extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        character: [],
        name:'',
        image:'',
        shortDescription:'',
        description:''
      };
    }

 
  
    componentDidMount() {
      Axios.get("https://character-database.becode.xyz/characters/"+ this.props.match.params.id)
      .then(response => {
        this.setState({ 
          name : response.data.name, 
          image : response.data.image,
          shortDescription : response.data.shortDescription,
          description: response.data.description,
          
      });
    })
    }
    render() {
      const { character } = this.state;
      
  
      return (
        <div class="container">

        
        <h1 class="my-4">{this.state.name}</h1>
      
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card h-100">
                <img src={`data:image/jpeg;base64,${this.state.image}`} width="100" height="100" className="img-responsive" alt=""/>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{this.state.shortDescription}</a>
                </h4>
                <p class="card-text">{this.state.description}</p>
              </div>
            </div>
            
            </div>    

            </div>

        </div>
        )
    }
}