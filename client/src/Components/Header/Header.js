import React, { Component } from 'react';

class Header extends Component {
  state = {
    signedIn: false
  }
  render() {
    return(
      <div className={Header.Container}>
        <div className={Header.Logo}>
          FreeBeeGram
        </div>
        <div className={Header.Links}>
          <a href="#">Collaborate</a>
          <a href="#">Connect</a>
          <a href="#">Learn</a>
          <a href="#">Brands</a>
          <a href="#">About Us</a>
          <a href="#">Join Now</a>
          <a href="#">Login</a>
        </div>
      </div>
    )
  }
}

export default Header;