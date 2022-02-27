import React, {useState, useEffect} from "react";
import {ScrollView, StyleSheet, TextInput, Text} from 'react-native'
import {Button} from 'react-native-elements'

const NewWarrantyForm = ({buttonText, onSubmit, children}) => {
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
            <TextInput style={styles.input}
                        onChangeText={text => onChangeName(text)}
                        value={name}
                        keyboardType='default'
                        placeholder='Warranty Name'
            />{/*คำที่อยู่ในกล่อง*/}
            <TextInput style={styles.input}
                        onChangeText={text => onChangePurchaseDate(text)}
                        value={purchaseDate}
                        keyboardType='default'
                        placeholder='Purchase Date'
            />
            <TextInput style={styles.input}
                        onChangeText={text => onChangeExpirationDate(text)}
                        value={expirationDate}
                        keyboardType='default'
                        placeholder='Expiration Date'
            />
            <TextInput style={styles.input}
                        onChangeText={text => onChangeNote(text)}
                        value={note}
                        keyboardType='default'
                        placeholder='Note'
            />
            <Button type="submit" 
                title='Add warranty'
                color= 'gray'
                onPress={() => console.log('Buttom tpped')} />
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
      input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
      }
})
export{NewWarrantyForm}