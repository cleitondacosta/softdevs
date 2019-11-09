import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import GreyText from '../../GreyText';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function ReceivedMessage({navigation, sender, messagePreview, hasNew}) {
  function limitString(str, max) {
   return str.slice(0, max) + '...';
  }

  function handlePress() {
    navigation.navigate('ChatScreen');
  }
  
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.sender}>{sender}</Text>
      <View style={styles.previewContainer}>
        {hasNew && (
          <Icon style={styles.newMessageIcon} name="md-alert" size={14} />
        )}
        <GreyText style={hasNew && styles.newMessagePreview}>
          {limitString(messagePreview, 30)}
        </GreyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  sender: {
    fontSize: 20,
  },
  previewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newMessageIcon: {
    color: '#5cb85c',
    marginRight: 5,
  },
  newMessagePreview: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  }
});
