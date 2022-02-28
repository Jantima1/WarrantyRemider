import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

import { getDatabase, ref, push } from 'firebase/database';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewWarrantyForm = ({ buttonText, onSubmit, children }) => {
  //   const firebase = useContext(FirebaseContext);
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

  function createData(data) {
    const db = getDatabase();
    const reference = ref(db, '/warranty');
    push(reference, data);
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

  const submit = () => {
    createData(dataIn);
    console.log('create new warranty : ', dataIn);
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
        {/*คำที่อยู่ในกล่อง*/}
        {/* <TextInput
          style={styles.inputContainer}
          onChangeText={text => onChangePurchaseDate(text)}
          value={purchaseDate}
          keyboardType='default'
          placeholder='Purchase Date'
        /> */}

        <DateTimePicker
          style={styles.inputContainer}
          value={purchaseDate}
          onChange={onChangePurchase}
          placeholderText='Purchase Date'
        />

        <DateTimePicker
          style={styles.inputContainer}
          value={expirationDate}
          onChange={onChangeExpiration}
          placeholderText='Expiration Date'
        />
        {/* <TextInput
          style={styles.inputContainer}
          onChangeText={text => onChangeExpirationDate(text)}
          value={expirationDate}
          keyboardType='default'
          placeholder='Expiration Date'
        />*/}
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