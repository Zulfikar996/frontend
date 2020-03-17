import {connect} from 'react-redux';
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getPromo} from '../redux/actions/promo';
import {ScrollView} from 'react-native-gesture-handler';
import {getProduct, getNew} from '../redux/actions/product';
class HomeScreen extends Component {
  getPromo() {
    this.props.dispatch(getPromo());
  }

  async componentDidMount() {
    console.log('ini Did Mount');
    await this.props.dispatch(getPromo());
    this.props.dispatch(getNew());
  }
  renderRowPromo = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          // borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.1)',
          height: 230,
          flexDirection: 'row',
          marginHorizontal: 7,
        }}>
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            marginVertical: 4,
            backgroundColor: 'white',
          }}>
          <Image
            source={{uri: item.image}}
            style={{
              borderRadius: 5,
              marginHorizontal: 5,
              marginVertical: 5,
              width: 330,
              height: 200,
            }}
          />
        </View>
      </View>
    );
  };

  renderRowNew = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          // borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.1)',
          height: 200,
          flexDirection: 'row',
          marginHorizontal: 90,
        }}>
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            marginVertical: 4,
            backgroundColor: 'white',
          }}>
          <View>
            <Image
              source={{uri: item.image, width: 150, height: 150}}
              style={{ marginHorizontal: 5, marginVertical: 5}}
            />
            <View style={{alignItems: 'center'}}>
              <Text>{item.name}</Text>
              <Text> {item.price} </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const {promo} = this.props;
    const {newProduct} = this.props;
    console.log(this.props);
    return (
      <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.FlatList}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                horizontal={true}
                data={promo}
                renderItem={this.renderRowPromo}
                // refreshing={products.isLoading}
                // onRefresh={this.onRefreshing}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </View>

        <View style={{marginLeft: 15}}>
          <Text>NEW ARRIVALS</Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={newProduct}
              renderItem={this.renderRowNew}
              numColumns={2}
              scrollEnabled= {false}
              // refreshing={products.isLoading}
              // onRefresh={this.onRefreshing}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View />
        </ScrollView>
        {/* <TouchableOpacity onPress={this.props.navigation.navigate('Login')}>
          <Text>Klik Aku ke Login</Text>
        </TouchableOpacity> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  FlatList: {},
});
const mapStateToProps = state => {
  return {
    promo: state.promo.promo,
    newProduct: state.product.newProduct,
  };
};
export default connect(mapStateToProps)(HomeScreen);
