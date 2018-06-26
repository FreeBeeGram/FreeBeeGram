import React, { Component } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import Banner from '../Main/Banner/Banner';

class Main extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Banner />
      </div>
    )
  }
}

export default Main;