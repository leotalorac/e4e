import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button} from 'react-native';
import { Constants } from 'expo';
export default class Login extends React.Component{
    static navigationOptions = {
        title: 'Login',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> Login</Text>
            </View>
            <View style={styles.container}>
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
                <View style={styles.buttonContainer}>
                    <Button
                        title="Log in"
                        onPress={() => navigate('City') }
                        type="outline"
                        containerStyle={styles.saveButton}
                        containerViewStyle={{width: '100%', marginLeft: 0} }
                    />
                </View>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height:300,
        margin: 10,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding:10,
      flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      width:390,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
      fontSize: 40
    },
    saveButton: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#77ffee',
    padding: 15,
    margin: 5,
    width:390
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  label:{
    textAlign: "left",
    fontSize:20
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width:"100%",
  },
  });