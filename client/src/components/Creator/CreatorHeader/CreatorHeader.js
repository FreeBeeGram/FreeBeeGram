import React from 'react';
import styles from './CreatorHeader.css';

const creatorHeader = (props) => {
  return (
    <div className={styles.CreatorHeader}>
      <div className={styles.Header}>
        <div className={styles.HeaderLogo}>FreeBeeGram</div>
        <div className={styles.HeaderLinks}>
          <div>Products</div>
          <div>Brands</div>
          <div>Wishlist</div>
          <div>User</div>
          <div>Logout</div>
        </div>
      </div>
    </div> 
  )
}
export default creatorHeader;