import React from 'react';
import './Buttons.css';
// import Header from './Header/Header.js';
// import Add from './Add/Add';



function Buttons() {
    const price = (props) => {
  return (
    <div className="Button-section">
      <button>Cancel {this.props.price}</button>
      <button>Add to Inventory</button>
    </div>
  );
}
}

export default Buttons;
