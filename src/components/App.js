import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: [],
    };
  }

  componentDidMount() {
    fetch("https://character-database.becode.xyz/characters")
      .then(response => response.json())
      .then(data => this.setState({ character: data }));
  }
  render() {
    const { character } = this.state;
    console.log (character);

    return (

      <React.Fragment>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <div class="container mt-40">
            <h3 class="text-center">Character List</h3>
            <div class="row mt-30">
            {character.map(character =>
                <div class="col-md-4 col-sm-6">
                    <div class="box3">
                    <img src={`data:image/jpeg;base64,${character.image}`} className="img-responsive" alt=""/>
                        <div class="box-content">
                          <h3 class="title">{character.name}</h3>
                            <span class="post"></span>
                            <p class="description">
                            {character.shortDescription}
                            </p>
                              <button>Edit</button>
                              <button>Read More</button>
                              <button>Delete</button>
                                
                            
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

export default App;