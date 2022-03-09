import React, { useState, useEffect, useContext } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { WarrantyCard } from '../components/card';
// import { getDatabase, ref, onValue } from 'firebase/database';
import { FirebaseContext } from '../api/firebase';
import { TextInput } from 'react-native-gesture-handler';

const Dashboard = ({ navigation }) => {
  const firebase = useContext(FirebaseContext);
  const [warrantyList, setWarrantyList] = useState([]);
  const [search, setSearch] = useState('');

  const updateSearch = data => {
    setSearch(data);
    let obj = warrantyList.find(o => 
        o.name.toLowerCase === data.toLowerCase //||
        // o.note.toLowerCase === data.toLowerCase
        );
    if (obj) {
      console.log(obj);
      setWarrantyList([obj]);
    } else {
        fetchDate();
    }
  };

  async function fetchDate() {
    let list_obj = [];
    await firebase.db.ref('/warranty').once('value', function (snap) {
      snap.forEach(childSnapshot => {
        const childData = childSnapshot.val().warranty_list;
        list_obj.push(childData);
      });
    });
    setWarrantyList(list_obj);
  }

  useEffect(() => {
    // The screen is focused
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDate();
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const clickAdd = () => {
    navigation.navigate('Add New Warranty');
  };

  return (
    <>
      <View style={styles.screen}>
        <SearchBar
          placeholder='Type Here...'
          onChangeText={(text) => updateSearch(text)}
          onClear={(text) => updateSearch('')}
        //   onChangeText={updateSearch}
          value={search}
        />
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