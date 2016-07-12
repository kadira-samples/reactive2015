/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Speaker from './src/components/speaker';


const user = {
  "bio" : "Founder of Seattle based startup pol.is, Senior Front End Developer at Formidable Labs. He has architected and built client side applications for some of the largest brands in the world. Teaches in a series of in depth talks on ReactJS given at Facebook Seattle. Colin's primary focus is UI design, product design and information architecture.",
  "country" : "Seattle,USA",
  "name" : "COLIN MEGILL",
  "photo" : "https://reactive2015.com/assets/img/team/colin_megill.jpg"
};

class reactive2015 extends Component {
  render() {
    return (
      <Speaker {...user}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('reactive2015', () => reactive2015);
