import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/components/login/Login';
import Register from './src/components/login/Register';

const homeNavigator = createStackNavigator({
 Register: Register,
});

const AppContainer = createAppContainer(homeNavigator);

class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <AppContainer />
      </>
    );
  }
}

export default App;
