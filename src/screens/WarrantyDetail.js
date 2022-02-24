import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {NewWarrantyForm} from '../components/NewWarrantyForm';
import {AddImageButton} from '../components/Button';
import {UploadButton} from '../components/UploadButton'
import {AddWarrantyButton} from '../components/Button';

const WarrantyDe = ({ navigation }) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
            <NewWarrantyForm />
            {/* <UploadButton /> */}
            {/* <AddImageButton /> */}
            <AddWarrantyButton />

        </View>
    );
  };
  
  export { WarrantyDe };