import React from 'react';
import styles from './CreatorFilter.css';

const creatorFilter = (props) => {
  return (
    <div className={styles.CreatorFilter}>
      <div>
        <div className={styles.CategoryTitle}>Category</div>
        <div>Electronics</div>
        <div>Fashion</div>
        <div>Beauty</div>
        <div>Home</div>
        <div>Pet</div>
        <div>Other</div>
      </div>
      <div>
        <div className={styles.CategoryBrands}>Brands</div>
        <div>DadHatStudio</div>
        <div>Nike</div>
        <div>Adidas</div>
        <div>Supreme</div>
      </div>
    </div>
  )
}

export default creatorFilter;