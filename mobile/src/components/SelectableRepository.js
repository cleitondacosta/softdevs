import React, { useState } from 'react';
import { View, CheckBox } from 'react-native';
import Repository from './Repository';

export default function SelectableRepository(props) {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  return (
    <View style={{flexDirection: 'row'}}>
      <CheckBox 
        style={{alignSelf: 'center'}}
        onValueChange={value => setCheckBoxValue(value)} 
        value={checkBoxValue} 
      />
      <Repository repository={props.repository} />
    </View>
  );
}
