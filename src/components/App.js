import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Add from './Add/Add';

class App extends Component {
    render () {
      return (
        <div className="App">
        <Header />
        <div className="Container-box">
          <div className="Products">Products</div>
          <div className="Add"><Add /></div>
          
        </div>
      </div>
      )
    }
  }


export default App;
