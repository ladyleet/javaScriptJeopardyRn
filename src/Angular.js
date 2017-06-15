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
  Q: "Angulars only external dependency.",
  A: "What is RxJS?"
},{
  Q: "Server side rendering in Angular.",
  A: "What is Angular Universal?"
},{
  Q: "This decorator should be used to decorate every service in Angular",
  A: "What is @Injectable?"
},{
  Q: "He is the father of Angular.",
  A: "Who is Misko Hevery?"
},{
  Q: "This is the feature of Angular which allows you to format data in a template.",
  A: "What are pipes?"
},{
  Q: "Imports, declarations, and providers are all examples of sections of this decorator.",
  A: "What is NgModule?"
},{
  Q: "This is the command to run the typescript compiler from the command line.",
  A: "What is tsc?"
},{
  Q: "this is the module that contains important decorators like NgModule and Component.",
  A: "What is @angular/core?"
},{
  Q: "Both @Component and @Injectable are examples of this feature which allows you to mark a class or other construct with metadata.",
  A: "What are decorators?"
},{
  Q: "This is the rxjs operation that you use to convert data in a stream.",
  A: "What is map?"
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
`

const ContainerQuestion = styled.View`
  margin: 10px;
`;

export default class Angular extends Component {
  render() {
    return (
      <Container>
        <TextStyled>
          <Image source={require('./img/jeopardy-angular.png')}/>
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

Angular.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/angular.png')}/>
  )
}
