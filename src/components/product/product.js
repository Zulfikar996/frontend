import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {getProduct} from '../redux/actions/product';

class Product extends Component {
  getProduct() {
    this.props.dispatch(getProduct());
  }

  componentDidMount() {
    console.log('ini Did Mount');
    this.getProduct();
  }
  renderRow = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.1)',
          height: 150,
        }}>
        <Image source={{uri: item.image, width: 360, height: 150}} />
        <TouchableOpacity><Text>Add to Cart</Text></TouchableOpacity>

      </View>
    );
  };

  render() {
    const {product} = this.props;
    console.log(this.props)
    return (
      <>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={product}
              renderItem={this.renderRow}
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
    product: state.product.product,
  };
};
export default connect(mapStateToProps)(Product);
