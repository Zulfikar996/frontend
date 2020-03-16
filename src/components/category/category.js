import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';
import {getCategory} from '../redux/actions/category';

class Category extends Component {
  getCategory() {
    this.props.dispatch(getCategory());
  }

  componentDidMount() {
    console.log('ini Did Mount');
    this.getCategory();
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
      </View>
    );
  };

  render() {
    const {category} = this.props;
    return (
      <>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={category}
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
    category: state.category.category,
  };
};
export default connect(mapStateToProps)(Category);
