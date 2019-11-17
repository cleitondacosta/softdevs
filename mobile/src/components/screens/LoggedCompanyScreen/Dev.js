import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GreyText from '../../GreyText';

export default function Dev({navigation, dev}) {
  function handlePress() {
    navigation.navigate('DevProfileScreen', { dev });
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.rootView}>
      <Image style={styles.image} source={{uri: dev.avatar_url}} />
      <View>
        <Text style={styles.userName}>
          {dev.name} ({dev.login})
        </Text>

        <GreyText>{dev.bio}</GreyText>
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
