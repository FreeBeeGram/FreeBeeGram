import React, { Component } from 'react';
import styles from './Creator.css';
import CreatorHeader from './CreatorHeader/CreatorHeader';
import CreatorFilter from './CreatorFilter/CreatorFilter';

class Creator extends Component {
  render() {
    return (
      <div>
        <CreatorHeader />
        <div className={styles.CreatorMain}>
          <CreatorFilter />
          <div>world</div>
        </div>
      </div>
    )
  }
}

export default Creator;