import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {WarrantyCard} from '../components/Card';

const WarrantyList = ({ navigation }) => {
    return (
        <View style={{flex:1}}>
        
        <WarrantyCard />

        </View>
    );
  };
  
  export { WarrantyList };