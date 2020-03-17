import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Header, Content, Tab, Tabs, TabHeading} from 'native-base';
import Login from './Login';
import Register from './Register';

class LoginScreen extends Component {
  render() {
    return (
      <>
        <Container>
          <Tabs>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Text style={styles.text}>Login</Text>
                </TabHeading>
              }>
              <Login />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tab}>
                  <Text style={styles.text}>Register</Text>
                </TabHeading>
              }>
              <Register />
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}
const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#a5a6a8',
  },
  text: {
    color: 'white'
  }
});
export default LoginScreen;
