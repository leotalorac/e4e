import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from "./components/Login"
const MainNavigator = createStackNavigator({
  Home: {screen: Login}
});

const App = createAppContainer(MainNavigator);

export default App;