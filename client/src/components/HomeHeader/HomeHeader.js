import React, { Component } from 'react';
import styles from './HomeHeader.css';
import { Link } from 'react-router-dom';

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
          <Link to="/signup" className={styles.Link}>Join Now</Link>
          <Link to="/login" className={styles.Link}>Login</Link>
          {/* <a href="javascript:void(0);" className="styles.Icon" onClick={this.openNavBar}>
          <i class="fa fa-bars"></i>
          </a> */}
        </div>
      </div>
    )
  }
}

export default HomeHeader;