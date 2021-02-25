import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const DisplayLove=(prop)=>{
    if(prop.data==="loading"){
        return(
            <Text style={styles.txt}>Please Wait</Text>
        )
    }
    if(prop.data.message){
        return(
            <Text style={styles.txt}>Something went Wrong! Try Again..</Text>
        )
    }
    else{
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>{prop.data.percentage} %</Text>
            <Text style={styles.txt}>{prop.data.result}</Text>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    //   justifyContent: 'center',
    },
    txt:{
        fontSize:30,
        textAlign:'center'
    },
  });

  export default DisplayLove;