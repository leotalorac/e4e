import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground,Image} from 'react-native';
import BluetoothSerial from "react-native-bluetooth-serial";
export default class Alert extends React.Component{
    static navigationOptions = {
        title: 'Estado de emergencia',
    };
    componentWillMount() {
        Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
          values => {
            const [isEnabled, devices] = values;
            this.setState({ isEnabled, devices, devicesFormatted });
          }
        );
    
        BluetoothSerial.on("bluetoothEnabled", () =>
          console.log("Bluetooth enabled")
        );
    
        BluetoothSerial.on("bluetoothDisabled", () =>
          console.log("Bluetooth disabled")
        );
    
        BluetoothSerial.on("error", err => {
          console.log("error", err);
        });
    
        BluetoothSerial.on("connectionLost", () => {
          if (this.state.device) {
            this.connect(this.state.device)
              .then(res => {})
              .catch(err => {
                console.log("error", err);
              });
          }
        });
      }
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