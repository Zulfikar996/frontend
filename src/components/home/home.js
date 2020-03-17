import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Badge,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import Category from '../category/category';
import HomeScreen from '../home/homescreen';
import Cart from '../cart/cart';
import LoginScreen from '../login/LoginScreen';
import Product from '../product/product';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {Navigate} = this.props.navigation.navigate;
    const a = 1;
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
              <HomeScreen navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="bars" />
                </TabHeading>
              }>
              <Category navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="isv" />
                </TabHeading>
              }>
              <Product navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Badge>
                    <Text>1</Text>
                  </Badge>
                  <Icon style={styles.icon} name="shoppingcart" />
                </TabHeading>
              }>
              <Cart navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Icon style={styles.icon} name="user" />
                </TabHeading>
              }>
              <LoginScreen navigate={this.props.navigation.navigate} />
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
    backgroundColor: 'white',
  },
});

export default Home;
