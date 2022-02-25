import React from 'react';
import { Image, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import {NewWarrantyForm} from '../components/NewWarrantyForm';
import {AddImageButton} from '../components/Button';
import {AddWarrantyButton} from '../components/Button';

const WarrantyDe = ({ navigation }) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
            <NewWarrantyForm />
            <ActivityIndicator size='large' color='gray'/>
            <AddWarrantyButton />

        </View>
    );
  };
  
  export { WarrantyDe };