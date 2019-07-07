import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground} from 'react-native';

export default class City extends React.Component{
    static navigationOptions = {
        title: 'Select your city',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <ImageBackground source={{uri:"https://static.iris.net.co/semana/upload/images/2017/10/27/545243_1.jpg"} } style={styles.cityContainer}>
                    <Text>Bogota</Text>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cityContainer: {
        width: "100%",
        height:"200",
        maxHeight:"200",
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch'
    }
})
