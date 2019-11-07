import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import Repository from '../../Repository';

export default function SelectableRepository(props) {
  const [SwitchValue, setSwitchValue] = useState(false);

  return (
    <View style={{flexDirection: 'row'}}>
      <Switch 
        style={{alignSelf: 'center'}}
        onValueChange={value => setSwitchValue(value)} 
        value={SwitchValue} 
      />
      <Repository repository={props.repository} />
    </View>
  );
}
