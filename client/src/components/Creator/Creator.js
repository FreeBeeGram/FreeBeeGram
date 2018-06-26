import React, { Component } from 'react';
import styles from './Creator.css';
import CreatorHeader from './CreatorHeader/CreatorHeader';
import CreatorFilter from './CreatorFilter/CreatorFilter';
import CreatorProducts from './CreatorProducts/CreatorProducts';

class Creator extends Component {
  render() {
    return (
      <div>
        <CreatorHeader />
        <div className={styles.CreatorMain}>
          <CreatorFilter />
          <CreatorProducts />
        </div>
      </div>
    )
  }
}

export default Creator;