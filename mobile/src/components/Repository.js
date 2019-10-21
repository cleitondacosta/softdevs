import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default function Repository(props) {
  return (
    <View>
      <Text>{props.repositories[0].name}</Text>
      <Text>{props.repositories[0].description}</Text>
    </View>
  );
}
