import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
export default class Mapa extends React.Component{
    static navigationOptions = {
        title: 'Map',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
            </View>
        )
    }
}
const styles = {
    mapStyle:{
        height:"100%",
        width:"100%"
    }
}