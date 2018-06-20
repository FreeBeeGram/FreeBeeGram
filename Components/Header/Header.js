import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  state = {
    signedIn: false
  }
  render() {
    return(
      <div className={styles.HeaderContainer}>
        <div className={styles.Logo}>
          FreeBeeGram
        </div>
        <div className={styles.Links}>
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