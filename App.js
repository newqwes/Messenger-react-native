import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: #fafafa;
`;

const StyledText = styled.Text`
  color: #383838;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
`;

export default class App extends Component {
  render() {
    return (
      <View>
        <StyledView>
          <StyledText>Hello World!</StyledText>
        </StyledView>
      </View>
    );
  }
}
