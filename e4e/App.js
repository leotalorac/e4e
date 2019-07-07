import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from "./components/Login"
import City from "./components/City"
import Mapa from "./components/Mapa"
const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  City: {screen: City},
  Map:{screen:Mapa}
});

const App = createAppContainer(MainNavigator);

export default App;