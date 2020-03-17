import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilter} from '../redux/actions/product';

import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';

class productDetails extends Component {
  static navigationOptions = props => {
    console.log('ini static', props);
    return {
      headerTitle: () => null,
    };
  };

  async getFilter() {
    const id = this.props.navigation.getParam('category_id');
    await this.props.dispatch(getFilter(id));
  }
  componentDidMount() {
    this.getFilter();
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
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            marginVertical: 4,
            backgroundColor: 'white',
          }}>
          <Image
            source={{uri: item.image, width: 150, height: 150}}
            style={{borderRadius: 5, marginHorizontal: 5, marginVertical: 5}}
          />
          {/* <View style={{flex: 1, backgroundColor:'red'}} ></View> */}
          <Text>{item.name}</Text>
          <Text> {item.price} </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              width: 120,
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const {product} = this.props;
    console.log(product);
    console.log('ini');
    return (
      <>
         <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={product}
              renderItem={this.renderRow}
              numColumns={2}
              // refreshing={products.isLoading}
              // onRefresh={this.onRefreshing}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
    FlatList: {
      flex: 6,
    },
  });
const mapStateToProps = state => {
  return {
    product: state.product.filterProduct,
  };
};
export default connect(mapStateToProps)(productDetails);
