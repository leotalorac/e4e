import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from "./components/Login"
import City from "./components/City"
import Mapa from "./components/Mapa"
import Alert from "./components/Alert"
const MainNavigator = createStackNavigator({
  Home: {screen: Alert},
  City: {screen: City},
  Map:{screen:Mapa}
});

const App = createAppContainer(MainNavigator);

export default App;