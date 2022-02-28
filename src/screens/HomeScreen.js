import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/reminder.png')}></Image>
      <Text>Warranty Reminder</Text>
    </View>
  );
}
export {HomeScreen}
