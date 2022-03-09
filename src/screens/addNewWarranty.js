import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

import { FirebaseContext } from '../api/firebase';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewWarrantyForm = ({ navigation }) => {
  const firebase = useContext(FirebaseContext);
  const [name, onChangeName] = useState('');
  const [purchaseDate, onChangePurchaseDate] = useState(new Date());
  const [expirationDate, onChangeExpirationDate] = useState(new Date());
  const [note, onChangeNote] = useState('');
  const [dataIn, setDataIn] = useState({});

  const onChangePurchase = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    onChangePurchaseDate(currentDate);
  };

  const onChangeExpiration = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    onChangeExpirationDate(currentDate);
  };

  console.log(purchaseDate);
//เชื่อมต่อไฟล์ firebase
  async function createData(data) {
    await firebase.db.ref('/warranty').push(data);
    console.log('Push data : ', data);
  }

  useEffect(() => {
    setDataIn({
      warranty_list: {
        name: name,
        purchaseDate: purchaseDate,
        expirationDate: expirationDate,
        note: note
      }
    });
  }, [name, purchaseDate, expirationDate, note]);
//
  const submit = () => {
    createData(dataIn);
    console.log('create new warranty : ', dataIn);
    navigation.navigate('Warranties');
  };

  //   console.log(test);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputContainer}
          onChangeText={text => onChangeName(text)}
          value={name}
          keyboardType='default'
          placeholder='Warranty Name'
        />
        <DateTimePicker
          locale='string'
          style={styles.inputContainer}
          value={purchaseDate}
          onChange={onChangePurchase}
          placeholderText='Purchase Date'
        />

        <DateTimePicker
          locale='string'
          style={styles.inputContainer}
          value={expirationDate}
          onChange={onChangeExpiration}
          placeholderText='Expiration Date'
        />

        <TextInput
          style={styles.inputContainer}
          onChangeText={text => onChangeNote(text)}
          value={note}
          keyboardType='default'
          placeholder='Note'
        />
        <Button
          style={styles.buttonContainer}
          type='submit'
          title='Add warranty'
          color='gray'
          onPress={() => submit()}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
    // marginBottom: '40%'
  },
  inputContainer: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 80,
    padding: 10
  }
});
export { NewWarrantyForm };