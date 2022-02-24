import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Hello = ({ navigation }) => {
  return (
    <>
      <View
        style={styles.LocatePhoto}
      >
        <Image source={require('../../assets/reminders.png')} />
      </View>
    </>
  );
};

export { Hello };

const styles = StyleSheet.create({
  LocatePhoto: {
    marginTop: 250,
    display: 'flex',
    resizeMode: 'center',
    alignItems: 'center'
  },
  subfontLogo: {
    marginTop: 5,
    fontSize: 15,
    opacity: 0.24
  }
});