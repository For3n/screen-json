

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Form, ListItem, List, } from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

componentDidMount(){

  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      datasource: responseJson,
      isLoading: false
    },);
  })
}

render() {

// Экран ожидания
  if(this.state.isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
      <Text> Нет данных для отображения</Text>
      <ActivityIndicator/>
      </View>
      )
  }

  return (
  <View style={styles.MainContainer}>
<Text>Json answer</Text>

<FlatList

data={this.state.datasource}

    renderItem={({item}) =>
   <View>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.body}>{item.body}</Text>
    </View>
  }
 keyExtractor={(item, index) => index.toString()}
/>
</View>
  );
}
}
  


const styles = StyleSheet.create({
MainContainer :{
backgroundColor: 'rgba(199, 199, 199, 1)',
justifyContent: 'center',
flex: 1,
margin: 0,
},

title: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'rgba(199, 199, 199, 1)',
    borderWidth: 1,
    borderRadius: 0.5,
    borderColor: 'gray',
    padding: 5,
    fontWeight: '500',
    fontSize: 15,
},

body: {
    color: 'white',
    fontSize: 12,
    lineHeight: 20,
    backgroundColor: 'rgba(105, 105, 105, 1)',
  },
});
