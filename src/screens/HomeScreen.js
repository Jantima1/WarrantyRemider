import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  const clickAdd = () => {
    navigation.navigate('Warranties');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <TouchableOpacity onPress={() => clickAdd()}>
        <Image source={require('../../assets/warranty.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}
export {HomeScreen}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  textStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 75,
    marginTop: 5
  }
});
