import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login</Text>
        <TextInput style={styles.textInput}
        placeholder="Your name"
        maxLength={20}>
        </TextInput>
        <TextInput style={styles.textInput}
        placeholder="Your name"
        maxLength={20}>
        </TextInput>
        <TextInput style={styles.textInput}
        placeholder="Your name"
        maxLength={20}>
        </TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontsize: 12
  }
});
