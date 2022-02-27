import React, {useState, useEffect} from "react";
import {ScrollView, StyleSheet, TextInput, Text, TouchableOpacityComponent, View} from 'react-native'
import {Button} from 'react-native-elements'
import database from '@react-native-firebase/database';

const newWarrantyForm = ({buttonText, onSubmit, children}) => {
    const [name, onChangeName] = useState('')
    const [purchaseDate, onChangePurchaseDate] = useState('')
    const [expirationDate, onChangeExpirationDate] = useState('')
    const [note, onChangeNote] = useState('')

    useEffect(() => {
        console.log('Name input: ', name);
        console.log('Start date input: ', purchaseDate);
        console.log('End date input: ', expirationDate);
        console.log('Note input: ', note);
    }, [name, purchaseDate, expirationDate, note]);

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <TextInput style={styles.inputContainer}
                            onChangeText={text => onChangeName(text)}
                            value={name}
                            keyboardType='default'
                            placeholder='Warranty Name'
                />{/*คำที่อยู่ในกล่อง*/}
                <TextInput style={styles.inputContainer}
                            onChangeText={text => onChangePurchaseDate(text)}
                            value={purchaseDate}
                            keyboardType='default'
                            placeholder='Purchase Date'
                />
                <TextInput style={styles.inputContainer}
                            onChangeText={text => onChangeExpirationDate(text)}
                            value={expirationDate}
                            keyboardType='default'
                            placeholder='Expiration Date'
                />
                <TextInput style={styles.inputContainer}
                            onChangeText={text => onChangeNote(text)}
                            value={note}
                            keyboardType='default'
                            placeholder='Note'
                />
                <Button style={styles.buttonContainer}
                    type='submit'
                    title='Add warranty'
                    color= 'gray'
                    onPress={() => console.log('Buttom tpped')} />
            </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginBottom: '40%'
      },
      inputContainer: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10,
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 80,
        padding: 10
      },
})
export{newWarrantyForm}