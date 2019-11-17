import React from 'react';
import DevList from './DevList';
import useDevs from '../../../hooks/useDevs';
import ExitButton from '../../ExitButton';
import FlexView from '../../FlexView';
import ErrorText from '../../ErrorText';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function LoggedCompanyScreen({ navigation }) {
  const loggedCompanyName = navigation.getParam('company', undefined);
  const { devs, fetchError } = useDevs();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ExitButton navigation={navigation} />
        <Text style={styles.company}>{loggedCompanyName}</Text>
      </View>

      {fetchError
        ? <FlexView><ErrorText>{fetchError}</ErrorText></FlexView>
        : <DevList devs={devs} navigation={navigation} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  company: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  scrollView: {
    flex: 1,
    borderWidth: 2,
    margin: 10,
    borderColor: '#666',
    borderRadius: 10,
  },
});
