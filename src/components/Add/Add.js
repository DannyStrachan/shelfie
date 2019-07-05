import React, { Component } from 'react';
// import Buttons from './Buttons';
import PriceForm from './priceInput';
import ImageForm from './imageInput';
import ProductForm from './productInput';
import './Buttons.css';
import './Add.css';

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: '',
            productName: '',
            price: ''
        };
    }
    
    handleClick( event ) {
        this.setState({image: '', productName: '', price: ''})
    }

    render() {
        return (
            <div className="Add-parent">
                <div className="Add-form">
                    
                    <div>Image URL:</div>
                    <ImageForm />
                    <div>Product Name:</div>
                    <ProductForm />
                    <div>Price:</div>
                    <PriceForm />
                </div>
                <div className="Button-div">
                    <div className="Button-section">
                        <button onClick = { this.handleClick()}>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </div>
           
            {/* <Buttons price={this.state.price} /> */}
        </div>
        );
    }
}

  export default Add;
  
