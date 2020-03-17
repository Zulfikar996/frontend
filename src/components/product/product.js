/* eslint-disable react-native/no-inline-styles */
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header, Item, Input, Button} from 'native-base';
import {getProduct, searchProduct, sortProduct} from '../redux/actions/product';

class Product extends Component {
  getProduct() {
    this.props.dispatch(getProduct());
  }

  componentDidMount() {
    console.log('ini Did Mount');
    this.getProduct();
  }
  searchProduct = name => {
    console.log(name);
    this.setState({
      name: name,
    });
    this.props.dispatch(searchProduct(name));
  };
  async onClickSort(type) {
    console.log(type)
    await this.props.dispatch(sortProduct(type));
  }

  renderRow = ({item}) => {
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
        <Image source={{uri: item.image, width: 360, height: 150}} />
        <TouchableOpacity><Text>Add to Cart</Text></TouchableOpacity>

      </View>
    );
  };

  render() {
    const {product} = this.props;
    console.log(product);
    console.log('ini');
    return (
      <>
        <>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View>
              <Header style={{backgroundColor: '#FFAEAE'}} searchBar rounded>
                <Item style={{borderRadius: 50}}>
                  <Input
                    placeholder="Search"
                    onChangeText={this.searchProduct}
                  />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFAEAE',
                  borderRadius: 25,
                  width: 100,
                  height: 30,
                }}
                onPress={() => this.onClickSort('ASC')}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'sans-serif-condensed',
                    color: 'white',
                  }}>
                  Highest
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFAEAE',
                  borderRadius: 25,
                  width: 100,
                  height: 30,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'sans-serif-condensed',
                    color: 'white',
                  }}
                  onPress={() => this.onClickSort('DESC')}>
                  Lowest
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <View style={styles.FlatList}>
                <FlatList
                  data={product}
                  renderItem={this.renderRow}
                  // refreshing={products.isLoading}
                  // onRefresh={this.onRefreshing}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
              </View>
            </ScrollView>
          </View>
          {/* </ImageBackground> */}
        </>
      </>
    );
  }
}
const styles = StyleSheet.create({
  FlatList: {},
});
const mapStateToProps = state => {
  return {
    product: state.product.product,
  };
};
export default connect(mapStateToProps)(Product);
