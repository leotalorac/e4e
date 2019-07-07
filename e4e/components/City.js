import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default class City extends React.Component{
    static navigationOptions = {
        title: 'Select your city',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <ImageBackground source={"https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"} style={styles.cityContainer}>
                    <Text>London</Text>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cityContainer = {
        width: "100%",
        height:"20%",
        alignItems: 'center',
        justifyContent: 'center'
    }
})
