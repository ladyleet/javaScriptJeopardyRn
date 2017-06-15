import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin: 300px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
`
export default class ReactJS extends Component {
  render() {
    return (
      <Container>
        <TextStyled>
          <Image source={require('./img/jeopardy-react.png')}/>
        </TextStyled>
      </Container>
    );
  }
}

ReactJS.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/react.png')}/>
  )
}
