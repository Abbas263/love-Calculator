// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput ,Appbar,Button} from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

export default class  App extends React.Component {
  state={
    fname:"",
    sname:"",
    Responsedata:"loading",
  }
  testit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
	"headers": {
		"x-rapidapi-key": "f5fa8ba33bmshc2a9131564a3f02p10f744jsnd71710ef0a72",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
.then(response =>response.json())
.then(res2=>{console.log(res2);
  this.setState({
    Responsedata:res2,
  })
})
.catch(err => {
	console.error(err);
});
  }
  render(){
    return (
      <View style={styles.container}>
        <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Love % Calculator" titleStyle={{fontSize:25,fontWeight:'600'}}  />
      
    </Appbar.Header>
       <TextInput
      label="person1(male)" 
      value={this.state.fname}
      style={{margin:10,marginBottom:0}}     
      onChangeText={text => {this.setState({fname:text})}}
    />
     <TextInput
      label="person2(Female)" 
      value={this.state.sname}
      style={{margin:10,marginBottom:0}}   
      onChangeText={text => {this.setState({sname:text})}}
    />
<Button icon="face"
 mode="contained"
 style={{margin:10}}   
onPress={() => {this.testit()}}>
    Calculate
  </Button>
  <DisplayLove  data={this.state.Responsedata}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // justifyContent: 'center',
  },
});
