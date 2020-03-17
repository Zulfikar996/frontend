import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import bg from '../../../images/bg_putih.png';
import logo from '../../../images/gayain.png';

const {width: WIDTH} = Dimensions.get('window');
export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  render() {
    return (
      <>
        <ImageBackground source={bg} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="user"
              size={27}
              color={'grey'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={'username'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlinedColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              size={27}
              color={'grey'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={'password'}
              secureTextEntry={this.state.showPass}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlinedColorAndroid="transparent"
            />

            <TouchableOpacity
              style={styles.btnEye}
              onPress={this.showPass.bind(this)}>
              <Icon
                name={this.state.press === false ? 'eye' : 'eye-slash'}
                size={27}
                color={'grey'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 290,
    height: 290,
    marginTop: -90,
  },
  logoContainer: {
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 95,
    height: 45,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255,255,255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 9,
    left: 39,
  },
  inputContainer: {
    marginBottom: 15,
  },
  btnEye: {
    position: 'absolute',
    top: 7,
    right: 39,
  },
  btnLogin: {
    width: WIDTH - 95,
    height: 45,
    borderRadius: 25,
    fontSize: 18,
    backgroundColor: '#f1a98c',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
