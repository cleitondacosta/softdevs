import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GreyText from '../../GreyText';

export default function Dev({navigation, image, username, name, bio}) {
  function handlePress() {
    navigation.navigate('DevProfileScreen');
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.rootView}>
      <Image style={styles.image} source={{uri: image}} />
      <View>
        <Text style={styles.userName}>
          {name} ({username})
        </Text>

        <GreyText>{bio}</GreyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 65,
    height: 65,
    margin: 5,
    borderRadius: 3,
  },
  userName: {
    fontWeight: 'bold',
  },
});
