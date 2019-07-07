import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class Alert extends React.Component{
    static navigationOptions = {
        title: 'Estado de emergencia',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.alertContainer}>
                <Image source={require("./Alerta.png") } style={styles.alertImage}> 

                </Image>
            </View>
        )
    }
 }
 const styles = StyleSheet.create(
     {
         alertContainer: {
             height:"100%",
             width:"100%",
             backgroundColor:"#F9AD32",
             justifyContent:"center",
             alignItems:"center"
         },
         alertImage: {
            width:"80%",
            height:"50%"
         }
     }
 )