import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Cart extends Component {
  render() {
    console.log(this.props)
    console.log('ini cart')
    return (
      <>
        <View>
          <TouchableOpacity onPress={() => this.props.navigate('Login')}>
          <Text>Ini Cart</Text></TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Cart;
