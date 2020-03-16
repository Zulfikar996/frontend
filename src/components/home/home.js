import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Content, Tab, Tabs, TabHeading} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import Category from '../category/category';
import HomeScreen from '../home/homescreen';
import Cart from '../cart/cart';
import LoginScreen from '../login/LoginScreen';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <>
        <Container>
          <Tabs tabBarPosition="bottom">
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="home" />
                </TabHeading>
              }>
              <HomeScreen />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="isv" />
                </TabHeading>
              }>
              <Category />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="shoppingcart" />
                </TabHeading>
              }>
              <Cart />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="user" />
                </TabHeading>
              }>
              <LoginScreen />
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    color: '#f1a98c',
    fontSize: 25,
  },
  tab: {
    backgroundColor: 'white'
  }
});

export default Home;
