import React, {useState} from "react";
import {ScrollView, StyleSheet, TextInput, Text} from 'react-native'
import {Button} from 'react-native-elements'

const NewWarrantyForm = ({ButtonText, OnSubmit, Children}) => {
    const [WarrantyName, onChangeWarrantyName] = useState('')

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput style={styles.input}
                        onChangeText={text => onChangeWarrantyName(text)}
                        value={WarrantyName}
                        keyboardType='email-address'
                        placeholder='Warranty Name'
            />{/*คำที่อยู่ในกล่อง*/}
            <TextInput style={styles.input}
                        onChangeText={text => onChangeWarrantyName(text)}
                        value={WarrantyName}
                        keyboardType='email-address'
                        placeholder='Purchase Date'
            />
            <TextInput style={styles.input}
                        onChangeText={text => onChangeWarrantyName(text)}
                        value={WarrantyName}
                        keyboardType='email-address'
                        placeholder='Expiration Date'
            />
            <TextInput style={styles.input}
                        onChangeText={text => onChangeWarrantyName(text)}
                        value={WarrantyName}
                        keyboardType='email-address'
                        placeholder='Note'
            />
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