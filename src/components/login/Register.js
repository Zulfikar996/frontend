import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import logo from '../../../images/gayain.png';
const {width: WIDTH} = Dimensions.get('window');
class Register extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.regfrom}>
              <Text style={styles.header}>Registration </Text>
              <TextInput
                style={styles.textinput}
                placeholder="Name"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Email"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Username"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Password"
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Address"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="City"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Province"
                underlineColorAndroid={'transparent'}
              />

              <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    marginVertical: 10,
  },
  regfrom: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#f1a98c',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#a5a6a8',
    borderBottomWidth: 3,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#a5a6a8',
    borderBottomColor: '#a5a6a8',
    borderBottomWidth: 1,
  },
  btnRegister: {
    width: WIDTH - 95,
    height: 45,
    borderRadius: 25,
    fontSize: 18,
    backgroundColor: '#f1a98c',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
