import React, { Component } from 'react';
import './Price.css';

class ProductForm extends Component {

    constructor(props){
      super(props);
      this.state = { 
          image: '',
          productName: '',
          price: ''
        };
    }
   
    handleChange = event => {
      this.setState({ productName: event.target.value });
    };
    
   
    render() {
      return (
        <React.Fragment>
          <form>
            <label htmlFor="Product-name"></label>
            <input className="Price-input"
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </form>
          {/* <h3>Your product name is: {this.state.productName}</h3> */}
        </React.Fragment>
      );
    }
   }

   export default ProductForm;