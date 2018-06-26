import React, { Component } from 'react';
import styles from './HomeHeader.css';

class HomeHeader extends Component {
  state = {
    signedIn: false
  }

  render() {
    return(
      <div className={styles.Header}>
        <div className={styles.Logo}>
          FreeBeeGram
        </div>
        <div className={styles.Links} id="myTopNav">
          <a className={styles.Link} href="#">Collaborate</a>
          <a className={styles.Link} href="#">Connect</a>
          <a className={styles.Link} href="#">Learn</a>
          <a className={styles.Link} href="#">Brands</a>
          <a className={styles.Link} href="#">About Us</a>
          <a className={styles.Link} href="#">Join Now</a>
          <a className={styles.Link} href="#">Login</a>
          <a href="javascript:void(0);" className="styles.Icon" onClick={this.openNavBar}>
          <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default HomeHeader;