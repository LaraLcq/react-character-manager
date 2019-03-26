import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: [],
    };
    
  }

  deleteCharacter(e){
    console.log('test')
    axios.delete("https://character-database.becode.xyz/characters/" + e)
    
  }

  
 

  componentDidMount() {
    fetch("https://character-database.becode.xyz/characters")
      .then(response => response.json())
      .then(data => this.setState({ character: data }));
  }

  componentDidUpdate(){
    fetch("https://character-database.becode.xyz/characters")
    .then(response => response.json())
    .then(data => this.setState({ character: data }));
  }

  
  
 

  
  render() {
    const { character } = this.state;
    
    

    return (

      <React.Fragment>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<div className="container mt-40">
  <h3 className="text-center">Character List</h3>
  <div className="row mt-30">
    {character.map(character =>
    <div className="col-md-4 col-sm-6" key={character.id}>
      <div className="box3">
        <img src={`data:image/jpeg;base64,${character.image}`} className="img-responsive" alt=""/>
        <div className="box-content">
          <h3 className="title">{character.name}</h3>
          <span className="post"></span>
          <p className="description">
          {character.shortDescription}
          </p>
          <Link to={'/Edit/'+ character.id}>  
            <button>Edit</button>
          </Link>
          <Link to={'/character/'+ character.id}>  
            <button>Read More</button>
          </Link>
          <button onClick={(e)=>{if (window.confirm('Are you sure ?')) this.deleteCharacter(character.id)}}>Delete</button> 
        </div>
      </div>
    </div>
    )}
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </React.Fragment>
    );
  }
}

export default home;