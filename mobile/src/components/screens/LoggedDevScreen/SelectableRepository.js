import React from 'react';
import { View, Switch } from 'react-native';
import Repository from '../../Repository';

export default function SelectableRepository({ repository, onToggle }) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Switch 
        style={{alignSelf: 'center'}}
        value={repository.isMarkedAsPublic} 
        onValueChange={value => onToggle(repository, value)}
      />
      <Repository repository={repository} />
    </View>
  );
}
