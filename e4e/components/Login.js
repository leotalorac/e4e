import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.title}> Login</Text>
            <Text style={styles.label}>Name:</Text>
                <TextInput style={styles.textInput}
                placeholder="Your name"
                maxLength={20}>
                </TextInput>
            <Text style={styles.label}>ID:</Text>
                <TextInput style={styles.textInput}
                placeholder="Your ID"
                maxLength={20}>
                </TextInput>

                <TextInput style={styles.textInput}
                placeholder="Your name"
                maxLength={20}>
                </TextInput>
                <TouchableOpacity
                style={styles.saveButton}
                >
                <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>

            </View>
        )
    }
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
      width:400,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    title: {
      fontSize: 40
    },
    saveButton: {
    borderWidth: 1,
    borderColor: '#77ffee',
    backgroundColor: '#77ffee',
    padding: 15,
    margin: 5,
    width:400
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  label:{
    textAlign: "left"
  }
  });