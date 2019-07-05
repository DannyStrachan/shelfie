import React, { Component } from 'react';
import './Price.css';

class PriceForm extends Component {

    constructor(props){
      super(props);
      this.state = { 
          image: '',
          productName: '',
          price: ''
        };
    }
   
    handleChange = event => {
      this.setState({ price: event.target.value });
    };
    
   
    render() {
      return (
        <React.Fragment>
          <form>
            <label htmlFor="username"></label>
            <input className="Price-input" placeholder="0"
              type="int"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </form>
          {/* <h3>Your product name is: {this.state.productName}</h3> */}
        </React.Fragment>
      );
    }
   }

   export default PriceForm;