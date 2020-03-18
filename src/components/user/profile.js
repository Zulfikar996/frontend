import React from 'react';
import {View, Text, Image, Button, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {editUser} from '../redux/actions/user'
export default class profileUser extends React.Component {
  state = {
      id:'',
    name:'',
    email: '',
    username: '',
    password: '',
    alamat: '',
    provinsi: '',
    kota: '',
    image: null,

  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };
  handleChooseCamera = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };
 onSubmit=async event =>{
     event.preventDefault()
     const userId=this.state.id
     let data = new FormData()
     const file={
         name:this.state.image.fileName,
         type:this.state.image.type,
         uri:this.state.image.uri
     }
     data.append('name',this.state.name)
     data.append('image',file)
     data.append('email',this.state.email)
     data.append('username',this.state.username)
     data.append('password',this.state.password)
     data.append('alamat',this.state.alamat)
     data.append('provinsi',this.state.provinsi)
     data.append('kota',this.state.kota)
    //  console.log(data)
    await this.props.dispatch(editUser(userId,data))
//destinasi ketika sukses
     
 }
  render() {
    console.log(this.state);
    const {image} = this.state;
    return (
        <View>
        <View>
        <TextInput
                style={styles.textinput}
                placeholder="id"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({ id: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Name"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({ name: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Email"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Username"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({ username: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Password"
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ password: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Address"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({ alamat: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="City"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({kota: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Province"
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({ provinsi: text })}
              />
               <View style={{ marginTop:10, marginBottom:10, alignItems: 'center', justifyContent: 'center'}}>
            {image && (
              <Image source={{uri: image.uri}} style={{width: 100, height: 90}} />
            )}
            <Button title="Choose Photo" onPress={this.handleChoosePhoto} />

            <Button title="launch camera" onPress={this.handleChooseCamera} />
             </View>
              <TouchableOpacity style={styles.btnRegister} onPress={this.onSubmit}>
                <Text style={styles.text}>Set profile</Text>
              </TouchableOpacity>
            </View>
     
      </View>
    );
  }
}
const styles=StyleSheet.create({
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 0,
        color: '#a5a6a8',
        borderBottomColor: '#a5a6a8',
        borderBottomWidth: 1,
      },
      btnRegister: {
          marginTop:20,
        height: 45,
        borderRadius: 25,
        fontSize: 18,
        backgroundColor: '#f1a98c',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
      },
})