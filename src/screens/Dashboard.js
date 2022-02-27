import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {WarrantyCard} from '../components/Card';

const WarrantyList = ({ navigation }) => {
    let data_test = [
        {
        name: 'name',
        pyuchase_date: 'purchaseDate',
        expiration_date: 'expirationDate',
        note: 'note'
        },
        {
        name: 'name1',
        purchase_date: 'purchaseDate1',
        expiration_date: 'expirationDate1',
        note: 'note1'
        },
        {
            name: 'name2',
            purchase_date: 'purchaseDate2',
            expiration_date: 'expirationDate2',
            note: 'note2'
        },
        ];
    console.log(data_test);
    return (
        <View style={{flex:1}}>
            <WarrantyCard dataObj={data_test}/>
        </View>
    );
  };
  
  export { WarrantyList };