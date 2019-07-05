import React, { Component } from 'react';
// import CompanyIcon from 'react-icons/lib/md/filter-hdr';
// import ProfileIcon from 'react-icons/lib/md/person-outline';
// import HeaderIcon from './HeaderIcon';
import './Header.css';

// import Search from './Search/Search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Header extends Component {
  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          
          {/* Displays the mountain icon in the header */}
          <div className="Header__company-info">
            {/* <HeaderIcon id="Header__company-icon" /> */}
            {/* <headerIcon /> */}
            <span>SHELFIE</span>
          </div>

        </section>
      </section>
    )
  }
}