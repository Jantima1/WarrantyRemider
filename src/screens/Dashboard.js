// import React from 'react';
// import { Image, Text, View, StyleSheet } from 'react-native';
// import {WarrantyCard} from '../components/Card';

// const Dashboard = ({ navigation }) => {
//     let data_test = [
//         {
//         name: 'name',
//         pyuchase_date: 'purchaseDate',
//         expiration_date: 'expirationDate',
//         note: 'note'
//         },
//         {
//         name: 'name1',
//         purchase_date: 'purchaseDate1',
//         expiration_date: 'expirationDate1',
//         note: 'note1'
//         },
//         {
//             name: 'name2',
//             purchase_date: 'purchaseDate2',
//             expiration_date: 'expirationDate2',
//             note: 'note2'
//         },
//         ];
//     console.log(data_test);
//     return (
//         <View style={{flex:1}}>
//             <WarrantyCard dataObj={data_test}/>
//         </View>
//     );
//   };
  
//   export { Dashboard };

import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { WarrantyCard } from '../components/Card';
import { getDatabase, ref, onValue } from 'firebase/database';

const Dashboard = ({ navigation }) => {
  const [warrantyList, setWarrantyList] = useState([]);

  function fetchDate() {
    const db = getDatabase();
    const reference = ref(db, '/warranty/-MwwaFazpFVbdpVuJz7L');
    onValue(reference, snapshot => {
      const warranty = snapshot.val();
      console.log('warranty_list: ', warranty);
      //   setWarrantyList([warranty]);
    });
  }
  useEffect(() => {
    fetchDate();
  }, []);

  const clickAdd = () => {
    navigation.navigate('Add New Warranty');
  };
  return (
    <>
      <View style={styles.screen}>
        <WarrantyCard dataObj={warrantyList} />
      </View>
      <TouchableOpacity style={styles.roundButton1} onPress={() => clickAdd()}>
        <Text style={styles.textStyle}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export { Dashboard };

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  roundButton1: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 45,
    color: 'white'
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ccc'
  }
});