import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeShortDesc = this.onChangeShortDesc.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.state = {file: '',imagePreviewUrl: ''};
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      character : [],
      name: '',
      image:'',
      shortDescription : '',
      description: '',
      file: '',
      imagePreviewUrl: ''

    }
  }

  componentDidMount() {
      axios.get('https://character-database.becode.xyz/characters/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name : response.data.name, 
                image : response.data.image,
                shortDescription : response.data.shortDescription,
                description: response.data.description,
                
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeShortDesc(e) {
    this.setState({
      shortDescription: e.target.value
    })  
  }
  onChangeDesc(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeImg(e) {
    this.setState({
      image: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let img;
    if(this.state.imagePreviewUrl){
        img=this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',')+1)
    }else{
        img=this.state.image
    }
    const obj = {
      name: this.state.name,
      shortDescription: this.state.shortDescription,
      description: this.state.description,
      image:img
    };

    console.log(obj)
    axios.put("https://character-database.becode.xyz/characters/" + this.props.match.params.id, obj)
          .then(this.props.history.push('/'))

    }


    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      };
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

      
 
  render() {
      const {character} = this.state; 
      let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
    
        if (imagePreviewUrl) {
            $imagePreview = (<React.Fragment>
              {/* "data:image;base64," */}
                <img class="preview-img" ref="image" src={imagePreviewUrl} width="100" height="100" />
              </React.Fragment>);
          } else {
            let preview;
            if (this.state.image){
              preview = <img class="preview-img" ref="image" src={"data:image/;base64,"+this.state.image} width="100" height="100" />
            } else{
              preview = <img class="preview-img" src="https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg" width="100" height="100" />
            }
            $imagePreview = (
                preview);
          }

    return (
        <React.Fragment>
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Super Hero</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      defaultValue={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="previewComponent">
                    <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                    {$imagePreview}
                    </div>
               </div>

                <div className="form-group">
                    <label>Short Description: </label>
                    <input type="text" 
                      className="form-control"
                      defaultValue={this.state.shortDescription}
                      onChange={this.onChangeShortDesc}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      defaultValue={this.state.description}
                      onChange={this.onChangeDesc}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      defaultValue="Submit" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        </React.Fragment>
    )
  }
}

