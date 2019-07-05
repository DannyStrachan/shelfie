import React, { Component } from 'react';
import './Price.css';

class ImageForm extends Component {

    constructor(props){
      super(props);
      this.state = { 
          image: '',
          productName: '',
          price: ''
        };
    }
   
    handleChange = event => {
      this.setState({ image: event.target.value });
    };
    
   
    render() {
      return (
        <React.Fragment>
          <form>
            <label htmlFor="image"></label>
            <input className="Image-input"
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </form>
          {/* <h3>Your image name is: {this.state.image}</h3> */}
        </React.Fragment>
      );
    }
   }

   export default ImageForm;