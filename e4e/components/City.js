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
                <ImageBackground source={{uri:"https://static.iris.net.co/semana/upload/images/2017/10/27/545243_1.jpg"} } style={styles.cityContainer}
                
                >
                    <Text style={styles.textCity} onPress={() => navigate('Map') }>Bogota</Text>
                </ImageBackground>
                <ImageBackground source={{uri:"https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"} } style={styles.cityContainerUnactive}>
                    <Text style={styles.textCity}>London</Text>
                </ImageBackground>
                <ImageBackground source={{uri:"https://static.iris.net.co/semana/upload/images/2017/10/27/545243_1.jpg"} } style={styles.cityContainerUnactive}>
                    <Text style={styles.textCity}>Lima</Text>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cityContainer: {
        width: "100%",
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
    },
    cityContainerUnactive:{
        width: "100%",
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
        tintColor: 'black'
    },
    textCity:{
        color:"white",
        fontSize:50
    }
})
