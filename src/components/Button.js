import React, { useState } from "react";
import {StyleSheet, SafeAreaView, Button, ScrollView, View} from 'react-native';
import {ButtonGroup, withTheme, Text} from 'react-native-elements';
import {Icon} from 'react-native-vector-icons/FontAwesome';


const AddWarrantyButton = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button style={styles.buttonStyle}
                    title='Add warranty'
                    color= 'gray'
                    onPress={() => console.log('Buttom tpped')}
                >
                </Button>
            </View>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '40%'
      },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
      },
    buttonStyle: {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 100,
        borderRadius: 30,
    }
})
export{AddWarrantyButton}