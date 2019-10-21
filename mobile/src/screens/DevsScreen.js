import React from 'react';
import DevList from '../components/DevList';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function DevsScreen({ navigation }) {
  const loggedCompanyName = 'company_name';
  const devs = [{
    name: "Cleiton da Costa",
    username: "cleitondacosta",
    bio: "User bio",
    image: "https://avatars2.githubusercontent.com/u/19880317?v=4",
    repositories: [{
      name: "softdevs",
      description: "Mobile application to hire software developers."
    }],
  }];


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.company}>{loggedCompanyName}</Text>
      <DevList devs={devs} navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  company: {
    fontSize: 20,
    textTransform: 'uppercase',
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    borderWidth: 2,
    margin: 10,
    borderColor: '#666',
    borderRadius: 10,
  },
});
