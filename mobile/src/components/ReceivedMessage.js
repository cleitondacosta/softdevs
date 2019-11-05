import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
  
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.sender}>{sender}</Text>
      <View style={styles.previewContainer}>
        {hasNew && (
          <Icon style={styles.newMessageIcon} name="md-alert" size={14} />
        )}
        <Text style={[styles.messagePreview, hasNew && styles.newMessagePreview]}>
          {limitString(messagePreview, 30)}
        </Text>
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
  messagePreview: {
    color: '#999',
  },
  newMessagePreview: {
    color: '#000',
    fontWeight: 'bold',
  }
});
