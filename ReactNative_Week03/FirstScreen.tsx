import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const YourApp = () => {
  return (
    <View
      style={{flex:1
      }}>
     <View style={{flex:3, backgroundColor:'#00CCF9', justifyContent:"center", alignItems:"center"}}>
      <svg width="120" height="120" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="62.5" stroke="black" stroke-width="15"/>
      </svg>
     </View>
     <View style={{flex:1, backgroundColor:'#00CCF9', justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:24, fontWeight:700, textAlign:"center"}}> GROW{'\n'}YOUR BUSINESS</Text>
     </View>
         <View style={{flex:2, backgroundColor:'#00CCF9', justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:14, fontWeight:700, textAlign:"center"}}> We will help you to grow your business using online server</Text>
     </View>
     <View style={{flex:1, backgroundColor:'#00CCF9'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E3C000',
              padding: 10,
              borderRadius: 5,
              width: 100,
              alignItems: 'center',
            }}
            onPress={() => alert('Login pressed')}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E3C000',
              padding: 10,
              borderRadius: 5,
              width: 100,
              alignItems: 'center',
            }}
            onPress={() => alert('Signup pressed')}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
     </View> 
    </View>
  );
};

export default YourApp;