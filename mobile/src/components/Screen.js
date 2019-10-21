import React from 'react';
import styled from 'styled-components/native';

export default function Screen({ name, navigation }) {
  return (
    <ScreenButton onPress={() => navigation.navigate(name)}>
      <ButtonText>
        {name}
      </ButtonText>
    </ScreenButton>
  );
}

const ScreenButton = styled.TouchableOpacity`
  flex: 1;
  height: 150px;
  margin: 5px;
  background: #ddd;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
