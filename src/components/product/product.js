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
  ActivityIndicator
} from 'react-native';
import {Header, Item, Input, Button} from 'native-base';
import {getProduct, searchProduct, sortProduct,getPage} from '../redux/actions/product';

class Product extends Component {
  constructor(){
    super()
    this.state={
      page:1,
      data:[]
    }
  }
  // getProduct() {
  //   this.props.dispatch(getProduct());
  // }

  componentDidMount() {
    this.plusPage()
  }
  plusPage = page =>{
    this.setState({page:this.state.page + 1})
    this.props.dispatch(getPage(this.state.page))
    this.setState({
      data:this.state.data.concat(this.props.product)
    })
  }
  searchProduct = name => {
    console.log(name);
    this.setState({
      name: name,
    });
    this.props.dispatch(searchProduct(name));
  };
  async onClickSort(type) {
    console.log(type);
    await this.props.dispatch(sortProduct(type));
  }
nextPage=()=>{
  this.setState(this.plusPage)
}
renderFooter =() =>{
  return(
    <View style={styles.loader}>
      <ActivityIndicator size="large"/>
    </View>
  )
}
  renderRow = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          // borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.1)',
          height: 300,
          flexDirection: 'row',
          marginHorizontal: '12%',
        }}>
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            marginVertical: 4,
            backgroundColor: 'white',
            height: '95%',
          }}>
          <Image
            source={{uri: item.image, width: '150%', height: '72%'}}
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

            {/* <ScrollView> */}
              <View style={styles.FlatList}>
                <FlatList
                  data={this.state.data}
                  renderItem={this.renderRow}
                  // refreshing={products.isLoading}
                  // onRefresh={this.onRefreshing}
                  keyExtractor={item => item.id}
                   onMomentumScrollEnd={this.nextPage}
                   onEndReachedThreshold={0}
                  ListFooterComponent={this.renderFooter}
                  numColumns={2}
                />
              </View>
            {/* </ScrollView> */}
          </View>
          {/* </ImageBackground> */}
        </>
      </>
    );
  }
}
const styles = StyleSheet.create({
  FlatList: {},
  loader:{
    marginTop:10,
    alignItems:'center'
  }
});
const mapStateToProps = state => {
  return {
    product: state.product.product,
  };
};
export default connect(mapStateToProps)(Product);
