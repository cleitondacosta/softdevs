import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Dev(props) {
  function handlePress() {
    props.navigation.navigate('DevProfileScreen', props);
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.rootView}>
      <Image style={styles.userImage} source={{uri: props.image}} />
      <View>
        <Text style={styles.userName}>
          {props.name} ({props.username})
        </Text>

        <Text style={styles.userBio}>{props.bio}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
    padding: 5,
  },
  userImage: {
    width: 65,
    height: 65,
    margin: 5,
    borderRadius: 3,
  },
  userName: {
    fontWeight: 'bold',
  },
  userBio: {
    color: "#555",
  }
});
