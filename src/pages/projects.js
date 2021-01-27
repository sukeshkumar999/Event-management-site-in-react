import React, { Component } from 'react';
import SwiftSlider from 'react-swift-slider'

class services extends Component {
  render() {
    const data =  [
      {'id':'2','src':'/images/engagementg.jpg'},
      {'id':'2','src':'/images/dinner1.jpg'},
      {'id':'3','src':'/images/Lord-Ganesha-wallpaper.jpg'},
      {'id':'4','src':'/images/house.jpg'},
      {'id':'5','src':'/images/mahndi.jpg'},
      {'id':'6','src':'/images/green.jpg'},
      {'id':'8','src':'/images/wedding.jpg'}
    ];

    return (
      <SwiftSlider data={data} height={640} />
    );
  }
}

export default services;