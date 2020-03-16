import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/components/redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './src/components/login/Login';
import Register from './src/components/login/Register';
import Category from './src/components/category/category';
import Home from './src/components/home/home'
import HomeScreen from './src/components/home/homescreen'
import Cart from './src/components/cart/cart';
import LoginScreen from './src/components/login/LoginScreen'

import {API_KEY} from 'react-native-dotenv';
import {Text} from 'react-native';

const homeNavigator = createStackNavigator({
  Home: Home,
  Login: Login,
  Register: Register,
  Category: Category,
  HomeScreen: HomeScreen,
  Cart: Cart,
  LoginScreen: LoginScreen,
});

const AppNavigator = createSwitchNavigator({
  Home: homeNavigator,
})

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </>
    );
  }
}

export default App;
