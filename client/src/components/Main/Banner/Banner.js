import React, { Component } from 'react';
import styles from './Banner.css';


class Banner extends Component {
  render() {
    return(
      <div className={styles.Banner}>
        <div className={styles.MainText}>It all just starts with a selfie</div>
        <div className={styles.SecondaryText}>Learn how to get free products by just taking photos.</div>
        <button className={styles.BannerButton}>Apply Now</button>
      </div>
    )
  }
}

export default Banner;