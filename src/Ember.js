import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import Question from './Question';
import Answer from './Answer';

const data = [{
  Q: "The mascot of Ember.",
  A: "Who is Tomster?"
},{
  Q: "The rendering engine behind Ember.",
  A: "What is GlimmerJS?"
},{
  Q: "The CLI that was built as an Ember add-on?",
  A: "What is Angular-CLI?"
},{
  Q: "The name of the hundreds of modules that extend ember-cli.",
  A: "What are ember add-ons?"
},{
  Q: "The library for robustly managing model data in your Ember applications.",
  A: "What is Ember data?"
},{
  Q: "A client side mock server to develop and prototype applications in Ember.",
  A: "What is Ember CLI Mirage?"
},{
  Q: "This is the Ember CLI command to remove a component from your project.",
  A: "What is ember destroy?"
},{
  Q: "Server side rendering in Ember.",
  A: "What is Fastboot."
},{
  Q: "Ember has more than ____ contributors.",
  A: "What is 670?"
},{
  Q: "Ember uses this compiler under the hood.",
  A: "What is BabelJS?"
}];

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin: 10px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
`;

const ContainerQuestion = styled.View`
  margin: 10px;
`;

export default class Ember extends Component {
  render() {
    return (
      <Container>
        <TextStyled>
          <Image source={require('./img/jeopardy-ember.png')}/>
        </TextStyled>
        <ScrollView>
          {data.map(trivia => (
            <ContainerQuestion>
              <Question q={trivia.Q}/>
              <Answer a={trivia.A}/>
            </ContainerQuestion>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

Ember.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/ember.png')}/>
  )
}
