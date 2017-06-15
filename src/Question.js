import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';

export default class Question extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.q}</Text>
      </View>
    );
  }
}