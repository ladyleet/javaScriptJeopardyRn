import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Angular from './Angular';
import Ember from './Ember';
import ReactJS from './React';
import Vue from './Vue';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin-top: 200px;
`;

const StyledImage = styled.Image`
  margin: 30px;
`;

const TextLink = styled.Text`
  color: blue;
`;

export default class javaScriptJeopardyRn extends Component {
  render() {
    return (
      <Container>
        <StyledImage source={require('./img/jeopardy-js.png')}/>
        <Text>Find this project on</Text>
        <TextLink
          onPress={() => Linking.openURL('https://github.com/ladyleet/javaScriptJeopardyRn')}>
          Github
        </TextLink>
        <Text>Made with ❤️ by</Text>
        <TextLink
          onPress={() => Linking.openURL('http://twitter.com/ladyleet')}>
          @ladyleet
        </TextLink>
      </Container>
    );
  }
}
const mainNavigator = TabNavigator({
  Home: {
    screen: javaScriptJeopardyRn,
    path: ''
  },
  Angular: {
    screen: Angular,
    path: 'angular'
  },
  React: {
    screen: ReactJS,
    path: 'react'
  },
  Ember: {
    screen: Ember,
    path: 'ember'
  },
  Vue: {
    screen: Vue,
    path: 'vue'
  }
});

javaScriptJeopardyRn.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/js.png')}/>
  )
}

AppRegistry.registerComponent('javaScriptJeopardyRn', () => mainNavigator);
