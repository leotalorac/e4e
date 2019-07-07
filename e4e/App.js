import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from "./components/Login"
import City from "./components/City"
const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  City: {screen: City}
});

const App = createAppContainer(MainNavigator);

export default App;