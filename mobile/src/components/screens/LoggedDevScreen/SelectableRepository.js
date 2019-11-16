import React from 'react';
import { View, Switch } from 'react-native';
import Repository from '../../Repository';

export default function SelectableRepository({ repository }) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Switch 
        style={{alignSelf: 'center'}}
        value={repository.isMarkedAsPublic} 
      />
      <Repository repository={repository} />
    </View>
  );
}
